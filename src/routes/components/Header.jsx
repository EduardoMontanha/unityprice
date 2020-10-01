import React, { useState, useEffect } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

function Header() {
    const size = useWindowSize();
    const [isMobile, setIsMobile] = useState(true);
    const [hideMenu, setHideMenu] = useState(true);

    useEffect(() => {
        if (size.width >= 1024) {
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
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
            </div>

            <button className={`nav-bar-toggler ${isMobile ? '' : 'hide'}`} onClick={toggleMenu}>
                <div id="burger-icon">
                    <div className="bar bar1"></div>
                    <div className="bar bar2"></div>
                    <div className="bar bar3"></div>
                </div>
            </button>

            <nav className={`nav-links ${hideMenu ? 'hide' : ''}`}>
                <ul>
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/sobre">Sobre</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;