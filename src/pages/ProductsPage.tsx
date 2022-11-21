import React, { useEffect } from 'react'
import { IProductContext, useProductContext } from '../contexts/ProductContext'
import ProductGrid from '../sections/ProductGrid'
import SiteTitle from '../sections/SiteTitle'
import Topmenu from '../sections/Topmenu'

const ProductsPage = () => {
  document.title = 'Fixxo. || Products '
  const {products, fetchProducts} = useProductContext() as IProductContext
      
  useEffect(() => {
    fetchProducts(0)
  }, [])

  return (
    <>
        <Topmenu />
        <SiteTitle title="Products" />
        <ProductGrid title="Products" classNameGrid="featured-product-grid" items={products} />
    </>
  )
}

export default ProductsPage