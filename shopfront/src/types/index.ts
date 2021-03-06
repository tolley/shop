export interface ProductType {
    id: string,
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