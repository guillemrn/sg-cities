'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, ArrowUp, Mail, Phone, MapPin, Building2, Bus, Landmark } from 'lucide-react';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#101c1e] text-white border-t border-white/10 pt-20 pb-12 relative overflow-hidden">
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="section-container relative z-10 !py-0">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
                    {/* Brand Column (4 cols) */}
                    <div className="lg:col-span-4 flex flex-col justify-between">
                        <div>
                            <Link href="/" className="inline-block mb-6">
                                <Image
                                    src="/images/sg-cities-logo.svg"
                                    alt="SG Cities - Consultoría Urbana y de Infraestructura"
                                    width={180}
                                    height={50}
                                    className="invert brightness-0"
                                />
                            </Link>

                            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-sm">
                                Firma consultora especializada en derecho urbano, supervisión de obra civil, planeación de movilidad escolar y estudios de factibilidad técnica para el desarrollo territorial en México.
                            </p>

                            <div className="flex items-center gap-3">
                                <a
                                    href="https://www.facebook.com/SGcities/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-primary hover:border-primary transition-all"
                                    aria-label="Facebook SG Cities"
                                >
                                    <Facebook size={18} />
                                </a>
                                <a
                                    href="https://wa.me/521234567890"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-white/80 hover:text-white hover:bg-secondary hover:border-secondary transition-all flex items-center gap-2"
                                >
                                    <span>WhatsApp Directo</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Sectores Clave (3 cols) */}
                    <div className="lg:col-span-3">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary-light mb-6">
                            Sectores de Atención
                        </h4>
                        <ul className="space-y-3.5 text-sm">
                            <li>
                                <Link href="/#portfolio" className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
                                    <Building2 size={15} className="text-primary-light shrink-0" />
                                    <span>Urbanizadores e Inversionistas</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/#portfolio" className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
                                    <Bus size={15} className="text-secondary-light shrink-0" />
                                    <span>Instituciones Educativas</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/#portfolio" className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
                                    <Landmark size={15} className="text-amber-300 shrink-0" />
                                    <span>Gobiernos Locales y Municipios</span>
                                </Link>
                            </li>
                        </ul>

                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary-light mt-8 mb-4">
                            Proyectos y Evidencia
                        </h4>
                        <ul className="space-y-2.5 text-sm">
                            <li>
                                <Link href="/#portfolio" className="text-white/70 hover:text-white transition-colors">
                                    Portafolio de Obra Civil
                                </Link>
                            </li>
                            <li>
                                <Link href="/#portfolio" className="text-white/70 hover:text-white transition-colors">
                                    Planes de Movilidad Urbana
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Servicios Completos (3 cols) */}
                    <div className="lg:col-span-3">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary-light mb-6">
                            Especialidades
                        </h4>
                        <ul className="space-y-3 text-sm">
                            {[
                                { name: 'Asesoría Inmobiliaria', href: '/asesoria-inmobiliaria' },
                                { name: 'Gestión de Construcción', href: '/gestion-construccion' },
                                { name: 'Estudios de Mercado', href: '/estudios-mercado' },
                                { name: 'Impacto & Factibilidad', href: '/estudios-factibilidad' },
                                { name: 'Derecho Administrativo y Urbano', href: '/derecho-administrativo' },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-white/70 hover:text-white transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contacto & Ubicación (2 cols) */}
                    <div className="lg:col-span-2">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary-light mb-6">
                            Contacto Directo
                        </h4>
                        <ul className="space-y-3.5 text-xs text-white/70">
                            <li className="flex items-start gap-2.5">
                                <MapPin size={16} className="text-primary-light shrink-0 mt-0.5" />
                                <span>Guadalajara, Jalisco, México</span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Mail size={16} className="text-primary-light shrink-0" />
                                <a href="mailto:enrique.delacruz@sgcities.com" className="hover:text-white transition-colors truncate">
                                    enrique.delacruz@sgcities.com
                                </a>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Phone size={16} className="text-primary-light shrink-0" />
                                <a href="https://wa.me/521234567890" className="hover:text-white transition-colors">
                                    +52 (33) 1234 5678
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Legal Bar */}
                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
                    <div className="flex flex-wrap items-center gap-6">
                        <p>© {new Date().getFullYear()} SG Cities. Todos los derechos reservados.</p>
                        <Link href="/terminos-y-condiciones" className="hover:text-white transition-colors">
                            Términos y Condiciones
                        </Link>
                        <Link href="/politica-de-privacidad" className="hover:text-white transition-colors">
                            Política de Privacidad
                        </Link>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 font-bold uppercase tracking-wider text-white/60 hover:text-white transition-colors cursor-pointer group"
                    >
                        <span>Volver arriba</span>
                        <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                            <ArrowUp size={13} />
                        </div>
                    </button>
                </div>
            </div>
        </footer>
    );
}
