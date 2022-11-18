import React from 'react'
import { NavLink } from 'react-router-dom'
import { IMenuLinkCircle } from '../../models/uiModels'

const MenuLinkCircle = ({icon, badgetext, className, link}:IMenuLinkCircle) => {
  return (    
    <NavLink className={`menu-link-circle c-content ${className}`} to={link}>
      <span className="position-absolute badge" >
          {badgetext}
      </span>
      <i className={icon}></i>
    </NavLink>
  )
}

export default MenuLinkCircle