import React from 'react';

import LanguageContextProvider from './context/LanguageContext';

import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';


function App() {
    return (
        <LanguageContextProvider>
            <Navigation />
            <Header />
            <main>
                
            </main>
        </LanguageContextProvider>
    );
}

export default App;