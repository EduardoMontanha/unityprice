import React from 'react';
import { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext';
import Text from '../components/Text';

function ProductDetails() {
    const product = useContext(ProductContext);
    const pageId = "product-details";
    const pageIdGlobal = "global";

    const scrollTo = element => {
        document.querySelector(element).scrollIntoView({ 
            behavior: 'smooth' 
        });
    }

    return(
        <>
            <section id="product-name">
                <div className="container">
                    <h2><Text pageId={pageId} tid="title" /></h2>
                    
                    <p className="description">
                        <Text pageId={pageId} tid="description" /><br />
                        <Text pageId={pageId} tid="sample" />
                    </p>

                    <input id="name" type="text" placeholder="Pizza" />

                    <div className="scroll-ctas">
                        <button className="next" onClick={() => scrollTo("#resources")}>
                            <Text pageId={pageIdGlobal} tid="cta-next" />
                        </button>
                    </div>
                </div>
            </section>

            <section id="resources">
                <div className="container">
                    <div className="scroll-ctas hide">
                        <button className="prev" onClick={() => scrollTo("#product-name")}>
                            <Text pageId={pageIdGlobal} tid="cta-prev" />
                        </button>
                        <button className="next" onClick={() => scrollTo("")}>
                            <Text pageId={pageIdGlobal} tid="cta-next" />
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProductDetails;