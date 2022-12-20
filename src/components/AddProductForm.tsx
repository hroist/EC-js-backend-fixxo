import React, { useState } from 'react'
import { IProductContext, useProductContext } from '../contexts/ProductContext'

const AddProductForm = () => {

  const { productRequest, setProductRequest, create, submitted } = useProductContext() as IProductContext

  const validate_string = (value: string) => {
    if (value.length > 1) 
        return null
  }

  const validate_number = (value: number) => {
    if (value > 1) 
        return null
  }

  const [errors, setErrors] = useState({name: "d-none", category: "d-none", price: "d-none"})

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

      if(e.target.name === "name") {
        if(validate_string(value) === null) {
          setErrors({...errors, "name": "d-none"})
        } else {
          setErrors({...errors, "name": ""})
        }
      } else if(e.target.name === "category"){
        if(validate_string(value) === null) {
          setErrors({...errors, "category": "d-none"})
        } else {
          setErrors({...errors, "category": ""})
        }
      } else if(e.target.name === "price"){
        if(validate_number(Number(value)) === null) {
          setErrors({...errors, "price": "d-none"})
        } else {
          setErrors({...errors, "price": ""})
        }
      }
      console.log(errors)  
  }



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if(errors.name === "d-none" && errors.category === "d-none" && errors.price === "d-none"){
      console.log("Validation OK")
      create(e)
    } else {
      console.log("Form validation failed")
    }
  }
  
  return (        
    <>
      <form onSubmit={handleSubmit} className="add-product-form" name="addProductForm">
        <h1>Product information</h1>
        <input onChange={(e) => { handleChange(e); setProductRequest({...productRequest, name: e.target.value })}} type="text" className="" placeholder='Name' required name="name"></input>
        <div className={`invalid-feedback ${errors.name}`}>Please add a name</div>
        <input onChange={(e) => { handleChange(e); setProductRequest({...productRequest, category: e.target.value })}} type="text" className="" placeholder='Category' required name="category"></input>
        <div className={`invalid-feedback ${errors.category}`}>Please add a category</div>
        <input onChange={(e) => setProductRequest({...productRequest, description: e.target.value})} type="text" className="" placeholder='Description'></input>
        <input onChange={(e) => setProductRequest({...productRequest, rating: Number(e.target.value)})} type="text" className="" placeholder='Rating'></input>
        <input onChange={(e) => { handleChange(e); setProductRequest({...productRequest, price: Number(e.target.value) })}} type="text" className="" placeholder='Price' required name="price"></input>
        <div className={`invalid-feedback ${errors.price}`}>Please add a price (a number)</div>
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