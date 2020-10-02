import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';

function LanguageSelector() {
    const { lang, setLanguage } = useContext(LanguageContext);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        let defaultLanguage = window.localStorage.getItem('up-lang');

        if (!defaultLanguage) {
            defaultLanguage = window.navigator.language.substring(0, 2);
        }

        setLanguage(defaultLanguage);
    }, [setLanguage]);

    const handleLanguageChange = value => {
        setLanguage(value);
        toggleModal();
    }

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    return(
        <div className="lang-select-box">
            <button className="current-lang" onClick={() => toggleModal()}>
                {lang === "en" ?
                    <i className="flag-icon flag-icon-us"></i> :
                lang === "es" ?
                    <i className="flag-icon flag-icon-es"></i> :
                lang === "fr" ?
                    <i className="flag-icon flag-icon-fr"></i> :
                lang === "it" ?
                    <i className="flag-icon flag-icon-it"></i> :
                    <i className="flag-icon flag-icon-br"></i>}
            </button>

            <div className={`modal ${showModal ? '' : 'hide'}`}>
                <button className="modal-close" onClick={() => toggleModal()}>
                    &times;
                </button>

                <div className="modal-body">
                    <ul>
                        <li>
                            <button onClick={() => handleLanguageChange("pt")}>
                                <i className="flag-icon flag-icon-br"></i>
                                <span>Português</span>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleLanguageChange("es")}>
                                <i className="flag-icon flag-icon-es"></i>
                                <span>Español</span>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleLanguageChange("fr")}>
                                <i className="flag-icon flag-icon-fr"></i>
                                <span>Français</span>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleLanguageChange("it")}>
                                <i className="flag-icon flag-icon-it"></i>
                                <span>Italiano</span>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleLanguageChange("en")}>
                                <i className="flag-icon flag-icon-us"></i>
                                <span>English</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default LanguageSelector;