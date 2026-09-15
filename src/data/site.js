// Tout le contenu éditable du site est réuni ici.
// Pour mettre à jour le site, il suffit la plupart du temps de modifier ce fichier.

export const contact = {
  email: 'contact@tsikit.mg', // ← à remplacer par votre adresse réelle
  telephone: '+261 00 00 000 00', // ← à remplacer
  telephoneLien: '+261000000000', // même numéro, sans espaces, pour le lien tel:
  ville: 'Antananarivo, Madagascar',
}

export const equipe = [
  {
    id: 'tsaroana',
    prenom: 'Tsaroana Ny Aina Fandresena',
    nom: 'Razafimampianina',
    role: 'Développement full-stack & automatisation',
    resume:
      "Il construit ce qui doit tourner tout seul : pipelines de prospection, scraping, enrichissement de bases, intégrations d'API. Master 1 d'informatique multimédia et intelligence artificielle à l'ISPM.",
    parcours: [
      {
        titre: 'Pipeline de prospection automatisée',
        detail:
          "Mission freelance : envoi d'e-mails multi-marques, relances, scraping et enrichissement de bases. TypeScript, Node.js, PostgreSQL, Redis, Brevo, Gmail IMAP, Apify.",
      },
      {
        titre: 'Collecte et analyse de données sociales',
        detail:
          "Stage de trois mois chez R@ndev Team : scraping de réseaux sociaux et traitement par LLM pour générer des idées marketing. React, Flask, MongoDB.",
      },
      {
        titre: 'Classification de fruits par IA',
        detail:
          'Grand projet de Master 1 : modèle de reconnaissance entraîné sur TensorFlow, interface Tkinter et backend Flask.',
      },
    ],
    stack: [
      'JavaScript / TypeScript',
      'Node.js & Express',
      'React, Vue',
      'Python & Flask',
      'PostgreSQL, Redis',
      'n8n, Apify',
      'Java, C, SQL',
      'Git, Figma',
    ],
    liens: [
      { label: 'GitHub', url: 'https://github.com/Tsarh' },
      { label: 'Portfolio', url: 'https://portfolio.razjazz882.workers.dev/' },
    ],
  },
  {
    id: 'antsatiana',
    prenom: 'Antsatiana Edena',
    nom: 'Razakamahefa',
    role: 'Développement web & mobile, design et multimédia',
    resume:
      "Il fait le pont entre le code et l'image : interfaces web et mobile, maquettes, identité visuelle, montage vidéo. Master 1 IMTICIA à l'ISPM.",
    parcours: [
      {
        titre: "Maintenance et évolution d'As'ako",
        detail:
          'Stage de développeur full-stack chez Rna Dev : nouvelles fonctionnalités et corrections front et back sur une solution de gestion intégrée. React, Laravel.',
      },
      {
        titre: 'Gestion du temps et des pointages',
        detail:
          'Stage chez Softwell Madagascar : application web de suivi des heures, synchronisée avec SAGE PAIE pour le calcul des salaires. React, Tailwind, .NET.',
      },
      {
        titre: "Sahan'AI",
        detail:
          "Projet académique : reconnaissance de fruits et légumes à partir d'images, avec évaluation de leur état de consommation. Python, TensorFlow, OpenCV, Flask.",
      },
    ],
    stack: [
      'React, Laravel, .NET',
      'Flutter',
      'C#, Java, Python, PHP, Dart',
      'MySQL, SQL Server',
      'Figma, Adobe XD',
      'Photoshop, Illustrator',
      'Premiere Pro, After Effects',
      'Linux, Windows Server',
    ],
    liens: [
      { label: 'GitHub', url: 'https://github.com/Antsatianaa' },
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/antsatiana-edena-razakamahefa',
      },
    ],
  },
]

export const services = [
  {
    titre: 'Sites et applications web',
    texte:
      "Du site vitrine à l'application métier, en React, Vue, Laravel ou .NET. Responsive, rapide, et livré avec le code source.",
    details: ['Sites vitrines', 'Boutiques et catalogues', 'Applications de gestion', 'Intégration d’API'],
  },
  {
    titre: 'Maquettes et identité visuelle',
    texte:
      'On dessine avant de coder. Chaque projet commence par une maquette Figma que vous validez écran par écran, en version mobile et desktop.',
    details: ['Maquettes Figma', 'Design responsive', 'Logo et charte', 'Retouche photo'],
  },
  {
    titre: 'Automatisation et données',
    texte:
      "Les tâches répétitives coûtent cher. On les remplace par des scripts : collecte de données, enrichissement de fichiers, envois et relances automatiques.",
    details: ['Web scraping', 'Pipelines d’e-mails', 'Nettoyage de bases', 'Scénarios n8n'],
  },
  {
    titre: 'Intelligence artificielle appliquée',
    texte:
      "Reconnaissance d'images, classification, traitement de texte par modèle de langage : des usages concrets, branchés sur vos outils existants.",
    details: ['Vision par ordinateur', 'Intégration de LLM', 'TensorFlow, OpenCV', 'Prototypes rapides'],
  },
  {
    titre: 'Mobile',
    texte:
      'Une application Flutter unique, compilée pour Android et iOS, connectée au même back-end que votre site.',
    details: ['Flutter', 'API REST', 'Publication sur les stores'],
  },
  {
    titre: 'Vidéo et contenus',
    texte:
      'Montage pour YouTube, Instagram et formats publicitaires, motion design léger pour habiller vos pages.',
    details: ['Premiere Pro', 'After Effects', 'Formats courts'],
  },
]

