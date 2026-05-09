'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Shield, Zap, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceHeroProps {
    title: string;
    description: string;
    imageUrl: string;
    category: string;
    benefits?: string[];
}

export default function ServiceHero({
    title,
    description,
    imageUrl,
    category,
    benefits = ['Respuesta en 24h', 'Asesoría Senior', 'Confidencialidad']
}: ServiceHeroProps) {
    const icons = [Clock, Shield, Zap];

    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-bg-color">
            {/* Background Image with Parallax-like effect */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover opacity-20 grayscale"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-bg-color via-bg-color/80 to-bg-color" />
            </div>

            <div className="section-container relative z-10">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-text/40 mb-8">
                    <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
                    <ChevronRight size={12} />
                    <span className="text-primary">{category}</span>
                </nav>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-widest mb-6"
                        >
                            {category}
                        </motion.span>
                        
                        <h1 className="text-5xl md:text-6xl lg:text-7xl mb-8 leading-[1.05]">
                            {title.split(' ').map((word, i) => (
                                i === title.split(' ').length - 1 
                                    ? <span key={i} className="text-primary italic">{word}</span> 
                                    : <span key={i}>{word} </span>
                            ))}
                        </h1>

                        <p className="text-xl md:text-2xl text-text-muted mb-10 max-w-xl leading-relaxed">
                            {description}
                        </p>

                        {/* Value Pills */}
                        <div className="flex flex-wrap gap-4 mb-10">
                            {benefits.map((benefit, i) => {
                                const Icon = icons[i % icons.length];
                                return (
                                    <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white shadow-sm border border-black/[0.03] text-sm font-bold text-text/70">
                                        <Icon size={16} className="text-secondary" />
                                        {benefit}
                                    </div>
                                );
                            })}
                        </div>

                        <a href="#contact" className="premium-button">
                            Solicitar Asesoría Inmediata
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                            <Image
                                src={imageUrl}
                                alt={title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>
                        
                        {/* Decorative elements */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
