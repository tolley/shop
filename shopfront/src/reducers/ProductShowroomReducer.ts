import { ProductType } from '../types';
import {
    ProductShowroomAction,
    ProductShowroomState }
 from '../actions/ProductShowroomAction';

export function ProductShowroomReducer(state:ProductShowroomState, action:ProductShowroomAction): ProductShowroomState {
    // A default state if none was defined
    if(!state) {
        state = {
            prodType: {} as ProductType,
            products: []
        }
    }

    // Switch based on the action's type
    switch(action.type) {
        case 'LOAD_PRODUCTS':
            return {
                ...state,
                prodType: action.payload.prodType,
                products: action.payload.products
            };
    }

    // The case switch above should handle all return values
    // but this is here just in case
    return state;
};
