'use client';

import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import ContactForm from '@/components/forms/ContactForm';

interface Faq {
    question: string;
    answer: string;
}

interface ServiceFaqsProps {
    title: string;
    faqs: Faq[];
    formProps: {
        formName: string;
        titleText: string;
        subtitleText: string;
        buttonText: string;
        defaultProjectType: string;
        reinforcementText: string;
    };
}

export default function ServiceFaqs({ title, faqs, formProps }: ServiceFaqsProps) {
    return (
        <section className="section-container">
            <div className="grid lg:grid-cols-2 gap-20 items-start">
                <div>
                    <h2 className="text-4xl md:text-5xl mb-12">
                        {title.split(' ').map((word, i) => (
                            i === title.split(' ').length - 1 
                                ? <span key={i} className="text-primary italic">{word}</span> 
                                : <span key={i}>{word} </span>
                        ))}
                    </h2>
                    <div className="space-y-8">
                        {faqs.map((faq, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="border-b border-black/5 pb-8"
                            >
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                                    <HelpCircle className="text-primary shrink-0" size={20} />
                                    {faq.question}
                                </h3>
                                <p className="text-lg text-text-muted leading-relaxed pl-8">
                                    {faq.answer}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div id="contact" className="glass-card p-10 md:p-14 relative overflow-hidden bg-white/50">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-secondary to-primary-light" />
                    <ContactForm {...formProps} />
                </div>
            </div>
        </section>
    );
}
