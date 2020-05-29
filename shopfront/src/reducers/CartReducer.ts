import {
    CartAction,
    CartState }
 from '../actions/CartActions';

export function CartReducer(state:CartState, action:CartAction): CartState {
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
            // The return value
            let retState = {
                ...state,
                items: [...state.items, ...action.payload.items]
            };

            // Calculate the new total price
            retState.totalPrice = 0;
            for(let n = 0; n < retState.items.length; ++n) {
                retState.totalPrice += retState.items[n].price;
            }


            return retState;
        
        case 'CART_REMOVE':
            return state;
        
        default:
            return state;
    }
};
