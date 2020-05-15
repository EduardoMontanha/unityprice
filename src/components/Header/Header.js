import React from 'react';

import { LanguageContext } from '../../context/LanguageContext';


class Header extends React.Component {

    static contextType = LanguageContext;

    render () {
        let headerData = this.context.header;
        
        return(
            <header id="home">
                <div className="container">

                </div>
            </header>
        );
    }
}

export default Header;