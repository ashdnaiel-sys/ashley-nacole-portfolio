'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import type { PortfolioImage } from '@/data/modelData';
import { resolvePublicAsset } from '@/lib/imageSrc';
import { ImagePlaceholder } from './ImagePlaceholder';

export function LightboxGallery({ images }: { images: PortfolioImage[] }) {
  const ordered = useMemo(() => images.filter((image) => image.visible).sort((a, b) => a.order - b.order), [images]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowRight') setActiveIndex((i) => i === null ? null : (i + 1) % ordered.length);
      if (event.key === 'ArrowLeft') setActiveIndex((i) => i === null ? null : (i - 1 + ordered.length) % ordered.length);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [activeIndex, ordered.length]);

  const active = activeIndex === null ? null : ordered[activeIndex];

  return (
    <>
      <div className="full-portfolio-grid">
        {ordered.map((image, index) => {
          const src = resolvePublicAsset(image.src);
          return (
            <button className={`gallery-button gallery-${image.orientation}`} type="button" key={image.id} onClick={() => setActiveIndex(index)} aria-label={`Open ${image.alt}`}>
              {src ? (
                image.width && image.height ? (
                  <Image src={src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 768px) 100vw, 50vw" />
                ) : (
                  <span className="gallery-fill-frame">
                    <Image src={src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover', objectPosition: image.focalPoint ?? '50% 50%' }} />
                  </span>
                )
              ) : <ImagePlaceholder label={image.alt} orientation={image.orientation} />}
            </button>
          );
        })}
      </div>

      {active ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Portfolio image viewer" onClick={() => setActiveIndex(null)}>
          <button className="lightbox-close" type="button" onClick={() => setActiveIndex(null)} aria-label="Close image viewer">×</button>
          <button className="lightbox-prev" type="button" onClick={(event) => { event.stopPropagation(); setActiveIndex((activeIndex! - 1 + ordered.length) % ordered.length); }} aria-label="Previous image">←</button>
          <div className="lightbox-media" onClick={(event) => event.stopPropagation()}>
            {active.src ? (
              <Image src={resolvePublicAsset(active.src)!} alt={active.alt} fill sizes="100vw" style={{ objectFit: 'contain' }} />
            ) : <ImagePlaceholder label={active.alt} orientation={active.orientation} />}
          </div>
          <button className="lightbox-next" type="button" onClick={(event) => { event.stopPropagation(); setActiveIndex((activeIndex! + 1) % ordered.length); }} aria-label="Next image">→</button>
        </div>
      ) : null}
    </>
  );
}
