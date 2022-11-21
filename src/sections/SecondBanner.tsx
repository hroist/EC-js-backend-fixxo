import React from 'react'
import { NavLink } from 'react-router-dom'

const SecondBanner = () => {
  return (
    <section className="second-banner container sb-content">
        <div className="second-banner-left">
            <h1>Pamela Reif's<span>Top Picks</span></h1>
            <NavLink to="/products">
              <button className="button-theme-dark"> SHOP NOW</button>  
            </NavLink>         
        </div>
        <div className="second-banner-right">
            <h1>Let's Be<span>Conscious</span></h1>
            <NavLink to="/products">
              <button className="button-theme-white">FLASH SALE</button>
            </NavLink>
        </div>
    </section>
  )
}

export default SecondBanner