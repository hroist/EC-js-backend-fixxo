import React,{ useEffect } from 'react'
import { IProductContext, useProductContext } from '../contexts/ProductContext'
import { ProductColumn } from '../components/ProductColumn'
import { IProduct, IProducts } from '../models/ProductsModels'


const ProductColumns = () => {

  const {bestSellingProducts, latestProducts, topReactedProducts, fetchProductsByTag} = useProductContext() as IProductContext

    useEffect(() => {
      fetchProductsByTag("best-selling", 3)
      fetchProductsByTag("latest", 3)
      fetchProductsByTag("top-reacted", 3)
    }, [])

  return (
    <section className="product-columns">
      <div className="container">
        <div className="product-columns-grid">
          <h2 className="column-title">Latest Products</h2>
          <ProductColumn items={bestSellingProducts} />
          <h2 className="column-title">Best Selling Products</h2>
          <ProductColumn items={latestProducts} />           
          <h2 className="column-title">Top Reacted Products</h2>
          <ProductColumn items={topReactedProducts} />
        </div>
      </div>
</section>
  )
}

export default ProductColumns