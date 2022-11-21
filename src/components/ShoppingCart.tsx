import React from 'react'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import { FixMeLater } from '../models/FixMeLater'
import { IShoppingCart, IShoppingCartItem } from '../models/ShoppingCartModels'
import ShoppingCartItem from './ShoppingCartItem'


const ShoppingCart = ({className}:IShoppingCart) => {
    const { cartItems, toggleShoppingCart } = useShoppingCart()
    
   
  return (

        <div className={`offcanvas-right ${className}`}>
            <button className='close-cart' onClick={toggleShoppingCart}>X</button>
            <h2>
                <i className='fa-regular fa-bag-shopping'></i> Your shopping cart
            </h2>
            <div className='items-box'>
                {
                    cartItems.map((item:FixMeLater) => (<ShoppingCartItem key={item.articleNumber} item={item} />) )
                }
            </div>
        </div>
        

  )
}

export default ShoppingCart