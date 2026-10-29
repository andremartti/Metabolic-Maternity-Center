import { useEffect } from 'react';

/**
 * Aplica la clase `is-visible` a los elementos `.reveal` cuando entran en pantalla.
 * Se vuelve a ejecutar al cambiar de página (`key`). Con movimiento reducido
 * o sin IntersectionObserver, todo se muestra de inmediato.
 */
export function useReveal(key: string) {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)'));
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced || !('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.1 },
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);
}
