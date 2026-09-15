import { useEffect, useRef, useState } from 'react'

// Les images vivent dans /public. BASE_URL vaut './' (voir vite.config.js),
// ce qui permet d'héberger le site à la racine ou dans un sous-dossier.
export const asset = (chemin) => `${import.meta.env.BASE_URL}${chemin}`

// Apparition discrète d'un bloc quand il entre dans l'écran.
// Utilisée uniquement sur les têtes de section, pas sur chaque carte.
export function useReveler() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const cible = ref.current
    if (!cible) return

    const reduit = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduit || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observateur = new IntersectionObserver(
      ([entree]) => {
        if (entree.isIntersecting) {
          setVisible(true)
          observateur.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    )

    observateur.observe(cible)

    // Filet de sécurité : si l'observateur ne se déclenche jamais
    // (navigateur exotique, capture d'écran automatisée), on affiche quand même.
    const secours = window.setTimeout(() => setVisible(true), 1500)

    return () => {
      observateur.disconnect()
      window.clearTimeout(secours)
    }
  }, [])

  return [ref, visible ? 'reveler reveler--visible' : 'reveler']
}
