import React from 'react'
import { IProductContext, useProductContext } from '../contexts/ProductContext'

const AddProductForm = () => {

  const { productRequest, setProductRequest, create, submitted } = useProductContext() as IProductContext

  return (        
    <>
      <form onSubmit={create} className="add-product-form">  
        <h1>Product information</h1>
        <input onChange={(e) => setProductRequest({...productRequest, name: e.target.value})} type="text" className="" placeholder='Name'></input>
        <input onChange={(e) => setProductRequest({...productRequest, category: e.target.value})} type="text" className="" placeholder='Category'></input>
        <input onChange={(e) => setProductRequest({...productRequest, description: e.target.value})} type="text" className="" placeholder='Description'></input>
        <input onChange={(e) => setProductRequest({...productRequest, rating: Number(e.target.value)})} type="text" className="" placeholder='Rating'></input>
        <input onChange={(e) => setProductRequest({...productRequest, price: Number(e.target.value)})} type="text" className="" placeholder='Price'></input>
        <input onChange={(e) => setProductRequest({...productRequest, tag: e.target.value})} type="text" className="" placeholder='Tag'></input>
        <input onChange={(e) => setProductRequest({...productRequest, imageName: e.target.value})} type="text" className="" placeholder='Image url'></input>
        <button type="submit" className="button-forms">ADD PRODUCT</button>
        {
          submitted ? (
            <div>Product added.</div>
          ) : (<></>)
        }
      </form>
    </>
  )
}

export default AddProductForm