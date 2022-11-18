import React from 'react'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import { currencyFormatter } from '../utilities/currencyFormatter';

const ShoppingCartItem = ({item}) => {
    const { incrementQuantity, decrementQuantity, removeItem } = useShoppingCart();

  return (
    <div className='shoppingcart-item'>
        <div className='item-image'>
            <img src={item.product.imageName} alt={item.product.name} />
        </div>
        <div className='item-info'>
            <span data-testid="itemNameInShoppingCart" className="item-info-name">{item.product.name}</span>
            <div className="quantity-counter">
                <button onClick={() => decrementQuantity(item)} className='decrease c-content'>
                    -
                </button>
                <div data-testid="quantity" className='counter-number c-content'>
                    {item.quantity}
                </div>
                <button data-testid="increment" onClick={() => incrementQuantity(item)} className='increase c-content'>
                    +
                </button>
            </div>
        </div>
        <div className='item-price'>
            <div><p>{currencyFormatter(item.product.price * item.quantity)}</p></div>
            <button onClick={() => removeItem(item.product.articleNumber)}><i className='fa-solid fa-trash'></i></button>
        </div>
    </div>
  )
}

export default ShoppingCartItem