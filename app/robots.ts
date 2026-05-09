import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/gracias/',
        },
        sitemap: 'https://sgcities.com/sitemap.xml',
    };
}
