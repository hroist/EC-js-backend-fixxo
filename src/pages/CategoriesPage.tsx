import React from 'react'
import SiteTitle from '../sections/SiteTitle'
import Topmenu from '../sections/Topmenu'

const CategoriesPage = () => {
  document.title = 'Fixxo. || Categories'

  return (
    <>
        <Topmenu />
        <SiteTitle title="Categories" />
    </>
  )
}

export default CategoriesPage