'use client';

import React, {createContext, useEffect} from "react";

export const ThemeContext = createContext((theme: string) => {});
export default function ThemeProvider({children}: {children: React.ReactNode}) {
    const setTheme = (theme: string) => {
        switch (theme) {
            case 'light':
                localStorage.setItem('theme', theme);
                return document.documentElement.classList.remove('dark');
            case 'dark':
                localStorage.setItem('theme', theme);
                return document.documentElement.classList.add('dark');
            case 'system':
                localStorage.setItem('theme', theme);
                if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    return document.documentElement.classList.add('dark');
                }

                return document.documentElement.classList.remove('dark');
        }
    }

    useEffect(() => {
        const theme = localStorage.getItem('theme');

        switch (theme) {
            case 'light':
                document.documentElement.classList.remove('dark');
                break;
            case 'dark':
                document.documentElement.classList.add('dark');
                break;
            case 'system':
                if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.classList.add('dark');
                    break;
                }

                document.documentElement.classList.remove('dark');
                break;
            default:
                localStorage.setItem('theme', 'light');
        }
    }, [])

    return (
            <ThemeContext.Provider value={setTheme}>
                {children}
            </ThemeContext.Provider>

    );
}