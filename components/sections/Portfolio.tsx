'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Building2,
    Bus,
    Landmark,
    FileText,
    Camera,
    Video,
    CheckCircle2,
    X,
    MessageCircle,
    ArrowRight
} from 'lucide-react';

type ProjectCategory = 'all' | 'movilidad' | 'obra' | 'gobierno';

interface Project {
    id: string;
    title: string;
    category: 'movilidad' | 'obra' | 'gobierno';
    categoryLabel: string;
    targetClient: string;
    summary: string;
    description: string;
    image: string;
    materials: Array<'Fotos' | 'Video' | 'PDF / Dictamen'>;
    scope: string[];
    isFeatured?: boolean;
}

const projectsData: Project[] = [
    {
        id: 'plan-movilidad-escolar',
        title: 'Plan Integral de Movilidad y Transporte Escolar',
        category: 'movilidad',
        categoryLabel: 'Planeación Urbana & Movilidad',
        targetClient: 'Instituciones Educativas & Colegios',
        summary: 'Diagnóstico de flujos de transporte escolar, pacificación de accesos viales y diseño de circuitos de descenso seguro con visión urbana.',
        description: 'Desarrollo de un modelo integral de movilidad escolar orientado a ordenar la circulación en horarios de ingreso y egreso, definir áreas de ascenso y descenso seguras para la comunidad estudiantil y articular la logística del transporte escolar con el entorno vial circundante.',
        image: '/images/urban-map.jpg',
        materials: ['Fotos', 'PDF / Dictamen', 'Video'],
        scope: [
            'Levantamiento de aforos vehiculares y peatonales',
            'Diseño de circuitos internos y paraderos protegidos',
            'Coordinación de normatividad con autoridades viales locales',
            'Manual operativo para transporte y padres de familia',
        ],
        isFeatured: true,
    },
    {
        id: 'supervision-obra-residencial',
        title: 'Gestión y Supervisión Técnica de Obra Civil',
        category: 'obra',
        categoryLabel: 'Obra & Construcción',
        targetClient: 'Empresas Urbanizadoras e Inversionistas',
        summary: 'Supervisión en sitio, control de calidad constructiva y cumplimiento del calendario de ejecución en desarrollo inmobiliario.',
        description: 'Acompañamiento técnico y administrativo continuo en obra. Auditoría de procesos constructivos, supervisión de subcontratistas y aseguramiento de apego al proyecto ejecutivo, especificaciones técnicas y estimaciones aprobadas.',
        image: '/images/gestion.jpg',
        materials: ['Fotos', 'PDF / Dictamen'],
        scope: [
            'Supervisión técnica permanente en campo',
            'Conciliación de números generadores y estimaciones',
            'Monitoreo de seguridad de contratistas',
            'Entrega-recepción y dictamen técnico final',
        ],
        isFeatured: true,
    },
    {
        id: 'factibilidad-infraestructura-publica',
        title: 'Estudios de Factibilidad y Modelos para Infraestructura Pública',
        category: 'gobierno',
        categoryLabel: 'Factibilidad & Gobiernos',
        targetClient: 'Gobiernos Locales y Organismos Públicos',
        summary: 'Factibilidad técnica, jurídica, ambiental y económica con modelos de financiamiento para proyectos de infraestructura.',
        description: 'Formulación integral de expedientes técnicos para proyectos de infraestructura pública urbana. Evaluación de impacto territorial, viabilidad legal en tenencia de la tierra y diseño de esquemas de viabilidad financiera institucional.',
        image: '/images/admin.jpg',
        materials: ['PDF / Dictamen', 'Fotos'],
        scope: [
            'Dictamen de compatibilidad con Planes de Desarrollo Urbano',
            'Evaluación de manifestación de impacto ambiental y vial',
            'Estructuración técnica para asignación de recursos',
            'Gestión y cabildeo ante dependencias normativas',
        ],
        isFeatured: true,
    },
    {
        id: 'estudio-mercado-poligono',
        title: 'Análisis de Demanda y Potencial Territorial',
        category: 'obra',
        categoryLabel: 'Obra & Construcción',
        targetClient: 'Inversionistas y Desarrolladores',
        summary: 'Identificación de vocación inmobiliaria, análisis de precios de mercado y viabilidad comercial del suelo.',
        description: 'Estudio cuantitativo y cualitativo de mercado inmobiliario enfocado en determinar el mejor uso del suelo, tipologías convenientes y ritmos de absorción con base en dinámicas territoriales comprobadas.',
        image: '/images/estudios.jpg',
        materials: ['PDF / Dictamen', 'Fotos'],
        scope: [
            'Censo de oferta competidora en radio de influencia',
            'Análisis socioeconómico y de demanda calificada',
            'Proyección financiera y parámetros de absorción',
        ],
    },
    {
        id: 'redisenyo-vial-institucional',
        title: 'Plan Maestro de Accesibilidad y Corredores Seguros',
        category: 'movilidad',
        categoryLabel: 'Planeación Urbana & Movilidad',
        targetClient: 'Instituciones y Campus Educativos',
        summary: 'Reconfiguración de entornos peatonales, cruces seguros y accesibilidad universal en equipamientos de alta afluencia.',
        description: 'Propuesta de reordenamiento del espacio público circundante a equipamientos institucionales. Se prioriza la seguridad peatonal, la señalética adecuada y la reducción de puntos de conflicto vial.',
        image: '/images/compra.jpg',
        materials: ['Fotos', 'Video', 'PDF / Dictamen'],
        scope: [
            'Auditoría de seguridad vial en entorno escolar e institucional',
            'Proyecto geométrico de adecuaciones y banquetas',
            'Señalética vertical y horizontal reglamentaria',
        ],
    },
    {
        id: 'dictamen-aprovechamiento-urbano',
        title: 'Regularización y Dictamen Técnico Administrativo',
        category: 'gobierno',
        categoryLabel: 'Factibilidad & Gobiernos',
        targetClient: 'Desarrolladores & Gobiernos Municipales',
        summary: 'Resolución de controversias normativas, coeficientes de uso de suelo (CUS/COS) e integración municipal.',
        description: 'Estrategia legal-administrativa especializada en materia de límites, usos de suelo y licencias urbanísticas, alineando cada expediente a los instrumentos legales y reglamentos vigentes.',
        image: '/images/cta-image.jpg',
        materials: ['PDF / Dictamen'],
        scope: [
            'Defensa y gestión administrativa especializada',
            'Alineación y rectificación de coeficientes urbanos',
            'Integración de expediente para visto bueno normativo',
        ],
    },
];

