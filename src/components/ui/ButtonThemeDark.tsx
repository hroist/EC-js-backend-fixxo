import React from 'react'
import { IButton } from '../../models/uiModels'

const ButtonThemeDark = ({buttontext}:IButton) => {
  return (
    <button className="button-theme-color">
    {buttontext}
    </button>   
  )
}

export default ButtonThemeDark