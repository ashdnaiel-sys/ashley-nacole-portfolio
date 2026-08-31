import Image from 'next/image';
import type { DigitalImage } from '@/data/modelData';
import { ImagePlaceholder } from './ImagePlaceholder';

export function DigitalsGallery({ images }: { images: DigitalImage[] }) {
  return (
    <div className="digitals-full-grid">
      {images.filter((image) => image.visible).sort((a, b) => a.order - b.order).map((image) => (
        <figure className="digital-item digital-full-item" key={image.id}>
          {image.src ? (
            image.width && image.height ? (
              <Image className="digital-native-image" src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 768px) 100vw, 33vw" />
            ) : (
              <div className="digital-fill-frame">
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'contain' }} />
              </div>
            )
          ) : <ImagePlaceholder label={image.label} orientation={image.orientation} />}
          <figcaption>{image.label}</figcaption>
        </figure>
      ))}
    </div>
  );
}
