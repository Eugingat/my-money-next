'use client';

import {useChangeLocale, useCurrentLocale} from "@/locales/client";

export default function Language() {
    const currentLang = useCurrentLocale();
    const setLocale = useChangeLocale();
    const changeLocale = () => {
        switch (currentLang) {
            case 'en':
                return setLocale('ru');
            case 'ru':
                return setLocale('en');
        }
    }

    return (
        <div onClick={changeLocale}>
            <p> {currentLang.toLocaleUpperCase() } </p>
        </div>
    );
}