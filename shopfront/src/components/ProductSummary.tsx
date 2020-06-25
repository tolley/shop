import React, { Component } from 'react';
import store from '../store';
import { removeFromCart } from '../actions/CartActions';
import { Product } from '../types';

type ProductSummaryProps = {
    product:Product,
    cartPos:number
};
type ProductSummaryState = {};

export default class ProductSummary extends Component<ProductSummaryProps, ProductSummaryState> {
    constructor(props:ProductSummaryProps) {
        super(props);

        this.removeFromCart = this.removeFromCart.bind(this);
    }

    render() {
        return (
            <span className="productSummary">
                <div className="remove fa fa-times-circle" 
                    title={"Remove " + this.props.product.name}
                    onClick={this.removeFromCart}>
                </div>
                <h3>{this.props.product.name}</h3>
                {this.props.product.description.slice(0, 55)}...<br />
                ${this.props.product.price}<br />
            </span>
        );
    }

    removeFromCart() {
        store.dispatch(removeFromCart(this.props.cartPos));
    }
}
