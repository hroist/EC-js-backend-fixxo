import React from 'react'
import SiteTitle from '../sections/SiteTitle'
import Topmenu from '../sections/Topmenu'

const ComparePage = () => {
  window.top.document.title = 'Fixxo. || Compare'

  return (
    <>
       <Topmenu />
       <SiteTitle title="Compare" />
    </>
  )
}

export default ComparePage