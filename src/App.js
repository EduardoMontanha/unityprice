import React from 'react';

import LanguageContextProvider from './context/LanguageContext';

import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Product from './components/Product/Product';


function App() {
    return (
        <LanguageContextProvider>
            <Navigation />
            <Header />
            <main>
                <Product />
            </main>
        </LanguageContextProvider>
    );
}

export default App;