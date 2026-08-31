import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/ashdnaiel-sys/ashley-nacole-portfolio/main/ashley-nacole-model-portfolio/public/images/**',
      },
    ],
  },
};

export default nextConfig;
