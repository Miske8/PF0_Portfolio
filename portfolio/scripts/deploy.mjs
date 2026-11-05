// Déploiement du dossier dist/ vers l'hébergement o2switch.
// ---------------------------------------------------------------------------
// Deux méthodes, dans cet ordre de préférence :
//   1. rsync sur SSH  — rapide, ne transfère que les fichiers modifiés
//   2. FTP            — si l'accès SSH n'est pas activé sur le compte
//
// Configuration : créez .deploy-config.json à la racine du projet
// (ce fichier est ignoré par Git et ne doit jamais être versionné).
//
// {
//   "method": "rsync",
//   "host": "votreserveur.o2switch.net",
//   "user": "votrecompte",
//   "port": 22,
//   "remotePath": "~/public_html/",
//   "sshKey": "~/.ssh/id_ed25519"
// }
//
// Usage : npm run deploy
import { existsSync, readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = resolve(root, 'dist');
const configPath = resolve(root, '.deploy-config.json');

const RESET = '\x1b[0m';
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const BLUE = '\x1b[34m';

const fail = (message) => {
  console.error(`${RED}✗ ${message}${RESET}`);
  process.exit(1);
};

const info = (message) => console.log(`${BLUE}→${RESET} ${message}`);

if (!existsSync(distDir)) {
  fail('Le dossier dist/ est absent. Lancez « npm run build » avant le déploiement.');
}

if (!existsSync(configPath)) {
  console.error(`${YELLOW}Configuration de déploiement absente.${RESET}\n`);
  console.error(`Créez le fichier ${configPath} avec le contenu suivant :\n`);
  console.error(
    JSON.stringify(
      {
        method: 'rsync',
        host: 'votreserveur.o2switch.net',
        user: 'votrecompte',
        port: 22,
        remotePath: '~/public_html/',
        sshKey: '~/.ssh/id_ed25519',
      },
      null,
      2
    )
  );
  console.error(
    `\nLe nom de serveur et le nom d'utilisateur figurent dans l'e-mail de bienvenue\n` +
      `d'o2switch et dans cPanel → Informations générales.\n`
  );
  process.exit(1);
}

const config = JSON.parse(readFileSync(configPath, 'utf8'));
const { method = 'rsync', host, user, port = 22, remotePath, sshKey } = config;

if (!host || !user || !remotePath) {
  fail('Champs « host », « user » et « remotePath » obligatoires dans .deploy-config.json.');
}

/** Exécute une commande et s'arrête en cas d'échec. */
function run(command, args) {
  info(`${command} ${args.join(' ')}`);
  const result = spawnSync(command, args, { stdio: 'inherit' });
  if (result.error) fail(`${command} est introuvable ou n'a pas pu démarrer.`);
  if (result.status !== 0) fail(`${command} a échoué (code ${result.status}).`);
}

if (method === 'rsync') {
  info(`Déploiement rsync vers ${user}@${host}:${remotePath}`);
  console.log(
    `${YELLOW}Note : « --delete » supprime sur le serveur les fichiers absents du build.${RESET}\n` +
      `${YELLOW}Vérifiez que remotePath pointe bien vers le dossier du site.${RESET}\n`
  );

  const sshCommand = [
    'ssh',
    '-p',
    String(port),
    ...(sshKey ? ['-i', sshKey.replace('~', process.env.HOME ?? '~')] : []),
    '-o',
    'StrictHostKeyChecking=accept-new',
  ].join(' ');

  run('rsync', [
    '-avz',
    '--delete',
    '--human-readable',
    '--exclude',
    '.DS_Store',
    '--exclude',
    'api/config.php',
    '-e',
    sshCommand,
    `${distDir}/`,
    `${user}@${host}:${remotePath}`,
  ]);

  console.log(`\n${GREEN}✓ Déploiement terminé.${RESET}`);
  console.log(
    `\n${YELLOW}Étapes restantes sur le serveur (une seule fois) :${RESET}\n` +
      `  1. Copiez public/api/config.example.php en public/api/config.php\n` +
      `     et renseignez vos identifiants SMTP.\n` +
      `  2. Vérifiez les permissions : dossiers en 755, fichiers en 644.\n` +
      `  3. Activez le SSL (Let's Encrypt) dans cPanel → SSL/TLS Status.\n` +
      `  4. Testez le formulaire de contact depuis le site en production.\n`
  );
} else if (method === 'ftp') {
  if (!existsSync(resolve(root, 'node_modules/basic-ftp'))) {
    fail(
      'Déploiement FTP : installez la dépendance avec « npm install --save-dev basic-ftp »,\n' +
        '   ou utilisez la méthode rsync (recommandée).'
    );
  }

  const { Client } = await import('basic-ftp');
  const client = new Client();
  client.ftp.verbose = false;

  try {
    info(`Connexion FTP à ${host}:${port}`);
    await client.access({
      host,
      user,
      password: config.password ?? fail('Champ « password » obligatoire pour le FTP.'),
      port,
      secure: config.secure !== false,
    });

    info(`Envoi de dist/ vers ${remotePath}`);
    await client.uploadFromDir(distDir, remotePath);
    console.log(`\n${GREEN}✓ Déploiement FTP terminé.${RESET}`);
  } catch (error) {
    fail(`Échec du déploiement FTP : ${error.message}`);
  } finally {
    client.close();
  }
} else {
  fail(`Méthode « ${method} » inconnue. Valeurs acceptées : rsync, ftp.`);
}
