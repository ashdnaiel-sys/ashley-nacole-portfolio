import type { MetadataRoute } from 'next';
import { modelData } from '@/data/modelData';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: modelData.siteUrl, changeFrequency: 'monthly', priority: 1 },
    { url: `${modelData.siteUrl}/portfolio`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${modelData.siteUrl}/digitals`, changeFrequency: 'monthly', priority: 0.9 },
  ];
}
