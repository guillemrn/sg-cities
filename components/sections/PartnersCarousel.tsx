'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

const partners = [
    { name: 'Gat System', logo: '/images/carrousel/gatsystem.png' },
    { name: 'Gpoukari', logo: '/images/carrousel/gpoukari.PNG' },
    { name: 'Logo EPS', logo: '/images/carrousel/logo eps.png' },
    { name: 'Logo 4', logo: '/images/carrousel/logo4.png' },
    { name: 'Polymetrix', logo: '/images/carrousel/polymetrix.png' },
    { name: 'Universidad de Guadalajara', logo: '/images/carrousel/universidad-de-guadalajara.png' },
];

export default function PartnersCarousel() {
    return (
        <section className="py-20 bg-white border-y border-black/[0.03]">
            <div className="section-container !py-0">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-xs font-bold uppercase tracking-[0.3em] text-text/40 mb-12"
                >
                    Empresas que confían en nosotros
                </motion.p>

                <div className="relative">
                    {/* Mask gradients for smooth edges */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                    <Swiper
                        modules={[Autoplay, FreeMode]}
                        spaceBetween={60}
                        slidesPerView={2}
                        loop={true}
                        freeMode={true}
                        speed={5000}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 3 },
                            768: { slidesPerView: 4 },
                            1024: { slidesPerView: 6 },
                        }}
                        className="partners-swiper py-4"
                    >
                        {partners.map((partner, index) => (
                            <SwiperSlide key={index} className="flex items-center justify-center">
                                <div className="group relative w-full h-12 md:h-16 flex items-center justify-center px-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 hover:scale-110">
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        width={160}
                                        height={60}
                                        className="object-contain"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
