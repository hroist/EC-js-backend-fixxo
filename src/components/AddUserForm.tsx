import React from 'react'
import { IUserContext, UserContext } from '../contexts/UserContext'

const AddUserForm = () => {

  const { userRequest, setUserRequest, create } = React.useContext(UserContext) as IUserContext

  return (
    <form onSubmit={create} className="add-product-form">  
        <h3>Create new user</h3>
        <input value={userRequest.firstName} onChange={(e) => setUserRequest({...userRequest, firstName: e.target.value})} type="text" className="" placeholder='First name'></input>
        <input value={userRequest.lastName} onChange={(e) => setUserRequest({...userRequest, lastName: e.target.value})} type="text" className="" placeholder='Last name'></input>
        <input value={userRequest.email} onChange={(e) => setUserRequest({...userRequest, email: e.target.value})} type="email" className="" placeholder='Email'></input>
        <input value={userRequest.password} onChange={(e) => setUserRequest({...userRequest, password: e.target.value})} type="password" className="" placeholder='Password'></input>
        <button type="submit" className="button-forms">ADD USER</button>
    </form>
  )
}

export default AddUserForm