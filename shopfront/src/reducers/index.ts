import { TEST_ACTION, TestAction, TestState } from '../actions/types';

const initialState:TestState = {
    name: 'initial'
};

export default function rootReducer(state = initialState, action:TestAction) {
    return state;
};
