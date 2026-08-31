import Link from 'next/link';
import { modelData } from '@/data/modelData';
import { siteOverrides } from '@/data/siteOverrides';

export function Footer() {
  return (
    <footer className="site-footer">
      <p>{modelData.name} © 2026</p>
      <div>
        <a href={modelData.instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
        <a href={`mailto:${siteOverrides.contactEmail}`}>Email</a>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/digitals">Digitals</Link>
      </div>
    </footer>
  );
}
