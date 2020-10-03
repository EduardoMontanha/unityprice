import React, { useState } from 'react';

export const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
    const [productData, setProductData] = useState({
        name: "",
        yield: 0,
        work: {
            hoursPerDay: 0,
            daysOnWeek: 0,
            productionInMinutes: 0,
            salary: 0
        },
        costs: {
            taxesPercentage: 0,
            commisionPercentage: 0,
            profit: 0,
            fixedCosts: 0,
            otherCosts: []
        },
        resources: [],
        discount: {
            amount: 0,
            quantity: 0
        }
    });

    const context = {
        product: productData,
        setProduct: setProductData
    };

    return(
        <ProductContext.Provider value={context}>
            {children}
        </ProductContext.Provider>
    );
}