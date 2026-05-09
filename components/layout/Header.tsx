'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Nosotros', href: '/#why-sg-cities' },
        { name: 'Servicios', href: '/#solutions' },
        { name: 'Contacto', href: '/#start-project' },
    ];

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 md:px-12',
                scrolled
                    ? 'py-4 bg-white/70 backdrop-blur-xl shadow-premium border-b border-black/5'
                    : 'py-8 bg-transparent'
            )}
        >
            <div className="mx-auto max-w-7xl flex items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="/" className="relative block">
                        <Image
                            src="/images/sg-cities-logo.svg"
                            alt="Logo SG Cities"
                            width={160}
                            height={45}
                            priority
                            className="h-auto w-[140px] md:w-[160px]"
                        />
                    </Link>
                </motion.div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link, i) => (
                        <motion.div
                            key={link.name}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <Link
                                href={link.href}
                                className="text-sm font-bold uppercase tracking-widest text-text/80 transition-colors hover:text-primary relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                            </Link>
                        </motion.div>
                    ))}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Link
                            href="/#start-project"
                            className="rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-primary-dark hover:shadow-premium"
                        >
                            Contactar
                        </Link>
                    </motion.div>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="p-2 md:hidden text-text hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-black/5 shadow-2xl overflow-hidden"
                    >
                        <div className="flex flex-col p-10 gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-2xl font-bold text-text hover:text-primary transition-colors flex items-center justify-between group"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/#start-project"
                                className="rounded-2xl bg-primary py-5 text-center font-bold text-white shadow-premium text-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Iniciar Cotización
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
