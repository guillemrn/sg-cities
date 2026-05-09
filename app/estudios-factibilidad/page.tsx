import type { Metadata } from 'next';
import { FileSearch, MapPin, ClipboardCheck } from 'lucide-react';
import ServiceHero from '@/components/sections/ServiceHero';
import ComparisonSection from '@/components/sections/ComparisonSection';
import ServiceProcess from '@/components/sections/ServiceProcess';
import ServiceFaqs from '@/components/sections/ServiceFaqs';

export const metadata: Metadata = {
    title: 'Estudios de Impacto y Factibilidad',
    description:
        'Asegura la viabilidad de tu desarrollo con estudios integrales en Guadalajara. Factibilidad técnica, impacto urbano y ambiental con respaldo experto.',
    alternates: {
        canonical: 'https://sgcities.com/estudios-factibilidad',
    },
};

const processSteps = [
    {
        title: 'Diagnóstico Inicial',
        text: 'Revisión rápida de la normativa vigente y posibles restricciones técnicas o ambientales.',
        icon: 'FileSearch' as const,
    },
    {
        title: 'Levantamiento Técnico',
        text: 'Gestión de estudios especializados en sitio y validación ante dependencias oficiales.',
        icon: 'MapPin' as const,
    },
    {
        title: 'Dictamen Final',
        text: 'Entrega de documento con validez oficial que asegura la viabilidad de tu proyecto.',
        icon: 'ClipboardCheck' as const,
    }
];

const faqs = [
    {
        question: '¿Qué es un estudio de impacto urbano?',
        answer: 'Es un análisis técnico que evalúa cómo tu proyecto afectará la infraestructura, servicios y movilidad de la zona, proponiendo medidas de mitigación.'
    },
    {
        question: '¿Necesito factibilidad antes de comprar?',
        answer: 'Altamente recomendable. Un estudio de factibilidad preliminar puede ahorrarte millones al identificar restricciones que impidan el desarrollo planeado.'
    },
    {
        question: '¿Gestionan el CUS y el COS?',
        answer: 'Sí, analizamos y gestionamos el aprovechamiento máximo de superficie de desplante y construcción según el plan parcial vigente.'
    }
];

export default function EstudiosFactibilidadPage() {
    return (
        <main className="overflow-x-hidden">
            <ServiceHero 
                title="Estudios de Impacto y Factibilidad"
                category="Viabilidad Técnica"
                description="Aseguramos que tu proyecto sea viable desde antes de colocar la primera piedra, gestionando todos los dictámenes técnicos necesarios."
                imageUrl="/images/urban-map.jpg"
                benefits={['Cumplimiento Legal', 'Mitigación de Riesgos', 'Gestión de Dictámenes']}
            />

            <ComparisonSection 
                serviceName="Estudios de Factibilidad"
                risks={[
                    'Compra de terrenos donde no se puede construir lo planeado.',
                    'Multas millonarias por falta de estudios de impacto ambiental.',
                    'Rechazo de licencias por incompatibilidad de uso de suelo.',
                    'Sobrecostos por obras de mitigación no previstas.'
                ]}
                solutions={[
                    'Análisis normativo preventivo de alta precisión.',
                    'Dictámenes con validez ante dependencias municipales.',
                    'Optimización de CUS y COS para máximo aprovechamiento.',
                    'Estrategia de mitigación eficiente y de bajo costo.'
                ]}
            />

            <ServiceProcess 
                badge="Certidumbre Técnica"
                title="Viabilidad garantizada por expertos"
                subtitle="Nuestra metodología reduce los tiempos de aprobación y asegura la compatibilidad de tu proyecto."
                steps={processSteps}
            />

            <ServiceFaqs 
                title="Consultas sobre Factibilidad"
                faqs={faqs}
                formProps={{
                    formName: "feasibility-page-contact",
                    titleText: "Asegura tu Proyecto",
                    subtitleText: "Cuéntanos la ubicación y tipo de desarrollo para realizar un pre-diagnóstico de factibilidad.",
                    buttonText: "Solicitar Dictamen",
                    defaultProjectType: "estudios-factibilidad",
                    reinforcementText: "Expertos en cumplimiento normativo."
                }}
            />
        </main>
    );
}
