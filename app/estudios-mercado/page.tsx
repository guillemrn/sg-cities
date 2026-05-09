import type { Metadata } from 'next';
import { LineChart, Target, PieChart } from 'lucide-react';
import ServiceHero from '@/components/sections/ServiceHero';
import ComparisonSection from '@/components/sections/ComparisonSection';
import ServiceProcess from '@/components/sections/ServiceProcess';
import ServiceFaqs from '@/components/sections/ServiceFaqs';
import MarketDeliverables from '@/components/sections/MarketDeliverables';

export const metadata: Metadata = {
    title: 'Estudios de Mercado Inmobiliario',
    description:
        'Inteligencia de datos para tus inversiones. Realizamos estudios de mercado profundos en Guadalajara para identificar demanda, precios competitivos y absorción.',
    alternates: {
        canonical: 'https://sgcities.com/estudios-mercado',
    },
};

const processSteps = [
    {
        title: 'Recolección de Data',
        text: 'Levantamiento de campo y análisis de fuentes oficiales para entender la oferta y demanda real.',
        icon: 'LineChart' as const,
    },
    {
        title: 'Análisis Competitivo',
        text: 'Evaluamos a tu competencia directa para encontrar brechas de mercado y ventajas competitivas.',
        icon: 'Target' as const,
    },
    {
        title: 'Recomendación Estratégica',
        text: 'Entregamos un roadmap claro con precios sugeridos, producto ideal y proyecciones de absorción.',
        icon: 'PieChart' as const,
    }
];

const faqs = [
    {
        question: '¿Qué alcancen tienen sus estudios?',
        answer: 'Desde análisis de zona para proyectos residenciales hasta estudios de vocación para grandes desarrollos de usos mixtos e industriales.'
    },
    {
        question: '¿De dónde obtienen la información?',
        answer: 'Combinamos big data inmobiliaria, registros públicos y mistery shopping presencial para validar la data real en calle.'
    },
    {
        question: '¿En cuánto tiempo entregan resultados?',
        answer: 'Dependiendo de la complejidad, entregamos reportes ejecutivos en un periodo de 10 a 20 días hábiles.'
    }
];

export default function EstudiosMercadoPage() {
    return (
        <main className="overflow-x-hidden">
            <ServiceHero 
                title="Inteligencia de Mercado Inmobiliario"
                category="Datos & Inteligencia"
                description="Convierte la incertidumbre en data accionable. Analizamos el mercado para asegurar que tu proyecto tenga el producto y precio correcto."
                imageUrl="/images/estudios.jpg"
                benefits={['Data en Tiempo Real', 'Análisis de Demanda', 'Proyección de Ventas']}
            />

            <MarketDeliverables />

            <ServiceProcess 
                badge="Metodología Data-Driven"
                title="Ciencia aplicada al suelo"
                subtitle="Combinamos tecnología y levantamiento de campo para darte la imagen más fiel de la realidad inmobiliaria."
                steps={processSteps}
            />

            <ServiceFaqs 
                title="Dudas sobre los Estudios"
                faqs={faqs}
                formProps={{
                    formName: "market-study-page-contact",
                    titleText: "Obtén Inteligencia",
                    subtitleText: "Solicita una propuesta de estudio personalizada para tu zona o proyecto.",
                    buttonText: "Solicitar Propuesta",
                    defaultProjectType: "estudios-mercado",
                    reinforcementText: "Data real para inversiones reales."
                }}
            />
        </main>
    );
}
