import React from 'react'
import { IButton } from '../../models/uiModels'

const ButtonThemeWhite = ({buttontext}:IButton) => {
  return (
    <button className="button-theme-white">
    {buttontext}
    </button>
  )
}

export default ButtonThemeWhite