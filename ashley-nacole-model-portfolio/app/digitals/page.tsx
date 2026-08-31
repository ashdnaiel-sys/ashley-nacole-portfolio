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
    </div>
  );
}
