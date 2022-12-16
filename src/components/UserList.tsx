import React, { useEffect } from 'react'
import { IUser, IUserContext, UserContext } from '../contexts/UserContext'



const UserList = () => {

  const { users, getAll, remove } = React.useContext(UserContext) as IUserContext

  useEffect(() => {
    getAll()
  }, [])

  const removeUser = (id:string) => {
    remove(id)
  }

  console.log(users)

  return (
    <>
        <h3>List of users</h3>
        {
            users.map((user: IUser) => (<div onClick={() => removeUser(user._id)} key={user._id}> {user.firstName} {user.lastName} {user.email}</div>) )
        }
    </>
  )
}

export default UserList