import { ReactNode } from "react"

export interface IProduct {
    imageName: string | undefined
    category: string
    articleNumber: string
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