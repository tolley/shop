export interface ShopHeaderState {
    count: number,
    prodTypes: Array<ProductType>
 };
 
export interface ShopHeaderProps {};

export interface ShopHeaderAction {
    type: string,
    payload: {
        count: number
        prodTypes: Array<ProductType>
    }
};

export interface ProductType {
    description: string,
    id: number,
    image: string,
    name: string
};