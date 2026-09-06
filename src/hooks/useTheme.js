import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'theme';

const initialTheme = () => {
    if (typeof window === 'undefined') return 'dark';
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
    // No stored choice: follow the OS, but default to dark — the site is
    // designed dark-first.
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

export const useTheme = () => {
    const [theme, setTheme] = useState(initialTheme);

    useEffect(() => {
        const root = document.documentElement;
        root.classList.toggle('dark', theme === 'dark');
        root.style.colorScheme = theme;
        window.localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);

    const toggleTheme = useCallback(
        () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
        []
    );

    return { theme, isDark: theme === 'dark', toggleTheme };
};
