import React, { useEffect } from 'react'
import Topmenu from '../sections/Topmenu'
import BannerSmall from '../sections/BannerSmall'
import MainBanner from '../sections/MainBanner'
import OurSpecialty from '../sections/OurSpecialty'
import ProductColumns from '../sections/ProductColumns'
import ProductDisplay from '../sections/ProductDisplay'
import SecondBanner from '../sections/SecondBanner'
import Showcase from '../sections/Showcase'
import ProductGrid from '../sections/ProductGrid'
import { IProductContext, useProductContext } from '../contexts/ProductContext'
import InfoIcons from '../sections/InfoIcons'

const StartPage = () => {
  document.title = 'Fixxo.'
  const {featuredProducts, fetchFeaturedProducts} = useProductContext() as IProductContext

  useEffect(() => {
    fetchFeaturedProducts(8)
  }, [])

  
  return (
    <>
        <Topmenu />
        <Showcase />
        <MainBanner />
        <ProductGrid title="Featured Products" classNameGrid="featured-product-grid" items={featuredProducts} />
        <SecondBanner />
        <OurSpecialty />
        <ProductDisplay />
        <BannerSmall />
        <ProductColumns />
        <InfoIcons />
    </>
  )
}

export default StartPage