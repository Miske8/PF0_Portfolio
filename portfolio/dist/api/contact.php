<?php

declare(strict_types=1);

/**
 * Point d'entrée du formulaire de contact.
 * ---------------------------------------------------------------------------
 * Reçoit une requête POST (multipart ou urlencodée), valide les données,
 * applique plusieurs protections anti-spam puis envoie deux messages :
 *   1. la notification au propriétaire du site ;
 *   2. un accusé de réception à l'expéditeur.
 *
 * Réponses : JSON { ok: true } ou { ok: false, error: "code" }.
 */

require_once __DIR__ . '/lib/SmtpMailer.php';

header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');
header('Referrer-Policy: strict-origin-when-cross-origin');

/** Réponse JSON puis arrêt du script. */
function respond(bool $ok, int $status = 200, string $error = ''): never
{
    http_response_code($status);
    echo json_encode($ok ? ['ok' => true] : ['ok' => false, 'error' => $error], JSON_UNESCAPED_UNICODE);
    exit;
}

// --- Chargement de la configuration -----------------------------------------
$configPath = __DIR__ . '/config.php';
if (!is_file($configPath)) {
    error_log('[contact] config.php absent : copiez config.example.php.');
    respond(false, 500, 'configuration_missing');
}

/** @var array<string, mixed> $config */
$config = require $configPath;

// --- Méthode HTTP ------------------------------------------------------------
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(false, 405, 'method_not_allowed');
}

// --- Contrôle de l'origine ---------------------------------------------------
// Empêche l'utilisation du script depuis un autre site.
$host = $_SERVER['HTTP_HOST'] ?? '';
$origin = $_SERVER['HTTP_ORIGIN'] ?? $_SERVER['HTTP_REFERER'] ?? '';
if ($origin !== '' && $host !== '') {
    $originHost = parse_url($origin, PHP_URL_HOST);
    $hostWithoutWww = preg_replace('/^www\./', '', (string) $host);
    $originWithoutWww = preg_replace('/^www\./', '', (string) $originHost);
    if ($originHost !== null && strcasecmp($hostWithoutWww, $originWithoutWww) !== 0) {
        respond(false, 403, 'forbidden_origin');
    }
}

// --- Récupération et nettoyage des champs ------------------------------------
/** Nettoie une valeur texte : suppression des balises et des caractères de contrôle. */
function field(string $name, int $maxLength = 255): string
{
    $raw = $_POST[$name] ?? '';
    if (!is_string($raw)) {
        return '';
    }
    $value = strip_tags($raw);
    $value = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $value) ?? '';
    $value = trim($value);
    return mb_substr($value, 0, $maxLength);
}

$name = field('name', 80);
$email = field('email', 120);
$subject = field('subject', 120);
$message = field('message', 4000);
$honeypot = field('website', 120);
$lang = field('lang', 5) === 'en' ? 'en' : 'fr';
$startedAt = (int) ($_POST['startedAt'] ?? 0);

// --- Protections anti-spam ---------------------------------------------------

// 1. Champ piège : rempli uniquement par les robots. On répond « ok » pour ne
//    pas leur indiquer que la soumission a échoué.
if ($honeypot !== '') {
    respond(true);
}

// 2. Délai de remplissage anormalement court.
$minFill = (int) ($config['min_fill_seconds'] ?? 3);
if ($startedAt > 0 && (time() - (int) round($startedAt / 1000)) < $minFill) {
    respond(false, 429, 'too_fast');
}

// 3. Limitation du nombre d'envois par adresse IP.
$limit = (int) ($config['rate_limit_per_hour'] ?? 5);
$ip = (string) ($_SERVER['REMOTE_ADDR'] ?? 'unknown');
$rateFile = sys_get_temp_dir() . '/contact-' . hash('sha256', $ip);

$history = [];
if (is_file($rateFile)) {
    $decoded = json_decode((string) file_get_contents($rateFile), true);
    if (is_array($decoded)) {
        $history = array_filter($decoded, static fn ($timestamp) => is_int($timestamp) && $timestamp > time() - 3600);
    }
}

if (count($history) >= $limit) {
    respond(false, 429, 'rate_limited');
}

// --- Validation --------------------------------------------------------------
if (mb_strlen($name) < 2) {
    respond(false, 422, 'invalid_name');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(false, 422, 'invalid_email');
}

