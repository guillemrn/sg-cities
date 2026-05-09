'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const solutions = [
    {
        title: 'Asesoría Inmobiliaria',
        text: 'Identificamos la propiedad ideal evaluando ubicación, precio y proyección de valor real.',
        link: '/asesoria-inmobiliaria',
        imageUrl: '/images/compra.jpg',
        imageAlt: 'Asesoría inmobiliaria profesional para inversores en Guadalajara',
        category: 'Estrategia',
    },
    {
        title: 'Gestión de Construcción',
        text: 'Optimizamos cada etapa del proceso constructivo garantizando eficiencia y alta calidad.',
        link: '/gestion-construccion',
        imageUrl: '/images/gestion.jpg',
        imageAlt: 'Gestión y supervisión de proyectos de construcción y obra civil',
        category: 'Ejecución',
    },
    {
        title: 'Estudios de Mercado',
        text: 'Análisis detallado de tendencias y demanda para respaldar cada decisión de inversión.',
        link: '/estudios-mercado',
        imageUrl: '/images/estudios.jpg',
        imageAlt: 'Análisis de mercado inmobiliario y estudios de demanda en México',
        category: 'Inteligencia',
    },
    {
        title: 'Impacto & Factibilidad',
        text: 'Estudios de impacto urbano, ambiental y factibilidades técnicas integrales.',
        link: '/estudios-factibilidad',
        imageUrl: '/images/urban-map.jpg',
        imageAlt: 'Estudios de impacto urbano, movilidad y factibilidad técnica',
        category: 'Viabilidad',
    },
    {
        title: 'Derecho Administrativo',
        text: 'Soluciones legales a problemas administrativos y optimización del aprovechamiento de suelo.',
        link: '/derecho-administrativo',
        imageUrl: '/images/admin.jpg',
        imageAlt: 'Abogados especialistas en derecho administrativo y urbano',
        category: 'Legal',
    },
];

export default function Solutions() {
    return (
        <section id="solutions" className="bg-[#f8fafb]">
            <div className="section-container">
                <div className="max-w-3xl mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block"
                    >
                        Nuestras Soluciones
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl mb-6">
                        Soluciones inmobiliarias con visión de <span className="italic text-primary">futuro</span>
                    </h2>
                    <p className="text-xl">
                        Herramientas y conocimiento experto para tomar decisiones seguras en el mundo inmobiliario y urbano.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <Link
                                href={solution.link}
                                className="block relative h-[500px] overflow-hidden rounded-[2.5rem] bg-text shadow-premium transition-all hover:shadow-premium-hover active:scale-[0.98]"
                            >
                                {/* Background Image with Zoom */}
                                <Image
                                    src={solution.imageUrl}
                                    alt={solution.imageAlt}
                                    fill
                                    className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                                {/* Content */}
                                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                                    <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-[10px] uppercase tracking-tighter mb-4 w-min">
                                        {solution.category}
                                    </span>

                                    <h3 className="text-3xl text-white mb-4 group-hover:text-primary-light transition-colors leading-tight">
                                        {solution.title}
                                    </h3>

                                    <p className="text-white/70 text-lg mb-8 line-clamp-2 leading-snug">
                                        {solution.text}
                                    </p>

                                    <div className="flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all">
                                        Explorar Servicio
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
