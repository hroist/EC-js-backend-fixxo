import React from 'react'
import ButtonForms from './ui/ButtonForms'

const AddProductForm = () => {
  return (        
    <>
      <form className="add-product-form">  
        <h1>Product information</h1>
        <input type="text" className="" placeholder='Article number'></input>
        <input type="text" className="" placeholder='Name'></input>
        <input type="text" className="" placeholder='Category'></input>
        <input type="text" className="" placeholder='Description'></input>
        <input type="text" className="" placeholder='Rating'></input>
        <input type="text" className="" placeholder='Price'></input>
        <input type="text" className="" placeholder='Featured'></input>
        <input type="text" className="" placeholder='Image url'></input>
        <button type="submit" className="button-forms">ADD PRODUCT</button>
      </form>
    </>
  )
}

export default AddProductForm