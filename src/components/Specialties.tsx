import { PHOTOS, type PhotoAsset } from '../content/images';
import { SITE, whatsappUrl } from '../content/site';
import { ArrowRight, WhatsApp } from './Icons';
import { Photo } from './Photo';
import './Specialties.css';

type Specialty = {
  id: string;
  index: string;
  title: string;
  kicker: string;
  photo: PhotoAsset;
  tone: 'blue' | 'orange';
  body: string[];
  topics: string[];
  note: string;
};

const SPECIALTIES: Specialty[] = [
  {
    id: 'endocrinologia',
    index: '01',
    title: 'Endocrinología',
    kicker: 'Hormonas y sistema endocrino',
    photo: PHOTOS.endocrinology,
    tone: 'blue',
    body: [
      'La endocrinología es la especialidad médica que estudia las hormonas y el funcionamiento del sistema endocrino: el conjunto de glándulas que las producen y que ayudan a regular funciones esenciales del organismo, como el metabolismo, el crecimiento o el uso de la energía.',
      'Glándulas como la tiroides forman parte de este sistema. Cuando el equilibrio hormonal se altera, puede influir en distintos aspectos de la salud, por lo que es importante contar con una valoración profesional.',
    ],
    topics: ['Sistema endocrino', 'Tiroides', 'Equilibrio hormonal', 'Metabolismo'],
    note: 'Referencias educativas generales. Consulta con el consultorio el tipo de atención disponible.',
  },
  {
    id: 'ginecologia',
    index: '02',
    title: 'Ginecología',
    kicker: 'Salud de la mujer',
    photo: PHOTOS.gynecology,
    tone: 'orange',
    body: [
      'La ginecología es la especialidad médica dedicada a la salud ginecológica y reproductiva femenina, es decir, al cuidado del sistema reproductor de la mujer.',
      'Es una especialidad que acompaña a la mujer en las distintas etapas de su vida. Si tienes dudas sobre tu salud ginecológica, el primer paso es comunicarte con el consultorio para recibir orientación.',
    ],
    topics: ['Salud ginecológica', 'Salud reproductiva', 'Etapas de la vida'],
    note: 'Información general. Consulta con el consultorio los servicios específicos disponibles.',
  },
];

export function Specialties() {
  return (
    <section id="especialidades" className="section section--soft specialties" aria-labelledby="specialties-title">
      <div className="container">
        <header className="specialties__head">
          <div className="section-head">
            <p className="eyebrow reveal">Especialidades</p>
            <h2 id="specialties-title" className="h2 reveal">
              Dos áreas de atención, <em>un mismo cuidado.</em>
            </h2>
          </div>
          <p className="lead specialties__intro reveal">
            Conoce de forma sencilla en qué consiste cada especialidad del {SITE.tradeName}.
          </p>
        </header>

        <div className="specialties__list">
          {SPECIALTIES.map((s, i) => (
            <article
              key={s.id}
              id={s.id}
              className={`specialty specialty--${s.tone} ${i % 2 ? 'specialty--reverse' : ''}`}
              aria-labelledby={`${s.id}-title`}
            >
              <div className="specialty__media reveal">
                <Photo photo={s.photo} tone={s.tone} className="specialty__photo" sizes="(max-width: 900px) 92vw, 48vw" />
                <span className="specialty__index" aria-hidden="true">
                  {s.index}
                </span>
              </div>

              <div className="specialty__body">
                <p className="specialty__kicker reveal">{s.kicker}</p>
                <h3 id={`${s.id}-title`} className="specialty__title reveal">
                  {s.title}
                </h3>
                {s.body.map((p, j) => (
                  <p key={j} className="specialty__text reveal">
                    {p}
                  </p>
                ))}

                <div className="specialty__topics reveal">
                  <ul aria-label={`Conceptos relacionados con ${s.title.toLowerCase()}`}>
                    {s.topics.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <p className="specialty__note">{s.note}</p>
                </div>

                <div className="specialty__actions reveal">
                  <a
                    className="btn"
                    href={whatsappUrl(
                      `Hola, quisiera obtener información para solicitar una cita en ${s.title} con el ${SITE.tradeName}. ¿Podrían indicarme los horarios disponibles y el procedimiento para agendar?`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsApp />
                    Solicitar información
                  </a>
                  <a className="text-link" href="#preguntas">
                    Preguntas frecuentes <ArrowRight />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
