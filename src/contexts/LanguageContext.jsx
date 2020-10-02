import React, { useState } from 'react';
import en from '../assets/languages/en.lang.json';
import es from '../assets/languages/es.lang.json';
import fr from '../assets/languages/fr.lang.json';
import it from '../assets/languages/it.lang.json';
import pt from '../assets/languages/pt.lang.json';

export const languageOptions = {
    en: 'English',
    es: 'Español',
    fr: 'Français',
    it: 'Italiano',
    pt: 'Português'
};

export const langsData = {
    en, es, fr, it, pt
};

export const LanguageContext = React.createContext({
    lang: 'pt',
    langData: { pt }
});

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState('pt');

    const context = {
        lang: lang,
        langData: langsData[lang],
        setLanguage: selected => {
            const newLang = languageOptions[selected] ? selected : 'pt';
            setLang(newLang);
            window.localStorage.setItem('up-lang', newLang);
        }
    };

    return(
        <LanguageContext.Provider value={context}>
            {children}
        </LanguageContext.Provider>
    );
}