// Refus des en-têtes forgés dans l'adresse ou le sujet.
if (preg_match('/[\r\n]/', $email . $subject) === 1) {
    respond(false, 422, 'invalid_header');
}

if (mb_strlen($message) < 10) {
    respond(false, 422, 'invalid_message');
}

// --- Enregistrement de la tentative (avant envoi) ----------------------------
$history[] = time();
@file_put_contents($rateFile, json_encode(array_values($history)), LOCK_EX);

// --- Construction des messages ----------------------------------------------
$recipient = (string) $config['recipient'];
$prefix = (string) ($config['subject_prefix'] ?? '');
$mailSubject = $prefix . ($subject !== '' ? $subject : ($lang === 'fr' ? 'Nouveau message' : 'New message'));

$escape = static fn (string $value): string => htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');

$textBody = <<<TEXT
Nouveau message depuis le portfolio

Nom      : {$name}
E-mail   : {$email}
Langue   : {$lang}
Sujet    : {$subject}

Message
-------
{$message}
TEXT;

$safeMessage = nl2br($escape($message));
$htmlBody = <<<HTML
<!DOCTYPE html>
<html lang="fr"><body style="font-family:system-ui,-apple-system,'Segoe UI',Arial,sans-serif;color:#16181d;line-height:1.6">
  <h1 style="font-size:18px;margin:0 0 16px">Nouveau message depuis le portfolio</h1>
  <table style="border-collapse:collapse;font-size:14px">
    <tr><td style="padding:4px 12px 4px 0;color:#5b6472">Nom</td><td style="padding:4px 0"><strong>{$escape($name)}</strong></td></tr>
    <tr><td style="padding:4px 12px 4px 0;color:#5b6472">E-mail</td><td style="padding:4px 0">{$escape($email)}</td></tr>
    <tr><td style="padding:4px 12px 4px 0;color:#5b6472">Langue</td><td style="padding:4px 0">{$escape($lang)}</td></tr>
    <tr><td style="padding:4px 12px 4px 0;color:#5b6472">Sujet</td><td style="padding:4px 0">{$escape($subject)}</td></tr>
  </table>
  <hr style="border:0;border-top:1px solid #e4e8ef;margin:18px 0">
  <p style="white-space:normal;font-size:14px">{$safeMessage}</p>
</body></html>
HTML;

$mailer = new SmtpMailer($config);

$sent = $mailer->send(
    $recipient,
    $mailSubject,
    $textBody,
    $htmlBody,
    ['Reply-To' => sprintf('%s <%s>', $name, $email)]
);

if (!$sent) {
    respond(false, 502, 'send_failed');
}

// --- Accusé de réception -----------------------------------------------------
if (!empty($config['send_autoreply'])) {
    $autoSubject = (string) ($config['autoreply_subject'] ?? 'Message received');
    $fromName = (string) ($config['from_name'] ?? '');

    $autoText = $lang === 'fr'
        ? "Bonjour {$name},\n\nJ'ai bien reçu votre message et je vous réponds sous 24 à 48 heures ouvrées.\n\nVoici une copie de votre message :\n\n{$message}\n\nÀ bientôt,\n{$fromName}"
        : "Hello {$name},\n\nThank you for your message. I will get back to you within 24 to 48 business hours.\n\nHere is a copy of your message:\n\n{$message}\n\nBest regards,\n{$fromName}";

    $autoIntro = $lang === 'fr'
        ? "J'ai bien reçu votre message et je vous réponds sous 24 à 48 heures ouvrées."
        : 'Thank you for your message. I will get back to you within 24 to 48 business hours.';

    $autoHtml = <<<HTML
<!DOCTYPE html>
<html lang="{$lang}"><body style="font-family:system-ui,-apple-system,'Segoe UI',Arial,sans-serif;color:#16181d;line-height:1.6">
  <p>Bonjour {$escape($name)},</p>
  <p>{$autoIntro}</p>
  <blockquote style="margin:18px 0;padding:12px 16px;border-left:3px solid #2563eb;background:#f7f8fa;color:#5b6472">
    {$safeMessage}
  </blockquote>
  <p style="font-size:13px;color:#5b6472">{$escape($fromName)}</p>
</body></html>
HTML;

    $mailer->send($email, $autoSubject, $autoText, $autoHtml);
}

respond(true);
