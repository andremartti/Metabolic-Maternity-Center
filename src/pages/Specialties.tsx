import { PageIntro } from '../components/PageIntro';
import { ArrowRight } from '../components/Icons';
import { Photo } from '../components/Photo';
import { PHOTOS, type PhotoAsset } from '../content/images';
import { ROUTES } from '../content/site';
import { Link } from '../router';
import './Specialties.css';

type Specialty = {
  id: string;
  index: string;
  title: string;
  summary: string;
  photo: PhotoAsset;
  tone: 'blue' | 'orange';
  topics: string[];
};

const SPECIALTIES: Specialty[] = [
  {
    id: 'endocrinologia',
    index: '01',
    title: 'Endocrinología',
    summary: 'Estudia las hormonas y las glándulas que las producen, como la tiroides, y su papel en el equilibrio del organismo.',
    photo: PHOTOS.endocrinology,
    tone: 'blue',
    topics: ['Sistema endocrino', 'Tiroides', 'Equilibrio hormonal', 'Metabolismo'],
  },
  {
    id: 'ginecologia',
    index: '02',
    title: 'Ginecología',
    summary: 'Se dedica a la salud ginecológica y reproductiva de la mujer en las distintas etapas de su vida.',
    photo: PHOTOS.gynecology,
    tone: 'orange',
    topics: ['Salud ginecológica', 'Salud reproductiva', 'Etapas de la vida'],
  },
];

export function Specialties() {
  return (
    <>
      <PageIntro
        eyebrow="Especialidades"
        title={
          <>
            Dos áreas, <em>un mismo cuidado.</em>
          </>
        }
        lead="Conoce de forma breve cada especialidad del centro."
      />

      <section className="specialties" aria-label="Especialidades del centro">
        <div className="container specialties__list">
          {SPECIALTIES.map((s, i) => (
            <article
              key={s.id}
              id={s.id}
              className={`spec spec--${s.tone} ${i % 2 ? 'spec--reverse' : ''}`}
              aria-labelledby={`${s.id}-title`}
            >
              <div className="spec__media reveal">
                <Photo photo={s.photo} tone={s.tone} className="spec__photo" sizes="(max-width: 900px) 92vw, 50vw" />
              </div>
              <div className="spec__body reveal">
                <span className="spec__index">{s.index}</span>
                <h2 id={`${s.id}-title`} className="spec__title">
                  {s.title}
                </h2>
                <p className="spec__summary">{s.summary}</p>
                <ul className="spec__topics" aria-label={`Conceptos de ${s.title.toLowerCase()}`}>
                  {s.topics.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <Link to={ROUTES.request} className="text-link">
                  Solicitar información <ArrowRight />
                </Link>
              </div>
            </article>
          ))}
          <p className="specialties__note reveal">
            Información educativa general. Consulta con el consultorio la atención disponible en cada especialidad.
          </p>
        </div>
      </section>
    </>
  );
}
