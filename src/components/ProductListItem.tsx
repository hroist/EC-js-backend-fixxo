import React from 'react'
import { IProductListItem } from '../models/ProductsModels'
import { currencyFormatter } from '../utilities/currencyFormatter'

const ProductListItem = ({item}:IProductListItem) => {
  return (
    <div className='product-list-item'>
        <div className='item-image'>
            <img src={item.imageName} alt={item.name} />
        </div>
        <p>{item.name}</p>
        <p>{item.category}</p>
        <p>{item.description}</p>
        <p>{item.rating}</p>
        <p>{item.featured ? "Featured" : ""}</p>
        <p>{currencyFormatter(item.price)}</p>
        <div className="edit-remove">
          <button ><i className='fa-solid fa-pen-to-square'></i></button>
          <button ><i className='fa-solid fa-trash'></i></button>
        </div>
    </div>
  )
}

export default ProductListItem