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
            // Calculate the new total price of the items in the cart
            let newTotalPrice = state.totalPrice;
            for(let n = 0; n < action.payload.items.length; ++n) {
                newTotalPrice += action.payload.items[n].price;
            }

            return {
                ...state,
                items: [...state.items, ...action.payload.items],
                totalPrice: newTotalPrice
            };
        
        case 'CART_REMOVE':
            return {
                ...state,
                totalPrice: state.totalPrice -= state.items[action.payload].price,
                items: [
                    ...state.items.slice(0, action.payload),
                    ...state.items.slice(action.payload + 1)
                ]
            };
      
        default:
            return state;
    }

    debugger;
    return state;

    // Switch based on the action's type
    // switch(action.type) {
    //     case 'CART_ADD':
    //         return {
    //             ...state,
    //             items: [...state.items, ...action.payload.items],
    //             totalPrice: 
    //         };
    //         // The return value
    //         const retState = {
    //             ...state,
    //             items: [...state.items, ...action.payload.items]
    //         };

    //         // Calculate the new total price
    //         retState.totalPrice = 0;
    //         for(let n = 0; n < retState.items.length; ++n) {
    //             retState.totalPrice += retState.items[n].price;
    //         }

    //         return retState;
        
    //     case 'CART_REMOVE':
    //         return {};
    //         const retState = {
    //             ...state,
    //             totalPrice: state.totalPrice -= state.items[action.payload].price,
    //             items: [
    //                 ...state.items.slice(0, action.payload),
    //                 ...state.items.slice(action.payload + 1)
    //             ]
    //         };

    //         return retState;
        
    //     default:
    //         return state;
    // }
};
