'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-text text-white/90 py-20 relative overflow-hidden">
            {/* Decorative texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            <div className="section-container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block mb-8">
                            <Image
                                src="/images/sg-cities-logo.svg"
                                alt="Logo SG Cities"
                                width={180}
                                height={50}
                                className="invert brightness-0"
                            />
                        </Link>
                        <p className="text-white/60 mb-8 leading-relaxed">
                            Expertos en derecho urbano, proyectos inmobiliarios y factibilidad técnica con un enfoque estratégico integral.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: Facebook, href: "https://www.facebook.com/SGcities/" }
                                // { icon: Linkedin, href: "#" },
                                // { icon: Instagram, href: "#" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all hover:bg-primary hover:border-primary hover:text-white"
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-8">Compañía</h4>
                        <ul className="space-y-4">
                            {['Nosotros', 'Nuestra Historia', 'Compromiso'].map((item) => (
                                <li key={item}>
                                    <Link href="/#why-sg-cities" className="text-white/50 hover:text-primary transition-colors">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div>
                        <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-8">Servicios</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Asesoría Inmobiliaria', href: '/asesoria-inmobiliaria' },
                                { name: 'Gestión de Construcción', href: '/gestion-construccion' },
                                { name: 'Estudios de Mercado', href: '/estudios-mercado' },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-white/50 hover:text-primary transition-colors">{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-8">Legal</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/terminos-y-condiciones" className="text-white/50 hover:text-primary transition-colors">Términos y Condiciones</Link>
                            </li>
                            <li>
                                <Link href="/politica-de-privacidad" className="text-white/50 hover:text-primary transition-colors">Política de Privacidad</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-white/30">
                        © {new Date().getFullYear()} SG Cities. Todos los derechos reservados.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 hover:text-primary transition-colors group"
                    >
                        Volver arriba
                        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/30 transition-all">
                            <ArrowUp size={14} />
                        </div>
                    </button>
                </div>
            </div>
        </footer>
    );
}
