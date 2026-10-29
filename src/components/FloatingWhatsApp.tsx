import { useEffect, useState } from 'react';
import { LINKS } from '../content/site';
import { WhatsApp } from './Icons';
import './FloatingWhatsApp.css';

/** Acceso permanente a WhatsApp una vez superado el hero (visible sobre todo en móvil). */
export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.75);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      className={`fab-wa ${visible ? 'is-visible' : ''}`}
      href={LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Solicitar una cita por WhatsApp"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
    >
      <WhatsApp />
      <span className="fab-wa__label">Solicitar una cita</span>
    </a>
  );
}
