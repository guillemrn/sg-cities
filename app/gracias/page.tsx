import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Gracias por contactarnos',
    description: 'Gracias por contactar con SG Cities. Nos pondremos en contacto contigo pronto.',
    robots: {
        index: false,
        follow: true,
    },
};

export default function GraciasPage() {
    return (
        <main className="flex min-h-[60vh] items-center justify-center bg-bg-color px-4 py-20">
            <div className="glass-card max-w-2xl p-16 text-center">
                <h1 className="mb-6 font-display text-4xl font-bold md:text-5xl">
                    ¡Gracias por contactarnos!
                </h1>
                <p className="mb-8 text-lg leading-relaxed">
                    Hemos recibido tu mensaje y uno de nuestros expertos se pondrá en contacto contigo lo
                    antes posible.
                </p>
                <Link
                    href="/"
                    className="inline-block rounded-lg bg-primary px-8 py-4 font-bold text-white transition-colors duration-300 hover:bg-button-hover"
                >
                    Volver al inicio
                </Link>
            </div>
        </main>
    );
}
