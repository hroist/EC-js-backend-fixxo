import React, { useState } from 'react'
import { IProductListItem } from '../models/ProductsModels'
import { currencyFormatter } from '../utilities/currencyFormatter'
import Modal from 'react-modal'
import UpdateProductForm from './UpdateProductForm'

const ProductListItem = ({item}:IProductListItem) => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue =()=>{
      setModalIsOpen(true)
  }

  const setModalIsOpenToFalse =()=>{
    setModalIsOpen(false)
  }

  const customStyles = {
    overlay: {
      zIndex : "99",
    },

    content: {
      top: '80px',
      left: '20%',
      right: '20%',
      bottom: '80px',
    }
    
  };

  return (
    <div className='product-list-item'>
        <div className='item-image'>
            <img src={item.imageName} alt={item.name} />
        </div>
        <p>{item.name}</p>
        <p>{item.category}</p>
        <p>{item.description}</p>
        <p>{item.rating}</p>
        <p>{item.tag ? "featured" : ""}</p>
        <p>{currencyFormatter(item.price)}</p>
        <div className="edit-remove">
          <button onClick={setModalIsOpenToTrue}><i className='fa-solid fa-pen-to-square'></i></button>
          <Modal appElement={document.getElementById('root') as HTMLElement} style={customStyles} isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)}>
                <button className='close-btn' onClick={setModalIsOpenToFalse}>x</button>
                <UpdateProductForm item={item} />
          </Modal>
          <button ><i className='fa-solid fa-trash'></i></button>
        </div>
    </div>
  )
}

export default ProductListItem