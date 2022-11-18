import { To } from "react-router-dom"

export interface IButton {
    buttontext: string
  }

export interface ISizeButton {
    size: string | number
}

export interface IMenuCircleBtn {
  className?: string
  badgetext?: string
  icon: string
  onClick?: () => void
}

export interface IMenuLinkCircle {
  icon: string
  badgetext?: number
  className?: string
  link: To
}

export interface IDropdown {
  colors: string[]
}



