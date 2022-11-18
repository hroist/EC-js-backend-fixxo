import React from 'react'
import Topmenu from '../sections/Topmenu'

const NotFoundPage = () => {
  window.top.document.title = 'Fixxo. || Page not found'

  return (
    <>
      <Topmenu />
      <div className='page-not-found c-content'>
        <h4>Sorry, page not found.</h4>
        <h3>404</h3>
      </div> 
    </>
   
  )
}

export default NotFoundPage