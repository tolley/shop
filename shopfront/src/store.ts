import { createStore, combineReducers } from 'redux';
import { ShopHeaderReducer } from './reducers/ShopHeaderReducer';
import { CartHeaderReducer } from './reducers/CartHeaderReducer';
import { ProductShowroomReducer } from './reducers/ProductShowroomReducer';

const store = createStore(combineReducers({
    shopHeader: ShopHeaderReducer,
    cartHeader: CartHeaderReducer,
    showroom: ProductShowroomReducer
}));

export default store;