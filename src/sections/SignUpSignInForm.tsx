import React, { useState } from 'react'
import { IUserContext, UserContext } from '../contexts/UserContext'
import { IErrors, IForm } from '../models/SignUpSignInModels'


const SignUpSignInForm = () => {
    
  const { userRequest, setUserRequest, createUser, userCreated, handleSignIn, userSignin, setUserSignin, failedAuth } = React.useContext(UserContext) as IUserContext

  const [errors, setErrors] = useState<IErrors>({} as IErrors)


  const validate = (e: any, form?: IForm |null) => {
      if (e.type === 'submit') {
       const errors: IErrors = {} as IErrors
       errors.firstName = validate_firstName(form!.firstName)
       errors.lastName = validate_lastName(form!.lastName)
       errors.email = validate_email(form!.email)
       errors.password = validate_password(form!.password)
       return errors
   
      } else {
           const {id, value} = e.target as HTMLInputElement
           switch(id) {
                case 'firstName':
                    return validate_firstName(value)
                case 'lastName':
                    return validate_lastName(value)
                case 'email':
                    return validate_email(value)
                case 'password':
                    return validate_password(value)
           }
      }
  }
   
  const validate_firstName = (value: string | undefined) => {
       if (!value){
           return 'Please enter your first name.'
       }
       else if (value.length < 2)
           return 'Please enter a name with at least 2 characters.'
       else
           return null
  }

  const validate_lastName = (value: string | undefined) => {
    if (!value){
        return 'Please enter your last name.'
    }
    else if (value.length < 2)
        return 'Please enter a name with at least 2 characters.'
    else
        return null
  }
   
  const validate_email = (value: string |undefined) => {
       const regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
       
       if (!value)
           return 'Please enter your e-mail address.'
       else if (!regex_email.test(value))
           return 'Please enter a valid e-mail address (e.g. name@domain.com).'
       else
           return null
  }

  const validate_password = (value: string |undefined) => {
    const regex_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    
    if (!value)
        return 'Please enter a password.'
    else if (!regex_password.test(value))
        return 'Please choose a secure password (minimum 8 characters, at least one uppercase letter, one lowercase letter and one number:).'
    else
        return null
}

  const handleChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {id, value} = e.target as HTMLInputElement | HTMLTextAreaElement

    switch(id) {
      case 'firstName':
        setUserRequest({...userRequest, firstName: value})
        break
      case 'lastName':
        setUserRequest({...userRequest, lastName: value})
        break
      case 'email':
        setUserRequest({...userRequest, email: value})
        break
      case 'password':
        setUserRequest({...userRequest, password: value})
        break
    }

    setErrors({...errors, [id]: validate(e)})
  }

  return (
    <section className="signup-signin">
        <div className="container-small">
        <h1 className="form-title">Sign in . . .</h1>

            <form onSubmit={handleSignIn}>
                <div className="signin-form-box">
                    <div>
                        <input id="signin-email" value={userSignin.email} onChange={(e) => setUserSignin({...userSignin, email: e.target.value})} type="email" placeholder="Your email" />
                        <div className={`invalid-feedback ${ failedAuth ? "" : "d-none" }`}>The email address or password is incorrect. </div>
                    </div>
                    <div>
                        <input id="signin-password" value={userSignin.password} onChange={(e) => setUserSignin({...userSignin, password: e.target.value})} type="password" placeholder="Your password" />
                    </div>
                </div>             
                <button type="submit" className="button-forms">LOG IN</button>
            </form>

            {
                userCreated ? (
                    <div>Your account is created and you can now log in! </div> 
                    ) 
                    :
                    (
                    <>
                     <h1 className="form-title">. . . or sign up</h1>
                     <form onSubmit={createUser}>
                        <div className="signup-form-box">
                            <div>
                                <input id="firstName" value={userRequest.firstName} onChange={handleChange} type="text" className={`${ errors.firstName == null ? "" : "error" }`} placeholder='First name'></input>
                                <div id="invalid-feedback-firstName" className={`invalid-feedback ${ errors.firstName == null ? "d-none" : "" }`}>{errors.firstName}</div>
                            </div>
                            <div>
                                <input id="lastName" value={userRequest.lastName} onChange={handleChange} type="text" className={`${ errors.lastName == null ? "" : "error" }`} placeholder='Last name'></input>
                                <div id="invalid-feedback-lastName" className={`invalid-feedback ${ errors.lastName == null ? "d-none" : "" }`}>{errors.lastName}</div>
                            </div>

                            <div>
                                <input id="email" value={userRequest.email} onChange={handleChange} type="email" className={`${ errors.email == null ? "" : "error" }`} placeholder='Email'></input>
                                <div id="invalid-feedback-email" className={`invalid-feedback ${ errors.email == null ? "d-none" : "" }`}>{errors.email}</div>
                            </div>
                            <div>
                                <input id="password" value={userRequest.password} onChange={handleChange} type="password" className={`${ errors.password == null ? "" : "error" }`} placeholder='Password'></input>
                                <div id="invalid-feedback-password" className={`invalid-feedback ${ errors.password == null ? "d-none" : "" }`}>{errors.password}</div>
                            </div>
                        </div>
                        <button type="submit" className="button-forms">SIGN UP</button>
                     </form> 
                    </>)                
            }

        </div>
    </section>
  )
}

export default SignUpSignInForm