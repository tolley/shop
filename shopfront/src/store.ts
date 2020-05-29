import { createStore, combineReducers } from 'redux';
import { ShopHeaderReducer } from './reducers/ShopHeaderReducer';
import { CartReducer } from './reducers/CartReducer';
import { ProductShowroomReducer } from './reducers/ProductShowroomReducer';

const store = createStore(combineReducers({
    shopHeader: ShopHeaderReducer,
    cart: CartReducer,
    showroom: ProductShowroomReducer
}));

export default store;