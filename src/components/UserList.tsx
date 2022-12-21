import React, { useEffect } from 'react'
import { IUser, IUserContext, UserContext } from '../contexts/UserContext'

const UserList = () => {

  const { users, getAll } = React.useContext(UserContext) as IUserContext

  useEffect(() => {
    getAll()
  }, [])


  console.log(users)

  return (
    <>
        <h3>List of users</h3>
        {
            users.map((user: IUser) => (<div key={user._id}> {user.firstName} {user.lastName} {user.email}</div>) )
        }
    </>
  )
}

export default UserList