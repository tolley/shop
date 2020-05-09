export interface ShopHeaderState {
    count: number,
    prodTypes: Array<ProductType>
 };
 
export interface ShopHeaderProps {};

export interface ShopHeaderAction {
    type: string,
    payload: {
        count: number,
        prodTypes: Array<ProductType>

    }
};

export interface CartHeaderState {
    totalPrice: number,
    items: Array<Product>
};

export interface CartHeaderProps {};

export interface CartHeaderAction {
    type: string,
    payload: {
        items: Array<Product>
    }
};

export interface ProductType {
    id: number,
    name: string,
    prettyName: string,
    description: string,
    image: string
};

export interface Product {
    id: number,
    name: string,
    description: string,
    type: number,
    price: number,
    thumbnail: string,
    action: boolean
};