export interface ShopHeaderState {
    count: number,
    links: Array<{url: string}>
 };
 
export interface ShopHeaderProps {};

export interface ShopHeaderAction {
    type: string,
    payload: {
        count: number
        links: Array<{url: string}>
    }
};