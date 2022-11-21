import React from 'react'
import ProductCard from '../components/ProductCard'
import { IProductGrid } from '../models/ProductsModels'

const ProductGrid = ({ title, classNameCard, classNameSection, classNameGrid, items = [] }:IProductGrid) => {

  return (
    <section className={`product-grid-container txt-c ${classNameSection}`}>
    <h1 className="section-title">{title}</h1>
        <div className={classNameGrid}>
            {
                items.map( product => <ProductCard classNameCard={classNameCard} key={product.articleNumber} item={product} />)
            }                     
        </div>
    </section>
  )
}

export default ProductGrid