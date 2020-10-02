import React, { useState, useEffect } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import Text from './Text';
import LanguageSelector from './LanguageSelector';

function Header() {
    const size = useWindowSize();
    const [isMobile, setIsMobile] = useState(true);
    const [hideMenu, setHideMenu] = useState(true);
    const pageId = "header";

    useEffect(() => {
        if (size.width >= 768) {
            setIsMobile(false);
            setHideMenu(false);
        } else {
            setIsMobile(true);
            setHideMenu(true);
        }
    }, [size]);

    const toggleMenu = () => {
        if (isMobile) {
            setHideMenu(!hideMenu);
        }
    }

    return (
        <header className={hideMenu ? '' : 'active'}>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                        <h1>Unity Price</h1>
                    </Link>
                </div>

                <button className={`nav-bar-toggler ${isMobile ? '' : 'hide'}`} onClick={() => toggleMenu()}>
                    <div id="burger-icon">
                        <div className="bar bar1"></div>
                        <div className="bar bar2"></div>
                        <div className="bar bar3"></div>
                    </div>
                </button>

                <nav className={`nav-links ${hideMenu ? 'hide' : ''}`}>
                    <ul>
                        <li className="nav-item">
                            <Link to="/" onClick={() => toggleMenu()}>
                                <Text pageId={pageId} pageType={"navigation"} tid="home" />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sobre" onClick={() => toggleMenu()}>
                                <Text pageId={pageId} pageType={"navigation"} tid="about" />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <LanguageSelector />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;