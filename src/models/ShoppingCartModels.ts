import { FixMeLater } from "./FixMeLater"
import { IProduct } from "./ProductsModels";

export interface IShoppingCartItem {
    item: {
        quantity: number;
        product: IProduct;
    }
}

export interface IShoppingCart {
    item: IShoppingCartItem
    className: string
    cartItems: IShoppingCartItem[]
    incrementQuantity: (cartItem: IShoppingCartItem) => void
    decrementQuantity: (cartItem: IShoppingCartItem) => void
    addMultipleItems: (cartItem: IShoppingCartItem, quantity: number) => void
    removeItem: (cartItem: IShoppingCartItem) => void
    cartQuantity: (cartItem: IShoppingCartItem) => number
    getItemQuantity: (cartItem: IShoppingCartItem) => number
    
}

