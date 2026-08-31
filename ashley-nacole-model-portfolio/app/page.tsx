import { Hero } from '@/components/Hero';
import { SelectedPortfolio } from '@/components/SelectedPortfolio';
import { ModelStats } from '@/components/ModelStats';
import { DigitalsPreview } from '@/components/DigitalsPreview';
import { LightboxGallery } from '@/components/LightboxGallery';
import { Movement } from '@/components/Movement';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { portfolioImages } from '@/data/modelData';

export default function HomePage() {
  const rangeImages = portfolioImages.filter((image) => image.visible && !image.featured && image.id !== 'hero');

  return (
    <>
      <Hero />
      <SelectedPortfolio />
      <ModelStats />
      <DigitalsPreview />
      <section className="range-section section-shell" aria-labelledby="range-title">
        <div className="section-intro-line">
          <div>
            <p className="eyebrow">Range / Additional Portfolio</p>
            <h2 id="range-title">Versatility</h2>
          </div>
          <p className="section-copy narrow-copy">Commercial beauty, lifestyle, fashion, e-commerce, skincare, hair, fitness, swim, and creative editorial.</p>
        </div>
        <LightboxGallery images={rangeImages} />
      </section>
      <Movement />
      <About />
      <Contact />
    </>
  );
}
