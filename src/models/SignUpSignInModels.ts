export interface ILoginForm {
    email: string
    password: string
}

export interface ISignUpForm {
    firstName: string
    lastName: string
    email: string
    password: string
}


export interface IErrors {
    firstName?: string | null
    lastName?: string | null
    email?: string | null
    password?: string | null
}

export interface IForm {
    firstName?: string
    lastName?: string
    email?: string
    password?: string
}