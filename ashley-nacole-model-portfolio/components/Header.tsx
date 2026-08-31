import Link from 'next/link';
import { modelData } from '@/data/modelData';

export function Header() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Ashley Nacole home">
        ASHLEY NACOLE
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/digitals">Digitals</Link>
        <Link href="/#stats">Stats</Link>
        <Link href="/#about">About</Link>
        <Link href="/#contact">Contact</Link>
      </nav>
      <a
        className="ig-link"
        href={modelData.instagramUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Ashley Nacole on Instagram"
      >
        IG ↗
      </a>
    </header>
  );
}
