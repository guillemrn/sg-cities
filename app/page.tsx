import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import WhySGCities from '@/components/sections/WhySGCities';
import PartnersCarousel from '@/components/sections/PartnersCarousel';
import Solutions from '@/components/sections/Solutions';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
    title: 'SG Cities: Expertos en Derecho Urbano, Proyectos Inmobiliarios y Factibilidad',
    description:
        'Asesoría especializada en materia inmobiliaria, administrativa - legal, proyecto urbano, arquitectónico, edificación, factibilidades técnicas, evaluación de impactos urbanos y ambientales.',
    alternates: {
        canonical: 'https://sgcities.com/',
    },
};

export default function Home() {
    return (
        <main>
            <Hero />
            <WhySGCities />
            <PartnersCarousel />
            <Solutions />
            <CTASection />
        </main>
    );
}
