import React from 'react'
import SignUpSignInForm from '../sections/SignUpSignInForm'
import SiteTitle from '../sections/SiteTitle'
import Topmenu from '../sections/Topmenu'

const LoginPage = () => {
  return (
    <>
        <Topmenu />
        <SiteTitle title="Login" />
        <SignUpSignInForm />
    </>
  )
}

export default LoginPage