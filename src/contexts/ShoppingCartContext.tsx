import ShoppingCart from "../components/ShoppingCart"
import React, { useState, useContext } from "react";
import { IShoppingCartItem } from "../models/ShoppingCartModels";
import { IProduct } from "../models/ProductsModels";

// cartOpen, toggleShoppingCart, cartItems, cartQuantity, getItemQuantity, incrementQuantity, decrementQuantity, addMultipleItems, removeItem

export interface IShoppingCartContext {
    cartItems: IShoppingCartItem[]
    cartOpen: boolean
    toggleShoppingCart: () => void
    cartQuantity: number
    getItemQuantity: (articleNumber:string) => number
    incrementQuantity: (cartItem: IShoppingCartItem) => void
    decrementQuantity: (cartItem: IShoppingCartItem) => void
    addMultipleItems: (cartItem: IShoppingCartItem, quantity: number) => void
    removeItem: (articleNumber:string) => void
}

interface IShoppingCartProviderProps {
    children: any
}


// const { createContext, useContext, useState } = require("react");
const ShoppingCartContext  = React.createContext<IShoppingCartContext | null>(null)

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}


export const ShoppingCartProvider = ({children}: IShoppingCartProviderProps) => {

    const [cartItems, setCartItems] = useState<IShoppingCartItem[]>([]) 
    const [cartOpen, setCartOpen] = useState<boolean>(false)

    const toggleShoppingCart = () => {
        setCartOpen(!cartOpen)
    }

    const cartQuantity = cartItems.reduce(
        (quantity: number, item: IShoppingCartItem) => item.quantity + quantity, 0
    )

    const getItemQuantity = (articleNumber: string) => {
        return cartItems.find(item => item.articleNumber === articleNumber)?.quantity || 0
    }

    const incrementQuantity = (cartItem: IShoppingCartItem) => { 
        const {articleNumber, product} = cartItem

        setCartItems(items => {
            if (items.find(item => item.articleNumber === articleNumber) == null) {
                return [...items, {articleNumber, product, quantity: 1}]
            } else {
                return items.map(item => {
                    if (item.articleNumber === articleNumber) {
                        return {...item, quantity: item.quantity + 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const decrementQuantity = (cartItem: IShoppingCartItem) => {
        const {articleNumber} = cartItem

        setCartItems(items => {
            if (items.find(item => item.articleNumber === articleNumber)?.quantity === 1) {
                return items.filter(item => item.articleNumber !== articleNumber)
            } else {
                return items.map(item => {
                    if (item.articleNumber === articleNumber) {
                        return {...item, quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const addMultipleItems = (cartItem: IShoppingCartItem, quantity: number) => {
        const {articleNumber, product} = cartItem

        setCartItems(items => {
            const thisItem = items.find(item => item.articleNumber === articleNumber)

            if (thisItem == null) {
                return [...items, {articleNumber, product, quantity: quantity}]
            } else if (thisItem.quantity > quantity) { 
                return items.map(item => {
                    if (item.articleNumber === articleNumber) {
                        return {...item, quantity: quantity}
                    } else {
                        return item
                    }
                })
                
            } else {
                return items.map(item => {
                    if (item.articleNumber === articleNumber) {
                        return {...item, quantity: item.quantity + quantity}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const removeItem = (articleNumber: string) => {
        setCartItems(items => {
            return items.filter(item => item.articleNumber !== articleNumber)
        })
    }

    return <ShoppingCartContext.Provider value={{cartOpen, toggleShoppingCart, cartItems, cartQuantity, getItemQuantity, incrementQuantity, decrementQuantity, addMultipleItems, removeItem}}>
        {children}
        <ShoppingCart />
    </ShoppingCartContext.Provider>
}