import React, { useEffect } from 'react'
import { IUser, IUserContext, UserContext } from '../contexts/UserContext'



const UserList = () => {

  const { users, getAll, remove } = React.useContext(UserContext) as IUserContext

  useEffect(() => {
    getAll()
  }, [getAll])

  const removeUser = (id:number) => {
    remove(id)
  }

  return (
    <>
        <h3>List of users</h3>
        {
            users.map((user: IUser) => (<div onClick={() => removeUser(user.id)} key={user.id}>{user.firstName} {user.lastName} {user.email}</div>) )
        }
    </>
  )
}

export default UserList