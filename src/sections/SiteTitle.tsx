import React, { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

interface ISiteTitle {
  title: string
  parentTitle?: string
}

const SiteTitle = ({title, parentTitle}:ISiteTitle) => {
  return (
    <section className="site-title">
        <div className="container-small">
            <div className="sales-banner-thin">
                <p>Get 25% OFF at the Fixxo Selection - Shop Now!</p>
            </div>
            <ul className="site-title-breadcrumb">
                <li><NavLink to="/"><i className="fa-solid fa-house"></i> Home</NavLink></li>
                {parentTitle ? <li>{parentTitle}</li> : ""}
                <li>{title}</li>
            </ul>
        </div>
    </section>
  )
}

export default SiteTitle