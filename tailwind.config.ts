import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#61b0bc',
                    light: '#7fc9d4',
                    dark: '#4a8d97',
                },
                secondary: {
                    DEFAULT: '#71a850',
                    light: '#8bc26e',
                    dark: '#5a8640',
                },
                tertiary: '#a5a4a4',
                text: {
                    DEFAULT: '#132124',
                    muted: '#4a5568',
                },
                'card-bg': '#f5f9f7',
                'glass-border': 'rgba(255, 255, 255, 0.3)',
                'button-hover': '#0f5c64',
                'bg-color': 'rgba(97, 176, 188, 0.15)',
            },
            fontFamily: {
                sans: ['var(--font-poppins)', 'sans-serif'],
                display: ['var(--font-outfit)', 'sans-serif'],
            },
            backgroundImage: {
                'glass-gradient':
                    'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.4) 100%)',
                'premium-gradient':
                    'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)',
            },
            boxShadow: {
                'premium': '0 10px 30px -5px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                'premium-hover': '0 20px 40px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
            },
            backdropBlur: {
                glass: '16px',
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'float': 'float 3s ease-in-out infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
        },
    },
    plugins: [],
};

export default config;
