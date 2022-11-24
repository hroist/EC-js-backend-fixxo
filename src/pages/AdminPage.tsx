import React from 'react'
import SiteTitle from '../sections/SiteTitle'
import Topmenu from '../sections/Topmenu'

const AdminPage = () => {
  return (
    <>
        <Topmenu />
        <SiteTitle title="Admin page" />
        <div className="container-small">
            <p>List of users</p>
            <p>Add user form</p>
        </div>
    </>
  )
}

export default AdminPage