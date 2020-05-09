import { ADD_MENU_LINKS } from '../actions/types';

import {
    ShopHeaderState,
    ShopHeaderAction,
    ProductType
} from '../types';

let defaultHeader: ShopHeaderState = {
    count: 0,
    prodTypes: []
};

export function ShopHeaderReducer(state: ShopHeaderState, action: ShopHeaderAction): ShopHeaderState {
    // Make sure the state is defined to avoid compiler errors
    if(!state) {
        return defaultHeader;
    }

    // Act based on the action type
    switch(action.type) {
        case ADD_MENU_LINKS:
            state.prodTypes = action.payload.prodTypes;
            break;
    }

    return state;
};

export function addProductTypes( prodTypes: Array<ProductType> = [] ) {
    return {
        type: ADD_MENU_LINKS,
        payload: {
            count: prodTypes.length,
            prodTypes: prodTypes
        }
    };
}
