import React from 'react';
import NavigationLinks from './NavigationLinks';
import logo from '../../assets/images/logo.svg';


/**
 * Behaviors
 */
function openMenu() {
    document.getElementById("navigation").classList.toggle("active");
}


/**
 * Components
 */
class Navigation extends React.Component {

    render () {
        return(
            <nav id="navigation">
                <div className="container">
                    <a href="index.html" id="logo">
                        <img src={logo} alt="Logo"/>
                        <span>Unity Price</span>
                    </a>

                    <button className="nav-bar-toggler" onClick={openMenu}>
                        <div id="burger-icon">
                            <div className="bar bar1"></div>
                            <div className="bar bar2"></div>
                            <div className="bar bar3"></div>
                        </div>
                    </button>

                    <NavigationLinks />
                </div>
            </nav>
        );
    }
}

export default Navigation;