import type { Metadata } from 'next';
import { LightboxGallery } from '@/components/LightboxGallery';
import { modelData, portfolioImages } from '@/data/modelData';

export const metadata: Metadata = {
  title: modelData.seo.portfolioTitle,
  description: `Complete modeling portfolio of ${modelData.name}.`,
  openGraph: {
    title: modelData.seo.portfolioTitle,
    description: `Complete modeling portfolio of ${modelData.name}.`,
    images: [{ url: modelData.seo.ogImage, alt: `${modelData.name} portfolio` }],
  },
};

export default function PortfolioPage() {
  return (
    <div className="page-shell">
      <header className="page-heading section-shell">
        <p className="eyebrow">Digital Modeling Book</p>
        <h1>Portfolio</h1>
        <p>{modelData.name}</p>
      </header>
      <section className="section-shell portfolio-page-gallery" aria-label="Complete portfolio gallery">
        <LightboxGallery images={portfolioImages} />
      </section>
    </div>
  );
}
