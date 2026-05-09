import type { Metadata } from 'next';
import { Scale, Shield, Gavel } from 'lucide-react';
import ServiceHero from '@/components/sections/ServiceHero';
import ComparisonSection from '@/components/sections/ComparisonSection';
import ServiceProcess from '@/components/sections/ServiceProcess';
import ServiceFaqs from '@/components/sections/ServiceFaqs';

export const metadata: Metadata = {
    title: 'Derecho Administrativo y Urbano',
    description:
        'Defensa y gestión legal especializada en el sector inmobiliario de Guadalajara. Blindaje jurídico para desarrollos, regularización de suelo y trámites administrativos.',
    alternates: {
        canonical: 'https://sgcities.com/derecho-administrativo',
    },
};

const processSteps = [
    {
        title: 'Auditoría Legal',
        text: 'Revisión exhaustiva del estado jurídico de tus activos para identificar posibles riesgos administrativos.',
        icon: 'Scale' as const,
    },
    {
        title: 'Estrategia de Blindaje',
        text: 'Diseño e implementación de mecanismos legales para proteger tu inversión ante actos de autoridad.',
        icon: 'Shield' as const,
    },
    {
        title: 'Gestión y Defensa',
        text: 'Representación directa en litigios administrativos y regularización de trámites ante dependencias.',
        icon: 'Gavel' as const,
    }
];

const faqs = [
    {
        question: '¿Qué tipo de trámites gestionan?',
        answer: 'Desde cambios de uso de suelo y regularización de construcciones hasta defensa ante clausuras injustificadas.'
    },
    {
        question: '¿Tienen experiencia en litigio?',
        answer: 'Sí, contamos con un área especializada en juicio de nulidad y amparo administrativo enfocado en el sector inmobiliario.'
    },
    {
        question: '¿Pueden regularizar una obra ya iniciada?',
        answer: 'Sí, analizamos el estado de la obra y trazamos una ruta jurídica para su regularización y obtención de licencias pendientes.'
    }
];

export default function DerechoAdministrativoPage() {
    return (
        <main className="overflow-x-hidden">
            <ServiceHero 
                title="Derecho Administrativo Inmobiliario"
                category="Legal & Cumplimiento"
                description="Blindamos tu inversión ante la complejidad administrativa. Certeza jurídica absoluta en cada fase de tu desarrollo."
                imageUrl="/images/admin.jpg"
                benefits={['Defensa Legal', 'Gestión de Suelo', 'Blindaje Jurídico']}
            />

            <ComparisonSection 
                serviceName="Derecho Administrativo"
                risks={[
                    'Clausuras de obra por falta de cumplimiento normativo.',
                    'Pérdida de aprovechamiento de suelo por mala interpretación legal.',
                    'Multas administrativas excesivas e injustificadas.',
                    'Indefensión legal ante cambios en planes parciales.'
                ]}
                solutions={[
                    'Estrategia de defensa preventiva ante inspecciones.',
                    'Optimización jurídica del máximo aprovechamiento de suelo.',
                    'Impugnación efectiva de multas y actos de autoridad.',
                    'Blindaje legal permanente ante cambios normativos.'
                ]}
            />

            <ServiceProcess 
                badge="Estrategia Jurídica"
                title="Certeza legal para tu capital"
                subtitle="Combinamos el rigor jurídico con la visión de negocio para proteger tus activos inmobiliarios."
                steps={processSteps}
            />

            <ServiceFaqs 
                title="Consultas Jurídicas"
                faqs={faqs}
                formProps={{
                    formName: "legal-page-contact",
                    titleText: "Blindaje Legal",
                    subtitleText: "Describe tu situación jurídica y un abogado especialista en derecho administrativo te contactará.",
                    buttonText: "Solicitar Asesoría Jurídica",
                    defaultProjectType: "derecho-administrativo",
                    reinforcementText: "Expertos en normativa administrativa."
                }}
            />
        </main>
    );
}
