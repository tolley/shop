import { INCREMENT, DECREMENT, TestState, TestAction } from '../actions/types';

const initialState:TestState = {
    count: 0
};

export default function rootReducer(state = initialState, action:TestAction) {
    switch(action.type) {
        case INCREMENT:
            state.count++;
            break;
        case DECREMENT:
            state.count--;
            break;
    }
    return state;
};
