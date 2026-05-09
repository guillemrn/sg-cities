import type { Metadata } from 'next';
import { Poppins, Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-poppins',
    display: 'swap',
});

const outfit = Outfit({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-outfit',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://sgcities.com'),
    title: {
        default: 'SG Cities: Expertos en Derecho Urbano y Estrategia Inmobiliaria en México',
        template: '%s | SG Cities',
    },
    description:
        'Consultoría líder en Derecho Urbano, Proyectos Inmobiliarios y Factibilidad Técnica en Guadalajara y todo México. Especialistas en impacto ambiental y evaluación de proyectos.',
    keywords: [
        'derecho urbano méxico',
        'proyectos inmobiliarios guadalajara',
        'factibilidad técnica proyectos',
        'impacto ambiental construcción',
        'asesoría inmobiliaria estratégica',
        'derecho administrativo inmobiliario',
        'SG Cities',
    ],
    openGraph: {
        type: 'website',
        locale: 'es_MX',
        url: 'https://sgcities.com/',
        siteName: 'SG Cities',
        title: 'SG Cities – Expertos en Derecho Urbano, Proyectos Inmobiliarios y Factibilidad',
        description:
            'Facilitamos la compra de bienes, la construcción y el análisis del mercado inmobiliario con un enfoque estratégico.',
        images: [
            {
                url: '/images/social-image.png',
                width: 1200,
                height: 630,
                alt: 'SG Cities',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'SG Cities – Expertos en Derecho Urbano, Proyectos Inmobiliarios y Factibilidad',
        description:
            'Facilitamos la compra de bienes, la construcción y el análisis del mercado inmobiliario con un enfoque estratégico.',
        images: ['/images/social-image.png'],
    },
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: '/images/isotipo sg-cities.png',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className={`${poppins.variable} ${outfit.variable}`}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'ProfessionalService',
                            name: 'SG Cities - Consultoría de Derecho Urbano e Inmobiliario',
                            image: 'https://sgcities.com/images/sg-cities-logo.svg',
                            '@id': 'https://sgcities.com',
                            url: 'https://sgcities.com',
                            telephone: '+523300000000', // Placeholder or real if known
                            address: {
                                '@type': 'PostalAddress',
                                streetAddress: 'Av. Américas', // Assuming GDL
                                addressLocality: 'Guadalajara',
                                addressRegion: 'Jalisco',
                                postalCode: '44600',
                                addressCountry: 'MX',
                            },
                            description:
                                'Firma líder en México especializada en Derecho Urbano, Proyectos Inmobiliarios, Factibilidad Técnica y Gestión Administrativa de alto impacto.',
                            priceRange: '$$$',
                            areaServed: ['Guadalajara', 'Zapopan', 'México'],
                            contactPoint: {
                                '@type': 'ContactPoint',
                                telephone: '+523300000000',
                                contactType: 'customer service',
                                email: 'enrique.delacruz@sgcities.com',
                            },
                        }),
                    }}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "rk3jfbm30q");
            `,
                    }}
                />
            </head>
            <body className={`${poppins.className} antialiased`}>
                <Header />
                {children}
                <Footer />
                <WhatsAppButton />
            </body>
        </html>
    );
}
