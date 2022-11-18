import ShoppingCart from "../components/ShoppingCart";

const { createContext, useContext, useState } = require("react");
const ShoppingCartContext  = createContext()

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}


export const ShoppingCartProvider = ({children}) => {

    const [cartItems, setCartItems] = useState([])
    const [cartOpen, setCartOpen] = useState(false)

    const toggleShoppingCart = () => {
        setCartOpen(!cartOpen)
    }

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity, 0
    )

    const getItemQuantity = (articleNumber) => {
        return cartItems.find(item => item.articleNumber === articleNumber)?.quantity || 0
    }

    const incrementQuantity = (cartItem) => { 
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

    const decrementQuantity = (cartItem) => {
        const {articleNumber} = cartItem

        setCartItems(items => {
            if (items.find(item => item.articleNumber === articleNumber).quantity === 1) {
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

    const addMultipleItems = (cartItem, quantity) => {
        const {articleNumber, product} = cartItem

        setCartItems(items => {
            if (items.find(item => item.articleNumber === articleNumber) == null) {
                return [...items, {articleNumber, product, quantity: quantity}]
            } else if(items.find(item => item.articleNumber === articleNumber).quantity > quantity) { 
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

    const removeItem = (articleNumber) => {
        setCartItems(items => {
            return items.filter(item => item.articleNumber !== articleNumber)
        })
    }

    return <ShoppingCartContext.Provider value={{cartOpen, toggleShoppingCart, cartItems, cartQuantity, getItemQuantity, incrementQuantity, decrementQuantity, addMultipleItems, removeItem}}>
        {children}
        <ShoppingCart />
    </ShoppingCartContext.Provider>
}