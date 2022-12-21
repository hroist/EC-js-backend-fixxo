import React, { useState, useEffect } from 'react'
import AddProductForm from '../components/AddProductForm'
import ProductsList from '../components/ProductsList'
import ButtonForms from '../components/ui/ButtonForms'
import SiteTitle from '../sections/SiteTitle'
import Topmenu from '../sections/Topmenu'
import Modal from 'react-modal'
import { IProductContext, useProductContext } from '../contexts/ProductContext'
import { IUserContext, UserContext } from '../contexts/UserContext'
import { NavLink } from 'react-router-dom'

const MyAccountPage = () => {
  
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { setSubmitted } = useProductContext() as IProductContext
  const { thisUserId, get, user, checkLoggedIn, loggedIn } = React.useContext(UserContext) as IUserContext

  const setModalIsOpenToTrue = () => {
      setModalIsOpen(true)
      setSubmitted(false)
  }

  const setModalIsOpenToFalse = () =>{
    setModalIsOpen(false)
    setSubmitted(false)
  }

  useEffect(() => {
    checkLoggedIn()
    get(thisUserId)
  }, [thisUserId, loggedIn, modalIsOpen ])

  const userName = user.firstName
    

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
        { (loggedIn && thisUserId !== '') ? 
        (
          <>
            <Topmenu />
            <SiteTitle title={`My account ${loggedIn ? ` - Logged in as ${userName}` : ""} `} />
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
        : 
        (
          <>
            <div className="container-small c-content mt-3 mb-3">
              <span> You have been logged out. &nbsp; </span> 
              <NavLink to="/login"> Click here to log in again </NavLink>
            </div>
          </>
        )
        }

    </>
    
  )
}

export default MyAccountPage