export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export interface TestAction {
    type: string,
}

export interface TestState {
    count: number
};