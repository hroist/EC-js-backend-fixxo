import React from 'react'
import { IButton } from '../../models/uiModels'



const ButtonThemeColor = ({buttontext}:IButton) => {
  return (
    <button className="button-theme-color">
        {buttontext}
    </button>
  )
}

export default ButtonThemeColor