# Site TsikIT

Site vitrine du studio, en React + Vite. Une seule page, cinq sections :
accueil, studio, services, réalisations, contact.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # génère dist/
npm run preview  # relit le build en local
```

## Structure

```
public/work/          les captures des projets (WebP compressés)
src/data/site.js      TOUT le contenu éditable : équipe, services, projets, contact
src/styles/global.css tokens de couleur et de typo, puis les composants
src/components/       Entete, Accueil, Studio, Services, Realisations, Contact, Pied
```

## Mettre à jour le contenu

Dans la quasi-totalité des cas, seul `src/data/site.js` est à modifier.

**Ajouter un projet**

1. Déposer la capture dans `public/work/` (format WebP de préférence, largeur
   1400 px maximum).
2. Ajouter un objet dans `maquettes` ou `sitesEnLigne` :

```js
{
  nom: 'Nom du projet',
  lieu: 'Ville ou type',
  image: 'work/nom-du-fichier.webp',
  texte: 'Deux phrases sur ce que le projet résout.',
  url: 'https://…',
}
```

Pour compresser une capture PNG en WebP :

```bash
# avec ImageMagick
magick capture.png -resize 1400x -quality 82 public/work/capture.webp
```

**Changer les coordonnées** : l'objet `contact` en haut de `site.js`.
Les valeurs actuelles (`contact@tsikit.mg`, le numéro de téléphone) sont des
espaces réservés — à remplacer avant la mise en ligne.

**Ajouter un membre** : un objet de plus dans `equipe`. La grille passe
automatiquement à trois colonnes si vous ajustez `.studio` dans `global.css`.

## Couleurs et typographie

Tout est centralisé dans les variables CSS en haut de `global.css` :

| Variable | Valeur | Usage |
| --- | --- | --- |
| `--encre` | `#0F2A33` | fond principal, bleu pétrole |
| `--encre-0` | `#081C23` | sections sombres, pied de page |
| `--craie` | `#ECEFEE` | fond clair, texte sur fond sombre |
| `--ocre` | `#D9A441` | accent : boutons, filets, liens |
| `--brume` | `#7E9A99` | texte secondaire |

Polices : **Bricolage Grotesque** (titres et interface) et **Newsreader**
(texte courant), chargées depuis Google Fonts dans `index.html`.

## Formulaire de contact

Sans serveur, le bouton ouvre le logiciel de messagerie avec un message
prérempli. Pour recevoir les messages directement par e-mail, créez un
formulaire sur [Formspree](https://formspree.io) (gratuit jusqu'à 50 envois par
mois) et remplacez la fonction `envoyer` de `src/components/Contact.jsx` :

```js
const envoyer = async () => {
  await fetch('https://formspree.io/f/VOTRE_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(valeurs),
  })
}
```

## Déploiement

`vite.config.js` utilise `base: './'`, donc le même build fonctionne partout.

**Vercel ou Netlify** — connecter le dépôt Git, commande de build `npm run
build`, dossier publié `dist`. Chaque `git push` redéploie.

**GitHub Pages** — pousser le dépôt, puis :

```bash
npm run build
npx gh-pages -d dist
```

et activer Pages sur la branche `gh-pages` dans les réglages du dépôt.

## Notes

- Les images sont en `loading="lazy"`, sauf celles visibles d'emblée.
- L'animation du bandeau d'accueil et les apparitions au défilement respectent
  `prefers-reduced-motion`.
- La navigation au clavier est visible (contour ocre sur le focus).
