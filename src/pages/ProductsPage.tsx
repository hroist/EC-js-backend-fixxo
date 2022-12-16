import React, { useEffect, useState } from 'react'
import { IProductContext, useProductContext } from '../contexts/ProductContext'
import ProductGrid from '../sections/ProductGrid'
import SiteTitle from '../sections/SiteTitle'
import Topmenu from '../sections/Topmenu'


const ProductsPage = () => {
  document.title = 'Fixxo. || Products '
  const { submitted, GQLproducts, getProductsGQL, getProductsQuery } = useProductContext() as IProductContext


  useEffect(() => {
      getProductsGQL()
  }, [submitted, getProductsQuery])

  return (
    <>
        <Topmenu />
        <SiteTitle title="Products" />
        <ProductGrid title="Products" classNameGrid="featured-product-grid" items={GQLproducts} />
    </>
  )
}

export default ProductsPage

