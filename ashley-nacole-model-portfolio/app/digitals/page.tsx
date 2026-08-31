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
      <section
        className="section-shell"
        aria-labelledby="comp-card-title"
        style={{ paddingTop: '3rem', paddingBottom: '5rem' }}
      >
        <div
          style={{
            borderTop: '1px solid var(--line)',
            paddingTop: '2rem',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '2rem',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <p className="eyebrow">Model Materials</p>
            <h2
              id="comp-card-title"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 400,
                letterSpacing: '-.035em',
                lineHeight: 0.95,
                margin: '0 0 .85rem',
              }}
            >
              Comp Card
            </h2>
            <p style={{ maxWidth: '34rem', margin: 0 }}>
              Current comp card for agency, casting, and booking reference.
            </p>
          </div>
          <a
            className="button-text"
            href="/images/comp-card/ashley-nacole-comp-card.jpg"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Ashley Nacole comp card"
          >
            Open / Save Comp Card ↗
          </a>
        </div>
      </section>
    </div>
  );
}
