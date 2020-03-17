export const TEST_ACTION = 'TEST_ACTION';

export interface TestAction {
    type: typeof TEST_ACTION
    payload: string
};

export interface TestState {
    name: string
};