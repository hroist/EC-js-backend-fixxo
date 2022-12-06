import React from 'react'
import { IProductContext, useProductContext } from '../contexts/ProductContext'
import ButtonForms from './ui/ButtonForms'

const AddProductForm = () => {

  const { productRequest, setProductRequest, create } = useProductContext() as IProductContext

  return (        
    <>
      <form onSubmit={create} className="add-product-form">  
        <h1>Product information</h1>
        <input value={productRequest.name} onChange={(e) => setProductRequest({...productRequest, name: e.target.value})} type="text" className="" placeholder='Name'></input>
        <input value={productRequest.category} onChange={(e) => setProductRequest({...productRequest, category: e.target.value})} type="text" className="" placeholder='Category'></input>
        <input value={productRequest.description} onChange={(e) => setProductRequest({...productRequest, description: e.target.value})} type="text" className="" placeholder='Description'></input>
        <input value={productRequest.rating} onChange={(e) => setProductRequest({...productRequest, rating: Number(e.target.value)})} type="text" className="" placeholder='Rating'></input>
        <input value={productRequest.price} onChange={(e) => setProductRequest({...productRequest, price: Number(e.target.value)})} type="text" className="" placeholder='Price'></input>
        <input value={productRequest.tag} onChange={(e) => setProductRequest({...productRequest, tag: e.target.value})} type="text" className="" placeholder='Tag'></input>
        <input value={productRequest.imageName} onChange={(e) => setProductRequest({...productRequest, imageName: e.target.value})} type="text" className="" placeholder='Image url'></input>
        <button type="submit" className="button-forms">ADD PRODUCT</button>
      </form>
    </>
  )
}

export default AddProductForm