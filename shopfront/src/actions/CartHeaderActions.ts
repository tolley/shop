import { Product } from '../types';

export interface CartHeaderState {
    items: Array<Product>,
    totalPrice: number
};

export interface CartHeaderData {
    items: Array<Product>,
    totalPrice: number
};

export type CartHeaderAction =
    { type: 'CART_ADD', payload: CartHeaderData };
    // | { type: 'OTHERACTION', payload: Other }
