import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { ProductProvider } from './contexts/ProductContext';
import About from './routes/About/About';
import Footer from './routes/components/Footer';
import Header from './routes/components/Header';
import Home from './routes/Home/Home';

function App() {
    return (
        <LanguageProvider>
            <ProductProvider>
                <BrowserRouter>
                    <Header />

                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/sobre" exact component={About} />
                    </Switch>

                    <Footer />
                </BrowserRouter>
            </ProductProvider>
        </LanguageProvider>
    );
}

export default App;
