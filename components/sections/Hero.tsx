'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowRight, Building2, Bus, Landmark, MessageCircle } from 'lucide-react';

const audienceTracks = [
    {
        id: 'urbanizadores',
        badge: 'Para Desarrolladores e Inversionistas',
        title: 'Obra Civil, Edificación y Suelo',
        description: 'Supervisión de obra, ejecución de proyectos constructivos, diseño arquitectónico y optimización de uso de suelo.',
        tag: 'Obra y Construcción',
        anchor: '#portfolio',
        icon: Building2,
        accent: 'from-primary/10 to-transparent',
        badgeColor: 'text-primary-dark bg-primary/10 border-primary/20',
    },
    {
        id: 'educativas',
        badge: 'Para Instituciones Educativas',
        title: 'Movilidad y Transporte Escolar',
        description: 'Planes integrales de movilidad escolar, pacificación de entornos, logística de transporte y seguridad vial.',
        tag: 'Planeación Urbana y Movilidad',
        anchor: '#portfolio',
        icon: Bus,
        accent: 'from-secondary/10 to-transparent',
        badgeColor: 'text-secondary-dark bg-secondary/10 border-secondary/20',
    },
    {
        id: 'gobierno',
        badge: 'Para Gobiernos Locales',
        title: 'Factibilidad e Infraestructura Pública',
        description: 'Estudios de factibilidad técnica, legal, ambiental y económica con modelos de financiamiento para obra pública.',
        tag: 'Factibilidad y Gestión',
        anchor: '#portfolio',
        icon: Landmark,
        accent: 'from-primary-dark/10 to-transparent',
        badgeColor: 'text-[#2b6873] bg-[#61b0bc]/15 border-[#61b0bc]/30',
    },
];

const partners = [
    { name: 'Gat System', logo: 'gatsystem.png' },
    { name: 'Gpoukari', logo: 'gpoukari.PNG' },
    { name: 'Logo EPS', logo: 'logo eps.png' },
    { name: 'Polymetrix', logo: 'polymetrix.png' },
    { name: 'Universidad de Guadalajara', logo: 'universidad-de-guadalajara.png' },
];

export default function Hero() {
    return (
        <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-gradient-to-b from-primary/5 via-bg-color/20 to-transparent">
            {/* Architectural backdrop element */}
            <div className="absolute top-0 right-0 w-3/5 h-full -z-10 opacity-15 pointer-events-none">
                <Image
                    src="/images/building.png"
                    alt="Arquitectura y planeación urbana"
                    fill
                    className="object-contain object-right-bottom scale-105"
                    priority
                />
            </div>

            <div className="section-container !py-0 flex-1 flex flex-col justify-between">
                {/* Hero Head & Narrative */}
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-14 lg:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="lg:col-span-8"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.08] font-display text-text mb-6">
                            Estrategia urbana y certeza técnica para proyectos de{' '}
                            <span className="text-primary italic font-normal">alto impacto</span>
                        </h1>

                        <p className="text-lg sm:text-xl md:text-2xl text-text/80 max-w-3xl leading-relaxed">
                            Más de una década conectando la experiencia técnica y legal en planeación urbana, movilidad sustentable y ejecución de obra civil para desarrolladores, colegios e instituciones en México.
                        </p>

                        {/* Direct Dual CTAs */}
                        <div className="flex flex-wrap items-center gap-4 mt-8">
                            <a
                                href="#portfolio"
                                className="premium-button group shadow-premium"
                            >
                                <span>Conocer Nuestros Proyectos</span>
                                <ArrowDownRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                            </a>

                            <a
                                href="https://wa.me/521234567890?text=Hola%2C%20me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios%20y%20proyectos."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="secondary-button group inline-flex items-center"
                            >
                                <MessageCircle className="mr-2 w-5 h-5 text-secondary group-hover:scale-110 transition-transform" />
                                <span>Consultar por WhatsApp</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Trust and Verification Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                        className="lg:col-span-4 flex flex-col justify-between h-full pt-2 lg:border-l lg:border-black/5 lg:pl-8"
                    >
                        <div>
                            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-text/50 block mb-3">
                                Enfoque Multidisciplinario
                            </span>
                            <p className="text-sm text-text/75 leading-relaxed mb-6">
                                Desarrollamos cada solución articulando viabilidad legal, planeación territorial y supervisión rigurosa en campo para minimizar riesgos de inversión.
                            </p>
                        </div>

                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text/40 block mb-4">
                                Respaldo Institucional y Comercial
                            </span>
                            <div className="flex flex-wrap gap-5 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                                {partners.map((partner) => (
                                    <Image
                                        key={partner.name}
                                        src={`/images/carrousel/${partner.logo}`}
                                        alt={partner.name}
                                        width={75}
                                        height={26}
                                        className="h-5 w-auto object-contain"
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Audience Triptych Dock - Direct Entry into Portfolio & Work */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {audienceTracks.map((track) => {
                        const Icon = track.icon;
                        return (
                            <a
                                key={track.id}
                                href={track.anchor}
                                className="group relative rounded-2xl bg-white border border-black/5 p-7 md:p-8 shadow-sm hover:shadow-premium-hover transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
                            >
                                <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${track.accent} rounded-bl-full pointer-events-none transition-opacity duration-300 group-hover:opacity-100`} />

                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className={`inline-block px-3 py-1 rounded-full border text-[11px] font-bold uppercase tracking-wider ${track.badgeColor}`}>
                                            {track.badge}
                                        </span>
                                        <div className="w-10 h-10 rounded-xl bg-black/[0.03] group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                                            <Icon className="w-5 h-5 text-text/70 group-hover:text-primary transition-colors" />
                                        </div>
                                    </div>

                                    <h2 className="text-xl md:text-2xl font-bold font-display text-text mb-3 leading-snug group-hover:text-primary transition-colors">
                                        {track.title}
                                    </h2>

                                    <p className="text-sm text-text/70 leading-relaxed mb-6">
                                        {track.description}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-black/5 flex items-center justify-between text-xs font-bold text-text/80 group-hover:text-primary transition-colors">
                                    <span>Ver casos y alcance</span>
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </a>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
