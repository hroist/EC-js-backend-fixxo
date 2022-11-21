import React from 'react'
import SiteTitle from '../sections/SiteTitle'
import Topmenu from '../sections/Topmenu'

const ComparePage = () => {
  document.title = 'Fixxo. || Compare'

  return (
    <>
       <Topmenu />
       <SiteTitle title="Compare" />
    </>
  )
}

export default ComparePage