import React, { useContext, useState, createContext } from 'react'

export interface IUserContext {
    user: IUser
    setUser: React.Dispatch<React.SetStateAction<IUser>>
    userRequest: IUserRequest
    setUserRequest:  React.Dispatch<React.SetStateAction<IUserRequest>>
    users : IUser[]
    create: (e: React.FormEvent) => void
    get: (id: number) => void
    getAll: () => void
    update: (e: React.FormEvent) => void
    remove: (id: number) => void
    
}

export interface IUser {
    id: number
    firstName: string
    lastName: string 
    email: string 
}

export interface IUserRequest {
    firstName: string
    lastName: string 
    email: string 
    password: string    
}

export interface IUserProviderProps {
    children : any
}

export const UserContext = createContext<IUserContext |null>(null)
export const useUserContext = () => { return useContext(UserContext)}

const UserProvider = ({children}:IUserProviderProps) => {
  const apiUrl = 'http://localhost:5000/api/users'
  const user_default: IUser = { id: 0, firstName: "", lastName: "", email: ""}
  const userRequest_default: IUserRequest = { firstName: '', lastName: '', email: '', password: ''}

  const [user, setUser] = useState<IUser>(user_default)
  const [userRequest, setUserRequest] = useState<IUserRequest>(userRequest_default)
  const [users, setUsers] = useState<IUser[]>([])

  const create = async (e: React.FormEvent) => {
    e.preventDefault()

    const result = await fetch(`${apiUrl}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userRequest)
    })

    if (result.status === 201)
        setUserRequest(userRequest_default)
    else
        console.log("error")
  }

  const get = async (id: number) => {
    const result = await fetch(`${apiUrl}/${id}`)
    if (result.status === 200)
        setUser(await result.json())
  }

  const getAll = async () => {
    const result = await fetch(`${apiUrl}`)
    if (result.status === 200)
        setUsers(await result.json())
  }

  const update = async (e: React.FormEvent) => {
    e.preventDefault()

    const result = await fetch(`${apiUrl}/${user.id}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })

    if (result.status === 200)
        setUser(await result.json())
  }
  
  const remove = async (id: number) => {
    const result = await fetch(`${apiUrl}/${id}`, {
        method: 'delete',
    })

    if (result.status === 204)
        setUser(user_default)
  }

  return (
    <UserContext.Provider value={{user, setUser, userRequest, setUserRequest, users, create, get, getAll, update, remove}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider