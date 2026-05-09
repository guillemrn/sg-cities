'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

interface GalleryImage {
    url: string;
    alt: string;
}

interface ServiceGalleryProps {
    images: GalleryImage[];
    title?: string;
}

export default function ServiceGallery({ images, title = 'Proyectos Relacionados' }: ServiceGalleryProps) {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [lightboxSwiper, setLightboxSwiper] = useState<SwiperType | null>(null);

    const openLightbox = (index: number) => {
        if (lightboxSwiper) {
            lightboxSwiper.slideTo(index, 0);
        }
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
    };

    return (
        <div className="service-gallery">
            <h2 className="mb-8 font-display text-4xl font-bold">{title}</h2>

            <div className="gallery-grid grid grid-cols-2 gap-4">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => openLightbox(index)}
                        className="group relative aspect-square overflow-hidden rounded-3xl transition-all duration-500 hover:shadow-premium-hover active:scale-95"
                    >
                        <Image
                            src={image.url}
                            alt={image.alt}
                            fill
                            loading="lazy"
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
                    </button>
                ))}
            </div>

            {/* Lightbox */}
            {isLightboxOpen && (
                <div className="gallery-lightbox fixed inset-0 z-[1000] flex items-center justify-center bg-text/90 transition-opacity duration-300">
                    <button
                        onClick={closeLightbox}
                        className="absolute right-12 top-8 z-10 text-6xl leading-none text-white transition-opacity hover:opacity-70"
                        aria-label="Cerrar galería"
                    >
                        ×
                    </button>

                    <div className="h-4/5 w-11/12">
                        <Swiper
                            modules={[Navigation]}
                            navigation={true}
                            onSwiper={setLightboxSwiper}
                            className="gallery-main h-full w-full [&_.swiper-button-next]:text-primary [&_.swiper-button-prev]:text-primary"
                        >
                            {images.map((image, index) => (
                                <SwiperSlide
                                    key={index}
                                    className="flex items-center justify-center"
                                >
                                    <Image
                                        src={image.url}
                                        alt={image.alt}
                                        width={2070}
                                        height={1380}
                                        className="h-auto max-h-full w-auto max-w-full"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            )}
        </div>
    );
}
