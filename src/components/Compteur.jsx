import { useCompteur } from './utils'

// Petit compteur qui défile jusqu'à sa valeur quand il entre dans l'écran.
export default function Compteur({ valeur, suffixe = '' }) {
  const [ref, texte] = useCompteur(valeur)
  return (
    <b ref={ref}>
      {texte}
      {suffixe}
    </b>
  )
}
