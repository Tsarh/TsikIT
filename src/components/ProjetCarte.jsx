import { useRef, useState } from 'react'
import { asset, reduitAnimations } from './utils'

export default function ProjetCarte({ projet, vedette = false, onOuvrir }) {
  const [vue, setVue] = useState('desktop')
  const carteRef = useRef(null)
  const image = vue === 'mobile' && projet.mobile ? projet.mobile : projet.desktop

  const surSurvol = (e) => {
    if (reduitAnimations()) return
    const rect = carteRef.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    carteRef.current.style.setProperty('--tx', `${(-py * 3.2).toFixed(2)}deg`)
    carteRef.current.style.setProperty('--ty', `${(px * 3.2).toFixed(2)}deg`)
  }

  const surSortie = () => {
    carteRef.current?.style.setProperty('--tx', '0deg')
    carteRef.current?.style.setProperty('--ty', '0deg')
  }

  return (
    <article
      className={vedette ? 'projet projet--vedette' : 'projet'}
      ref={carteRef}
      onMouseMove={surSurvol}
      onMouseLeave={surSortie}
    >
      <button
        type="button"
        className="projet__cadre"
        onClick={() => onOuvrir(projet, vue)}
        aria-label={`Agrandir l'aperçu de ${projet.nom}`}
      >
        <img
          src={asset(image)}
          alt={`Aperçu du projet ${projet.nom}`}
          loading="lazy"
          decoding="async"
        />
        <span className="projet__loupe" aria-hidden="true">
          Agrandir
        </span>
      </button>

      <div className="projet__corps">
        <div className="projet__entete">
          <h4 className="projet__nom">{projet.nom}</h4>
          <span className="projet__lieu">{projet.lieu}</span>
        </div>

        <p className="projet__texte">{projet.texte}</p>

        <div className="projet__pied">
          {projet.mobile && (
            <div className="bascule bascule--discrete" role="group" aria-label="Aperçu">
              <button
                type="button"
                className={vue !== 'mobile' ? 'bascule__bouton bascule__bouton--actif' : 'bascule__bouton'}
                onClick={() => setVue('desktop')}
              >
                Desktop
              </button>
              <button
                type="button"
                className={vue === 'mobile' ? 'bascule__bouton bascule__bouton--actif' : 'bascule__bouton'}
                onClick={() => setVue('mobile')}
              >
                Mobile
              </button>
            </div>
          )}

          <div className="projet__liens">
            {projet.code && (
              <a href={projet.code} target="_blank" rel="noreferrer">
                Code
              </a>
            )}
            <a href={projet.url} target="_blank" rel="noreferrer">
              {projet.code ? 'Site' : 'Figma'}
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
