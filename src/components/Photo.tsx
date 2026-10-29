import { useState } from 'react';
import type { PhotoAsset } from '../content/images';
import './Photo.css';

type Props = {
  photo: PhotoAsset;
  className?: string;
  /** Anchos para srcset (solo aplica a imágenes de Unsplash). */
  widths?: number[];
  sizes?: string;
  priority?: boolean;
  tone?: 'blue' | 'orange';
};

const isUnsplash = (src: string) => src.startsWith('https://images.unsplash.com/');

export function Photo({
  photo,
  className = '',
  widths = [640, 960, 1400],
  sizes = '(max-width: 900px) 100vw, 50vw',
  priority = false,
  tone = 'blue',
}: Props) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const srcSet = isUnsplash(photo.src)
    ? widths.map((w) => `${photo.src}&w=${w} ${w}w`).join(', ')
    : undefined;
  const src = isUnsplash(photo.src) ? `${photo.src}&w=${widths[1] ?? widths[0]}` : photo.src;

  return (
    <div className={`photo photo--${tone} ${loaded ? 'is-loaded' : ''} ${className}`}>
      <BrandArt tone={tone} />
      {!failed && (
        <img
          src={src}
          srcSet={srcSet}
          sizes={srcSet ? sizes : undefined}
          alt={photo.alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          // @ts-expect-error: atributo válido en navegadores modernos, aún sin tipos en React 18
          fetchpriority={priority ? 'high' : 'auto'}
          style={{ objectPosition: photo.focus }}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

/** Composición geométrica de respaldo con los colores de la marca. */
function BrandArt({ tone }: { tone: 'blue' | 'orange' }) {
  const main = tone === 'blue' ? 'var(--color-primary)' : 'var(--color-accent)';
  const soft = tone === 'blue' ? 'var(--color-primary-soft)' : 'var(--color-accent-soft)';
  const second = tone === 'blue' ? 'var(--color-accent)' : 'var(--color-primary)';
  return (
    <svg className="photo__art" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="400" height="500" fill={soft} />
      <circle cx="290" cy="150" r="175" fill="#fff" opacity="0.6" />
      <circle cx="290" cy="150" r="115" fill="none" stroke={main} strokeOpacity="0.35" strokeWidth="1.2" />
      <circle cx="290" cy="150" r="62" fill="none" stroke={main} strokeOpacity="0.28" strokeWidth="1.2" />
      <circle cx="92" cy="395" r="46" fill={second} opacity="0.9" />
      <path d="M0 470 C 120 400, 240 520, 400 430" fill="none" stroke={main} strokeOpacity="0.35" strokeWidth="1.2" />
    </svg>
  );
}
