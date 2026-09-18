/**
 * animations.js — Couche d'animations JS pour TsikIT
 * Curseur glow, boutons magnétiques, tilt 3D, particules, stagger reveal
 */

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const isTouchDevice = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: none)').matches

/* ---- 1. Curseur glow --------------------------------------------------- */
function initCursorGlow() {
  if (prefersReducedMotion() || isTouchDevice()) return

  const glow = document.createElement('div')
  glow.className = 'curseur-glow'
  document.body.appendChild(glow)

  let mx = window.innerWidth / 2
  let my = window.innerHeight / 2
  let cx = mx
  let cy = my
  let raf

  const onMove = (e) => { mx = e.clientX; my = e.clientY }
  document.addEventListener('mousemove', onMove, { passive: true })

  const loop = () => {
    cx += (mx - cx) * 0.07
    cy += (my - cy) * 0.07
    glow.style.transform = `translate(${cx - 170}px, ${cy - 170}px)`
    raf = requestAnimationFrame(loop)
  }
  raf = requestAnimationFrame(loop)

  // Agrandit sur les éléments interactifs
  const hookExpand = (selector) => {
    document.querySelectorAll(selector).forEach((el) => {
      el.addEventListener('mouseenter', () => glow.classList.add('curseur-glow--grand'))
      el.addEventListener('mouseleave', () => glow.classList.remove('curseur-glow--grand'))
    })
  }
  hookExpand('.bouton')
  hookExpand('.projet__cadre')
  hookExpand('.nav__lien')
  hookExpand('.bandeau__vignette')

  return () => {
    cancelAnimationFrame(raf)
    document.removeEventListener('mousemove', onMove)
    glow.remove()
  }
}

/* ---- 2. Boutons magnétiques -------------------------------------------- */
function initMagneticButtons() {
  if (prefersReducedMotion() || isTouchDevice()) return

  document.querySelectorAll('.bouton').forEach((btn) => {
    const onMove = (e) => {
      const r = btn.getBoundingClientRect()
      const dx = (e.clientX - (r.left + r.width / 2)) * 0.3
      const dy = (e.clientY - (r.top + r.height / 2)) * 0.3
      btn.style.transform = `translate(${dx}px, ${dy}px)`
    }
    const onLeave = () => {
      btn.style.transition = 'transform 0.45s cubic-bezier(0.22,0.61,0.36,1)'
      btn.style.transform = ''
      setTimeout(() => (btn.style.transition = ''), 450)
    }
    btn.addEventListener('mousemove', onMove)
    btn.addEventListener('mouseleave', onLeave)
  })
}

/* ---- 3. Tilt 3D sur les cartes projet ---------------------------------- */
function initProjectTilt() {
  if (prefersReducedMotion() || isTouchDevice()) return

  document.querySelectorAll('.projet__cadre').forEach((card) => {
    const onMove = (e) => {
      const r = card.getBoundingClientRect()
      const tx = ((e.clientY - (r.top + r.height / 2)) / r.height) * -9
      const ty = ((e.clientX - (r.left + r.width / 2)) / r.width) * 9
      card.style.setProperty('--tx', `${tx}deg`)
      card.style.setProperty('--ty', `${ty}deg`)
    }
    const onLeave = () => {
      card.style.setProperty('--tx', '0deg')
      card.style.setProperty('--ty', '0deg')
    }
    card.addEventListener('mousemove', onMove)
    card.addEventListener('mouseleave', onLeave)
  })
}

/* ---- 4. Particules flottantes dans le hero ----------------------------- */
function initParticles() {
  if (prefersReducedMotion()) return

  const hero = document.querySelector('.hero')
  if (!hero) return

  const container = document.createElement('div')
  container.className = 'hero__particules'
  container.setAttribute('aria-hidden', 'true')
  hero.insertBefore(container, hero.firstChild)

  const spawn = () => {
    const p = document.createElement('div')
    p.className = 'hero__particule'
    const size = Math.random() * 3 + 1
    const dur  = Math.random() * 7 + 5
    const del  = Math.random() * 2
    p.style.cssText = [
      `left:${Math.random() * 100}%`,
      `bottom:${Math.random() * 25 + 5}%`,
      `width:${size}px`,
      `height:${size}px`,
      `animation-duration:${dur}s`,
      `animation-delay:${del}s`,
    ].join(';')
    container.appendChild(p)
    setTimeout(() => p.remove(), (dur + del + 0.5) * 1000)
  }

  for (let i = 0; i < 18; i++) spawn()
  const id = setInterval(spawn, 900)
  return () => clearInterval(id)
}

/* ---- 5. Reveal en cascade des services --------------------------------- */
function initServiceStagger() {
  if (prefersReducedMotion()) return

  const items = document.querySelectorAll('.service')
  if (!items.length) return

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const idx = [...items].indexOf(entry.target)
        setTimeout(() => entry.target.classList.add('service--visible'), idx * 90)
        obs.unobserve(entry.target)
      })
    },
    { threshold: 0.08 }
  )
  items.forEach((el) => obs.observe(el))
}

/* ---- 6. Reveal en cascade des membres du studio ----------------------- */
function initMembreStagger() {
  if (prefersReducedMotion()) return

  const items = document.querySelectorAll('.membre')
  if (!items.length) return

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const idx = [...items].indexOf(entry.target)
        setTimeout(() => entry.target.classList.add('membre--visible'), idx * 140)
        obs.unobserve(entry.target)
      })
    },
    { threshold: 0.1 }
  )
  items.forEach((el) => obs.observe(el))
}

/* ---- 7. Reveal des coordonnées contact --------------------------------- */
function initCoordonneeReveal() {
  if (prefersReducedMotion()) return

  const items = document.querySelectorAll('.coordonnee')
  if (!items.length) return

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const idx = [...items].indexOf(entry.target)
        setTimeout(() => entry.target.classList.add('coordonnee--visible'), idx * 100)
        obs.unobserve(entry.target)
      })
    },
    { threshold: 0.1 }
  )
  items.forEach((el) => obs.observe(el))
}

/* ---- 8. Ripple sur les boutons ---------------------------------------- */
function initButtonRipple() {
  document.querySelectorAll('.bouton').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if (prefersReducedMotion()) return
      const r = btn.getBoundingClientRect()
      const ripple = document.createElement('span')
      const size = Math.max(r.width, r.height) * 2
      ripple.style.cssText = [
        `position:absolute`,
        `width:${size}px`,
        `height:${size}px`,
        `left:${e.clientX - r.left - size / 2}px`,
        `top:${e.clientY - r.top - size / 2}px`,
        `border-radius:50%`,
        `background:rgba(255,255,255,0.25)`,
        `pointer-events:none`,
        `transform:scale(0)`,
        `animation:ripple-btn 0.6s ease forwards`,
      ].join(';')
      btn.appendChild(ripple)
      setTimeout(() => ripple.remove(), 700)
    })
  })

  // Injecter le keyframe ripple
  if (!document.getElementById('ripple-style')) {
    const s = document.createElement('style')
    s.id = 'ripple-style'
    s.textContent = `@keyframes ripple-btn {
      to { transform: scale(1); opacity: 0; }
    }`
    document.head.appendChild(s)
  }
}

/* ---- Point d'entrée principal ----------------------------------------- */
export function initAnimations() {
  // Attendre que le DOM React soit prêt
  requestAnimationFrame(() => {
    initCursorGlow()
    initMagneticButtons()
    initProjectTilt()
    initParticles()
    initServiceStagger()
    initMembreStagger()
    initCoordonneeReveal()
    initButtonRipple()
  })
}
