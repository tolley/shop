import React, { Component } from 'react';

import AddToCartCtrl from './AddToCartCtrl'; 
import { Product } from '../types';

// The state and props for the ShopFooter component
type ProductCompProps = {
    product: Product
};
type ProductCompState = {};

export default class ProductComp extends Component<ProductCompProps, ProductCompState> {

    render() {
        return (
            <div className="panel panel-info productPanel">
                <div className="panel panel-heading">
                    {this.props.product.name}
                    <AddToCartCtrl product={this.props.product} />
                </div>
                <div className="panel-body">
                    {this.props.product.description}
                </div>
            </div>
        );
    }
}
