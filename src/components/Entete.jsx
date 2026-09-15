import { useEffect, useState } from 'react'
import { navigation } from '../data/site'

export default function Entete() {
  const [pose, setPose] = useState(false)
  const [ouverte, setOuverte] = useState(false)

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
          Tsik<em>IT</em>
          <small>studio web, Antananarivo</small>
        </a>

        <nav
          className={`nav${ouverte ? ' nav--ouverte' : ''}`}
          aria-label="Navigation principale"
        >
          {navigation.map((lien) => (
            <a key={lien.href} href={lien.href} onClick={() => setOuverte(false)}>
              {lien.label}
            </a>
          ))}
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
