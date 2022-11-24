import React from 'react'
import { NavLink } from 'react-router-dom'

const SignUpSignInForm = () => {


  return (
    <section className="signup-signin">
        <div className="container-small">
        <h1 className="form-title">Sign in . . .</h1>
            <form noValidate>
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
            <form noValidate>
                <div className="signup-form-box">
                    <div>
                        <input id="firstName" type="text" placeholder="First name" />
                    </div>
                    <div id="invalid-feedback-firstName" className="invalid-feedback">error message</div>
                    <div>
                        <input id="lastName" type="text" placeholder="Last name" />
                    </div>
                    <div id="invalid-feedback-lastName" className="invalid-feedback">error message</div>

                    <div>
                        <input id="signup-email" type="email" placeholder="Your email" />
                    </div>
                    <div id="invalid-feedback-email" className="invalid-feedback">error message</div>
                    <div>
                        <input id="signup-password" type="password" placeholder="Your password" />
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