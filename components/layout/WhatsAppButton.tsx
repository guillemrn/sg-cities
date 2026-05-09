'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
    phoneNumber?: string;
    message?: string;
}

export default function WhatsAppButton({
    phoneNumber = '521234567890', // Default placeholder
    message = 'Hola, me gustaría recibir más información sobre sus servicios.'
}: WhatsAppButtonProps) {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-[90] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-shadow hover:shadow-[0_0_20px_rgba(37,211,102,0.6)] md:bottom-12 md:right-12"
            aria-label="Contactar por WhatsApp"
        >
            <div className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" />
            <MessageCircle size={32} fill="currentColor" />
            
            {/* Tooltip for desktop */}
            <span className="absolute right-full mr-4 hidden whitespace-nowrap rounded-lg bg-text px-4 py-2 text-sm font-bold text-white shadow-lg md:block opacity-0 group-hover:opacity-100 transition-opacity">
                ¡Hablemos por WhatsApp!
            </span>
        </motion.a>
    );
}
