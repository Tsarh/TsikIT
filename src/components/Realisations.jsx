import { useState } from 'react'
import { maquettes, sitesEnLigne } from '../data/site'
import { useReveler } from './utils'
import ProjetCarte from './ProjetCarte'
import Lightbox from './Lightbox'

const vedette = maquettes.find((p) => p.vedette)
const reste = maquettes.filter((p) => !p.vedette)

export default function Realisations() {
  const [ref, classe] = useReveler()
  const [ouvert, setOuvert] = useState(null) // { projet, vue }

  const ouvrir = (projet, vue) => setOuvert({ projet, vue })
  const fermer = () => setOuvert(null)
  const changerVue = (vue) => setOuvert((o) => (o ? { ...o, vue } : o))

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
                ligne, que vous pouvez ouvrir et parcourir tout de suite. Cliquez
                une image pour l’agrandir et basculer entre desktop et mobile.
              </p>
            </div>

            <div className="groupe-titre">
              <h3>Maquettes Figma</h3>
              <p>Sept boutiques de prêt-à-porter, Île-de-France</p>
            </div>

            {vedette && (
              <ProjetCarte projet={vedette} vedette onOuvrir={ouvrir} />
            )}

            <div className="grille-projets">
              {reste.map((projet) => (
                <ProjetCarte key={projet.nom} projet={projet} onOuvrir={ouvrir} />
              ))}
            </div>

            <div className="groupe-titre">
              <h3>Sites en ligne</h3>
              <p>Développés en front-end, hébergés sur GitHub Pages</p>
            </div>

            <div className="grille-projets">
              {sitesEnLigne.map((projet) => (
                <ProjetCarte key={projet.nom} projet={projet} onOuvrir={ouvrir} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {ouvert && (
        <Lightbox
          projet={ouvert.projet}
          vue={ouvert.vue}
          onVue={changerVue}
          onFermer={fermer}
        />
      )}
    </section>
  )
}
