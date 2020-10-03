import React from 'react';
import { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext';

function ProductDetails() {
    const product = useContext(ProductContext);

    const scrollTo = element => {
        document.querySelector(element).scrollIntoView({ 
            behavior: 'smooth' 
        });
    }

    return(
        <>
            <section id="product-name">
                <div className="container">
                    <h2>O que é o seu produto?</h2>

                    <p>
                        Conte para nós o que é o seu produto.<br />
                        Um exemplo: Bolo de Cenoura.
                    </p>

                    <input type="text" />

                    <div className="scroll-ctas">
                        <button onClick={() => scrollTo("#resources")}>Próximo</button>
                    </div>
                </div>
            </section>

            <section id="resources">
                <div className="container">
                    
                </div>
            </section>
        </>
    );
}

export default ProductDetails;