import { useEffect, useState } from 'react'
import { navigation } from '../data/site'
import { useSectionActive } from './utils'

const idsSections = navigation.map((l) => l.href.replace('#', ''))

export default function Entete() {
  const [pose, setPose] = useState(false)
  const [ouverte, setOuverte] = useState(false)
  const actif = useSectionActive(idsSections)

  useEffect(() => {
    const auDefilement = () => setPose(window.scrollY > 40)
    auDefilement()
    window.addEventListener('scroll', auDefilement, { passive: true })
    return () => window.removeEventListener('scroll', auDefilement)
  }, [])

  return (
    <header className={`entete${pose || ouverte ? ' entete--pose' : ''}`}>
      <div className="page entete__interieur">
        <a className="marque" href="#accueil" onClick={() => setOuverte(false)}>
          <svg
            className="marque__signe"
            viewBox="0 0 64 48"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 24 20 0h44v48H20L0 24Zm20 10a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
            />
          </svg>
          Tsik<em>IT</em>
          <small>studio web, Antananarivo</small>
        </a>

        <nav
          className={`nav${ouverte ? ' nav--ouverte' : ''}`}
          aria-label="Navigation principale"
        >
          {navigation.map((lien) => {
            const id = lien.href.replace('#', '')
            return (
              <a
                key={lien.href}
                href={lien.href}
                className={id === actif ? 'nav__lien nav__lien--actif' : 'nav__lien'}
                onClick={() => setOuverte(false)}
              >
                {lien.label}
              </a>
            )
          })}
        </nav>

        <button
          type="button"
          className="burger"
          aria-expanded={ouverte}
          onClick={() => setOuverte((v) => !v)}
        >
          {ouverte ? 'Fermer' : 'Menu'}
        </button>
      </div>
    </header>
  )
}
