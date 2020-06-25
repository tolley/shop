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
        const productTitle = this.props.product.name + ', $' + 
                this.props.product.price;
        
        let productName = this.props.product.name;
        if(this.props.product.name.length > 20) {
            productName = productName.substr(0, 22) + '...';
        }
        return (
            <div className="panel panel-info productPanel">
                <div className="panel panel-heading">
                    <span title={productTitle}>
                        {productName}
                    </span>
                    <span className="product-price">
                        {'$' + this.props.product.price}
                    </span>
                    <AddToCartCtrl product={this.props.product} />
                </div>
                <div className="panel-body">
                    {this.props.product.description}
                </div>
            </div>
        );
    }
}
