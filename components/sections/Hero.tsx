'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import ContactForm from '@/components/forms/ContactForm';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-8 pb-12 overflow-hidden bg-bg-color">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full -z-10 opacity-20 pointer-events-none">
                <Image
                    src="/images/building.png"
                    alt="Modern Architecture"
                    fill
                    className="object-contain object-right-bottom scale-110"
                    priority
                />
            </div>

            <div className="section-container relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                {/* Hero Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-bold text-xs uppercase tracking-widest mb-6"
                    >
                        Líderes en Desarrollo Urbano
                    </motion.span>

                    <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] leading-[1.05] mb-8 font-display">
                        Haz de tu proyecto inmobiliario una <span className="text-primary italic">inversión segura</span>
                    </h1>

                    <p className="text-xl md:text-2xl mb-10 text-text/80 max-w-xl">
                        Asesoría en derecho urbano, gestión de suelo y estrategia inmobiliaria para desarrolladores e inversionistas.
                    </p>

                    {/* <div className="flex flex-wrap gap-4">
                        <a href="#solutions" className="premium-button group">
                            Explorar Servicios
                            <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </a>
                        <a href="#why-sg-cities" className="secondary-button">
                            Conoce Más
                        </a>
                    </div> */}

                    {/* Trust Bar */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-12 flex flex-col gap-4"
                    >
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-text/40">
                            Respaldo Institucional y Comercial
                        </p>
                        <div className="flex flex-wrap gap-6 items-center opacity-40 grayscale">
                            {['gatsystem.png', 'gpoukari.PNG', 'logo eps.png', 'polymetrix.png'].map((logo) => (
                                <Image
                                    key={logo}
                                    src={`/images/carrousel/${logo}`}
                                    alt="Partner"
                                    width={80}
                                    height={30}
                                    className="h-6 w-auto object-contain"
                                />
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Hero Form Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative"
                >
                    {/* Accent decoration */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />

                    <div className="glass-card p-10 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-secondary to-primary-light" />
                        <ContactForm
                            formName="hero-contact"
                            titleText="Solicita asesoría personalizada"
                            subtitleText="Te contactaremos en menos de 24 horas."
                            buttonText="Solicitar asesoría"
                            isMinimal={true}
                            useWhatsAppOnMobile={true}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
