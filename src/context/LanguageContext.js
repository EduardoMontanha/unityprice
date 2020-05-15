import React from 'react';
import Cookie from '../components/common/Cookie';

let languageData, //All language data that will be passed
    language = navigator.language.slice(0, 2), //Language that will be shown to the customer
    langCookie = Cookie.getCookie('dmAppLanguage'); //Get cookie data.

//If there is a cookie with the preferred language
if (langCookie)
    language = langCookie;

switch (language) {
    case "en":
        languageData = require('../data/en.lang.json');
        break;

    case "es":
        languageData = require('../data/es.lang.json');
        break;

    case "fr":
            languageData = require('../data/fr.lang.json');
            break;

    case "it":
        languageData = require('../data/it.lang.json');
        break;

    case "pt":
        languageData = require('../data/pt.lang.json');
        break;

    default:
        console.error("The language file you're trying to access doesn't exist!");
        break;
}

//Update HTML language attribute
document.querySelector('html').setAttribute('lang', language);

export const LanguageContext = React.createContext();

class LanguageContextProvider extends React.Component {

    render() {
        return(
            <LanguageContext.Provider value={languageData}>
                {this.props.children}
            </LanguageContext.Provider>
        );
    }
}

export default LanguageContextProvider;