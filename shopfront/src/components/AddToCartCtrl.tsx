import React, { Component } from 'react';
import { addToCart } from '../actions/CartActions';
import store from '../store';

import { Product } from '../types';

type AddToCartCtrlProps = {
    product: Product
};
type AddToCartCtrlState = {};

export default class AddToCartCtrl extends Component<AddToCartCtrlProps, AddToCartCtrlState> {
    addToCart() {
        // Named reference for the dispatch call
        let product:Product = this.props.product;

        // Dispatch an event to the store
        store.dispatch(addToCart(product));
    }

    render() {
        return (
            <button className="addToCartCtrl" onClick={this.addToCart.bind(this)}>
                Add to Cart
            </button>
        );
    }
}