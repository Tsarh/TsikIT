import { services } from '../data/site'
import { useReveler } from './utils'

export default function Services() {
  const [ref, classe] = useReveler()

  return (
    <section className="section section--clair" id="services">
      <div className="page">
        <div className="spine">
          <div className="spine__rail">
            <span>6 domaines</span>
            Ce qu’on fait
          </div>

          <div>
            <div ref={ref} className={classe}>
              <h2 className="titre-section">
                Six façons de travailler ensemble.
              </h2>
              <p className="intro-section">
                La plupart des projets mélangent plusieurs de ces lignes. Dites-nous
                où vous en êtes, on vous dit ce qui est utile et ce qui ne l’est pas.
              </p>
            </div>

            <div className="services">
              {services.map((service) => (
                <article className="service" key={service.titre}>
                  <div>
                    <h3>{service.titre}</h3>
                    <p style={{ marginTop: '0.8rem' }}>{service.texte}</p>
                  </div>
                  <ul>
                    {service.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
