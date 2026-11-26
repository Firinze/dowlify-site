export interface DocSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  steps?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
}

export interface DocPage {
  slug: string;
  title: string;
  category: string;
  summary: string;
  sections: DocSection[];
}

export const DOC_PAGES: DocPage[] = [
  {
    slug: "demarrage",
    title: "Bien démarrer",
    category: "Installation",
    summary:
      "Installez Dowlify sous Windows 10 ou Windows 11, lancez votre premier téléchargement et retrouvez vos dossiers.",
    sections: [
      {
        heading: "1. Installer Dowlify sur Windows",
        steps: [
          "Téléchargez l'installeur officiel DowlifySetup pour Windows 64 bits depuis l'accueil ou la page Versions.",
          "Ouvrez le fichier exécutable. Si Windows SmartScreen affiche un avertissement standard pour un nouveau logiciel éditeur, cliquez sur « Informations complémentaires » puis sur « Exécuter quand même ».",
          "Conservez le dossier d'installation proposé ou choisissez le vôtre, puis terminez l'assistant.",
        ],
      },
      {
        heading: "2. Ajouter un premier téléchargement",
        steps: [
          "Cliquez sur « Ajouter un téléchargement » (ou appuyez sur Ctrl+N).",
          "Collez le lien du fichier souhaité.",
          "Vérifiez la catégorie et le dossier suggérés, puis cliquez sur « Démarrer ».",
        ],
      },
      {
        heading: "3. Retrouver vos fichiers facilement",
        paragraphs: [
          "Chaque fichier terminé rejoint automatiquement la catégorie correspondant à son format : Musique, Vidéos, Documents, Images, Archives, Logiciels ou Torrents.",
          "Cliquez sur l'icône de dossier sur la ligne du fichier ou dans le message de confirmation pour ouvrir directement son emplacement sur votre disque.",
        ],
      },
    ],
  },
  {
    slug: "navigateurs",
    title: "Extension Edge et Chrome",
    category: "Navigateurs",
    summary:
      "Connectez Microsoft Edge ou Google Chrome à votre application Windows tout en gardant le choix sur chaque lien.",
    sections: [
      {
        heading: "1. Installer l'extension officielle",
        bullets: [
          "Microsoft Edge : installez l'extension Dowlify directement depuis Microsoft Edge Add-ons.",
          "Google Chrome : activez l'extension compagnon depuis les paramètres « Navigateurs » de Dowlify.",
        ],
        paragraphs: [
          "L'extension communique localement avec votre application de bureau via le protocole Native Messaging du navigateur, sans passer par aucun serveur intermédiaire.",
        ],
      },
      {
        heading: "2. Choisir votre mode d'interception",
        bullets: [
          "Mode Demander (recommandé par défaut) : à chaque téléchargement compatible, vous choisissez « Démarrer », « Télécharger plus tard » ou « Laisser au navigateur ».",
          "Mode Automatique : les types de fichiers autorisés sont confiés directement à Dowlify.",
          "Menu contextuel uniquement : lancez Dowlify manuellement par clic droit sur un lien ou depuis la fenêtre de l'extension.",
          "Détection média et audio : un bouton « Télécharger avec Dowlify » apparaît sur les lecteurs vidéo et audio compatibles (ainsi que sur les flux audio joués en arrière-plan).",
        ],
      },
      {
        heading: "3. Exclure des sites web",
        paragraphs: [
          "Ouvrez la fenêtre de l'extension dans votre navigateur puis activez « Ne pas intercepter ce site » pour laisser certains domaines au navigateur.",
        ],
      },
    ],
  },
  {
    slug: "telechargements",
    title: "Téléchargements et BitTorrent",
    category: "Utilisation",
    summary:
      "Comprenez la reprise après coupure, l'accélération adaptative, la sécurité des fichiers et la prise en charge BitTorrent.",
    sections: [
      {
        heading: "1. Reprise sans recommencer et pause",
        paragraphs: [
          "Lorsque le site d'origine autorise la reprise, vous pouvez mettre un téléchargement en pause avant d'éteindre votre ordinateur et le reprendre plus tard exactement au même point.",
          "En cas de coupure internet passagère, l'état passe en Reconnexion et Dowlify tente automatiquement de reprendre dès que le réseau revient.",
        ],
      },
      {
        heading: "2. Accélération adaptative",
        paragraphs: [
          "Si le site distant prend en charge les requêtes par plages, Dowlify découpe automatiquement le transfert en plusieurs connexions et affiche l'avancement détaillé par segment.",
          "Si un site limite volontairement le débit à une connexion unique, Dowlify reste sobre et poursuit le téléchargement de façon fiable.",
        ],
      },
      {
        heading: "3. Liens magnet et fichiers torrent",
        bullets: [
          "Vous pouvez coller un lien magnet ou sélectionner un fichier .torrent directement via Ajouter un téléchargement.",
          "Les connexions BitTorrent s'effectuent directement en pair-à-pair depuis votre PC.",
          "L'association automatique Windows pour .torrent et magnet: reste désactivée par défaut et s'active uniquement si vous le souhaitez.",
        ],
      },
      {
        heading: "4. Aucune exécution automatique",
        paragraphs: [
          "Par sécurité, Dowlify n'ouvre ni ne lance jamais automatiquement un fichier exécutable ou un script après son téléchargement.",
        ],
      },
    ],
  },
  {
    slug: "organisation",
    title: "Files, planification et règles",
    category: "Organisation",
    summary:
      "Organisez vos téléchargements par priorités, programmez une plage horaire et automatisez le classement par dossier.",
    sections: [
      {
        heading: "1. Files d'attente et priorités",
        bullets: [
          "Choisissez le nombre maximal de téléchargements simultanés dans la file principale et la file secondaire.",
          "Attribuez la priorité Haute (« En premier »), Normale ou Basse à n'importe quelle ligne.",
        ],
      },
      {
        heading: "2. Planification et action de fin",
        bullets: [
          "Activez une plage horaire précise (par exemple de 23:00 à 06:00) et les jours actifs de la semaine.",
          "Sélectionnez une action optionnelle lorsque tous les transferts sont terminés : aucune action, fermer Dowlify, mettre l'ordinateur en veille ou arrêter l'ordinateur après un compte à rebours annulable de 60 secondes.",
        ],
      },
      {
        heading: "3. Règles automatiques",
        paragraphs: [
          "Depuis l'onglet Règles, définissez des conditions par type de fichier, domaine ou taille minimale, et appliquez un dossier de destination, une file ou une limite de vitesse dédiée.",
        ],
      },
    ],
  },
  {
    slug: "mises-a-jour",
    title: "Mises à jour et données locales",
    category: "Maintenance",
    summary:
      "Tout savoir sur le contrôle des mises à jour, la conservation de vos données et la désinstallation propre.",
    sections: [
      {
        heading: "1. Mises à jour automatiques et manuelles",
        paragraphs: [
          "Au démarrage de l'application puis toutes les 2 heures en arrière-plan (ainsi qu'au retour au premier plan), Dowlify vérifie automatiquement s'il existe une nouvelle version. Vous recevez une notification Windows si la fenêtre est en arrière-plan, un bandeau de rappel persistant dans l'application, et un accès direct depuis le menu de la zone de notification.",
          "Lorsque vous lancez la mise à jour, Dowlify vérifie l'empreinte SHA-256 du nouvel installeur avant de fermer l'application et de lancer DowlifySetup en mode mise à jour.",
        ],
      },
      {
        heading: "2. Stockage local sur votre PC",
        paragraphs: [
          "Toutes vos données (historique, paramètres, files d'attente et règles) restent enregistrées sur votre ordinateur dans %LOCALAPPDATA%\\Dowlify. Rien n'est envoyé à un serveur distant.",
        ],
      },
      {
        heading: "3. Désinstallation propre",
        paragraphs: [
          "Lorsque vous désinstallez Dowlify depuis Windows, le désinstalleur dédié vous laisse choisir explicitement si vous souhaitez conserver ou effacer votre historique et vos paramètres locaux. Vos fichiers déjà téléchargés dans vos dossiers restent intacts.",
        ],
      },
    ],
  },
  {
    slug: "raccourcis",
    title: "Raccourcis et dépannage",
    category: "Référence",
    summary:
      "Gagnez du temps au clavier dans Dowlify et consultez les solutions aux blocages les plus courants.",
    sections: [
      {
        heading: "1. Raccourcis clavier principaux",
        table: {
          headers: ["Raccourci", "Action"],
          rows: [
            ["Ctrl+N", "Ajouter un téléchargement"],
            ["Ctrl+Maj+N", "Ajouter plusieurs liens"],
            ["Ctrl+R", "Reprendre la sélection"],
            ["Ctrl+P", "Mettre en pause la sélection"],
            ["Ctrl+Maj+P", "Tout mettre en pause ou tout reprendre"],
            ["Espace", "Mettre en pause ou reprendre la ligne active"],
            ["Entrée", "Ouvrir le fichier sélectionné"],
            ["Suppr", "Retirer de la liste (le fichier reste sur le disque)"],
            ["Ctrl+F", "Rechercher dans la liste (Échap efface)"],
            ["Ctrl+A", "Tout sélectionner"],
            ["Ctrl+I", "Afficher ou masquer le panneau de détail"],
            ["Ctrl+,", "Ouvrir les paramètres"],
            ["F1", "Afficher l'aide des raccourcis"],
            ["Ctrl+Q", "Quitter Dowlify"],
          ],
        },
      },
      {
        heading: "2. Résoudre les situations courantes",
        bullets: [
          "Le lien expire pendant un transfert : revenez sur la page du site d'origine pour actualiser l'adresse, puis utilisez « Mettre à jour le lien » sur le téléchargement.",
          "L'extension ne détecte pas l'application : ouvrez Dowlify puis vérifiez dans Paramètres > Navigateurs l'état de connexion avec Microsoft Edge ou Google Chrome.",
          "Espace disque faible : utilisez le bouton « Changer de dossier » dans la barre latérale pour déplacer les prochains fichiers vers un autre lecteur.",
        ],
      },
    ],
  },
];
