import React, { useState, useContext } from "react";
import { IProduct, IProductRequest } from "../models/ProductsModels";

export interface IProductContext {
    product: IProduct
    setProduct: React.Dispatch<React.SetStateAction<IProduct>>
    products: IProduct[]
    setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>
    filteredProducts: IProduct[]
    featuredProducts: IProduct[]
    flashSaleProducts: IProduct[]
    bestSellingProducts: IProduct[]
    latestProducts: IProduct[]
    topReactedProducts: IProduct[]
    fetchProduct: ( articleNumber: string |undefined ) => void
    fetchProducts: (take: number) => void
    fetchProductsByTag: (tag: string, take?: number) => void
    productRequest: IProductRequest
    setProductRequest: React.Dispatch<React.SetStateAction<IProductRequest>>
    create: (e: React.FormEvent) => void
    update: (e: React.FormEvent) => void
    remove: (articleNumber: string) => void
    submitted: boolean
    setSubmitted: React.Dispatch<React.SetStateAction<boolean>>
}

interface IProductProviderProps {
    children: any
}

const ProductContext = React.createContext<IProductContext | null>(null)

export const useProductContext = () => {
    return useContext(ProductContext)
}

export const ProductProvider = ({ children }: IProductProviderProps ) => {

    const product_default: IProduct = { articleNumber: '', imageName: '', category: '', name: '', price: 0, description: '', rating: 0, tag: ''}
    const productRequest_default: IProductRequest = { imageName: '', category: '', name: '', price: 0, description: '', rating: 0, tag: ''}
    // const url = 'https://win22-webapi.azurewebsites.net/api/products'
    const url = 'http://localhost:5000/api/products'

    const [product, setProduct] = useState<IProduct>(product_default)
    const [products, setProducts] = useState<IProduct[]>([])
    const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([])
    const [featuredProducts, setFeaturedProducts] = useState<IProduct[]>([])
    const [flashSaleProducts, setFlashSaleProducts] = useState<IProduct[]>([])
    const [bestSellingProducts, setBestSellingProducts] = useState<IProduct[]>([])
    const [latestProducts, setLatestProducts] = useState<IProduct[]>([])
    const [topReactedProducts, setTopReactedProducts] = useState<IProduct[]>([])

    const [productRequest, setProductRequest] = useState<IProductRequest>(productRequest_default)
    const [submitted, setSubmitted] = useState<boolean>(false)


    // CREATE PRODUCT
    const create = async (e: React.FormEvent) => {
        e.preventDefault()
    
        const result = await fetch(`${url}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productRequest)
        })
    
        if (result.status === 201){
            setProductRequest(productRequest_default)
            setSubmitted(true)
        } else {
            console.log("error")
        }
      }

    // GET PRODUCTS
    const fetchProduct = async (articleNumber: string | undefined) => {
        const result = await fetch(url + `/${articleNumber}`)
        setProduct(await result.json())
    }

    const fetchProducts = async (take = 3) => {
        let result = await fetch(url + `?take=${take}`);
        setProducts(await result.json())
    }

    const fetchProductsByTag = async ( tag = "", take = 0) => {
        console.log("running fetch products by tag")
        
        if (tag == "featured") {
            let result = await fetch(url + `?tag=${tag}&take=${take}`);
            setFeaturedProducts(await result.json())
            console.log("setting featured products")

        } else if (tag == "flash-sale") {
            let result = await fetch(url + `?tag=${tag}&take=${take}`);
            setFlashSaleProducts(await result.json())
            console.log("setting flash-sale products")

        } else if (tag == "best-selling") {
            let result = await fetch(url + `?tag=${tag}&take=${take}`);
            setBestSellingProducts(await result.json())
            console.log("setting best selling products")

        } else if (tag == "latest") {
            let result = await fetch(url + `?tag=${tag}&take=${take}`);
            setLatestProducts(await result.json())
            console.log("setting latest products")

        } else if (tag == "top-reacted") {
            let result = await fetch(url + `?tag=${tag}&take=${take}`);
            setTopReactedProducts(await result.json())
            console.log("setting topreacted products")

        } else {
            let result = await fetch(url + `?tag=${tag}&take=${take}`);
            setFilteredProducts(await result.json())
            console.log("setting filtered products")
        }
    }
    
    
    // UPDATE PRODUCT
    const update = async (e: React.FormEvent) => {
        e.preventDefault()

        const result = await fetch(`${url}/${product.articleNumber}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
    
        if (result.status === 200){
            console.log("status 200")
            setSubmitted(true)
            setProduct(await result.json())

        }
    }


    // DELETE PRODUCT
    const remove = async (articleNumber: string) => {
        const result = await fetch(`${url}/${articleNumber}`, {
            method: 'delete',
        })
    
        if (result.status === 204)
            setProduct(product_default)
            setSubmitted(true)
      }


    return (
        <ProductContext.Provider value={{ 
                product, 
                setProduct, 
                products,
                setProducts,
                filteredProducts, 
                featuredProducts, 
                flashSaleProducts, 
                bestSellingProducts, 
                latestProducts, 
                topReactedProducts, 
                fetchProduct, 
                fetchProducts, 
                fetchProductsByTag, 
                create, 
                update,
                remove, 
                productRequest, 
                setProductRequest, 
                submitted,
                setSubmitted
                }}>
            {children}
        </ProductContext.Provider>
    );

}
