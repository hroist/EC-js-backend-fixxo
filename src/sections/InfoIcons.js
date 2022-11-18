import React from 'react'
import IconCard from '../components/IconCard'

const InfoIcons = () => {
  return (
    <section className='info-icons'>
        <div className='container-small'>
            <IconCard icon="fa-regular fa-headset" link="/contacts" title="Customer Support" text="Village did removed enjoyed explain talking." />
            <IconCard icon="fa-regular fa-credit-card" link="/contacts" title="Secured Payment" text="Village did removed enjoyed explain talking." />
            <IconCard icon="fa-regular fa-truck-arrow-right" link="/contacts" title="Free Home Delivery" text="Village did removed enjoyed explain talking." />
            <IconCard icon="fa-regular fa-box" link="/contacts" title="30 Days Return" text="Village did removed enjoyed explain talking." />
        </div>    
    </section>
  )
}

export default InfoIcons