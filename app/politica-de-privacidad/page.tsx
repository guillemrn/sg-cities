import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Política de Privacidad',
    description:
        'Consulta nuestra Política de Privacidad y cómo protegemos tus datos personales en SG Cities.',
    alternates: {
        canonical: 'https://sgcities.com/politica-de-privacidad',
    },
};

export default function PrivacidadPage() {
    return (
        <main className="px-4 py-32 md:px-10 lg:px-40">
            <div className="mx-auto max-w-4xl">
                <h1 className="mb-12 font-display text-4xl font-bold md:text-5xl">
                    Política de Privacidad – SG Cities
                </h1>
                <p className="mb-8">
                    <strong>Última actualización:</strong> 16 de mayo de 2025
                </p>

                <section className="space-y-8 text-lg leading-relaxed">
                    <p>
                        En <strong>SG Cities</strong>, nos tomamos en serio la privacidad de tus datos. Esta
                        Política de Privacidad explica qué información recopilamos a través de nuestro
                        formulario, cómo la usamos y qué derechos tienes al respecto.
                    </p>

                    <div>
                        <h2 className="mb-4 font-display text-2xl font-bold">1. ¿Qué información recopilamos?</h2>
                        <p>Recopilamos los siguientes datos personales mediante nuestro formulario:</p>
                        <ul className="mt-4 list-inside list-disc space-y-2">
                            <li>Nombre</li>
                            <li>Correo electrónico</li>
                            <li>Tipo de proyecto</li>
                            <li>Mensaje libre</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-4 font-display text-2xl font-bold">2. ¿Para qué usamos tus datos?</h2>
                        <p>Utilizamos esta información únicamente para:</p>
                        <ul className="mt-4 list-inside list-disc space-y-2">
                            <li>Contactarte y brindarte información sobre nuestros servicios inmobiliarios.</li>
                            <li>Entender tus necesidades y ofrecer atención personalizada.</li>
                            <li>Dar seguimiento a tu solicitud o interés.</li>
                        </ul>
                        <p className="mt-4 font-bold underline">
                            No vendemos ni compartimos tus datos con terceros.
                        </p>
                    </div>

                    <div>
                        <h2 className="mb-4 font-display text-2xl font-bold">
                            3. ¿Dónde se almacenan tus datos?
                        </h2>
                        <p>
                            Los datos se almacenan de forma segura y solo el equipo autorizado de SG Cities tiene
                            acceso a ellos.
                        </p>
                    </div>

                    <div>
                        <h2 className="mb-4 font-display text-2xl font-bold">
                            4. ¿Por cuánto tiempo conservamos tus datos?
                        </h2>
                        <p>
                            Los conservamos mientras sea necesario para dar seguimiento a tu solicitud. Puedes
                            solicitar su eliminación en cualquier momento.
                        </p>
                    </div>

                    <div>
                        <h2 className="mb-4 font-display text-2xl font-bold">5. ¿Cuáles son tus derechos?</h2>
                        <p>
                            Puedes solicitar acceso, corrección o eliminación de tus datos enviando un correo a{' '}
                            <a
                                href="mailto:enrique.delacruz@sgcities.com"
                                className="font-bold underline hover:text-primary"
                            >
                                enrique.delacruz@sgcities.com
                            </a>
                            .
                        </p>
                    </div>

                    <div>
                        <h2 className="mb-4 font-display text-2xl font-bold">6. Consentimiento</h2>
                        <p>Al enviar el formulario, aceptas esta Política de Privacidad.</p>
                    </div>
                </section>
            </div>
        </main>
    );
}
