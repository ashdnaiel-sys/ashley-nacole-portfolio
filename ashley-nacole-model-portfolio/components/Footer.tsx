import Link from 'next/link';
import { modelData } from '@/data/modelData';

export function Footer() {
  return (
    <footer className="site-footer">
      <p>{modelData.name} © 2026</p>
      <div>
        <a href={modelData.instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
        {modelData.email.includes('@') ? <a href={`mailto:${modelData.email}`}>Email</a> : <span>Email</span>}
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/digitals">Digitals</Link>
      </div>
    </footer>
  );
}
