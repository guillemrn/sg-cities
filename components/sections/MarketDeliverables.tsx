'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, FileText } from 'lucide-react';

export default function MarketDeliverables() {
    return (
        <section className="py-24 bg-white">
            <div className="section-container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Entregables</span>
                        <h2 className="text-4xl md:text-5xl mb-8">Información que respalda <span className="text-primary italic">decisiones</span></h2>
                        <p className="text-xl text-text-muted mb-8 leading-relaxed">
                            No entregamos solo gráficas, entregamos una estrategia de negocio validada por el mercado actual.
                        </p>
                        <ul className="space-y-4">
                            {[
                                'Análisis de absorción mensual proyectada.',
                                'Benchmarks detallados de precios de cierre.',
                                'Definición de "Product-Market Fit" inmobiliario.',
                                'Mapas de calor de demanda y competencia.'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-lg font-medium">
                                    <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                                        <ArrowRight size={14} />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="glass-card p-4 md:p-8 bg-white/50 relative z-10">
                            <div className="rounded-2xl overflow-hidden border border-black/5 shadow-2xl bg-white">
                                <div className="h-10 bg-gray-50 border-b border-black/5 flex items-center px-4 gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                    <span className="text-[10px] uppercase tracking-widest font-bold ml-2 text-text/30">Reporte Ejecutivo SG Cities</span>
                                </div>
                                <div className="p-8 space-y-6">
                                    <div className="h-4 w-1/3 bg-primary/20 rounded-full" />
                                    <div className="h-32 w-full bg-primary/5 rounded-2xl flex items-center justify-center">
                                        <BarChart3 className="text-primary/20" size={48} />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="h-20 bg-secondary/5 rounded-xl" />
                                        <div className="h-20 bg-primary/5 rounded-xl" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-2 w-full bg-black/5 rounded-full" />
                                        <div className="h-2 w-5/6 bg-black/5 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-6 rounded-3xl shadow-2xl z-20 flex flex-col items-center gap-2">
                            <FileText size={24} />
                            <span className="text-[10px] font-bold uppercase tracking-tighter">Reporte PDF</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
