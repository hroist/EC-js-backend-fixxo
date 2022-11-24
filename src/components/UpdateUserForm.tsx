import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { IUserContext, UserContext } from '../contexts/UserContext'


const UpdateUserForm = () => {
    const id = useParams()
    const { get, user, setUser, update } = React.useContext(UserContext) as IUserContext

  useEffect(() => {
    get(Number(id))
  }, [get, id])

  return (
    <form onSubmit={update} className="add-product-form">  
    <h3>Update user information</h3>
    <input type="hidden" value={user.id} />
    <input value={user.firstName} onChange={(e) => setUser({...user, firstName: e.target.value})} type="text" className="" placeholder='First name'></input>
    <input value={user.lastName} onChange={(e) => setUser({...user, lastName: e.target.value})} type="text" className="" placeholder='Last name'></input>
    <input value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} type="email" className="" placeholder='Email'></input>
    <button type="submit" className="button-forms">UPDATE USER</button>
</form>
  )
}

export default UpdateUserForm