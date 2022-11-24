import React from 'react'
import { IButton } from '../../models/uiModels'

const ButtonForms = ({buttontext, onClick}:IButton) => {
  return (
    <button onClick={onClick} className="button-forms">
      {buttontext}
    </button>
  )
}

export default ButtonForms