import React, { Component } from 'react';
import { ShopHeaderAction } from '../types';
import {
    ADD_MENU_LINKS,
    INCREMENT, 
    DECREMENT,
} from '../actions/types';
import { addIncrement, addDecrement } from '../reducers';

import store from '../store';

// The state and props for the ShopFooter component
type ShopFooterProps = {};
type ShopFooterState = {};

export default class ShopFooter 
    extends Component<ShopFooterProps, ShopFooterState> {

    render() {
        return (
            <div id="shopFooter">
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        );
    }

    increment() {
        store.dispatch(addIncrement());
    }

    decrement() {
        store.dispatch(addDecrement());
    }
}
