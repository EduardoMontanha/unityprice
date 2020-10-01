import React, { useContext, useEffect, useState } from 'react';

const LanguageContext = React.createContext('');

function LanguageProvider(props) {
    const language = useContext(LanguageContext);
    const [lang, setLang] = useState();

    useEffect(() => {

    }, []);

    return(
        <language.Provider value={lang} setLanguage={setLang}>
            {props.children}
        </language.Provider>
    );
}

export default LanguageProvider;