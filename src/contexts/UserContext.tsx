import React, { useContext, useState, createContext } from 'react'
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
    loggedIn: boolean
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
    checkLoggedIn: () => void 
    get: (id: string) => void
    getAll: () => void
    userCreated: boolean
    thisUserId: string
    failedAuth: boolean
}

export interface IUser {
    _id: string
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
    const user_default: IUser = { _id: "", firstName: "", lastName: "", email: ""}
    const userRequest_default: IUserRequest = { firstName: '', lastName: '', email: '', password: ''}
    const navigate = useNavigate()

    const [user, setUser] = useState<IUser>(user_default)
    const [userRequest, setUserRequest] = useState<IUserRequest>(userRequest_default)
    const [users, setUsers] = useState<IUser[]>([])
    const [userSignin, setUserSignin] = useState<IUserSignin>( {email: "", password: ""})
    const [userCreated, setUserCreated] = useState<boolean>(false)
    const [loggedIn, setLoggedIn] = useState<boolean>(false)
    const [thisUserId, setThisUserId] = useState<string>('')
    const [failedAuth, setFailedAuth] = useState<boolean>(false)


    // CREATE USER
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
            setUserCreated(false)
    }

    // SIGN IN
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

        localStorage.setItem('accessToken', data.accessToken)
                    setFailedAuth(false)

        if (result.status === 200){
            setLoggedIn(true)
            const parseJWT:any = (token:any) => {
                if (!token) { return; }
                const base64Url = token.split('.')[1];
                const base64 = base64Url.replace('-', '+').replace('_', '/');
                return JSON.parse(window.atob(base64));
            }
            setThisUserId(parseJWT(data.accessToken).id)
            setUserSignin({email: "", password: ""})
            navigate('/account')
            setFailedAuth(false)
            console.log(failedAuth)
        } else {
            console.log("error")
            setFailedAuth(true)
        }
    }

    // CHECK IF USER IS LOGGED IN
    const checkLoggedIn = () => {
        if (localStorage.getItem('accessToken') && thisUserId !== '') {
            setLoggedIn(true)
        } else {
            setLoggedIn(false)
            localStorage.removeItem('accessToken')
            setThisUserId('')
        }
    }

    // GET USER
    const get = async (id: string) => {
        const result = await fetch(`${apiUrl}/${id}`)
        if (result.status === 200)
            setUser(await result.json())
    }

    // GET ALL USERS
    const getAll = async () => {
        const result = await fetch(`${apiUrl}`)
        if (result.status === 200)
            setUsers(await result.json())
    }

    return (
        <UserContext.Provider value={{  user, 
                                        setUser, 
                                        userRequest, 
                                        setUserRequest, 
                                        users, 
                                        createUser, 
                                        userCreated, 
                                        handleSignIn, 
                                        userSignin, 
                                        setUserSignin,
                                        loggedIn,
                                        setLoggedIn,
                                        checkLoggedIn,
                                        thisUserId,
                                        get, 
                                        getAll, 
                                        failedAuth}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider