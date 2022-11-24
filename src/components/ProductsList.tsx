import React, { useEffect } from 'react'
import { IProductContext, useProductContext } from '../contexts/ProductContext'
import ProductListItem from './ProductListItem'

const ProductsList = () => {
  const {products, fetchProducts} = useProductContext() as IProductContext
      
  useEffect(() => {
      fetchProducts(0)
  }, [])

  return (
    
    <div>
        <div className="list-headers">
            <h1>Product</h1>
            <h1>Name</h1>
            <h1>Category</h1>
            <h1>Description</h1>
            <h1>Rating</h1>
            <h1>Featured</h1>
            <h1>Price</h1>           
        </div>
        {
            products.map(product => <ProductListItem key={product.articleNumber} item={product} />)
        }
    </div>                     
  )
}

export default ProductsList