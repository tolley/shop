import React, { Component } from 'react';

import { ProductType, ShopHeaderState } from '../types';
import { RouteComponentProps } from 'react-router-dom';
import store from '../store';
import { addProductTypes } from '../reducers/ShopHeaderReducer';

interface ProductShowroomParams {
    productType: string
}
interface ProductShowroomProps extends RouteComponentProps<ProductShowroomParams> {
    // Matches with the description on the productType, the type
    // of products to display in this showroom
    description: string
};

type ProductShowroomState = {
    prodType: ProductType
};

export default class ProductShowroom extends Component<ProductShowroomProps, ProductShowroomState> {
    constructor(props: ProductShowroomProps) {
        super(props);

        // The default state
        this.state = {
            prodType: {
                id: 0,
                description: 'loading...',
                name: '',
                prettyName: '',
                image: ''
            }
        };

        // Set our product type from the store
        store.subscribe(() => {
            let state:ShopHeaderState = store.getState().shopHeader;
            let ptDesc:string = this.props.match.params.productType.toLowerCase()

            // Get the productType that matches what the user used in the url
            // and load those details into the state
            for(let n = 0; n < state.prodTypes.length; ++n ) {
                if(ptDesc === state.prodTypes[n].name.toLowerCase()) {
                    this.setState({
                        prodType: state.prodTypes[n]
                    });
                }
            }
         });
    }

    render() {
        return (
            <span>
                <b>{this.state.prodType.description}</b>
            </span>
        );
    }
}