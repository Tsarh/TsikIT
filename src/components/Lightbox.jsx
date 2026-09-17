import { useEffect, useRef } from 'react'
import { asset } from './utils'

export default function Lightbox({ projet, vue, onVue, onFermer }) {
  const cadreRef = useRef(null)
  const image = vue === 'mobile' && projet.mobile ? projet.mobile : projet.desktop

  useEffect(() => {
    const surEchap = (e) => {
      if (e.key === 'Escape') onFermer()
    }
    document.addEventListener('keydown', surEchap)
    document.body.style.overflow = 'hidden'
    cadreRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', surEchap)
      document.body.style.overflow = ''
    }
  }, [onFermer])

  return (
    <div
      className="loupe"
      role="dialog"
      aria-modal="true"
      aria-label={`Aperçu du projet ${projet.nom}`}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onFermer()
      }}
    >
      <div className="loupe__panneau" ref={cadreRef} tabIndex={-1}>
        <div className="loupe__entete">
          <div>
            <h3>{projet.nom}</h3>
            <p>{projet.lieu}</p>
          </div>

          <div className="loupe__actions-entete">
            {projet.mobile && (
              <div className="bascule" role="group" aria-label="Aperçu">
                <button
                  type="button"
                  className={vue !== 'mobile' ? 'bascule__bouton bascule__bouton--actif' : 'bascule__bouton'}
                  onClick={() => onVue('desktop')}
                >
                  Desktop
                </button>
                <button
                  type="button"
                  className={vue === 'mobile' ? 'bascule__bouton bascule__bouton--actif' : 'bascule__bouton'}
                  onClick={() => onVue('mobile')}
                >
                  Mobile
                </button>
              </div>
            )}
            <button
              type="button"
              className="loupe__fermer"
              onClick={onFermer}
              aria-label="Fermer l'aperçu"
            >
              Fermer
            </button>
          </div>
        </div>

        <div className="loupe__scroll">
          <img
            key={image}
            src={asset(image)}
            alt={`Capture du projet ${projet.nom} — ${vue === 'mobile' ? 'version mobile' : 'version desktop'}`}
          />
        </div>

        <div className="loupe__pied">
          <p>{projet.texte}</p>
          <div className="loupe__liens">
            {projet.code && (
              <a href={projet.code} target="_blank" rel="noreferrer">
                Voir le code
              </a>
            )}
            <a href={projet.url} target="_blank" rel="noreferrer" className="bouton bouton--plein">
              {projet.code ? 'Visiter le site' : 'Ouvrir sur Figma'}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
