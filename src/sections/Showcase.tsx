import React from 'react'
import ButtonThemeColor from '../components/ui/ButtonThemeColor'
import { NavLink } from 'react-router-dom'

const Showcase = () => {
  return (
    <section className="showcase">
      <div className="container">
        <img src="https://win22imgstorage.blob.core.windows.net/images/showcase-img-1.png" alt="Silhuette of woman sitting."/>
        <div className="showcase-text c-content">
            <h1>SALE UP <br/>To 50% Off</h1>
            <p>Online shopping free home delivery over $100</p>
            <NavLink to="/products">
            <ButtonThemeColor buttontext="SHOP NOW" />
            </NavLink>
        </div>
        <img src="https://win22imgstorage.blob.core.windows.net/images/showcase-img-2.png" alt="Silhuette of man sitting down."/>
      </div>
    </section>
  )
}

export default Showcase