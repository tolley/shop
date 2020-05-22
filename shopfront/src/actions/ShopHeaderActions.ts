import { ProductType } from '../types';

export interface ShopHeaderState {
    count: number,
    prodTypes: Array<ProductType>
};

export interface ShopHeaderData {
    count: number,
    prodTypes: Array<ProductType>
};

export type ShopHeaderAction =
    { type: 'ADD_MENU_LINKS', payload: ShopHeaderData };


export function addProductType( prodTypes: Array<ProductType> = [] ): ShopHeaderAction {
    let count:number = prodTypes.length;
    return {
        type: 'ADD_MENU_LINKS',
        payload: {
            count: count,
            prodTypes: prodTypes
        }
    };
}
