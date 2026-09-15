import { maquettes, sitesEnLigne } from '../data/site'
import { asset, useReveler } from './utils'

function Projet({ projet, action }) {
  return (
    <a
      className="projet"
      href={projet.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`${projet.nom} — ${action}`}
    >
      <div className="projet__cadre">
        <img
          src={asset(projet.image)}
          alt={`Aperçu du projet ${projet.nom}`}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="projet__entete">
        <h4 className="projet__nom">{projet.nom}</h4>
        <span className="projet__lieu">{projet.lieu}</span>
      </div>
      <p className="projet__texte">{projet.texte}</p>
      <span className="projet__action">{action}</span>
    </a>
  )
}

export default function Realisations() {
  const [ref, classe] = useReveler()

  return (
    <section className="section section--clair" id="realisations">
      <div className="page">
        <div className="spine">
          <div className="spine__rail">
            <span>7 maquettes, 3 sites</span>
            Réalisations
          </div>

          <div>
            <div ref={ref} className={classe}>
              <h2 className="titre-section">Dix projets, deux étapes du métier.</h2>
              <p className="intro-section">
                D’un côté les maquettes : la façon dont on pense un site avant
                d’écrire la première ligne de code. De l’autre les sites déjà en
                ligne, que vous pouvez ouvrir et parcourir tout de suite.
              </p>
            </div>

            <div className="groupe-titre">
              <h3>Maquettes Figma</h3>
              <p>Sept boutiques de prêt-à-porter, Île-de-France</p>
            </div>

            <div className="grille-projets">
              {maquettes.map((projet) => (
                <Projet key={projet.nom} projet={projet} action="Ouvrir la maquette Figma" />
              ))}
            </div>

            <div className="groupe-titre">
              <h3>Sites en ligne</h3>
              <p>Développés en front-end, hébergés sur GitHub Pages</p>
            </div>

            <div className="grille-projets">
              {sitesEnLigne.map((projet) => (
                <Projet key={projet.nom} projet={projet} action="Visiter le site" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
