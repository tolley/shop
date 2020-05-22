import { Product, ProductType } from '../types';

export interface ProductShowroomState {
    prodType: ProductType,
    products: Array<Product>
};

export interface ProductShowroomData {
    prodType: ProductType,
    products: Array<Product>
};

export type ProductShowroomAction =
    { type: 'LOAD_PRODUCTS', payload: ProductShowroomData };

export function loadProducts(products: Array<Product>): ProductShowroomAction {
    return {
        type: 'LOAD_PRODUCTS',
        payload: {
            prodType: {} as ProductType,
            products: products
        }
    };
}
