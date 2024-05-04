import React, { createContext, useState } from 'react';

export const languageContext = createContext();

export default function LanguageContextProvider({ children }) {
    const [lang, setLang] = useState('en');

    const handletoggle= ()=>{
        setLang( lang === 'en' ? 'ar' :'en')
     }
     
    const direction = lang === 'ar' ? 'rtl' : 'ltr';

    return (
        <languageContext.Provider value={{ lang, setLang, direction ,handletoggle }}>
            {children}
        </languageContext.Provider>
    );
}