export const maquettes = [
  {
    nom: 'Pretty Woman 77',
    lieu: 'Chelles',
    image: 'work/pretty-woman.webp',
    texte:
      "Prêt-à-porter féminin de quartier. La maquette met en avant le service de relooking et la prise de contact directe par WhatsApp, avant même le catalogue.",
    url: 'https://www.figma.com/design/v2T63vkaFhYkhiVxl2J11D/pretty-woman',
  },
  {
    nom: 'La Chiffonnerie',
    lieu: 'Chelles',
    image: 'work/chiffonnerie.webp',
    texte:
      'Atelier de confection et prêt-à-porter. Nouveautés de la semaine, sur-mesure et horaires, dans une mise en page volontairement calme.',
    url: 'https://www.figma.com/design/VARvfE48v6FkHxhCc12nox/Chiffonnerie',
  },
  {
    nom: 'New Fashion',
    lieu: 'Chelles',
    image: 'work/new-fashion.webp',
    texte:
      'Vestiaire urbain, direction sombre et contrastée. Un bandeau promotionnel permanent et des pages pensées pour vendre la tenue complète.',
    url: 'https://www.figma.com/design/z153lmcxAGJYBKBW2gRJ8l/New-fashion',
  },
  {
    nom: "L'Armoire de Soso",
    lieu: 'Bry-sur-Marne',
    image: 'work/armoire-de-soso.webp',
    texte:
      "Click & collect pour une boutique locale : on réserve en ligne, on essaie et on paie sur place. Typographie large et parcours réduit à l'essentiel.",
    url: 'https://www.figma.com/design/WQ7nD0wH1QpKJllUlixkhj/Untitled',
  },
  {
    nom: 'Boutique Evidence',
    lieu: 'Coulommiers',
    image: 'work/boutique-evidence.webp',
    texte:
      'Un lookbook plutôt qu’un catalogue : la silhouette complète de la semaine, à réserver en ligne puis à essayer en boutique sans obligation d’achat.',
    url: 'https://www.figma.com/design/JTJYCB43fafo5keinU1W4A/boutique-evidence',
  },
  {
    nom: 'La Malle aux Affaires',
    lieu: 'Argenteuil',
    image: 'work/malle-aux-affaires.webp',
    texte:
      'Dépôt-vente et pièces vintage. Les arrivages datés et le prix unique structurent toute la page : ici, ce qui compte est ce qui vient d’arriver.',
    url: 'https://www.figma.com/design/kTswwAh7Pjx1vDWNPxpYNd/la-malle-aux-affaires',
  },
  {
    nom: "L'Atelier de la Mode",
    lieu: 'Clichy',
    image: 'work/atelier-de-la-mode.webp',
    texte:
      'Boutique indépendante. Grande image d’ouverture, texte rare, beaucoup de vide : la maquette raconte le lieu avant de présenter les pièces.',
    url: 'https://www.figma.com/design/uvOuqzE7YE4BhDKmnYxL96/atelier-de-la-mode',
  },
]

export const sitesEnLigne = [
  {
    nom: 'Ouvrage',
    lieu: 'Librairie en ligne',
    image: 'work/ouvrage.webp',
    texte:
      'Catalogue de librairie avec recherche, filtres par genre, favoris et panier. Interface sombre pour laisser les couvertures porter la couleur.',
    url: 'https://tsarh.github.io/Ouvrage/',
  },
  {
    nom: 'Hôtel de Ville',
    lieu: 'Hôtel & spa',
    image: 'work/hotel-de-ville.webp',
    texte:
      'Site d’hôtel construit autour d’une vidéo plein écran, avec hébergement, restaurant, services et parcours de réservation.',
    url: 'https://tsarh.github.io/Hotel-de-ville/',
  },
  {
    nom: 'Fashion',
    lieu: 'Boutique de mode',
    image: 'work/fashion.webp',
    texte:
      'Boutique de prêt-à-porter : carrousel d’ouverture, rayons femme, homme, accessoires et chaussures, panier et promotions.',
    url: 'https://tsarh.github.io/fashion/',
  },
]

export const navigation = [
  { label: 'Le studio', href: '#studio' },
  { label: 'Ce qu’on fait', href: '#services' },
  { label: 'Réalisations', href: '#realisations' },
  { label: 'Contact', href: '#contact' },
]
