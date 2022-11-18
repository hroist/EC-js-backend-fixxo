import React from 'react'
import MenuLinkCircle from '../components/ui/MenuLinkCircle'


const IconCard = ({icon, link, title, text}) => {
  return (
    <div className='info-icon-card'>
        <MenuLinkCircle icon={icon} link={link} />
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
  )
}

export default IconCard