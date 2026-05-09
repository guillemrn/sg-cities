'use client';

import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, AlertTriangle } from 'lucide-react';

interface ComparisonProps {
    serviceName: string;
    risks: string[];
    solutions: string[];
}

export default function ComparisonSection({ serviceName, risks, solutions }: ComparisonProps) {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="section-container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl mb-6">
                        ¿Por qué no arriesgar tu <span className="text-primary italic">inversión</span>?
                    </h2>
                    <p className="text-xl">
                        Comparamos los riesgos comunes del mercado frente al respaldo estratégico de SG Cities en {serviceName}.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-stretch">
                    {/* Risks side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-10 rounded-[2.5rem] bg-red-50/50 border border-red-100"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                                <AlertTriangle size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-red-900">Sin Asesoría Experta</h3>
                        </div>
                        <ul className="space-y-6">
                            {risks.map((risk, i) => (
                                <li key={i} className="flex items-start gap-4 text-red-800/80">
                                    <XCircle size={20} className="shrink-0 mt-1 text-red-500" />
                                    <span className="text-lg leading-relaxed">{risk}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* SG Cities side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-10 rounded-[2.5rem] bg-secondary/5 border border-secondary/10 relative overflow-hidden"
                    >
                        {/* Decorative badge */}
                        <div className="absolute top-6 right-6 px-4 py-1 bg-secondary text-white text-xs font-bold uppercase tracking-widest rounded-full">
                            El Enfoque SG
                        </div>

                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-secondary text-white flex items-center justify-center shadow-lg shadow-secondary/20">
                                <CheckCircle2 size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-text">Con SG Cities</h3>
                        </div>
                        <ul className="space-y-6">
                            {solutions.map((solution, i) => (
                                <li key={i} className="flex items-start gap-4 text-text/80">
                                    <CheckCircle2 size={20} className="shrink-0 mt-1 text-secondary" />
                                    <span className="text-lg leading-relaxed font-medium">{solution}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
