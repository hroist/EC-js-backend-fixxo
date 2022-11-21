import React from 'react'
import ExternalLinkIcon from '../components/ExternalLinkIcon'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="social-media c-content">
            <ExternalLinkIcon link="https://facebook.com" icon="fa-brands fa-facebook"/>
            <ExternalLinkIcon link="https://instagram.com" icon="fa-brands fa-instagram"/>
            <ExternalLinkIcon link="https://twitter.com" icon="fa-brands fa-twitter"/>
            <ExternalLinkIcon link="https://google.com" icon="fa-brands fa-google"/>
            <ExternalLinkIcon link="https://linkedin.com" icon="fa-brands fa-linkedin-in"/>
        </div>
        <p className="c-content">2022 Fixxo. All Rights Reserved</p>
    </footer>
  )
}

export default Footer