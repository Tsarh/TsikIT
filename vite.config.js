import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' => le site fonctionne aussi bien à la racine (Vercel, Netlify)
// que dans un sous-dossier (GitHub Pages : https://user.github.io/tsikit/).
export default defineConfig({
  plugins: [react()],
  base: './',
})
