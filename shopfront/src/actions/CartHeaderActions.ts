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


// export function addProductTypes( prodTypes: Array<ProductType> = [] ): ShopHeaderState {
//     return {
//         type: 'ADD_MENU_LINKS',
//         payload: {
//             count: prodTypes.length,
//             prodTypes: prodTypes
//         }
//     };
// }