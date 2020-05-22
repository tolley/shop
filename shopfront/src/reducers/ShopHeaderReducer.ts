import {
    ShopHeaderAction,
    ShopHeaderState }
from '../actions/ShopHeaderActions';

export function ShopHeaderReducer(state: ShopHeaderState, action: ShopHeaderAction): ShopHeaderState {
    // A default state if none was defined
    if(!state) {
        state = {
            count: 0,
            prodTypes: []
        }
    }

    // Switch based on the action's type
    switch(action.type) {
        case 'ADD_MENU_LINKS':
            return {
                ...state, 
                count: action.payload.prodTypes.length,
                prodTypes: action.payload.prodTypes,
            };
    }

    return state;
};
