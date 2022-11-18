import React from 'react'
import { NavLink } from 'react-router-dom'

const MainBanner = () => {
  return (
    <section className="main-banner">
    <div className="container c-content">
        <div className="main-banner-sale">
            <h1>Winter Clearance <span>Up to 70% Off</span></h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem apriam eaque ipsa quae ab illo inventore.</p>
            <NavLink to="/products">
              <button className="button-theme-dark"> SHOP NOW</button>       
            </NavLink>    
        </div>
        <div className="main-banner-new-arrivals">
            <h1>New Arrivals</h1>
            <NavLink to="/products">
              <button className="button-theme-dark">SHOP NOW</button>
            </NavLink>
        </div>
    </div>
</section>
  )
}

export default MainBanner