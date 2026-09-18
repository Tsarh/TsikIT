import { useEffect } from 'react'
import Entete from './components/Entete'
import Accueil from './components/Accueil'
import Studio from './components/Studio'
import Services from './components/Services'
import Realisations from './components/Realisations'
import Contact from './components/Contact'
import Pied from './components/Pied'
import { initAnimations } from './animations'

export default function App() {
  useEffect(() => {
    // Laisser React finir le rendu avant d'attacher les animations
    const id = setTimeout(initAnimations, 120)
    return () => clearTimeout(id)
  }, [])

  return (
    <>
      <a className="saut-contenu" href="#contenu">
        Aller au contenu
      </a>
      <Entete />
      <main id="contenu">
        <Accueil />
        <Studio />
        <Services />
        <Realisations />
        <Contact />
      </main>
      <Pied />
    </>
  )
}
