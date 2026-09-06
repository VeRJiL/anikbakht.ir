/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            // Semantic tokens. The RGB triplets live in index.css so a single
            // `.dark` class on <html> repaints the whole site.
            colors: {
                bg: 'rgb(var(--bg) / <alpha-value>)',
                surface: 'rgb(var(--surface) / <alpha-value>)',
                elevated: 'rgb(var(--elevated) / <alpha-value>)',
                line: 'rgb(var(--line) / <alpha-value>)',
                fg: 'rgb(var(--fg) / <alpha-value>)',
                muted: 'rgb(var(--muted) / <alpha-value>)',
                faint: 'rgb(var(--faint) / <alpha-value>)',
                php: 'rgb(var(--php) / <alpha-value>)',
                go: 'rgb(var(--go) / <alpha-value>)',
            },
            fontFamily: {
                display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
            },
            fontSize: {
                '10xl': ['9rem', { lineHeight: '0.88', letterSpacing: '-0.045em' }],
            },
            maxWidth: { content: '72rem' },
            boxShadow: {
                glow: '0 0 0 1px rgb(var(--php) / 0.25), 0 18px 60px -18px rgb(var(--php) / 0.45)',
                'glow-go': '0 0 0 1px rgb(var(--go) / 0.25), 0 18px 60px -18px rgb(var(--go) / 0.4)',
                lift: '0 24px 70px -30px rgb(0 0 0 / 0.65)',
            },
            keyframes: {
                drift: {
                    '0%,100%': { transform: 'translate3d(0,0,0) scale(1)' },
                    '33%': { transform: 'translate3d(6%,-8%,0) scale(1.12)' },
                    '66%': { transform: 'translate3d(-7%,5%,0) scale(0.94)' },
                },
                marquee: {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-50%)' },
                },
                shimmer: {
                    '100%': { transform: 'translateX(200%)' },
                },
                caret: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0 } },
                'float-y': {
                    '0%,100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'fade-up': {
                    from: { opacity: 0, transform: 'translateY(18px)' },
                    to: { opacity: 1, transform: 'none' },
                },
            },
            animation: {
                drift: 'drift 24s ease-in-out infinite',
                marquee: 'marquee var(--marquee-duration, 40s) linear infinite',
                shimmer: 'shimmer 2.4s ease-in-out infinite',
                caret: 'caret 1.05s step-end infinite',
                'float-y': 'float-y 6s ease-in-out infinite',
                'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
            },
        },
    },
    plugins: [],
};
