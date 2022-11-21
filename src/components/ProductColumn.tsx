import React from 'react'
import { IProducts } from '../models/ProductsModels'
import ProductCard from './ProductCard'

export const ProductColumn = ({items = []}:IProducts) => {
  return (
    <>
    {
        items.map( product => <ProductCard classNameCard="text-right l-content" key={product.articleNumber} item={product} />)
    }                     
    </>
  )
}
