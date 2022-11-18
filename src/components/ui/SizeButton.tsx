import React, { useState } from 'react'
import { ISizeButton } from '../../models/uiModels'

const SizeButton = ({size}:ISizeButton) => {

  return (
      <button className='size-button'>{size}</button>
    )
  }

export default SizeButton