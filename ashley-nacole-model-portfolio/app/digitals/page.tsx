import type { Metadata } from 'next';
import { DigitalsGallery } from '@/components/DigitalsGallery';
import { ModelStats } from '@/components/ModelStats';
import { digitalImages, modelData } from '@/data/modelData';

export const metadata: Metadata = {
  title: modelData.seo.digitalsTitle,
  description: `Current unretouched digitals and measurements for ${modelData.name}.`,
  openGraph: {
    title: modelData.seo.digitalsTitle,
    description: `Current unretouched digitals and measurements for ${modelData.name}.`,
    images: [{ url: modelData.seo.ogImage, alt: `${modelData.name} current digitals` }],
  },
};

export default function DigitalsPage() {
  return (
    <div className="page-shell digitals-page">
      <header className="page-heading section-shell">
        <p className="eyebrow">Current • Unretouched</p>
        <h1>Current Digitals</h1>
        <p>{modelData.name}</p>
      </header>
      <ModelStats compact />
      <section className="section-shell digitals-gallery-section" aria-label="Current unretouched digitals">
        <DigitalsGallery images={digitalImages} />
      </section>
      <section className="section-shell" aria-labelledby="comp-card-title" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>
        <p className="eyebrow">Model Materials</p>
        <h2 id="comp-card-title">Comp Card</h2>
        <p style={{ maxWidth: '36rem', marginBottom: '1.25rem' }}>
          Current comp card for agency, casting, and booking reference.
        </p>
        <a
          className="text-link"
          href="/images/comp-card/ashley-nacole-comp-card.svg"
          target="_blank"
          rel="noreferrer"
        >
          Open Comp Card ↗
        </a>
        <a
          href="/images/comp-card/ashley-nacole-comp-card.svg"
          target="_blank"
          rel="noreferrer"
          aria-label="Open Ashley Nacole comp card"
          style={{ display: 'block', width: 'min(100%, 680px)', marginTop: '2rem' }}
        >
          <img
            src="/images/comp-card/ashley-nacole-comp-card.svg"
            alt="Ashley Nacole model comp card with four denim portraits, measurements, Neal Hamil Agency representation, and booking email"
            style={{ display: 'block', width: '100%', height: 'auto' }}
          />
        </a>
      </section>
    </div>
  );
}
