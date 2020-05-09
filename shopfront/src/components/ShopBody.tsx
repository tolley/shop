import React, { Component } from 'react';

import ProductShowroom from './ProductShowroom';
import store from '../store';

// The state and props objects for the ShopBody component
type ShopBodyProps = {};
type ShopBodyState = {};

export default class ShopBody extends Component<ShopBodyProps, ShopBodyState> {
    constructor(props: ShopBodyProps) {
        super(props);
    }

    render() {
        let state = store.getState();
        console.log('state in shop body render = ', state);

        return (
            <div id="shopBody">
                Hello!
            </div>
        );
    }

}