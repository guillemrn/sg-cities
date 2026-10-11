'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, FolderKanban } from 'lucide-react';

const solutions = [
    {
        title: 'Asesoría Inmobiliaria',
        text: 'Identificamos la propiedad ideal evaluando ubicación, precio, potencial urbanístico y proyección de plusvalía real.',
        link: '/asesoria-inmobiliaria',
        portfolioAnchor: '#portfolio',
        imageUrl: '/images/compra.jpg',
        imageAlt: 'Asesoría inmobiliaria profesional para inversionistas en México',
        category: 'Estrategia & Suelo',
        targetSector: 'Inversionistas & Desarrolladores',
    },
    {
        title: 'Gestión de Construcción',
        text: 'Supervisión en sitio, control de calidad y auditoría de estimaciones en cada etapa del proceso constructivo de obra civil.',
        link: '/gestion-construccion',
        portfolioAnchor: '#portfolio',
        imageUrl: '/images/gestion.jpg',
        imageAlt: 'Gestión y supervisión de proyectos de construcción y obra civil',
        category: 'Ejecución & Obra',
        targetSector: 'Empresas Urbanizadoras',
    },
    {
        title: 'Estudios de Mercado',
        text: 'Análisis cuantitativo de tendencias, oferta competitiva y demanda calificada para respaldar decisiones de inversión.',
        link: '/estudios-mercado',
        portfolioAnchor: '#portfolio',
        imageUrl: '/images/estudios.jpg',
        imageAlt: 'Análisis de mercado inmobiliario y estudios de demanda en México',
        category: 'Inteligencia Territorial',
        targetSector: 'Desarrolladores & Fondos',
    },
    {
        title: 'Impacto & Factibilidad',
        text: 'Estudios de impacto urbano, ambiental, movilidad y factibilidades técnicas integrales para infraestructura pública y privada.',
        link: '/estudios-factibilidad',
        portfolioAnchor: '#portfolio',
        imageUrl: '/images/urban-map.jpg',
        imageAlt: 'Estudios de impacto urbano, movilidad y factibilidad técnica',
        category: 'Viabilidad & Movilidad',
        targetSector: 'Colegios & Gobiernos Locales',
    },
    {
        title: 'Derecho Administrativo y Urbano',
        text: 'Soluciones legales a problemas administrativos, defensa normativa y optimización en licencias y aprovechamiento del suelo.',
        link: '/derecho-administrativo',
        portfolioAnchor: '#portfolio',
        imageUrl: '/images/admin.jpg',
        imageAlt: 'Abogados especialistas en derecho administrativo y urbano',
        category: 'Marco Jurídico',
        targetSector: 'Desarrolladores & Municipios',
    },
];

export default function Solutions() {
    return (
        <section id="solutions" className="bg-[#f8fafb] py-24 md:py-32 border-t border-black/5">
            <div className="section-container !py-0">
                <div className="max-w-3xl mb-16">
                    <span className="inline-block px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-dark font-bold text-xs uppercase tracking-widest mb-4">
                        Servicios y Especialidades
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-text leading-tight mb-6">
                        Soluciones técnicas y legales para{' '}
                        <span className="italic text-primary font-normal">el desarrollo de ciudades</span>
                    </h2>
                    <p className="text-base sm:text-lg text-text/75 leading-relaxed">
                        Mantenemos un portafolio de servicios integral que cubre desde la planeación y viabilidad jurídica hasta la supervisión y entrega final en obra.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, duration: 0.4 }}
                            className="group flex flex-col justify-between relative h-[520px] overflow-hidden rounded-3xl bg-text shadow-premium transition-all hover:shadow-premium-hover"
                        >
                            {/* Background Image with Zoom */}
                            <Image
                                src={solution.imageUrl}
                                alt={solution.imageAlt}
                                fill
                                className="object-cover opacity-50 transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Gradient Overlay for high-contrast legibility */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20" />

                            {/* Top Sector Pill */}
                            <div className="relative z-10 p-8 pb-0 flex items-center justify-between">
                                <span className="inline-block px-3 py-1 rounded-full bg-white/15 border border-white/20 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider">
                                    {solution.category}
                                </span>
                                <span className="text-[10px] text-white/60 font-semibold uppercase tracking-wider">
                                    {solution.targetSector}
                                </span>
                            </div>

                            {/* Bottom Content & Dual CTAs */}
                            <div className="relative z-10 p-8 pt-0 flex flex-col justify-end">
                                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3 group-hover:text-primary-light transition-colors leading-tight">
                                    {solution.title}
                                </h3>

                                <p className="text-white/75 text-sm md:text-base mb-6 line-clamp-3 leading-relaxed">
                                    {solution.text}
                                </p>

                                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
                                    <Link
                                        href={solution.link}
                                        className="flex-1 py-3 px-4 rounded-xl bg-primary text-white font-bold text-xs uppercase tracking-wider hover:bg-primary-dark transition-all flex items-center justify-center gap-2 group/btn"
                                    >
                                        <span>Conocer Servicio</span>
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                    </Link>

                                    <a
                                        href={solution.portfolioAnchor}
                                        className="py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 backdrop-blur-sm border border-white/15"
                                    >
                                        <FolderKanban className="w-4 h-4 text-secondary-light" />
                                        <span>Ver Casos</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
