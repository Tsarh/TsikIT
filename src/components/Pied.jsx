import { contact } from '../data/site'

export default function Pied() {
  return (
    <footer className="pied">
      <div className="page pied__interieur">
        <p className="pied__marque">
          <svg viewBox="0 0 64 48" aria-hidden="true" focusable="false">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 24 20 0h44v48H20L0 24Zm20 10a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
            />
          </svg>
          TsikIT — studio web freelance, {contact.ville}
        </p>
        <div className="pied__liens">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href="https://github.com/Tsarh" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="#accueil">Haut de page</a>
        </div>
      </div>
    </footer>
  )
}
