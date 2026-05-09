import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'plus.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'i.pravatar.cc',
            },
        ],
    },
    // Uncomment if you need static export (not compatible with API routes)
    // output: 'export',
};

export default nextConfig;
