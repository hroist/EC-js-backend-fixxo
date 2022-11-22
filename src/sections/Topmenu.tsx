import React, { useState } from 'react'
import MenuLinkCircle from '../components/ui/MenuLinkCircle'
import MenuCircleBtn from '../components/ui/MenuCircleBtn'
import { NavLink, NavLinkProps } from 'react-router-dom'
import ShoppingCart from '../components/ShoppingCart'
import { IShoppingCartContext, useShoppingCart } from '../contexts/ShoppingCartContext'

const Topmenu = () => {

    const {cartQuantity, cartOpen, toggleShoppingCart} = useShoppingCart() as IShoppingCartContext

    // change bg-color on scroll
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true) 
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)

    // Navbar toggle on mobile
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    // Searchbox show on click
    const [showSearch, setShowSearch] = useState(false)
    const toggleSearch = () => {
        setShowSearch(!showSearch)
    }


    return (
        <header className={color ? 'top-menu top-menu-bg' : 'top-menu'}>
        <div className="container">
            <NavLink className="logo" to="/" end>Fixxo.</NavLink>
            <nav className={`navbar ${ showMenu ? "d-block" : "" }`}>
                <NavLink className="nav-item" to="/" end>Home</NavLink>
                <NavLink className="nav-item" to="/categories" end>Categories</NavLink>
                <NavLink className="nav-item" to="/products" >Products</NavLink>
                <NavLink className="nav-item" to="/contacts" end>Contacts</NavLink>
            </nav>
            <div className="menu-links sb-content">
                <MenuLinkCircle aria-label='compare' icon="fa-regular fa-code-compare fa-flip-horizontal" link="/compare" className="collapse-sm" />    
                <MenuLinkCircle aria-label='wishlist' icon="fa-regular fa-heart" badgetext={4} link="/wishlist" /> 
                <MenuCircleBtn aria-label='cart' icon="fa-regular fa-bag-shopping" badgetext={cartQuantity === 0 ? "" : cartQuantity} onClick={toggleShoppingCart} data-testid="shoppingCart"/>
                <ShoppingCart className={`${cartOpen ? "open" : ""}`} />
                <div data-testid="magni-glass" className="search">
                    <MenuCircleBtn  aria-label='search-icon' onClick={toggleSearch} icon="fa-regular fa-magnifying-glass" className={`searchBtn ${ showSearch ? "active" : "" }`} />
                    <MenuCircleBtn aria-label='closeSearch' onClick={toggleSearch} icon="fa-regular fa-xmark" className={`closeBtn ${ showSearch ? "active" : "" }`} />
                </div>
                <MenuCircleBtn onClick={toggleMenu} icon="fa-regular fa-bars" className="navbarToggle" />
            </div>
            <div data-testid="searchbox" /*icon="fa-regular fa-magnifying-glass"*/ className={`searchBox ${ showSearch ? "active" : "" }`}>
                <input type="text" placeholder="Search . . . "/>
            </div>
        </div>
    </header>
    )
}

export default Topmenu