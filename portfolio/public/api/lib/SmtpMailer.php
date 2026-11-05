<?php

declare(strict_types=1);

/**
 * Client SMTP minimal, sans dépendance externe.
 * ---------------------------------------------------------------------------
 * Permet d'envoyer les messages du formulaire de contact via le serveur SMTP
 * authentifié du domaine (recommandé chez o2switch pour la délivrabilité),
 * avec repli sur la fonction mail() si aucun serveur n'est configuré.
 */
final class SmtpMailer
{
    /** @param array<string, mixed> $config */
    public function __construct(private array $config)
    {
    }

    /**
     * Envoie un e-mail au format texte + HTML.
     *
     * @param array<string, string> $headers En-têtes supplémentaires (Reply-To…)
     */
    public function send(
        string $to,
        string $subject,
        string $textBody,
        string $htmlBody,
        array $headers = []
    ): bool {
        if ($this->hasSmtpConfig()) {
            return $this->sendViaSmtp($to, $subject, $textBody, $htmlBody, $headers);
        }

        return $this->sendViaMailFunction($to, $subject, $textBody, $htmlBody, $headers);
    }

    private function hasSmtpConfig(): bool
    {
        return !empty($this->config['smtp']['host']) && !empty($this->config['smtp']['username']);
    }

    /** @param array<string, string> $extraHeaders */
    private function sendViaMailFunction(
        string $to,
        string $subject,
        string $textBody,
        string $htmlBody,
        array $extraHeaders
    ): bool {
        $boundary = 'b' . bin2hex(random_bytes(12));
        $from = (string) $this->config['from'];
        $fromName = (string) ($this->config['from_name'] ?? '');

        $headers = [
            'MIME-Version: 1.0',
            'Content-Type: multipart/alternative; boundary="' . $boundary . '"',
            'From: ' . $this->formatAddress($from, $fromName),
        ];

        foreach ($extraHeaders as $name => $value) {
            $headers[] = $name . ': ' . $value;
        }

        $body = $this->buildMultipartBody($boundary, $textBody, $htmlBody);

        return @mail($to, $this->encodeHeader($subject), $body, implode("\r\n", $headers));
    }

    /** @param array<string, string> $extraHeaders */
    private function sendViaSmtp(
        string $to,
        string $subject,
        string $textBody,
        string $htmlBody,
        array $extraHeaders
    ): bool {
        $smtp = $this->config['smtp'];
        $host = (string) $smtp['host'];
        $port = (int) ($smtp['port'] ?? 587);
        $encryption = strtolower((string) ($smtp['encryption'] ?? 'tls'));
        $timeout = (int) ($smtp['timeout'] ?? 15);

        $transport = $encryption === 'ssl' ? 'ssl://' : 'tcp://';
        $socket = @stream_socket_client(
            $transport . $host . ':' . $port,
            $errno,
            $errstr,
            $timeout,
            STREAM_CLIENT_CONNECT
        );

        if ($socket === false) {
            error_log('[contact] Connexion SMTP impossible : ' . $errstr . ' (' . $errno . ')');
            return false;
        }

        stream_set_timeout($socket, $timeout);

        try {
            $this->expect($socket, [220]);
            $this->command($socket, 'EHLO ' . $this->clientName(), [250]);

            if ($encryption === 'tls') {
                $this->command($socket, 'STARTTLS', [220]);
                if (!stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
                    throw new RuntimeException('Négociation TLS impossible');
                }
                $this->command($socket, 'EHLO ' . $this->clientName(), [250]);
            }

            $this->command($socket, 'AUTH LOGIN', [334]);
            $this->command($socket, base64_encode((string) $smtp['username']), [334]);
            $this->command($socket, base64_encode((string) $smtp['password']), [235]);

            $from = (string) $this->config['from'];
            $this->command($socket, 'MAIL FROM:<' . $from . '>', [250]);
            $this->command($socket, 'RCPT TO:<' . $to . '>', [250, 251]);
            $this->command($socket, 'DATA', [354]);

            $boundary = 'b' . bin2hex(random_bytes(12));
            $headers = [
                'Date: ' . date('r'),
                'Subject: ' . $this->encodeHeader($subject),
                'From: ' . $this->formatAddress($from, (string) ($this->config['from_name'] ?? '')),
                'To: <' . $to . '>',
                'MIME-Version: 1.0',
                'Content-Type: multipart/alternative; boundary="' . $boundary . '"',
            ];

            foreach ($extraHeaders as $name => $value) {
                $headers[] = $name . ': ' . $value;
            }

            $data = implode("\r\n", $headers) . "\r\n\r\n"
                . $this->buildMultipartBody($boundary, $textBody, $htmlBody);

            // Normalisation des fins de ligne et protection contre l'injection.
            $data = str_replace(["\r\n", "\r"], "\n", $data);
            $data = str_replace("\n", "\r\n", $data);
            $data = str_replace("\r\n.", "\r\n..", $data);

            fwrite($socket, $data . "\r\n.\r\n");
            $this->expect($socket, [250]);
            $this->command($socket, 'QUIT', [221]);

            fclose($socket);
            return true;
        } catch (Throwable $exception) {
            error_log('[contact] Erreur SMTP : ' . $exception->getMessage());
            @fclose($socket);
            return false;
        }
    }

    private function buildMultipartBody(string $boundary, string $textBody, string $htmlBody): string
    {
        return "--{$boundary}\r\n"
            . "Content-Type: text/plain; charset=UTF-8\r\n"
            . "Content-Transfer-Encoding: base64\r\n\r\n"
            . chunk_split(base64_encode($textBody), 76, "\r\n")
            . "--{$boundary}\r\n"
            . "Content-Type: text/html; charset=UTF-8\r\n"
            . "Content-Transfer-Encoding: base64\r\n\r\n"
            . chunk_split(base64_encode($htmlBody), 76, "\r\n")
            . "--{$boundary}--\r\n";
    }

    private function formatAddress(string $email, string $name): string
    {
        if ($name === '') {
            return '<' . $email . '>';
        }

        return $this->encodeHeader($name) . ' <' . $email . '>';
    }

    /** Encode un en-tête non ASCII selon la RFC 2047. */
    private function encodeHeader(string $value): string
    {
        if (preg_match('/[\x80-\xFF]/', $value) !== 1) {
            return $value;
        }

        return '=?UTF-8?B?' . base64_encode($value) . '?=';
    }

    private function clientName(): string
    {
        $host = $_SERVER['SERVER_NAME'] ?? 'localhost';
        return is_string($host) && $host !== '' ? $host : 'localhost';
    }

    /** @param resource $socket */
    private function command($socket, string $command, array $expectedCodes): void
    {
        fwrite($socket, $command . "\r\n");
        $this->expect($socket, $expectedCodes);
    }

    /**
     * Lit une réponse SMTP (potentiellement multiligne) et vérifie son code.
     *
     * @param resource $socket
     * @param int[] $expectedCodes
     */
    private function expect($socket, array $expectedCodes): void
    {
        $response = '';

        while (($line = fgets($socket, 515)) !== false) {
            $response .= $line;
            // Une ligne « 250-… » annonce une suite ; « 250 … » termine la réponse.
            if (strlen($line) < 4 || $line[3] !== '-') {
                break;
            }
        }

        if ($response === '') {
            throw new RuntimeException('Réponse SMTP vide');
        }

        $code = (int) substr($response, 0, 3);
        if (!in_array($code, $expectedCodes, true)) {
            throw new RuntimeException('Code SMTP inattendu : ' . trim($response));
        }
    }
}
