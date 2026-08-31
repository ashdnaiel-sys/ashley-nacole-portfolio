import Image from 'next/image';
import type { PortfolioImage as PortfolioImageType } from '@/data/modelData';
import { ImagePlaceholder } from './ImagePlaceholder';

export function PortfolioImage({ image, className = '', priority = false }: { image: PortfolioImageType; className?: string; priority?: boolean }) {
  if (!image.src) {
    return <ImagePlaceholder label={image.alt} orientation={image.orientation} className={className} />;
  }

  if (!image.width || !image.height) {
    return (
      <div className={`portfolio-image-frame ${className}`}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          preload={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: 'cover', objectPosition: image.focalPoint ?? '50% 50%' }}
        />
      </div>
    );
  }

  return (
    <Image
      className={`portfolio-native-image ${className}`}
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      preload={priority}
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  );
}
