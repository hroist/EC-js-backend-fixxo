import React from 'react'
import AddUserForm from '../components/AddUserForm'
import UserList from '../components/UserList'
import SiteTitle from '../sections/SiteTitle'
import Topmenu from '../sections/Topmenu'

const AdminPage = () => {
  return (
    <>
        <Topmenu />
        <SiteTitle title="Admin page" />
        <div className="container-small mb-3">
            <AddUserForm/>
            <hr/>
            <UserList />
        </div>
    </>
  )
}

export default AdminPage