import React, { useEffect } from 'react'
import { useProductContext } from '../contexts/ProductContext'
import ProductGrid from './ProductGrid'
import { NavLink } from 'react-router-dom'

const ProductDisplay = () => {

    const {displayProducts, fetchDisplayProducts} = useProductContext()
      
    useEffect(() => {
      fetchDisplayProducts(4)
    }, [])

    return (
            <div className="container">
                <div className="product-grid-large">
                    <div className="display-image-large"> 
                        <h1>2 FOR USD $29</h1>
                        <NavLink to="/products">
                            <button className="button-theme-white">FLASH SALE</button>
                        </NavLink>
                    </div>
                    <ProductGrid classNameCard="text-left" classNameGrid="product-display-grid" classNameSection="product-display-container" items={displayProducts} />
                </div>
                <div className="product-grid-large">
                    <ProductGrid classNameCard="text-left" classNameGrid="product-display-grid" classNameSection="product-display-container" items={displayProducts} />
                    <div className="display-image-large"> 
                        <h1>2 FOR USD $29</h1>
                        <NavLink to="/products">
                            <button className="button-theme-white">FLASH SALE</button>
                        </NavLink>
                    </div>
                </div>
            </div>
    )
}

export default ProductDisplay