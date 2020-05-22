import React, { Component } from 'react';
import { CartHeaderState } from '../actions/CartHeaderActions';

// import { Product } from '../types';
// import store from '../store';

type CartHeaderProps = {};

export default class CartHeader extends Component<CartHeaderProps, CartHeaderState> {
    constructor(props: CartHeaderProps) {
        super(props);

        this.state = {
            items: [],
            totalPrice: 0
        };
    }

    render() {
        return (
            <span className="CartHeader">
                <div className="fa fa-shopping-cart flip-horizontal" id="minicart">
                </div>
                    
                <div>
                    <span>
                        <b>{this.state.totalPrice}</b> item(s)
                    </span>
                    <span className="cartprice">
                        ${this.state.totalPrice}
                    </span>
                </div>
            </span>
        );
    }
}