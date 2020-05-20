import {
    CartHeaderAction,
    CartHeaderState }
 from '../actions/CartHeaderActions';

import { Product } from '../types';

export function CartHeaderReducer(state:CartHeaderState, action:CartHeaderAction): CartHeaderState {
    // A default state if none was defined
    if(!state) {
        state = {
            items: [],
            totalPrice: 0
        }
    }

    // Switch based on the action's type
    switch(action.type) {
        case 'CART_ADD':
            var totalPrice:number = action.payload.totalPrice + state.totalPrice;
            return {
                ...state, 
                totalPrice: totalPrice,
                items: action.payload.items,
            };
            break;
    }

    return state;
};
