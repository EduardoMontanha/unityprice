import React from 'react';
import Hero from './Hero';
import ProductDetails from './ProductDetails';

function Home() {

    return(
        <>
            <Hero />

            <main>
                <ProductDetails />
            </main>
        </>
    );
}

export default Home;