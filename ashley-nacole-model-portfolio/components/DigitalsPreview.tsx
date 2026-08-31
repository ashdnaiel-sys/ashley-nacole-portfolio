import Link from 'next/link';
import { digitalImages } from '@/data/modelData';
import { ImagePlaceholder } from './ImagePlaceholder';

export function DigitalsPreview() {
  const images = digitalImages.filter((image) => image.visible).sort((a, b) => a.order - b.order).slice(0, 6);

  return (
    <section className="digitals-section section-shell" id="digitals-preview" aria-labelledby="digitals-title">
      <div className="section-intro-line align-end">
        <div>
          <p className="eyebrow">Current • Unretouched</p>
          <h2 id="digitals-title">Current Digitals</h2>
        </div>
        <Link className="text-link" href="/digitals">View All Digitals →</Link>
      </div>
      <div className="digitals-grid">
        {images.map((image) => (
          <figure className="digital-item" key={image.id}>
            <ImagePlaceholder label={image.label} orientation={image.orientation} />
            <figcaption>{image.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
