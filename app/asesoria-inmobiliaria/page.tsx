import type { Metadata } from 'next';
import { Target, Search, Zap } from 'lucide-react';
import ServiceHero from '@/components/sections/ServiceHero';
import ComparisonSection from '@/components/sections/ComparisonSection';
import ServiceProcess from '@/components/sections/ServiceProcess';
import ServiceFaqs from '@/components/sections/ServiceFaqs';

export const metadata: Metadata = {
    title: 'Asesoría Inmobiliaria Estratégica',
    description:
        'En SG Cities ofrecemos asesoría inmobiliaria experta para maximizar el rendimiento de tu portafolio. Identificamos activos de alto potencial y minimizamos tu riesgo.',
    alternates: {
        canonical: 'https://sgcities.com/asesoria-inmobiliaria',
    },
};

const processSteps = [
    {
        title: 'Análisis de Perfil',
        text: 'Entendemos tus objetivos de inversión, tolerancia al riesgo y horizonte temporal para trazar la estrategia ideal.',
        icon: 'Target' as const,
    },
    {
        title: 'Filtrado de Activos',
        text: 'Escaneamos el mercado bajo criterios rigurosos de plusvalía, uso de suelo y factibilidad técnica.',
        icon: 'Search' as const,
    },
    {
        title: 'Cierre Estratégico',
        text: 'Ejecutamos el due diligence legal y negociamos las mejores condiciones para asegurar tu rentabilidad.',
        icon: 'Zap' as const,
    }
];

const faqs = [
    {
        question: '¿Qué tipo de propiedades analizan?',
        answer: 'Nos especializamos en terrenos para desarrollo, edificios comerciales y activos residenciales de alta gama con potencial de reconversión.'
    },
    {
        question: '¿Cómo garantizan la seguridad de la inversión?',
        answer: 'A través de un dictamen técnico-legal propio que valida desde la propiedad registral hasta las factibilidades de servicios y normativa urbana.'
    },
    {
        question: '¿Cobran comisión por venta?',
        answer: 'Nuestro modelo es de consultoría estratégica. Nos alineamos con tus intereses como comprador/inversionista, no con el vendedor.'
    }
];

export default function AsesoriaInmobiliariaPage() {
    return (
        <main className="overflow-x-hidden">
            <ServiceHero 
                title="Asesoría Inmobiliaria Estratégica"
                category="Estrategia & Inversión"
                description="Identificamos y analizamos las mejores oportunidades del mercado para que tu capital trabaje con máxima seguridad y rendimiento."
                imageUrl="/images/compra.jpg"
                benefits={['Análisis de ROI', 'Filtro de Riesgos', 'Gestión de Compra']}
            />

            <ComparisonSection 
                serviceName="Asesoría Inmobiliaria"
                risks={[
                    'Compra de predios con gravámenes ocultos o problemas legales.',
                    'Inversión en zonas con bajo potencial de plusvalía.',
                    'Falta de claridad en el uso de suelo permitido.',
                    'Negociaciones desfavorables por falta de data de mercado.'
                ]}
                solutions={[
                    'Debida diligencia legal y técnica de cada propiedad.',
                    'Selección basada en algoritmos de crecimiento urbano.',
                    'Certidumbre total sobre el aprovechamiento del suelo.',
                    'Representación experta para el mejor cierre comercial.'
                ]}
            />

            <ServiceProcess 
                badge="Metodología"
                title="Tu ruta hacia una inversión segura"
                subtitle="Un proceso meticuloso diseñado para eliminar la incertidumbre del mercado inmobiliario."
                steps={processSteps}
            />

            <ServiceFaqs 
                title="Preguntas frecuentes"
                faqs={faqs}
                formProps={{
                    formName: "advisory-page-contact",
                    titleText: "Solicita tu Asesoría",
                    subtitleText: "Cuéntanos sobre tus objetivos de inversión y un consultor senior te contactará personalmente.",
                    buttonText: "Agendar Consultoría Gratuita",
                    defaultProjectType: "asesoria-inmobiliaria",
                    reinforcementText: "Expertos en inversión estratégica."
                }}
            />
        </main>
    );
}
