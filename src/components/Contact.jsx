import { useState } from 'react'
import { contact } from '../data/site'
import { useReveler } from './utils'

const vide = { nom: '', email: '', projet: '', message: '' }

export default function Contact() {
  const [ref, classe] = useReveler()
  const [valeurs, setValeurs] = useState(vide)

  const changer = (champ) => (e) =>
    setValeurs((v) => ({ ...v, [champ]: e.target.value }))

  // Sans back-end, le formulaire ouvre le client mail avec un message prérempli.
  // Pour un envoi direct, voir la section « Formulaire » du README.
  const envoyer = () => {
    const sujet = valeurs.projet
      ? `Projet — ${valeurs.projet}`
      : 'Demande de projet'
    const corps = [
      `Nom : ${valeurs.nom}`,
      `Email : ${valeurs.email}`,
      '',
      valeurs.message,
    ].join('\n')
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      sujet
    )}&body=${encodeURIComponent(corps)}`
  }

  const complet = valeurs.nom && valeurs.email && valeurs.message

  return (
    <section className="section section--sombre" id="contact">
      <div className="page">
        <div className="spine">
          <div className="spine__rail">
            <span>Réponse sous 48 h</span>
            Contact
          </div>

          <div>
            <div ref={ref} className={classe}>
              <h2 className="titre-section">Racontez-nous votre projet.</h2>
              <p className="intro-section">
                Quelques lignes suffisent pour commencer : ce que vous vendez, à
                qui, et ce qui vous manque aujourd’hui. On répond sous 48 heures
                avec une première idée de calendrier et de budget.
              </p>
            </div>

            <div className="contact-grille">
              <div className="formulaire">
                <div className="champ">
                  <label htmlFor="nom">Votre nom</label>
                  <input
                    id="nom"
                    type="text"
                    autoComplete="name"
                    value={valeurs.nom}
                    onChange={changer('nom')}
                  />
                </div>

                <div className="champ">
                  <label htmlFor="email">Votre email</label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={valeurs.email}
                    onChange={changer('email')}
                  />
                </div>

                <div className="champ">
                  <label htmlFor="projet">En deux mots, le projet</label>
                  <input
                    id="projet"
                    type="text"
                    placeholder="Site vitrine, application, automatisation…"
                    value={valeurs.projet}
                    onChange={changer('projet')}
                  />
                </div>

                <div className="champ">
                  <label htmlFor="message">Ce qu’il nous faut savoir</label>
                  <textarea
                    id="message"
                    value={valeurs.message}
                    onChange={changer('message')}
                  />
                </div>

                <button
                  type="button"
                  className="bouton bouton--plein"
                  onClick={envoyer}
                  disabled={!complet}
                  style={{
                    justifySelf: 'start',
                    opacity: complet ? 1 : 0.5,
                    cursor: complet ? 'pointer' : 'not-allowed',
                  }}
                >
                  Envoyer le message
                </button>

                <p className="formulaire__note">
                  {complet
                    ? 'Le message s’ouvrira dans votre logiciel de messagerie, prêt à partir.'
                    : 'Remplissez le nom, l’email et le message pour continuer.'}
                </p>
              </div>

              <div className="coordonnees">
                <div className="coordonnee">
                  <span>Email</span>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </div>
                <div className="coordonnee">
                  <span>Téléphone</span>
                  <a href={`tel:${contact.telephoneLien}`}>{contact.telephone}</a>
                </div>
                <div className="coordonnee">
                  <span>Où nous sommes</span>
                  <p>{contact.ville}</p>
                </div>
                <div className="coordonnee">
                  <span>Code</span>
                  <a href="https://github.com/Tsarh" target="_blank" rel="noreferrer">
                    github.com/Tsarh
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
