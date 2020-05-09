import { createStore, combineReducers } from 'redux';
import { ShopHeaderReducer } from './reducers/ShopHeaderReducer'
import { CartHeaderReducer } from './reducers/CartHeaderReducer'

const store = createStore(combineReducers({
    shopHeader: ShopHeaderReducer,
    cartHeader: CartHeaderReducer
}));

export default store;