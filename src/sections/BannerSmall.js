import React from 'react'
import { NavLink } from 'react-router-dom'

const BannerSmall = () => {
  return (
    <section className="banner-small">
        <div className="container-small">
            <div className="banner-content c-content">
                <h1>Up To 70% Off*</h1>
                <h2>Women's, Men's & Kids Winter Fashion</h2>
                <NavLink to="/products">
                  <button className="button-theme-white">FLASH SALE</button>
                </NavLink>
            </div>
        </div>
    </section>
  )
}

export default BannerSmall