import Entete from './components/Entete'
import Accueil from './components/Accueil'
import Studio from './components/Studio'
import Services from './components/Services'
import Realisations from './components/Realisations'
import Contact from './components/Contact'
import Pied from './components/Pied'

export default function App() {
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
