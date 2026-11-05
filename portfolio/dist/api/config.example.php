<?php

declare(strict_types=1);

/**
 * Configuration du formulaire de contact.
 * ---------------------------------------------------------------------------
 * ⚠️  MODE D'EMPLOI
 * 1. Copiez ce fichier en « config.php » dans le même dossier (public/api/).
 * 2. Renseignez vos identifiants SMTP o2switch.
 * 3. Ne versionnez JAMAIS config.php : il contient un mot de passe.
 *
 * Où trouver les informations SMTP chez o2switch ?
 *   cPanel → Comptes de messagerie → Configurer le client de messagerie
 *   Serveur : mail.votre-domaine.fr  (ou le nom de serveur indiqué par o2switch)
 */
return [
    // Adresse qui reçoit les messages du formulaire.
    'recipient' => 'contact@prenom-nom.fr',

    // Adresse d'expédition. Doit appartenir au domaine hébergé, sinon les
    // messages seront refusés ou classés en spam.
    'from' => 'no-reply@prenom-nom.fr',
    'from_name' => 'Portfolio — formulaire de contact',

    // Sujet préfixé pour faciliter le tri dans la boîte de réception.
    'subject_prefix' => '[Portfolio] ',

    // Envoyer un accusé de réception à la personne qui écrit.
    'send_autoreply' => true,
    'autoreply_subject' => 'Votre message a bien été reçu',

    // Nombre maximum d'envois par adresse IP et par heure (anti-spam).
    'rate_limit_per_hour' => 5,

    // Durée minimale de remplissage du formulaire, en secondes.
    // Un robot remplit et soumet presque instantanément.
    'min_fill_seconds' => 3,

    /*
     | Configuration SMTP — fortement recommandée.
     | Si `host` ou `username` est vide, le script retombe sur mail().
     */
    'smtp' => [
        'host' => 'mail.prenom-nom.fr',
        'port' => 587,
        // 'tls' (port 587, recommandé), 'ssl' (port 465) ou 'none' (à éviter).
        'encryption' => 'tls',
        'username' => 'no-reply@prenom-nom.fr',
        'password' => 'MOT_DE_PASSE_A_REMPLACER',
        'timeout' => 15,
    ],
];
