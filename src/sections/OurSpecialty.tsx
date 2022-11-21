import React from 'react'
import placeholder from '../assets/images/placeholders/specialty-card-placeholder.png'
import { NavLink } from 'react-router-dom'

const OurSpecialty = () => {
  return (
    <section className="our-specialty">
        <div className="container">
            <h1 className="section-title txt-c">Our Specialty</h1>
            <div className="our-specialty-grid">
                <div className="specialty-card">
                    <div className="specialty-card-text">
                        <h3>
                            Track Your Order
                        </h3>
                        <NavLink to="/">Get started {">"}</NavLink>
                    </div>
                    <img src={placeholder} alt="Product image placeholder" />
                </div>
                <div className="specialty-card">
                    <div className="specialty-card-text">
                        <h3>
                            Make a Return
                        </h3>
                        <NavLink to="/">Get started {">"}</NavLink>
                    </div>
                    <img src={placeholder} alt="Product image placeholder" />
                </div>
                <div className="specialty-card">
                    <div className="specialty-card-text">
                        <h3>
                            Request a Price Adjustment
                        </h3>
                        <NavLink to="/">Get started {">"}</NavLink>
                    </div>
                    <img src={placeholder} alt="Product image placeholder" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurSpecialty