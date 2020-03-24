import React, { Component } from 'react';

import store from '../store';

// The state and props objects for the ShopBody component
type ShopBodyProps = {};
type ShopBodyState = {};

export default class ShopBody extends Component<ShopBodyState, ShopBodyProps> {

    render() {
        return (
            <div id="shopBody">
                ShopBody
            </div>
        );
    }

}