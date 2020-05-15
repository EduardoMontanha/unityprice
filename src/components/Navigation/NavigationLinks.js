import React from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import Cookie from '../common/Cookie';


/**
 * Behaviors
 */
function smoothScroll(e) {
    e.preventDefault();

    //Show/hide menu
    document.querySelector(".nav-links").classList.toggle("show");
    //Hide language selection box
    document.querySelector(".language-selection-box").classList.remove("show");
    //Change nav style
    document.getElementById("navigation").classList.toggle("active");

    let elementId = e.target.getAttribute("href"),
        element = document.querySelector(elementId),
        elementTop = element.offsetTop;

    window.scroll({
        top: elementTop,
        left: 0,
        behavior: 'smooth'
    });
}

function toggleLanguageSelectionMenu() {
    document.querySelector("#navigation .modal").classList.toggle("hide");
}

function changeLanguage(e) {
    let element = e.target;

    //If the customer clicked on the I tag (flag) it will get the parent node
    if (element.tagName === "I") {
        element = element.parentNode;
    }

    let newLanguage = element.getAttribute("href").replace("#", "");

    //Set cookie containing the new language
    Cookie.setCookie('dmAppLanguage', newLanguage, 30);
    //Refresh the page
    window.location.reload(true);
}

function closeModal () {
    
}


/**
 * Components
 */
const OtherLanguages = (props) => {
    const othersLang = props.langs.map((language, index) => 
        <a href={language.href} key={index} onClick={(e) => changeLanguage(e)}>
            <i className={language.flag}></i>
            {language.text}
        </a>
    );

    return(
        <div className="modal hide">
            <div className="close-modal" onClick={closeModal}>&#215;</div>

            <div className="language-selection-box">
                {othersLang}
            </div>
        </div>
    );
}

class NavigationLinks extends React.Component {

    static contextType = LanguageContext;

    render () {
        let navItems = this.context.navigation,
            langSelection = navItems.langSelection;

        return(
            <div className="nav-links">
                <ul>
                    <li className="nav-item">
                        <a href="#product" onClick={(e) => smoothScroll(e)}>{navItems.product}</a>
                    </li>

                    <li className="nav-item">
                        <a href="#material" onClick={(e) => smoothScroll(e)}>{navItems.material}</a>
                    </li>

                    <li className="nav-item">
                        <a href="#work" onClick={(e) => smoothScroll(e)}>{navItems.work}</a>
                    </li>

                    <li className="nav-item">
                        <a href="#others" onClick={(e) => smoothScroll(e)}>{navItems.others}</a>
                    </li>

                    <li className="nav-item">
                        <a href="#price" onClick={(e) => smoothScroll(e)}>{navItems.price}</a>
                    </li>

                    <li className="nav-item">
                        <a href="#contact" onClick={(e) => smoothScroll(e)}>{navItems.contact}</a>
                    </li>

                    <li className="nav-item">
                        <a href="#!" className="current-lang" onClick={toggleLanguageSelectionMenu}>
                            <i className={langSelection.active.flag}></i>
                            <span>{langSelection.active.text}</span>&#8744;
                        </a>

                        <OtherLanguages langs={langSelection.hidden} />
                    </li>
                </ul>
            </div>
        );
    }
}

export default NavigationLinks;