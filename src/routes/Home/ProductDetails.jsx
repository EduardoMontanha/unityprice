import React from 'react';
import { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext';

function ProductDetails() {
    const product = useContext(ProductContext);

    console.log(product);

    return(
        <>
            <section id="product-name">
                <h2></h2>
            </section>
        </>
    );
}

export default ProductDetails;