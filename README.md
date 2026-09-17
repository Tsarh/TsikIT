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
public/work/           captures des projets (WebP), en paires desktop/mobile
public/team/           portraits de l'équipe (WebP)
public/favicon.ico, icon-*.png, apple-touch-icon.png   déclinaisons du logo
public/og-image.png    image affichée quand le lien est partagé
src/data/site.js       TOUT le contenu éditable : équipe, services, projets, contact
src/styles/global.css  tokens de couleur et de typo, puis les composants
src/components/
  Entete, Pied           en-tête et pied de page (le logo SVG est inline dans les deux)
  Accueil                 hero, compteurs animés, bandeau de captures défilant
  Studio                  les deux membres, avec portrait
  Services                les six domaines d'intervention
  Realisations             assemble ProjetCarte + Lightbox
  ProjetCarte              une carte projet, avec bascule desktop/mobile
  Lightbox                 aperçu plein écran au clic sur une carte
  Compteur                 petit compteur qui défile jusqu'à sa valeur
  Contact                  formulaire + coordonnées
  utils.js                 animations au défilement, compteur, section active
```

## Mettre à jour le contenu

Dans la quasi-totalité des cas, seul `src/data/site.js` est à modifier.

**Ajouter une maquette Figma**

1. Déposer la capture dans `public/work/`. Si vous avez une version desktop
   et une version mobile, déposez les deux (format WebP, 1400 px de large
   maximum pour le desktop).
2. Ajouter un objet dans `maquettes` :

```js
{
  nom: 'Nom du projet',
  lieu: 'Ville ou type de commerce',
  desktop: 'work/nom-du-fichier-desktop.webp',
  mobile: 'work/nom-du-fichier-mobile.webp',   // optionnel : sans lui, pas de bascule
  texte: 'Deux phrases sur ce que le projet résout.',
  url: 'https://www.figma.com/design/…',
  vedette: true,   // optionnel : affiche cette carte en pleine largeur, une seule à la fois
}
```

**Ajouter un site en ligne** : même chose dans `sitesEnLigne`, avec en plus
un champ `code` (lien vers le dépôt) si vous voulez afficher un lien
« Code » à côté de « Site ». Pour Ouvrage, Hôtel de Ville et Fashion, ce
lien suppose que le nom du dépôt GitHub est identique à celui de l'URL
GitHub Pages (`tsarh.github.io/Ouvrage/` → `github.com/Tsarh/Ouvrage`) —
à vérifier et corriger si un dépôt porte un nom différent.

Pour compresser et retailler une capture :

```bash
# avec ImageMagick
magick capture.png -resize 1400x -quality 82 public/work/capture-desktop.webp
```

**Changer les coordonnées** : l'objet `contact` en haut de `site.js`.
Les valeurs actuelles (`contact@tsikit.mg`, le numéro de téléphone) sont des
espaces réservés — à remplacer avant la mise en ligne.

**Remplacer un portrait** : déposez la nouvelle photo dans `public/team/`
et mettez à jour le champ `photo` du membre concerné dans `equipe`. Les
portraits actuels ont été détourés et légèrement teintés (mélange pétrole/
craie à ~30 %) pour s'accorder entre eux malgré des photos sources très
différentes — une photo neutre, bien exposée, suffit ; pas besoin de la
retravailler avant de la déposer.

**Ajouter un membre** : un objet de plus dans `equipe`. La grille passe
automatiquement à trois colonnes si vous ajustez `.studio` dans `global.css`.

## Le portfolio : bascule et aperçu

Chaque carte avec une image `mobile` affiche deux petits boutons
« Desktop / Mobile » qui changent l'aperçu affiché sur la carte elle-même.
Cliquer sur l'image ouvre un aperçu plein écran (`Lightbox.jsx`) qui reprend
la vue choisie, avec un lien direct vers Figma ou le site. Une carte sans
image `mobile` n'affiche simplement pas ces boutons.

## Logo et identité

Le mark (l'étiquette ocre) est un SVG inline défini dans `Entete.jsx` et
`Pied.jsx` — pas un fichier image, donc net à toutes les tailles. Le
favicon et l'image de partage (`og-image.png`) sont des exports statiques
du même dessin ; si les couleurs de marque changent, ces deux fichiers
doivent être régénérés à part (ce sont de simples PNG, pas liés au CSS).

**Avant la mise en ligne** : `og-image` est référencée en chemin relatif
dans `index.html` (`content="og-image.png"`). Les réseaux sociaux exigent
en général une URL absolue pour l'aperçu de lien — une fois le site
déployé, remplacez cette ligne par l'URL complète, par exemple
`https://tsikit.mg/og-image.png`.

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

## Animations

Un seul moment orchestré à l'ouverture (le hero entre en cascade), des
apparitions discrètes au défilement sur les titres de section, des
compteurs qui défilent jusqu'à leur valeur, un léger effet de bascule au
survol des cartes projet, et l'entrée de menu active qui se souligne selon
la section visible. Tout respecte `prefers-reduced-motion` : ces effets
sont désactivés pour qui a demandé moins d'animations dans son système.

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

N'oubliez pas la modification indiquée plus haut (URL absolue de
`og-image`) une fois le nom de domaine final connu.

## Notes

- Les images du portfolio sont en `loading="lazy"` ; les deux portraits de
  l'équipe et le logo sont chargés immédiatement (peu de poids, toujours
  visibles tôt dans la page).
- La navigation au clavier est visible (contour ocre sur le focus), et la
  lightbox se ferme avec Échap ou un clic en dehors.
