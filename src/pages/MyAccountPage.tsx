import { useState } from 'react'
import AddProductForm from '../components/AddProductForm'
import ProductsList from '../components/ProductsList'
import ButtonForms from '../components/ui/ButtonForms'
import SiteTitle from '../sections/SiteTitle'
import Topmenu from '../sections/Topmenu'
import Modal from 'react-modal'
import { IProductContext, useProductContext } from '../contexts/ProductContext'

const MyAccountPage = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { setSubmitted } = useProductContext() as IProductContext

  const setModalIsOpenToTrue = () => {
      setModalIsOpen(true)
      setSubmitted(false)
  }

  const setModalIsOpenToFalse = () =>{
    setModalIsOpen(false)
    setSubmitted(false)
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
    <>
      <Topmenu />
      <SiteTitle title="My account" />
      <div className="container-small">
        <ButtonForms onClick={setModalIsOpenToTrue} buttontext='ADD NEW PRODUCT'/>
        <Modal appElement={document.getElementById('root') as HTMLElement} style={customStyles} isOpen={modalIsOpen} onRequestClose={setModalIsOpenToFalse}>
                <button className='close-btn' onClick={setModalIsOpenToFalse}>x</button>
                <AddProductForm/>
        </Modal>
        <h1>All products</h1>
        <ProductsList />
      </div>
    </>
  )
}

export default MyAccountPage