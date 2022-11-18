import React from 'react'
import { IMenuCircleBtn } from '../../models/uiModels'

const MenuCircleBtn = ({className, badgetext, icon, onClick}:IMenuCircleBtn) => {
  return (
    <div onClick={onClick} className={`menu-link-circle c-content ${className}`}>
        <span className="position-absolute badge" data-testid="badgetext">
            {badgetext}
        </span>
        <i className={icon}></i>
  </div>
  )
}

export default MenuCircleBtn