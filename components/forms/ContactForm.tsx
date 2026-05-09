'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Send, Loader2, Zap } from 'lucide-react';

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
    titleText = '¿Hablamos de tu proyecto?',
    subtitleText = 'Déjanos tus datos y nos pondremos en contacto contigo.',
    buttonText = 'Comenzar Proyecto',
    variant = 'light',
    isMinimal = false,
    defaultProjectType,
    reinforcementText,
    useWhatsAppOnMobile = false,
    phoneNumber = '521234567890'
}: ContactFormProps) {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Mobile WhatsApp redirect logic
        if (useWhatsAppOnMobile && window.innerWidth < 768) {
            const formData = new FormData(e.currentTarget);
            const name = formData.get('name') as string;
            const message = `Hola, soy ${name}. Me gustaría solicitar asesoría personalizada.`;
            window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
            return;
        }

        setIsSubmitting(true);

        // Here you would typically send the data to your new backend
        // For now, we'll just simulate a successful submission
        setTimeout(() => {
            router.push('/gracias');
        }, 1000);
    };

    const isDark = variant === 'dark';

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-8 md:gap-6"
        >
            <div className="text-left">
                <h3 className={cn(
                    "text-2xl md:text-3xl mb-2",
                    isDark ? "text-white" : "text-text"
                )}>
                    {titleText}
                </h3>
                <p className={cn(
                    "text-sm mb-4 leading-relaxed",
                    isDark ? "text-white/60" : "text-text-muted"
                )}>
                    {subtitleText}
                </p>
            </div>

            <div className={cn(
                "grid gap-6 md:gap-4",
                isMinimal ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
            )}>
                <div className="space-y-3 md:space-y-2">
                    <label className={cn(
                        "text-xs font-bold uppercase tracking-wider ml-1",
                        isDark ? "text-white/50" : "text-text/50"
                    )}>
                        Nombre Completo
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Ej. Juan Pérez"
                        required
                        className={cn(
                            "w-full rounded-xl border px-5 py-4 text-base md:text-sm transition-all focus:outline-none focus:ring-2",
                            isDark
                                ? "bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:ring-primary/50"
                                : "bg-white border-black/5 text-text placeholder:text-text/40 focus:ring-primary/30 shadow-sm"
                        )}
                    />
                </div>
                <div className="space-y-3 md:space-y-2">
                    <label className={cn(
                        "text-xs font-bold uppercase tracking-wider ml-1",
                        isDark ? "text-white/50" : "text-text/50"
                    )}>
                        {isMinimal ? "WhatsApp" : "Correo Electrónico"}
                    </label>
                    <input
                        type={isMinimal ? "tel" : "email"}
                        name={isMinimal ? "whatsapp" : "email"}
                        placeholder={isMinimal ? "Ej. +52 33 1234 5678" : "Ej. juan@empresa.com"}
                        required
                        className={cn(
                            "w-full rounded-xl border px-5 py-4 text-base md:text-sm transition-all focus:outline-none focus:ring-2",
                            isDark
                                ? "bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:ring-primary/50"
                                : "bg-white border-black/5 text-text placeholder:text-text/40 focus:ring-primary/30 shadow-sm"
                        )}
                    />
                </div>
            </div>

            {!isMinimal && (
                <>
                    {defaultProjectType ? (
                        <input type="hidden" name="project-type" value={defaultProjectType} />
                    ) : (
                        <div className="space-y-3 md:space-y-2 relative">
                            <label className={cn(
                                "text-xs font-bold uppercase tracking-wider ml-1",
                                isDark ? "text-white/50" : "text-text/50"
                            )}>
                                Tipo de Proyecto
                            </label>
                            <div className="relative">
                                <select
                                    name="project-type"
                                    required
                                    defaultValue=""
                                    className={cn(
                                        "w-full rounded-xl border px-5 py-4 text-base md:text-sm transition-all focus:outline-none focus:ring-2 appearance-none cursor-pointer",
                                        isDark
                                            ? "bg-white/5 border-white/10 text-white focus:ring-primary/50"
                                            : "bg-white border-black/5 text-text focus:ring-primary/30 shadow-sm"
                                    )}
                                >
                                    <option value="" disabled>Selecciona una opción</option>
                                    <option value="asesoria-inmobiliaria">Asesoría inmobiliaria</option>
                                    <option value="gestion-construccion">Gestión de construcción</option>
                                    <option value="estudios-mercado">Estudios de mercado</option>
                                    <option value="estudios-factibilidad">Estudios de factibilidad</option>
                                    <option value="derecho-administrativo">Derecho administrativo</option>
                                </select>
                                <div className={cn(
                                    "absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none",
                                    isDark ? "text-white/40" : "text-text/40"
                                )}>
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="space-y-3 md:space-y-2">
                        <label className={cn(
                            "text-xs font-bold uppercase tracking-wider ml-1",
                            isDark ? "text-white/50" : "text-text/50"
                        )}>
                            Mensaje / Detalles
                        </label>
                        <textarea
                            name="message"
                            rows={4}
                            placeholder="Ej. Me interesa cotizar una gestión de obra para un edificio de departamentos..."
                            required
                            className={cn(
                                "w-full rounded-xl border px-5 py-4 text-base md:text-sm transition-all focus:outline-none focus:ring-2 resize-none",
                                isDark
                                    ? "bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:ring-primary/50"
                                    : "bg-white border-black/5 text-text placeholder:text-text/40 focus:ring-primary/30 shadow-sm"
                            )}
                        ></textarea>
                    </div>
                </>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                    "premium-button w-full flex items-center justify-center gap-3 group relative overflow-hidden",
                    isDark && "bg-white text-primary hover:bg-white/90 hover:text-primary-dark"
                )}
            >
                <span className="relative z-10">{isSubmitting ? 'Enviando...' : buttonText}</span>
                {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin relative z-10" />
                ) : (
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />
                )}
            </button>

            <div className={cn(
                "flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest",
                isDark ? "text-white/40" : "text-text/40"
            )}>
                <Zap size={14} className="text-secondary" />
                {reinforcementText ? reinforcementText : (isMinimal ? "Respuesta rápida y confidencial" : "Un consultor senior te contactará personalmente")}
            </div>
        </form>
    );
}
