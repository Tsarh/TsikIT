import { equipe } from '../data/site'
import { asset, useReveler } from './utils'

export default function Studio() {
  const [ref, classe] = useReveler()

  return (
    <section className="section section--sombre" id="studio">
      <div className="page">
        <div className="spine">
          <div className="spine__rail">
            <span>2 développeurs</span>
            Le studio
          </div>

          <div ref={ref} className={classe}>
            <h2 className="titre-section">Une équipe de deux, et c’est voulu.</h2>
            <p className="intro-section">
              Pas d’intermédiaire, pas de chef de projet qui traduit vos demandes.
              Vous parlez aux personnes qui écrivent le code. L’un vient du
              back-end et de l’automatisation, l’autre du design et du mobile :
              ensemble, on couvre un projet du début à la fin.
            </p>
          </div>
        </div>

        <div className="spine" style={{ marginTop: '1rem' }}>
          <div className="spine__rail" aria-hidden="true" />
          <div className="studio">
            {equipe.map((membre) => (
              <article className="membre" key={membre.id}>
                <div className="membre__entete">
            
                  <h3 className="membre__nom">
                    {membre.prenom} {membre.nom}
                    <small>{membre.role}</small>
                  </h3>
                </div>

                <p className="membre__resume">{membre.resume}</p>

                <ul className="membre__parcours">
                  {membre.parcours.map((item) => (
                    <li key={item.titre}>
                      <h4>{item.titre}</h4>
                      <p>{item.detail}</p>
                    </li>
                  ))}
                </ul>

                <ul className="etiquettes">
                  {membre.stack.map((techno) => (
                    <li key={techno}>{techno}</li>
                  ))}
                </ul>

                <div className="liens-membre">
                  {membre.liens.map((lien) => (
                    <a
                      key={lien.label}
                      href={lien.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {lien.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
