import { LINKS, SITE } from '../content/site';
import { MapPin } from './Icons';
import './MapCard.css';

export function MapCard() {
  return (
    <div className="map-card">
      <iframe
        src={LINKS.mapEmbed}
        title={`Mapa: ${SITE.location.place}, ${SITE.location.city}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <div className="map-card__body">
        <p className="map-card__place">
          <MapPin />
          <span>
            <strong>{SITE.location.place}</strong>
            {SITE.location.city}, {SITE.location.country}
          </span>
        </p>
        <div className="map-card__actions">
          <a className="btn btn--ghost btn--sm" href={LINKS.googleMaps} target="_blank" rel="noopener noreferrer">
            Google Maps
          </a>
          <a className="btn btn--ghost btn--sm" href={LINKS.waze} target="_blank" rel="noopener noreferrer">
            Waze
          </a>
        </div>
      </div>
    </div>
  );
}
