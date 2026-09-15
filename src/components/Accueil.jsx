import { maquettes, sitesEnLigne } from '../data/site'
import { asset } from './utils'

const travaux = [...maquettes, ...sitesEnLigne]

export default function Accueil() {
  return (
    <section className="section hero" id="accueil">
      <div className="page">
        <div className="spine">
          <div className="spine__rail">
            <span>TsikIT</span>
            Studio freelance
            <br />
            Antananarivo
          </div>

          <div>
            <h1 className="hero__titre">On dessine, on code, on met en ligne.</h1>

            <p className="hero__texte">
              Nous sommes deux développeurs malgaches. Nous prenons un projet du
              premier écran dessiné dans Figma jusqu’à la mise en production, et
              nous restons joignables une fois le site livré.
            </p>

            <div className="hero__actions">
              <a className="bouton bouton--plein" href="#contact">
                Parler de votre projet
              </a>
              <a className="bouton bouton--ligne" href="#realisations">
                Voir les réalisations
              </a>
            </div>

            <div className="hero__meta">
              <div>
                <b>7 maquettes</b>
                conçues et prototypées sur Figma
              </div>
              <div>
                <b>3 sites</b>
                développés et en ligne
              </div>
              <div>
                <b>2 développeurs</b>
                que vous avez directement au bout du fil
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bandeau" aria-hidden="true">
        <div className="bandeau__piste">
          {[...travaux, ...travaux].map((projet, i) => (
            <figure className="bandeau__vignette" key={`${projet.nom}-${i}`}>
              <img src={asset(projet.image)} alt="" loading="lazy" decoding="async" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
