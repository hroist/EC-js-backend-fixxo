import React, { useContext, useState, createContext, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

export interface IUserContext {
    user: IUser
    setUser: React.Dispatch<React.SetStateAction<IUser>>
    userRequest: IUserRequest
    setUserRequest:  React.Dispatch<React.SetStateAction<IUserRequest>>
    users : IUser[]
    createUser: (e: React.FormEvent) => void
    handleSignIn: (e: React.FormEvent) => void
    userSignin: IUserSignin 
    setUserSignin: React.Dispatch<React.SetStateAction<IUserSignin>> 
    get: (id: number) => void
    getAll: () => void
    update: (e: React.FormEvent) => void
    remove: (id: number) => void
    userCreated: boolean
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

export interface IUserSignin {
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
  const navigate = useNavigate()

  const [user, setUser] = useState<IUser>(user_default)
  const [userRequest, setUserRequest] = useState<IUserRequest>(userRequest_default)
  const [users, setUsers] = useState<IUser[]>([])
  const [userSignin, setUserSignin] = useState<IUserSignin>( {email: "", password: ""})
  const [userCreated, setUserCreated] = useState<boolean>(false)
  
  const createUser = async (e: React.FormEvent) => {
    e.preventDefault()

    const result = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userRequest)
    })

    if (result.status === 201) {
        setUserRequest(userRequest_default)
        setUserCreated(true)
    } else
        console.log("error")
  }

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()

    const result = await fetch('http://localhost:5000/api/auth/signin', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userSignin)
    })

    const data = await result.json()
    console.log(data)

    localStorage.setItem('accessToken', data.accessToken)

    if (result.status === 200){
        setUserSignin({email: "", password: ""})
        navigate('/account', {replace: true})
    } else
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
    <UserContext.Provider value={{user, setUser, userRequest, setUserRequest, users, createUser, userCreated, handleSignIn, userSignin, setUserSignin, get, getAll, update, remove}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider