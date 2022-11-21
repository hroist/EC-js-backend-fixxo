import React from 'react'

interface IExternalLinkIcon {
  link: string
  icon: string
}

const ExternalLinkIcon = ({link, icon}:IExternalLinkIcon) => {
  return (
    <a href={link} target="_blank"><i className={icon}></i></a>
  )
}

export default ExternalLinkIcon