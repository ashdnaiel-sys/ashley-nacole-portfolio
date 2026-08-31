import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { modelData } from '@/data/modelData';

export const metadata: Metadata = {
  metadataBase: new URL(modelData.siteUrl),
  title: modelData.seo.title,
  description: modelData.seo.description,
  openGraph: {
    type: 'website',
    url: modelData.siteUrl,
    title: modelData.seo.title,
    description: modelData.seo.description,
    siteName: modelData.name,
    images: [{ url: modelData.seo.ogImage, alt: `${modelData.name} modeling portfolio` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: modelData.seo.title,
    description: modelData.seo.description,
    images: [modelData.seo.ogImage],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
  themeColor: '#f7f6f2',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
