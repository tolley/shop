import React, { Component } from 'react';

import { Product } from '../types';

// The state and props for the ShopFooter component
type ProductCompProps = {
    product: Product
};
type ProductCompState = {};

export default class ProductComp extends Component<ProductCompProps, ProductCompState> {

    render() {
        return (
            <span>
                <h1>{this.props.product.name}</h1>
                <br />
                <p>{this.props.product.description}</p>
            </span>
        );
    }
}
