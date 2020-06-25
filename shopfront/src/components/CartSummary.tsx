import React, { Component } from 'react';
import ProductSummary from './ProductSummary';
import { Product } from '../types';

type CartSummaryProps = {
    items: Array<Product>,
    totalPrice: number
};

type CartSummaryState = {
    items: Array<Product>,
    totalPrice: number
};

export default class CartSummary extends Component<CartSummaryProps, CartSummaryState> {
    render() {
        // If there are no items in the cart, show a message stating such
        if(this.props.items.length === 0) {
            return (
                <div className="empty_cart">
                    Your shopping cart is empty.
                </div>
            );
        } else {
            // Otherwise, show each of the items in the cart
            return (
                <div className="product_summary">
                    {this.props.items.map((product, idx) => 
                        <ProductSummary product={product}
                                        cartPos={idx}
                                        key={idx} />
                    )}
                </div>
            );
        }
    }
}