import { CART_ADD } from '../actions/types';

import {
    CartHeaderState,
    CartHeaderAction
} from '../types';

let defaultHeaderState: CartHeaderState = {
    totalPrice: 0,
    items: [],
}

export function CartHeaderReducer(state:CartHeaderState, action:CartHeaderAction): CartHeaderState {
    if(!state) {
        return defaultHeaderState
    }

    // Act based on the action type
    switch(action.type) {
        case CART_ADD:
            state.items = action.payload.items;
            break;
    }

    return state;
};