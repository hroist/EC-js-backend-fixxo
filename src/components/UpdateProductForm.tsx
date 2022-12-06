import React, { useEffect } from 'react'
import { IProductContext, useProductContext } from '../contexts/ProductContext'
import { IProductListItem } from '../models/ProductsModels'


const UpdateProductForm = ( {item}:IProductListItem ) => {
  const { update, product, setProduct, fetchProduct } = useProductContext() as IProductContext

  useEffect(() => {
    fetchProduct(item.articleNumber)
  }, [])

  return (        
    <>
      <form onSubmit={update} className="add-product-form">  
        <h1>Product information</h1>
        <input value={item.articleNumber} readOnly type="text" className="" placeholder={item.articleNumber}></input>
        <input value={product.name} onChange={(e) => setProduct({...item, name: e.target.value})} type="text" className="" placeholder={item.name}></input>
        <input value={product.category} onChange={(e) => setProduct({...item, category: e.target.value})} type="text" className="" placeholder={item.category}></input>
        <input value={product.description} onChange={(e) => setProduct({...item, description: e.target.value})} type="text" className="" placeholder={item.description}></input>
        <input value={product.rating} onChange={(e) => setProduct({...item, rating: Number(e.target.value)})} type="text" className="" placeholder={`"${item.rating}"`}></input>
        <input value={product.price} onChange={(e) => setProduct({...item, price: Number(e.target.value)})} type="text" className="" placeholder={`"${item.price}"`}></input>
        <input value={product.tag} onChange={(e) => setProduct({...item, tag: e.target.value})} type="text" className="" placeholder={item.tag}></input>
        <input value={product.imageName} onChange={(e) => setProduct({...item, imageName: e.target.value})} type="text" className="" placeholder={item.imageName}></input>
        <button type="submit" className="button-forms">UPDATE PRODUCT</button>
      </form>
    </>
  )
}

export default UpdateProductForm