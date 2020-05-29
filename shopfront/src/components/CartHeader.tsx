import React, { Component } from 'react';
import { CartState } from '../actions/CartActions';

// import { Product } from '../types';
import store from '../store';

type CartProps = {};

export default class CartHeader extends Component<CartProps, CartState> {
    constructor(props: CartProps) {
        super(props);

        this.state = {
            items: [],
            totalPrice: 0
        };

        // Set our product type from the store
        store.subscribe(() => {
            let state:CartState = store.getState().cart;
            this.setState({items: state.items})
            this.setState({totalPrice: state.totalPrice});
        });
    }

    render() {
        return (
            <span className="CartHeader">
                <div className="fa fa-shopping-cart flip-horizontal" id="minicart">
                </div>
                    
                <div>
                    <span>
                        <b>{this.state.items.length}</b> item(s)
                    </span>
                    <span className="cartprice">
                        ${this.state.totalPrice}
                    </span>
                </div>
            </span>
        );
    }
}