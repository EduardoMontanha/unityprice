import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Footer from './routes/components/Footer';
import Header from './routes/components/Header';
import Home from './routes/Home/Home';

function App() {
    return (
        <LanguageProvider>
            <BrowserRouter>
                <Header />

                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/sobre" exact component={Home} />
                </Switch>

                <Footer />
            </BrowserRouter>
        </LanguageProvider>
    );
}

export default App;
