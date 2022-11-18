import React from 'react'
import SiteTitle from '../sections/SiteTitle'
import Topmenu from '../sections/Topmenu'

const ShoppingCartPage = () => {
  window.top.document.title = 'Fixxo. || Shopping cart'

  return (
    <>
        <Topmenu />
        <SiteTitle title="Shopping cart" />
    </>
  )
}

export default ShoppingCartPage