const categoryTabs = [
    { id: 'all', label: 'Todos los Proyectos' },
    { id: 'movilidad', label: 'Movilidad Urbana & Escolar' },
    { id: 'obra', label: 'Obra Civil & Construcción' },
    { id: 'gobierno', label: 'Factibilidad & Gobiernos' },
];

export default function Portfolio() {
    const [activeTab, setActiveTab] = useState<ProjectCategory>('all');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filteredProjects = activeTab === 'all'
        ? projectsData
        : projectsData.filter((p) => p.category === activeTab);

    return (
        <section id="portfolio" className="relative py-24 md:py-32 bg-[#f8fafb] border-t border-black/5">
            <div className="section-container !py-0">
                {/* Header & Purpose */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                    <div className="max-w-2xl">
                        <span className="inline-block px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-dark font-bold text-xs uppercase tracking-widest mb-4">
                            Evidencia en Campo y Trayectoria
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-text font-bold leading-tight mb-4">
                            Portafolio de proyectos y <span className="text-primary italic font-normal">casos de trabajo</span>
                        </h2>
                        <p className="text-base sm:text-lg text-text/75 leading-relaxed">
                            Conoce nuestras áreas de intervención directa en planeación urbana, planes de movilidad escolar, supervisión de obra civil y factibilidades técnico-legales para inversionistas, colegios y dependencias.
                        </p>
                    </div>

                    <div className="shrink-0">
                        <a
                            href="https://wa.me/521234567890?text=Hola%2C%20quisiera%20solicitar%20el%20dossier%20de%20proyectos%20y%20casos%20de%20SG%20Cities."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="secondary-button text-xs py-3 px-6 inline-flex items-center gap-2"
                        >
                            <FileText className="w-4 h-4 text-primary" />
                            <span>Solicitar Dossier de Proyectos</span>
                        </a>
                    </div>
                </div>

                {/* Filter Tabs */}
                <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
                    {categoryTabs.map((tab) => {
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as ProjectCategory)}
                                className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                                    isActive
                                        ? 'bg-primary text-white shadow-sm'
                                        : 'bg-white text-text/70 hover:text-text border border-black/5 hover:border-black/15'
                                }`}
                            >
                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.article
                                layout
                                initial={{ opacity: 0, scale: 0.96 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.96 }}
                                transition={{ duration: 0.3 }}
                                key={project.id}
                                className="group rounded-2xl bg-white border border-black/5 overflow-hidden shadow-sm hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    {/* Project Image */}
                                    <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                                        {/* Badges on Image */}
                                        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                                            <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-text uppercase tracking-wider">
                                                {project.categoryLabel}
                                            </span>
                                            {project.isFeatured && (
                                                <span className="px-2.5 py-0.5 rounded-full bg-secondary text-white text-[10px] font-bold uppercase tracking-wider">
                                                    Destacado
                                                </span>
                                            )}
                                        </div>

                                        {/* Material Tags */}
                                        <div className="absolute bottom-3 left-4 flex items-center gap-2">
                                            {project.materials.map((mat) => (
                                                <span
                                                    key={mat}
                                                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/50 backdrop-blur-sm text-[10px] text-white/90 font-medium"
                                                >
                                                    {mat === 'Fotos' && <Camera className="w-3 h-3 text-secondary-light" />}
                                                    {mat === 'Video' && <Video className="w-3 h-3 text-primary-light" />}
                                                    {mat === 'PDF / Dictamen' && <FileText className="w-3 h-3 text-amber-300" />}
                                                    {mat}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 md:p-7">
                                        <span className="text-[11px] font-bold uppercase tracking-wider text-primary-dark block mb-2">
                                            {project.targetClient}
                                        </span>
                                        <h3 className="text-xl font-bold font-display text-text leading-snug mb-3 group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-text/70 line-clamp-3 leading-relaxed mb-4">
                                            {project.summary}
                                        </p>
                                    </div>
                                </div>

                                {/* Footer Button */}
                                <div className="px-6 pb-6 md:px-7 md:pb-7">
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="w-full py-3 px-4 rounded-xl border border-primary/20 text-primary-dark font-bold text-xs uppercase tracking-wider hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
                                    >
                                        <span>Ver Alcance y Entregables</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Bottom Call to Action inside Portfolio */}
                <div className="mt-16 p-8 md:p-10 rounded-2xl bg-white border border-black/5 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h4 className="text-xl md:text-2xl font-bold font-display text-text mb-2">
                            ¿Tienes un proyecto en puerta para tu organización?
                        </h4>
                        <p className="text-sm text-text/70 max-w-2xl leading-relaxed">
                            Podemos revisar los requerimientos específicos de tu predio, institución o municipio y coordinar una sesión técnica inicial.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3 shrink-0">
                        <a
                            href="https://wa.me/521234567890?text=Hola%2C%20me%20gustar%C3%ADa%20consultar%20sobre%20un%20proyecto%20para%20mi%20organizaci%C3%B3n."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="premium-button text-xs py-3.5 px-6 inline-flex items-center gap-2"
                        >
                            <MessageCircle className="w-4 h-4" />
                            <span>Consultar por WhatsApp</span>
                        </a>
                        <a
                            href="#start-project"
                            className="secondary-button text-xs py-3.5 px-6"
                        >
                            Solicitar Formulario
                        </a>
                    </div>
                </div>
            </div>

            {/* Modal de Detalle de Proyecto */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 md:p-10">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.25 }}
                            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl z-10 p-6 sm:p-8 md:p-10"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-text/70 hover:text-text transition-colors cursor-pointer"
                                aria-label="Cerrar modal"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="flex items-center gap-2 mb-3">
                                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary-dark font-bold text-xs uppercase tracking-wider">
                                    {selectedProject.categoryLabel}
                                </span>
                                <span className="text-xs text-text/50 font-medium">
                                    {selectedProject.targetClient}
                                </span>
                            </div>

                            <h3 className="text-2xl sm:text-3xl font-display font-bold text-text mb-4 leading-snug">
                                {selectedProject.title}
                            </h3>

                            <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden mb-6 bg-gray-100">
                                <Image
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <p className="text-base text-text/80 leading-relaxed mb-6">
                                {selectedProject.description}
                            </p>

                            {/* Alcance de Intervención */}
                            <div className="mb-8">
                                <h4 className="text-sm font-bold uppercase tracking-wider text-text/60 mb-3">
                                    Alcance Técnico y Entregables
                                </h4>
                                <ul className="space-y-2.5">
                                    {selectedProject.scope.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-sm text-text/80">
                                            <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Modal CTAs */}
                            <div className="pt-6 border-t border-black/5 flex flex-wrap items-center justify-between gap-4">
                                <a
                                    href={`https://wa.me/521234567890?text=${encodeURIComponent(
                                        `Hola, me interesa conocer más detalles y cotizar un proyecto como: ${selectedProject.title}`
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="premium-button text-xs py-3.5 px-6 inline-flex items-center gap-2"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    <span>Consultar este caso por WhatsApp</span>
                                </a>

                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="text-xs font-bold text-text/60 hover:text-text transition-colors cursor-pointer"
                                >
                                    Cerrar Ficha
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
