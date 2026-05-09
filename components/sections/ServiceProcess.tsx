'use client';

import { motion } from 'framer-motion';
import { 
    Target, Search, Zap, 
    Ruler, HardHat, Building2, 
    LineChart, PieChart, 
    FileSearch, MapPin, ClipboardCheck, 
    Scale, Shield, Gavel 
} from 'lucide-react';

const iconMap = {
    Target, Search, Zap,
    Ruler, HardHat, Building2,
    LineChart, PieChart,
    FileSearch, MapPin, ClipboardCheck,
    Scale, Shield, Gavel
};

interface Step {
    title: string;
    text: string;
    icon: keyof typeof iconMap;
}

interface ServiceProcessProps {
    title: string;
    subtitle: string;
    badge: string;
    steps: Step[];
}

export default function ServiceProcess({ title, subtitle, badge, steps }: ServiceProcessProps) {
    return (
        <section className="section-container bg-[#f8fafb]">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">{badge}</span>
                <h2 className="text-4xl md:text-5xl mb-6">
                    {title.split(' ').map((word, i) => (
                        i === title.split(' ').length - 1 
                            ? <span key={i} className="text-primary italic">{word}</span> 
                            : <span key={i}>{word} </span>
                    ))}
                </h2>
                <p className="text-xl">{subtitle}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
                {/* Connecting line for desktop */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/10 -translate-y-1/2 z-0" />
                
                {steps.map((step, i) => {
                    const Icon = iconMap[step.icon];
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="glass-card p-10 relative z-10 hover:shadow-premium-hover transition-all group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mb-8 shadow-lg shadow-primary/20 group-hover:rotate-3 transition-transform">
                                {Icon && <Icon size={32} />}
                            </div>
                            <div className="absolute top-10 right-10 text-6xl font-display font-bold text-primary/5">0{i + 1}</div>
                            <h3 className="text-2xl mb-4">{step.title}</h3>
                            <p className="text-lg leading-relaxed text-text-muted">{step.text}</p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
