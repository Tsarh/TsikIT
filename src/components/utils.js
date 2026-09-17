import { useEffect, useRef, useState } from 'react'

// Les images vivent dans /public. BASE_URL vaut './' (voir vite.config.js),
// ce qui permet d'héberger le site à la racine ou dans un sous-dossier.
export const asset = (chemin) => `${import.meta.env.BASE_URL}${chemin}`

export const reduitAnimations = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Détecte quand un élément entre dans l'écran. Brique de base pour
// les apparitions au défilement et les compteurs.
export function useEnVue(options = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const cible = ref.current
    if (!cible) return

    if (reduitAnimations() || typeof IntersectionObserver === 'undefined') {
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
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px', ...options }
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

  return [ref, visible]
}

// Apparition discrète d'un bloc quand il entre dans l'écran.
// Utilisée uniquement sur les têtes de section, pas sur chaque carte.
export function useReveler() {
  const [ref, visible] = useEnVue()
  return [ref, visible ? 'reveler reveler--visible' : 'reveler']
}

// Fait défiler un nombre de 0 jusqu'à sa valeur finale une fois le bloc
// visible à l'écran. Purement décoratif : le chiffre final est toujours
// présent dans le HTML pour qui n'a pas de JavaScript.
export function useCompteur(cible, { duree = 1100, decimales = 0 } = {}) {
  const [ref, visible] = useEnVue({ threshold: 0.6 })
  const [valeur, setValeur] = useState(0)

  useEffect(() => {
    if (!visible) return
    if (reduitAnimations()) {
      setValeur(cible)
      return
    }

    let frame
    const debut = performance.now()
    const anime = (maintenant) => {
      const t = Math.min(1, (maintenant - debut) / duree)
      // easeOutCubic : démarre vite, ralentit en douceur avant la valeur finale
      const progression = 1 - Math.pow(1 - t, 3)
      setValeur(cible * progression)
      if (t < 1) frame = requestAnimationFrame(anime)
    }
    frame = requestAnimationFrame(anime)
    return () => cancelAnimationFrame(frame)
  }, [visible, cible, duree])

  const texte =
    decimales > 0 ? valeur.toFixed(decimales) : Math.round(valeur).toString()

  return [ref, texte]
}

// Renvoie l'identifiant de la section actuellement au centre de l'écran,
// pour souligner l'entrée correspondante dans la navigation.
export function useSectionActive(ids) {
  const [actif, setActif] = useState(ids[0])

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return
    const cibles = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    if (!cibles.length) return

    const observateur = new IntersectionObserver(
      (entrees) => {
        const visible = entrees
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActif(visible.target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    cibles.forEach((c) => observateur.observe(c))
    return () => observateur.disconnect()
  }, [ids])

  return actif
}
