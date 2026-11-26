export interface ReleaseEntry {
  slug: string;
  version: string;
  date: string;
  channel: "Stable" | "Bêta";
  platform: string;
  fileName: string;
  sizeDisplay: string;
  sizeBytes: string;
  downloadUrl: string;
  sha256: string;
  summary: string;
  added: string[];
  improved: string[];
  fixed: string[];
}

export const LATEST_MANIFEST_URL =
  "https://github.com/Firinze/dowlify-site/releases/latest/download/latest.json";

export const RELEASES: ReleaseEntry[] = [
  {
    slug: "1-0-1",
    version: "1.0.1",
    date: "26 novembre 2026",
    channel: "Stable",
    platform: "Windows 11 et Windows 10 (64 bits)",
    fileName: "DowlifySetup_1.0.1_x64.exe",
    sizeDisplay: "25,07 Mo",
    sizeBytes: "26 283 520 octets",
    downloadUrl:
      "https://github.com/Firinze/dowlify-site/releases/download/v1.0.1/DowlifySetup_1.0.1_x64.exe",
    sha256: "71d9a816017a0af0d519a83c0fba0be372591cb4d5e09e8095ec8811a385c4b8",
    summary:
      "Correctif de stabilité et de détection : achèvement fiable des fichiers sans support Range (audio Pixabay), routage complet des liens magnet et .torrent, et bouton audio dédié dans l'extension Edge et Chrome.",
    added: [
      "Bouton flottant Dowlify sur les balises audio visibles et sur les lecteurs audio JavaScript (ex. Pixabay) dans l'extension Edge et Chrome 1.0.1, avec détection du format réel (MP3, WAV, M4A, OGG, FLAC, AAC, OPUS).",
    ],
    improved: [
      "Pré-remplissage immédiat du nom d'affichage (dn) d'un lien magnet pendant la récupération des fichiers P2P dans Ajouter un téléchargement.",
      "Bouton « Réessayer » affiché directement en cas d'échec d'analyse torrent et prise en charge des liens magnet:? par le détecteur de presse-papiers.",
      "Reprise automatique propre depuis l'octet 0 lorsqu'un serveur sans Range répond HTTP 200 OK sur un transfert interrompu.",
    ],
    fixed: [
      "Correction du décalage d'un octet dans le moteur mono-connexion sans support Range qui maintenait les fichiers audio Pixabay en attente (« Calcul… ») avant de les marquer en échec après 6 tentatives.",
      "Routage des liens magnet et des fichiers .torrent interceptés directement vers la fenêtre d'ajout Torrent au lieu de la fenêtre de confirmation HTTP.",
      "Transmission de l'argument magnet: ou .torrent à l'instance Dowlify déjà ouverte lorsqu'un lien est ouvert via le protocole Windows.",
      "Consommation automatique de la source torrent en attente au démarrage de l'application React et à la réception de l'événement open-torrent-source.",
    ],
  },
  {
    slug: "1-0-0",
    version: "1.0.0",
    date: "24 novembre 2026",
    channel: "Stable",
    platform: "Windows 11 et Windows 10 (64 bits)",
    fileName: "DowlifySetup_1.0.0_x64.exe",
    sizeDisplay: "25,06 Mo",
    sizeBytes: "26 273 280 octets",
    downloadUrl:
      "https://github.com/Firinze/dowlify-site/releases/download/v1.0.0/DowlifySetup_1.0.0_x64.exe",
    sha256: "73ecf4adc593f7034c55e25d361a1e3b21d87dce4fb1ec8f37f44ff3e39c391c",
    summary:
      "Première version stable pour Windows 64 bits accompagnée de l'extension officielle pour Microsoft Edge et Google Chrome.",
    added: [
      "Application de bureau Windows construite avec Tauri 2 et un moteur de téléchargement natif en Rust (Tokio et stockage SQLite local).",
      "Téléchargement segmenté adaptatif lorsque le serveur distant accepte les requêtes HTTP Range, avec reprise fiable après coupure réseau ou redémarrage.",
      "Interception optionnelle pour Microsoft Edge et Google Chrome via communication locale Native Messaging (mode « Demander » actif par défaut).",
      "Transition instantanée entre le dialogue de confirmation et la fenêtre de progression segmentée en réutilisant la fenêtre active.",
      "Classement automatique par catégories (Musique, Vidéos, Documents, Images, Archives, Logiciels, Torrents), files d'attente, planification nocturne et règles.",
      "Prise en charge BitTorrent isolée avec association système Windows désactivée par défaut.",
      "Contrôle automatique des mises à jour, notification Windows et vérification SHA-256 avant installation via DowlifySetup.",
    ],
    improved: [
      "Détection instantanée de la langue du système Windows via l'API native GetUserDefaultUILanguage().",
      "Localisation complète de l'interface et de l'extension en français, anglais, espagnol, allemand, portugais et arabe (avec prise en charge RTL).",
      "Alignement des débits, pourcentages et durées restantes en chiffres tabulaires sur les thèmes jour et sombre.",
    ],
    fixed: [
      "Suppression du délai d'ouverture à froid lors du passage de la confirmation de lien à la fenêtre de progression segmentée.",
      "Centralisation de la source unique de version entre l'application de bureau, le manifeste de mise à jour et l'installeur DowlifySetup.",
    ],
  },
];

export const LATEST_RELEASE = RELEASES[0];
