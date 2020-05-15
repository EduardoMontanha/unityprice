import React from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import shareIcon from '../../assets/images/icons/share-icon.png';


class Header extends React.Component {

    static contextType = LanguageContext;

    render () {
        let headerData = this.context.header;
        
        return(
            <header id="home">
                <div className="container">
                    <h1>
                        {headerData.welcome}
                        <span>Unity Price</span>
                    </h1>

                    <p>{headerData.description}</p>

                    <div>
                        <button id="start-btn">{headerData.start}</button>

                        <button id="share-btn">
                            <span>{headerData.share}</span>
                            <img src={shareIcon} alt="Share"/>
                        </button>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;