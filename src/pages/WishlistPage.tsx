import React from 'react'
import SiteTitle from '../sections/SiteTitle'
import Topmenu from '../sections/Topmenu'

const WishlistPage = () => {
  document.title = 'Fixxo. || Wishlist'

  return (
    <>
        <Topmenu />
        <SiteTitle title="Wishlist" />
    </>
  )
}

export default WishlistPage