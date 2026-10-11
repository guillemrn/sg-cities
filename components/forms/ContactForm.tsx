'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Send, Loader2, ShieldCheck, MessageCircle, ChevronDown } from 'lucide-react';

interface ContactFormProps {
    formName: string;
    titleText?: string;
    subtitleText?: string;
    buttonText?: string;
    variant?: 'light' | 'dark';
    isMinimal?: boolean;
    defaultProjectType?: string;
    reinforcementText?: string;
    useWhatsAppOnMobile?: boolean;
    phoneNumber?: string;
}

export default function ContactForm({
    formName,
    titleText = 'Solicita asesoría o cotización',
    subtitleText = 'Cuéntanos sobre tu proyecto territorial, normativo o constructivo.',
    buttonText = 'Enviar Solicitud',
    variant = 'light',
    isMinimal = false,
    defaultProjectType = '',
    reinforcementText,
    useWhatsAppOnMobile = false,
    phoneNumber = '521234567890'
}: ContactFormProps) {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [projectType, setProjectType] = useState<string>(defaultProjectType);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (useWhatsAppOnMobile && window.innerWidth < 768) {
            const formData = new FormData(e.currentTarget);
            const name = formData.get('name') as string;
            const message = `Hola, soy ${name}. Me gustaría solicitar información sobre un proyecto de ${projectType || 'consultoría urbana'}.`;
            window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
            return;
        }

        setIsSubmitting(true);
        setTimeout(() => {
            router.push('/gracias');
        }, 1000);
    };

    const isDark = variant === 'dark';

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input type="hidden" name="form-name" value={formName} />
            
            {/* Honeypot field for anti-spam (invisible to users) */}
            <input
                type="text"
                name="website_url_hp"
                tabIndex={-1}
                autoComplete="off"
                className="hidden pointer-events-none"
            />

            <div>
                <h3 className={cn(
                    "text-2xl md:text-3xl font-display font-bold mb-2 tracking-tight",
                    isDark ? "text-white" : "text-text"
                )}>
                    {titleText}
                </h3>
                <p className={cn(
                    "text-sm leading-relaxed",
                    isDark ? "text-white/70" : "text-text-muted"
                )}>
                    {subtitleText}
                </p>
            </div>

            {/* Inputs Grid */}
            <div className={cn(
                "grid gap-4",
                isMinimal ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
            )}>
                <div className="space-y-1.5">
                    <label className={cn(
                        "text-xs font-bold uppercase tracking-wider ml-1",
                        isDark ? "text-white/60" : "text-text/60"
                    )}>
                        Nombre Completo
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Ej. Ing. Roberto Mendoza"
                        required
                        className={cn(
                            "w-full rounded-xl border px-4 py-3.5 text-sm transition-all focus:outline-none focus:ring-2",
                            isDark
                                ? "bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:ring-primary/50 focus:border-primary/50"
                                : "bg-white border-black/10 text-text placeholder:text-text/40 focus:ring-primary/30 focus:border-primary/40 shadow-sm"
                        )}
                    />
                </div>

                <div className="space-y-1.5">
                    <label className={cn(
                        "text-xs font-bold uppercase tracking-wider ml-1",
                        isDark ? "text-white/60" : "text-text/60"
                    )}>
                        Teléfono / WhatsApp
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Ej. +52 33 1234 5678"
                        required
                        className={cn(
                            "w-full rounded-xl border px-4 py-3.5 text-sm transition-all focus:outline-none focus:ring-2",
                            isDark
                                ? "bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:ring-primary/50 focus:border-primary/50"
                                : "bg-white border-black/10 text-text placeholder:text-text/40 focus:ring-primary/30 focus:border-primary/40 shadow-sm"
                        )}
                    />
                </div>
            </div>

            {!isMinimal && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <label className={cn(
                            "text-xs font-bold uppercase tracking-wider ml-1",
                            isDark ? "text-white/60" : "text-text/60"
                        )}>
                            Correo Electrónico
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Ej. rmendoza@empresa.com"
                            required
                            className={cn(
                                "w-full rounded-xl border px-4 py-3.5 text-sm transition-all focus:outline-none focus:ring-2",
                                isDark
                                    ? "bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:ring-primary/50 focus:border-primary/50"
                                    : "bg-white border-black/10 text-text placeholder:text-text/40 focus:ring-primary/30 focus:border-primary/40 shadow-sm"
                            )}
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label className={cn(
                            "text-xs font-bold uppercase tracking-wider ml-1",
                            isDark ? "text-white/60" : "text-text/60"
                        )}>
                            Servicio o Categoría de Interés
                        </label>
                        <div className="relative">
                            <select
                                name="project-type"
                                value={projectType}
                                onChange={(e) => setProjectType(e.target.value)}
                                required
                                className={cn(
                                    "w-full rounded-xl border px-4 py-3.5 pr-10 text-sm transition-all focus:outline-none focus:ring-2 appearance-none cursor-pointer",
                                    isDark
                                        ? "bg-[#18272a] border-white/10 text-white focus:ring-primary/50"
                                        : "bg-white border-black/10 text-text focus:ring-primary/30 shadow-sm"
                                )}
                            >
                                <option value="" disabled>Selecciona una opción</option>
                                <optgroup label="Construcción e Inversión">
                                    <option value="gestion-construccion">Gestión de Construcción y Supervisión de Obra</option>
                                    <option value="asesoria-inmobiliaria">Asesoría Inmobiliaria y Gestión de Suelo</option>
                                    <option value="estudios-mercado">Estudios de Mercado y Demanda Territorial</option>
                                </optgroup>
                                <optgroup label="Movilidad y Planeación Urbana">
                                    <option value="movilidad-escolar">Planes de Movilidad y Transporte Escolar</option>
                                    <option value="redisenyo-vial">Rediseño Vial y Accesibilidad de Entornos</option>
                                    <option value="impacto-urbano">Estudios de Impacto Urbano y Vial</option>
                                </optgroup>
                                <optgroup label="Gobierno y Marco Normativo">
                                    <option value="factibilidad-tecnica">Factibilidades Técnicas, Ambientales y Económicas</option>
                                    <option value="modelos-financiamiento">Modelos de Financiamiento para Infraestructura</option>
                                    <option value="derecho-administrativo">Derecho Administrativo, Urbano y Licencias</option>
                                </optgroup>
                                <optgroup label="Otros">
                                    <option value="otro">Otro requerimiento multidisciplinario</option>
                                </optgroup>
                            </select>
                            <ChevronDown
                                size={16}
                                className={cn(
                                    "absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none",
                                    isDark ? "text-white/40" : "text-text/40"
                                )}
                            />
                        </div>
                    </div>
                </div>
            )}

            {!isMinimal && (
                <div className="space-y-1.5">
                    <label className={cn(
                        "text-xs font-bold uppercase tracking-wider ml-1",
                        isDark ? "text-white/60" : "text-text/60"
                    )}>
                        Mensaje o descripción del proyecto
                    </label>
                    <textarea
                        name="message"
                        rows={3}
                        placeholder="Ej. Ubicación del predio, requerimientos de obra, plazo estimado o necesidades de factibilidad..."
                        required
                        className={cn(
                            "w-full rounded-xl border px-4 py-3.5 text-sm transition-all focus:outline-none focus:ring-2 resize-none",
                            isDark
                                ? "bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:ring-primary/50"
                                : "bg-white border-black/10 text-text placeholder:text-text/40 focus:ring-primary/30 shadow-sm"
                        )}
                    />
                </div>
            )}

            {/* Submit Action */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-3 cursor-pointer shadow-premium bg-primary text-white hover:bg-primary-dark"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Procesando...</span>
                    </>
                ) : (
                    <>
                        <span>{buttonText}</span>
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                )}
            </button>

            {/* Trust and WhatsApp Fast Action */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-xs">
                <div className={cn(
                    "flex items-center gap-2",
                    isDark ? "text-white/60" : "text-text/60"
                )}>
                    <ShieldCheck size={16} className="text-secondary shrink-0" />
                    <span>{reinforcementText || "Información tratada bajo estricta confidencialidad"}</span>
                </div>

                <a
                    href={`https://wa.me/${phoneNumber}?text=Hola%2C%20quisiera%20solicitar%20asesor%C3%ADa%20t%C3%A9cnica%20directa.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-bold text-secondary-light hover:underline"
                >
                    <MessageCircle size={15} />
                    <span>O escribe directo a WhatsApp</span>
                </a>
            </div>
        </form>
    );
}
