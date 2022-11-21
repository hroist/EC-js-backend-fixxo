import { ReactNode } from "react"

export interface IProduct {
    articleNumber: string
    imageName: string | undefined
    category: string
    name: string
    price: number
    description?: string
}

export interface IProducts {
    items: IProduct[]
}

export interface IProductDetails {
    item: IProduct
}

export interface IProductGrid {
    title?: string
    classNameCard?: string | undefined
    classNameSection?: string | undefined
    classNameGrid?: string | undefined
    items: IProduct[]
}