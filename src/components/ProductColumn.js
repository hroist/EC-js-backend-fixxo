import React from 'react'
import ProductCard from './ProductCard'

export const ProductColumn = ({items = []}) => {
  return (
    <>
    {
        items.map( product => <ProductCard classNameCard="text-right l-content" key={product.articleNumber} item={product} />)
    }                     
    </>
  )
}
