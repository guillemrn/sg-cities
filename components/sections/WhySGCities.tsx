'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    Heart,
    Star,
    TrendingUp,
    Zap,
    ShieldCheck,
    MapPin,
    ArrowUpRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const benefits = [
    {
        icon: Heart,
        title: 'Asesoría Personalizada',
        text: 'Recibe orientación según tu proyecto y necesidades específicas.',
        color: 'bg-red-50 text-red-600 border-red-100',
        className: 'md:col-span-3 lg:col-span-2',
    },
    {
        icon: Star,
        title: 'Experiencia Real',
        text: 'Conocimiento profundo del mercado urbano e inmobiliario de México.',
        color: 'bg-amber-50 text-amber-600 border-amber-100',
        className: 'md:col-span-3 lg:col-span-2',
    },
    {
        icon: TrendingUp,
        title: 'Datos Estratégicos',
        text: 'Estudios de mercado que garantizan inversiones seguras y rentables.',
        color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
        className: 'md:col-span-3 lg:col-span-2',
    },
    {
        icon: Zap,
        title: 'Optimización Total',
        text: 'Maximizamos tu inversión con estrategias de costos super eficientes.',
        color: 'bg-blue-50 text-blue-600 border-blue-100',
        className: 'md:col-span-3 lg:col-span-3',
    },
    {
        icon: ShieldCheck,
        title: 'Cero Complicaciones',
        text: 'Te guiamos en cada paso legal y técnico, de la planeación a la obra.',
        color: 'bg-purple-50 text-purple-600 border-purple-100',
        className: 'md:col-span-3 lg:col-span-3',
    },
];

export default function WhySGCities() {
    return (
        <section id="why-sg-cities" className="bg-white">
            <div className="section-container">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl mb-6">
                            ¿Por qué los expertos <span className="text-primary italic">inmobiliarios</span> eligen SG Cities?
                        </h2>
                        <p className="text-xl">
                            Facilitamos la compra, construcción y análisis con un enfoque estratégico y soluciones diseñadas a medida para cada inversor.
                        </p>
                    </div>
                    <div className="hidden lg:block shrink-0">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-200 overflow-hidden shadow-sm">
                                    <Image src={`https://i.pravatar.cc/150?img=${i + 10}`} alt="User" width={48} height={48} />
                                </div>
                            ))}
                            <div className="w-12 h-12 rounded-full border-4 border-white bg-primary text-white flex items-center justify-center text-xs font-bold shadow-sm">
                                +200
                            </div>
                        </div>
                        <p className="text-xs font-bold uppercase tracking-widest mt-3 text-center text-text/50">Clientes Satisfechos</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-y border-black/[0.03] py-12">
                    {[
                        { label: 'Años de Experiencia', value: '+10' },
                        { label: 'Proyectos Exitosos', value: '+200' },
                        { label: 'm² Desarrollados', value: '+50k' },
                        { label: 'Clientes Felices', value: '100%' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <p className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">{stat.value}</p>
                            <p className="text-xs font-bold uppercase tracking-widest text-text/40">{stat.label}</p>
                        </div>
                    ))}
                </div>

                <div className="bento-grid">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={cn(
                                "group relative overflow-hidden rounded-3xl p-8 border border-black/[0.03] bg-[#f8fafb] transition-all hover:shadow-premium-hover hover:-translate-y-1",
                                benefit.className
                            )}
                        >
                            <div className={cn(
                                "w-12 h-12 rounded-xl flex items-center justify-center mb-6 border transition-transform group-hover:scale-110 group-hover:rotate-3",
                                benefit.color
                            )}>
                                <benefit.icon size={24} />
                            </div>

                            <h3 className="text-2xl mb-4 group-hover:text-primary transition-colors">
                                {benefit.title}
                            </h3>

                            <p className="text-lg leading-relaxed">
                                {benefit.text}
                            </p>

                            {/* Decorative light effect */}
                            <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                    ))}

                    {/* Last big card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="md:col-span-6 lg:col-span-6 rounded-3xl p-8 bg-primary text-white overflow-hidden relative"
                    >
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 h-full">
                            <div className="max-w-lg">
                                <h3 className="text-3xl mb-4 text-white">Red de expertos multidisciplinarios en desarrollo urbano</h3>
                                <p className="text-white/80 text-lg">
                                    Contamos con arquitectos, urbanistas, abogados y analistas de mercado que trabajan de forma sincronizada para ofrecerte un enfoque integral 360°.
                                </p>
                            </div>
                            <div className="relative md:block shrink-0">
                                <Image
                                    src="/images/isotipo sg-cities.png"
                                    alt="Logotipo SG Cities - Consultoría de Derecho Urbano e Inmobiliario en Guadalajara"
                                    width={140}
                                    height={140}
                                    className={cn(
                                        "opacity-20 grayscale brightness-200 transition-all",
                                        "absolute -bottom-10 -right-10 md:relative md:bottom-0 md:right-0 md:opacity-40"
                                    )}
                                />
                            </div>
                        </div>
                        {/* Background texture for the big card */}
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
