import { Product } from '../types';

export interface CartState {
    items: Array<Product>,
    totalPrice: number
};

export interface CartData {
    items: Array<Product>
};

export type CartAction =
    { type: 'CART_ADD', payload: CartData } |
    { type: 'CART_REMOVE', payload: CartData };

// Adds product to the shopping cart
export function addToCart(product:Product): CartAction {
    return {
        type: 'CART_ADD',
        payload: {
            items: [product]
        }
    };
}

// Removes product from the shopping cart, assuming it's in the cart
// If it's not in the cart, the current state is returned unchanged
export function removeFromCart(product:Product): CartAction {
    return {
        type: 'CART_REMOVE',
        payload: {
            items: [product]
        }
    };
}