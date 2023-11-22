'use client';

import ListThemes from "@/app/components/Header/Theme/ListThemes/ListThemes";
import {themeIcons} from "@/app/constants/icons";
import {useContext, useEffect, useState} from "react";
import {ThemeContext} from "@/app/components/ThemeProvider/ThemeProvider";
import {IconType} from "react-icons";

export default function Theme() {
    const [isListThemes, setIsListThemes] = useState(false);
    const [currentTheme, setCurrentTheme] = useState<'light' | 'dark' | 'system'>('light');
    const setTheme = useContext(ThemeContext);

    const changeTheme = (theme: string) => {
        setCurrentTheme(theme as 'light' | 'dark' | 'system');
        setTheme(theme);
        setIsListThemes(false);
    }

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');

        setCurrentTheme(currentTheme as 'light' | 'dark' | 'system');
    }, [])

    const createThemeIconComponent = () => {
        const CurrentThemeIcon = themeIcons[currentTheme];
        return <CurrentThemeIcon size={24} onClick={() => setIsListThemes(!isListThemes)} />;
    }

    return (
        <div className='relative'>
            { createThemeIconComponent() }
            {isListThemes && <ListThemes changeTheme={changeTheme}/>}
        </div>
    )
}