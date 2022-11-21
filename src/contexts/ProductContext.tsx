import React, { useState, useContext } from "react";
import { FixMeLater } from "../models/FixMeLater";
import { IProduct } from "../models/ProductsModels";

export interface IProductContext {
    product: FixMeLater
    products: IProduct[]
    featuredProducts: IProduct[]
    displayProducts: IProduct[]
    fetchProduct: ( articleNumber: string |undefined ) => void
    fetchProducts: (take: number) => void
    fetchFeaturedProducts: (take: number) => void
    fetchDisplayProducts: (take: number) => void
}

interface IProductProviderProps {
    children: any
}

const ProductContext = React.createContext<IProductContext | null>(null)

export const useProductContext = () => {
    return useContext(ProductContext)
}

export const ProductProvider = ({ children }: IProductProviderProps ) => {

    const url = 'https://win22-webapi.azurewebsites.net/api/products'
    const [product, setProduct] = useState<string>("")
    const [products, setProducts] = useState<IProduct[]>([])
    const [featuredProducts, setFeaturedProducts] = useState<IProduct[]>([])
    const [displayProducts, setDisplayProducts] = useState<IProduct[]>([])

    const fetchProduct = async (articleNumber: string | undefined) => {
        const result = await fetch(url + `/${articleNumber}`)
        setProduct(await result.json())
    }

    const fetchProducts = async (take = 3) => {
        let result = await fetch(url + `?take=${take}`);
        setProducts(await result.json())
    }

    const fetchFeaturedProducts = async (take = 8) => {
        let result = await fetch(url + `?take=${take}`);
        setFeaturedProducts(await result.json())
    }

    const fetchDisplayProducts = async (take = 4) => {
        let result = await fetch(url + `?take=${take}`);
        setDisplayProducts(await result.json())
    }

    return (
        <ProductContext.Provider value={{ product, products, featuredProducts, displayProducts, fetchProduct, fetchProducts, fetchFeaturedProducts, fetchDisplayProducts }}>
            {children}
        </ProductContext.Provider>
    );

}
