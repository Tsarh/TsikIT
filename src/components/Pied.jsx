import { contact } from '../data/site'

export default function Pied() {
  return (
    <footer className="pied">
      <div className="page pied__interieur">
        <p style={{ margin: 0 }}>
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
