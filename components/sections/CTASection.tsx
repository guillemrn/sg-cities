'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/forms/ContactForm';
import { Mail, ShieldCheck, Sparkles } from 'lucide-react';

export default function CTASection() {
    return (
        <section id="start-project" className="relative py-24 md:py-32 overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[url('/images/cta-image.jpg')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-text/80 backdrop-blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>

            <div className="section-container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-white"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center mb-8"
                        >
                            <Sparkles className="text-primary-light" size={32} />
                        </motion.div>

                        <h2 className="text-5xl md:text-6xl mb-8 leading-[1.1] text-white">
                            ¿Listo para <span className="text-primary-light italic">transformar</span> tus proyectos?
                        </h2>

                        <p className="text-xl text-white/80 mb-12">
                            Estamos aquí para dar el siguiente gran paso contigo. Completa el formulario y uno de nuestros consultores senior te contactará en menos de 24 horas.
                        </p>

                        <ul className="space-y-6">
                            {[
                                { icon: ShieldCheck, text: "Garantía de confidencialidad total." },
                                { icon: Mail, text: "Asesoría técnica inmediata en tu primer contacto." }
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-lg">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                        <item.icon size={14} className="text-primary-light" />
                                    </div>
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Right Side - Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="glass-card p-10 md:p-14 border-white/10 bg-white/5">
                            <ContactForm
                                formName="cta-contact"
                                titleText="¿Listo para desarrollar tu proyecto?"
                                subtitleText="Cuéntanos más sobre tu proyecto y un consultor senior se pondrá en contacto contigo."
                                buttonText="Reservar Consulta Gratuita"
                                variant="dark"
                            />
                        </div>

                        {/* Badge decoration */}
                        <div className="absolute -top-6 -right-6 bg-secondary px-6 py-3 rounded-2xl shadow-2xl rotate-12 hidden md:block border-2 border-white/20">
                            <p className="text-white font-bold text-sm">Respuesta Rápida ⚡</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
