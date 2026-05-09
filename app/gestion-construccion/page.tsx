import type { Metadata } from 'next';
import { Ruler, HardHat, Building2 } from 'lucide-react';
import ServiceHero from '@/components/sections/ServiceHero';
import ComparisonSection from '@/components/sections/ComparisonSection';
import ServiceProcess from '@/components/sections/ServiceProcess';
import ServiceFaqs from '@/components/sections/ServiceFaqs';

export const metadata: Metadata = {
    title: 'Gestión de Construcción y Obra',
    description:
        'Optimizamos cada etapa del proceso constructivo en Guadalajara. Desde la planeación hasta la entrega final, garantizamos eficiencia, calidad y control de costos.',
    alternates: {
        canonical: 'https://sgcities.com/gestion-construccion',
    },
};

const processSteps = [
    {
        title: 'Planeación Técnica',
        text: 'Definimos el alcance, presupuestos detallados y cronogramas realistas para evitar sorpresas.',
        icon: 'Ruler' as const,
    },
    {
        title: 'Ejecución y Control',
        text: 'Supervisión constante en sitio para garantizar que la calidad y los tiempos se cumplan rigurosamente.',
        icon: 'HardHat' as const,
    },
    {
        title: 'Entrega y Garantía',
        text: 'Cierre administrativo y técnico total, asegurando que tu proyecto esté listo para operar o vender.',
        icon: 'Building2' as const,
    }
];

const faqs = [
    {
        question: '¿Gestionan obras desde cero?',
        answer: 'Sí, podemos entrar desde la fase de anteproyecto o sumarnos cuando la obra ya está en curso para rescatar tiempos y presupuestos.'
    },
    {
        question: '¿Cómo controlan los sobrecostos?',
        answer: 'Utilizamos metodologías de control de obra que permiten identificar desviaciones en tiempo real y aplicar correctivos antes de que afecten el presupuesto final.'
    },
    {
        question: '¿Trabajan en proyectos residenciales?',
        answer: 'Gestionamos desde desarrollos residenciales verticales hasta naves industriales y complejos de usos mixtos.'
    }
];

export default function GestionConstruccionPage() {
    return (
        <main className="overflow-x-hidden">
            <ServiceHero 
                title="Gestión de Construcción con Certeza"
                category="Ejecución & Obra"
                description="Garantizamos que tu proyecto se construya en tiempo, forma y presupuesto, eliminando el caos administrativo de la obra civil."
                imageUrl="/images/gestion.jpg"
                benefits={['Control de Costos', 'Supervisión 24/7', 'Gestión de Proveedores']}
            />

            <ComparisonSection 
                serviceName="Gestión de Construcción"
                risks={[
                    'Sobrecostos inesperados por mala planeación inicial.',
                    'Retrasos críticos que afectan la rentabilidad del proyecto.',
                    'Baja calidad en acabados y materiales no supervisados.',
                    'Problemas legales y laborales con contratistas.'
                ]}
                solutions={[
                    'Presupuestos base detallados y blindados.',
                    'Cronogramas críticos con penalizaciones a proveedores.',
                    'Control de calidad riguroso en cada etapa de obra.',
                    'Gestión administrativa integral de contratos y pagos.'
                ]}
            />

            <ServiceProcess 
                badge="Metodología de Obra"
                title="Control total de principio a fin"
                subtitle="Nuestra gestión elimina el estrés de la construcción, permitiéndote enfocarte en tu negocio."
                steps={processSteps}
            />

            <ServiceFaqs 
                title="Dudas sobre la Gestión"
                faqs={faqs}
                formProps={{
                    formName: "construction-page-contact",
                    titleText: "Inicia tu Obra",
                    subtitleText: "Solicita un diagnóstico de tu proyecto actual y recibe una propuesta de gestión integral.",
                    buttonText: "Solicitar Diagnóstico",
                    defaultProjectType: "gestion-construccion",
                    reinforcementText: "Gestión integral de principio a fin."
                }}
            />
        </main>
    );
}
