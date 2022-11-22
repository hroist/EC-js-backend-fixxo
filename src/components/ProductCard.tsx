import React from 'react'
import { NavLink } from 'react-router-dom'
import { IShoppingCartContext, useShoppingCart } from '../contexts/ShoppingCartContext'
import { IButtonEvent, IProductCard } from '../models/ProductCardModel'
import { currencyFormatter } from '../utilities/currencyFormatter'

const ProductCard = ({item, classNameCard}:IProductCard) => {

    const { incrementQuantity } = useShoppingCart() as IShoppingCartContext

    const addToWishlist = (e: IButtonEvent) => {
        console.log(`${e} added to wishlist`)
    }
    const addToCompare = (e: IButtonEvent) => {
        console.log("added to compare")
    }


  return (
    <>
        <div className={`product-card ${classNameCard}`}>
            <div className="card-image">
                <ul className="card-image-menu">
                    <li>
                        <button onClick={addToWishlist} className="menu-link-circle c-content">
                            <i className="fa-regular fa-heart"></i>
                        </button>
                    </li>
                    <li>
                        <button onClick={addToCompare} className="menu-link-circle c-content">
                            <i className="fa-regular fa-code-compare fa-flip-horizontal"></i>
                        </button>
                    </li>
                    <li>
                        <button data-testid="cartButton" onClick={() => incrementQuantity({articleNumber: item.articleNumber, product: item, quantity: 1})} className="menu-link-circle c-content">
                            <i className="fa-regular fa-bag-shopping"></i>
                        </button>
                    </li>
                </ul>
                <NavLink to={`/products/${item.articleNumber}`}>
                <img src={item.imageName} alt={item.name} />
                </NavLink>
                <NavLink to={`/products/${item.articleNumber}`} className="product-card-quickview">
                    QUICK VIEW
                </NavLink>
                <div className="card-background"></div>
            </div>
            <div className="card-text text-center">
                <h3>{item.category}</h3>
                <NavLink to={`/products/${item.articleNumber}`}>
                <h2 data-testid="product-name">{item.name}</h2>
                </NavLink>
                <div className="card-review-stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <p className="card-original-price">{currencyFormatter(item.price)}</p>
            </div>
        </div>   
    </>
  )
}

export default ProductCard