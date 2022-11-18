import React from 'react'
import Topmenu from '../sections/Topmenu'
import ContactForm from '../sections/ContactForm'
import SiteTitle from '../sections/SiteTitle'
import MapSection from '../sections/MapSection'

const ContactPage = () => {
  window.top.document.title = 'Fixxo. || Contacts'
  
  return (
    <>
        <Topmenu />
        <SiteTitle title="Contacts" />
        <MapSection />
        <ContactForm />

    </>
  )
}

export default ContactPage