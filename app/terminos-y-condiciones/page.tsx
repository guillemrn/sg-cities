import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Términos y Condiciones',
    description:
        'Lee los Términos y Condiciones de uso de SG Cities. Conoce tus derechos, obligaciones y el marco legal de nuestro servicio.',
    alternates: {
        canonical: 'https://sgcities.com/terminos-y-condiciones',
    },
};

export default function TerminosPage() {
    return (
        <main className="px-4 py-32 md:px-10 lg:px-40">
            <div className="mx-auto max-w-4xl">
                <h1 className="mb-12 font-display text-4xl font-bold md:text-5xl">
                    Términos y Condiciones – SG Cities
                </h1>
                <p className="mb-8">
                    <strong>Última actualización:</strong> 16 de mayo de 2025
                </p>

                <section className="space-y-8 text-lg leading-relaxed">
                    <div>
                        <h2 className="mb-4 font-display text-2xl font-bold">1. Uso del sitio</h2>
                        <p>
                            El contenido de este sitio tiene fines informativos sobre nuestros servicios
                            inmobiliarios. Nos reservamos el derecho de modificar el contenido o los servicios sin
                            previo aviso.
                        </p>
                    </div>

                    <div>
                        <h2 className="mb-4 font-display text-2xl font-bold">2. Propiedad intelectual</h2>
                        <p>
                            Todo el contenido de este sitio es propiedad de SG Cities o de sus respectivos
                            titulares. No está permitido su uso sin autorización expresa.
                        </p>
                    </div>

                    <div>
                        <h2 className="mb-4 font-display text-2xl font-bold">3. Responsabilidad del usuario</h2>
                        <p>
                            El usuario se compromete a proporcionar información veraz y a no hacer uso indebido
                            del sitio.
                        </p>
                    </div>

                    <div>
                        <h2 className="mb-4 font-display text-2xl font-bold">4. Enlaces externos</h2>
                        <p>
                            Este sitio puede contener enlaces a terceros. SG Cities no se responsabiliza por su
                            contenido ni por sus políticas de privacidad.
                        </p>
                    </div>

                    <div>
                        <h2 className="mb-4 font-display text-2xl font-bold">5. Protección de datos</h2>
                        <p>
                            El tratamiento de los datos personales se rige por nuestra{' '}
                            <a href="/politica-de-privacidad" className="font-bold underline hover:text-primary">
                                Política de Privacidad
                            </a>
                            .
                        </p>
                    </div>

                    <div>
                        <h2 className="mb-4 font-display text-2xl font-bold">6. Modificaciones</h2>
                        <p>
                            SG Cities puede modificar estos términos en cualquier momento. Te recomendamos
                            revisarlos periódicamente.
                        </p>
                    </div>

                    <div>
                        <h2 className="mb-4 font-display text-2xl font-bold">7. Contacto</h2>
                        <p>
                            Si tienes dudas, contáctanos en{' '}
                            <a
                                href="mailto:enrique.delacruz@sgcities.com"
                                className="font-bold underline hover:text-primary"
                            >
                                enrique.delacruz@sgcities.com
                            </a>
                            .
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}
