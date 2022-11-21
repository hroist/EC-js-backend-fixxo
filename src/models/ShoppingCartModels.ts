import { FixMeLater } from "./FixMeLater"
import { IProduct } from "./ProductsModels";

export interface IShoppingCartItem {
    item: {
        quantity: number;
        product: IProduct;
    }
}

export interface IShoppingCart {
    className: string
}

