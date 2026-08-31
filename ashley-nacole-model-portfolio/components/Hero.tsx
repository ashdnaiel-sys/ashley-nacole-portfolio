import Image from 'next/image';
import { modelData, portfolioImages } from '@/data/modelData';
import { ImagePlaceholder } from './ImagePlaceholder';

export function Hero() {
  const hero = portfolioImages.find((image) => image.id === 'hero') ?? portfolioImages[0];

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-media">
        {hero.src ? (
          <Image
            src={hero.src}
            alt={hero.alt}
            fill
            preload
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: hero.focalPoint ?? '50% 35%' }}
          />
        ) : (
          <ImagePlaceholder label="Replace with Ashley's strongest hero image" className="hero-placeholder" />
        )}
      </div>
      <div className="hero-copy">
        <p className="eyebrow">{modelData.role}</p>
        <h1 id="hero-title">{modelData.name}</h1>
        <p>{modelData.heroLine}</p>
      </div>
    </section>
  );
}
