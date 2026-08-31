import Link from 'next/link';
import { portfolioImages } from '@/data/modelData';
import { PortfolioImage } from './PortfolioImage';

export function SelectedPortfolio() {
  const images = portfolioImages
    .filter((image) => image.visible && image.featured && image.id !== 'hero')
    .sort((a, b) => a.order - b.order)
    .slice(0, 8);

  return (
    <section className="selected-portfolio section-shell" id="portfolio-preview" aria-labelledby="selected-portfolio-title">
      <div className="section-intro-line">
        <h2 id="selected-portfolio-title">Selected Portfolio</h2>
        <Link className="text-link" href="/portfolio">View Full Portfolio →</Link>
      </div>
      <div className="editorial-grid">
        {images.map((image, index) => (
          <div key={image.id} className={`editorial-item editorial-item-${index + 1}`}>
            <PortfolioImage image={image} />
          </div>
        ))}
      </div>
    </section>
  );
}
