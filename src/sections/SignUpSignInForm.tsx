import React from 'react'
import { NavLink } from 'react-router-dom'
import { IUserContext, UserContext } from '../contexts/UserContext'


const SignUpSignInForm = () => {
    
  const { userRequest, setUserRequest, create } = React.useContext(UserContext) as IUserContext

  return (
    <section className="signup-signin">
        <div className="container-small">
        <h1 className="form-title">Sign in . . .</h1>
            <form>
                <div className="signin-form-box">
                    <div>
                        <input id="signin-email" type="email" placeholder="Your email" />
                    </div>
                    <div>
                        <input id="signin-password" type="password" placeholder="Your password" />
                    </div>
                </div>
                <NavLink to="/account">                
                    <button type="submit" className="button-forms">LOG IN</button>
                </NavLink>
            </form>
            <h1 className="form-title">. . . or sign up</h1>
            <form onSubmit={create}>
                <div className="signup-form-box">
                    <div>
                        <input id="firstName" value={userRequest.firstName} onChange={(e) => setUserRequest({...userRequest, firstName: e.target.value})} type="text" className="" placeholder='First name'></input>
                    </div>
                    <div id="invalid-feedback-firstName" className="invalid-feedback">error message</div>
                    <div>
                        <input id="lastName" value={userRequest.lastName} onChange={(e) => setUserRequest({...userRequest, lastName: e.target.value})} type="text" className="" placeholder='Last name'></input>
                    </div>
                    <div id="invalid-feedback-lastName" className="invalid-feedback">error message</div>

                    <div>
                        <input id="signup-email" value={userRequest.email} onChange={(e) => setUserRequest({...userRequest, email: e.target.value})} type="email" className="" placeholder='Email'></input>
                    </div>
                    <div id="invalid-feedback-email" className="invalid-feedback">error message</div>
                    <div>
                        <input id="signup-password" value={userRequest.password} onChange={(e) => setUserRequest({...userRequest, password: e.target.value})} type="password" className="" placeholder='Password'></input>
                    </div>
                    <div id="invalid-feedback-password" className="invalid-feedback">error message</div>
                </div>
                <button type="submit" className="button-forms">SIGN UP</button>
            </form>
        </div>
    </section>
  )
}

export default SignUpSignInForm