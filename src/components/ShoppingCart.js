import React from 'react'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import ShoppingCartItem from './ShoppingCartItem'


const ShoppingCart = ({className}) => {
    const { cartItems, toggleShoppingCart } = useShoppingCart()
    
   
  return (

        <div className={`offcanvas-right ${className}`}>
            <button className='close-cart' onClick={toggleShoppingCart}>X</button>
            <h2>
                <i className='fa-regular fa-bag-shopping'></i> Your shopping cart
            </h2>
            <div className='items-box'>
                {
                    cartItems.map(item => (<ShoppingCartItem key={item.articleNumber} item={item} />) )
                }
            </div>
        </div>
        

  )
}

export default ShoppingCart