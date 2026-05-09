import Link from 'next/link';

export default function ServiceCTA() {
    return (
        <section className="bg-white px-6 py-32 text-center border-t border-black/5">
            <div className="mx-auto max-w-3xl">
                <h2 className="mb-6 font-display text-4xl font-bold md:text-5xl">¿Interesado en este servicio?</h2>
                <p className="mb-12 text-xl text-text-muted">Hablemos sobre cómo podemos aplicar nuestra experiencia a tu proyecto particular.</p>
                <Link
                    href="/#start-project"
                    className="premium-button"
                >
                    Comenzar un Proyecto
                </Link>
            </div>
        </section>
    );
}
