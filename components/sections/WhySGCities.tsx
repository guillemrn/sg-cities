'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    Scale,
    HardHat,
    Compass,
    FileCheck2,
    CheckCircle2
} from 'lucide-react';
import { cn } from '@/lib/utils';

const pillars = [
    {
        icon: Scale,
        title: 'Certeza Jurídica y Normativa Urbana',
        text: 'Alineamos cada proyecto a los Planes de Desarrollo Urbano, reglamentos municipales y legislación ambiental vigente, blindando la inversión contra suspensiones o contingencias legales.',
        tag: 'Derecho Urbano & Administrativo',
        className: 'md:col-span-3 lg:col-span-3',
        iconBg: 'bg-primary/10 text-primary-dark border-primary/20',
    },
    {
        icon: HardHat,
        title: 'Supervisión Rigurosa en Campo',
        text: 'Acompañamos la edificación con control técnico presencial, auditoría de estimaciones y verificación de calidades constructivas para que la obra se ejecute conforme a lo planeado.',
        tag: 'Gestión de Obra Civil',
        className: 'md:col-span-3 lg:col-span-3',
        iconBg: 'bg-secondary/10 text-secondary-dark border-secondary/20',
    },
    {
        icon: Compass,
        title: 'Planeación de Movilidad con Visión Integral',
        text: 'Diseñamos esquemas de movilidad urbana y transporte escolar que resuelven flujos vehiculares críticos, mejoran la seguridad comunitaria y optimizan la conectividad territorial.',
        tag: 'Movilidad & Territorio',
        className: 'md:col-span-3 lg:col-span-3',
        iconBg: 'bg-blue-50 text-blue-700 border-blue-200',
    },
    {
        icon: FileCheck2,
        title: 'Factibilidad y Modelos Institucionales',
        text: 'Estructuramos expedientes de viabilidad técnica, ambiental y financiera para dependencias de gobierno y desarrolladores que requieren sustentar obra pública o privada.',
        tag: 'Factibilidad Pública & Privada',
        className: 'md:col-span-3 lg:col-span-3',
        iconBg: 'bg-amber-50 text-amber-700 border-amber-200',
    },
];

const methodologySteps = [
    'Diagnóstico territorial y normativo previo',
    'Elaboración de proyectos ejecutivos y dictámenes',
    'Acompañamiento y supervisión directa en campo',
];

export default function WhySGCities() {
    return (
        <section id="why-sg-cities" className="bg-white py-24 md:py-32 border-t border-black/5">
            <div className="section-container !py-0">
                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <span className="inline-block px-3.5 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary-dark font-bold text-xs uppercase tracking-widest mb-4">
                        Enfoque y Respaldo Profesional
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-text leading-tight mb-6">
                        Rigor técnico, legal y territorial para{' '}
                        <span className="text-primary italic font-normal">decisiones complejas</span>
                    </h2>
                    <p className="text-base sm:text-lg text-text/75 leading-relaxed">
                        Desarrolladores, instituciones educativas y gobiernos locales confían en SG Cities para transformar intenciones de proyecto en obras viables, seguras y apegadas a derecho.
                    </p>
                </div>

                {/* 4 Pilares Bento-Grid */}
                <div className="bento-grid mb-8">
                    {pillars.map((pillar, index) => {
                        const Icon = pillar.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                className={cn(
                                    'group relative rounded-2xl p-8 border border-black/5 bg-[#f8fafb] transition-all hover:shadow-premium-hover hover:-translate-y-1 flex flex-col justify-between overflow-hidden',
                                    pillar.className
                                )}
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <div className={cn(
                                            'w-12 h-12 rounded-xl flex items-center justify-center border transition-transform group-hover:scale-105',
                                            pillar.iconBg
                                        )}>
                                            <Icon size={22} />
                                        </div>
                                        <span className="text-[11px] font-bold uppercase tracking-wider text-text/50">
                                            {pillar.tag}
                                        </span>
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-display font-bold text-text mb-3 leading-snug group-hover:text-primary transition-colors">
                                        {pillar.title}
                                    </h3>

                                    <p className="text-sm md:text-base text-text/75 leading-relaxed">
                                        {pillar.text}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}

                    {/* Multidisciplinary SGCities Anchor Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="md:col-span-6 rounded-3xl p-8 md:p-12 bg-gradient-to-br from-[#132124] to-[#1d3338] text-white overflow-hidden relative shadow-premium"
                    >
                        <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
                            <div className="lg:col-span-8">
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary-light block mb-3">
                                    Integración de Especialidades
                                </span>
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-4 leading-tight">
                                    Urbanistas, ingenieros y abogados colaborando en la misma mesa técnica
                                </h3>
                                <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                                    Evitamos la desconexión habitual entre quienes proyectan, quienes tramitan licencias y quienes construyen. Al articular derecho urbano, análisis de movilidad y supervisión en obra, garantizamos que cada proyecto avance con certidumbre integral.
                                </p>

                                <div className="flex flex-wrap gap-4 sm:gap-6 pt-2">
                                    {methodologySteps.map((step, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-xs text-white/90 font-medium">
                                            <CheckCircle2 className="w-4 h-4 text-secondary-light shrink-0" />
                                            <span>{step}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="lg:col-span-4 flex justify-center lg:justify-end">
                                <div className="relative w-36 h-36 md:w-44 md:h-44 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm">
                                    <Image
                                        src="/images/isotipo sg-cities.png"
                                        alt="Isotipo SG Cities"
                                        width={120}
                                        height={120}
                                        className="w-auto h-auto max-h-28 opacity-90 object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
