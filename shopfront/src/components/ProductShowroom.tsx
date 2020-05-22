import React, { Component } from 'react';

import { Product, ProductType } from '../types';
import { ShopHeaderState } from '../actions/ShopHeaderActions';
import { ProductShowroomState,
         loadProducts } from '../actions/ProductShowroomAction';
import { RouteComponentProps } from 'react-router-dom';
import ProductComp from './ProductComp';
import store from '../store';

interface ProductShowroomParams {
    prodId: string
}
interface ProductShowroomProps extends RouteComponentProps<ProductShowroomParams> {
    prodId: string
};

export default class ProductShowroom extends Component<ProductShowroomProps, ProductShowroomState> {
    // The url used to make product API requests
    private productUrl:string = 'http://' + 
            process.env['REACT_APP_PUBLIC_URL'] + '/api/product';

    private count:number = 0;

    constructor(props: ProductShowroomProps) {
        super(props);

        // The default state
        this.state = {
            prodType: {
                description: 'Loading...'
            } as ProductType,
            products: [] as Array<Product>
        };

        // Set our product type from the store
        store.subscribe(() => {

            this.count++;

            let newState:ProductShowroomState = {
                prodType: {} as ProductType,
                products: [] as Array<Product>
            };
            let storeState = store.getState();

            // If we don't have the product type object, get  it from
            // the list of products using the type id in the url
            if(!this.state.prodType.id) {
                let ptId:string = props.match.params.prodId;
                let shopHeader:ShopHeaderState = storeState.shopHeader;

                // Get the productType that matches what the user used in the url
                // and load those details into the state
                for(let n = 0; n < shopHeader.prodTypes.length; ++n ) {
                    if(ptId == shopHeader.prodTypes[n].id) {
                        newState.prodType = shopHeader.prodTypes[n];
                    }
                }
            } else {
                // Make sure the product type gets set in the state
                newState.prodType = this.state.prodType;
            }

            // Load the products into the state
            let showRoomState:ProductShowroomState = storeState.showroom;
            newState.products = showRoomState.products;
            this.setState(newState);
         });
    }

    componentDidMount() {
        let productUrl: string = this.productUrl + '?type=' 
            + this.props.match.params.prodId;

        fetch(productUrl)
           .then( res => res.json() )
           .then( (json) => {
                store.dispatch(loadProducts(json.data))
           });
     }

    render() {
        return (
            <span>
                <b>{this.state.prodType.prettyName}</b>
                <br />
                {this.state.products.map((product) => {
                    return (
                        <ProductComp product={product} />
                    )
                })}
            </span>
        );
    }
}