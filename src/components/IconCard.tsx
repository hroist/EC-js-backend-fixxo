import React from 'react'
import MenuLinkCircle from './ui/MenuLinkCircle'

interface IIconCard {
  icon: string
  link: string
  title: string
  text: string
}

const IconCard = ({icon, link, title, text}:IIconCard) => {
  return (
    <div className='info-icon-card'>
        <MenuLinkCircle icon={icon} link={link} />
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
  )
}

export default IconCard