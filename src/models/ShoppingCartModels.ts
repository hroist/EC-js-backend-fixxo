import { IProduct } from "./ProductsModels";

export interface IShoppingCartItem {
            product: IProduct;
            articleNumber: string
            quantity: number
}

export interface IShoppingCartItems {
    item: {product: IProduct;
           articleNumber: string
           quantity: number}
}

export interface IShoppingCart {
    className?: string
}

