import { Action } from 'redux';

import {
    ADD_MENU_LINKS,
    INCREMENT, 
    DECREMENT,
} from '../actions/types';

import {
    ShopHeaderState,
    ShopHeaderProps,
    ShopHeaderAction
} from '../types';

let defaultHeader: ShopHeaderState = {
    count: 0,
    links: []
}

export default function rootReducer(state = <ShopHeaderState|undefined>defaultHeader, action: ShopHeaderAction): ShopHeaderState {
    // Make sure the state is defined to avoid compiler errors
    if(!state) {
        state = defaultHeader;
    }

    // Act based on the action type
    switch(action.type) {
        case ADD_MENU_LINKS:
            state.links = action.payload.links;
            break;
        case INCREMENT:
            state.count++;
            return state;
            break;
        case DECREMENT:
            state.count--;
            return state;
            break;
    }

    return state;
};

export function addIncrement(): ShopHeaderAction {
    return { type: INCREMENT, payload: defaultHeader };
};

export function addDecrement(): ShopHeaderAction {
    return { type: DECREMENT, payload: defaultHeader };
};

export function addAddMenuLink( link: string ) {
    return {
        type: ADD_MENU_LINKS,
        payload: {
            links: [link]
        }
    };
}