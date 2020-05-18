import React from 'react';
import { LanguageContext } from '../../context/LanguageContext';


class Product extends React.Component {

    static contextType = LanguageContext;

    render () {
        let productData = this.context.product;

        return(
            <section id="product">
                <div className="container">
                    <h2>{productData.title}</h2>

                    <p className="description">{productData.description}</p>

                    <label htmlFor="prod-name">{productData.nameLabel}</label>
                    <input id="prod-name" type="text" placeholder={productData.namePlaceholder}/>

                    <label htmlFor="prod-yield">{productData.yieldLabel}</label>
                    <input id="prod-yield" type="number" placeholder="3"/>
                    <span>{productData.yieldDescription}</span>
                </div>
            </section>
        );
    }
}

export default Product;