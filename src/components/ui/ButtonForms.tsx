import React from 'react'
import { IButton } from '../../models/uiModels'

const ButtonForms = ({buttontext}:IButton) => {
  return (
    <button className="button-forms">
    {buttontext}
</button>
  )
}

export default ButtonForms