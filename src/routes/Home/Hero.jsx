import React from 'react';
import Text from '../components/Text';

function Hero() {
    const pageId = "hero"

    const scrollNext = () => {
        document.querySelector('#product-name').scrollIntoView({ 
            behavior: 'smooth' 
        });
    }

    return(
        <section id="hero">
            <div className="container">
                <div className="title">
                    <h2><Text pageId={pageId} tid="h2" /></h2>
                    <h1>Unity Price</h1>
                    
                </div>

                <p className="description">
                    <Text pageId={pageId} tid="description" />
                </p>

                <button className="cta-start" onClick={() => scrollNext()}>
                    <Text pageId={pageId} tid="cta" />
                </button>
            </div>
        </section>
    );
}

export default Hero;