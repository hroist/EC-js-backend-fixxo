import React, { useState, useContext } from "react";
import { IProduct, IGQLProduct, IProductRequest } from "../models/ProductsModels";
import { useQuery, gql, QueryResult, OperationVariables } from "@apollo/client";

export interface IProductContext {
    product: IProduct
    setProduct: React.Dispatch<React.SetStateAction<IProduct>>
    products: IProduct[]
    setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>
    GQLproducts: IProduct[]
    getProductsQuery: QueryResult<IGQLProduct, OperationVariables>
    filteredProducts: IProduct[]
    featuredProducts: IProduct[]
    flashSaleProducts: IProduct[]
    bestSellingProducts: IProduct[]
    latestProducts: IProduct[]
    topReactedProducts: IProduct[]
    fetchProduct: ( articleNumber: string |undefined ) => void
    fetchProducts: (take: number) => void
    getProductsGQL: () => void
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
    const [GQLproducts, setGQLProducts] = useState<IProduct[]>([])
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
        
        const validation = e.target
        console.log(validation)

        const result = await fetch(`${url}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(productRequest)
        })
    
        if (result.status === 201){
            setProductRequest(productRequest_default)
            setSubmitted(true)
            console.log(`Product created`)
        } else {
            console.log("error")
        }
      }

    // GET PRODUCTS

    // with GraphQL (get all products) 
    const GET_PRODUCTS_QUERY = gql`{ products { _id, name, price, description, tag, category, price, rating, imageName }}`
    const getProductsQuery = useQuery(GET_PRODUCTS_QUERY, {pollInterval: 500})
  
    const getProductsGQL = () => {
        
        if(getProductsQuery.loading) return console.log("loading...")
        if(getProductsQuery.error) return console.log("Error")
        else {
            const result:IGQLProduct[] = getProductsQuery.data.products
            const res_products:IProduct[] = result.map(item => ({...item, articleNumber: item._id}))
            setGQLProducts(res_products)
        }
        
    }

    // with Express JS API (get by tag and ID)
    const fetchProduct = async (articleNumber: string | undefined) => {
        const result = await fetch(url + `/${articleNumber}`)
        setProduct(await result.json())
    }

    const fetchProducts = async (take = 3) => {
        let result = await fetch(url + `?take=${take}`);
        setProducts(await result.json())
    }

    const fetchProductsByTag = async ( tag = "", take = 0) => {
        
        if (tag === "featured") {
            let result = await fetch(url + `?tag=${tag}&take=${take}`);
            setFeaturedProducts(await result.json())

        } else if (tag === "flash-sale") {
            let result = await fetch(url + `?tag=${tag}&take=${take}`);
            setFlashSaleProducts(await result.json())

        } else if (tag === "best-selling") {
            let result = await fetch(url + `?tag=${tag}&take=${take}`);
            setBestSellingProducts(await result.json())

        } else if (tag === "latest") {
            let result = await fetch(url + `?tag=${tag}&take=${take}`);
            setLatestProducts(await result.json())

        } else if (tag === "top-reacted") {
            let result = await fetch(url + `?tag=${tag}&take=${take}`);
            setTopReactedProducts(await result.json())

        } else {
            let result = await fetch(url + `?tag=${tag}&take=${take}`);
            setFilteredProducts(await result.json())
        }
    }
    
    
    // UPDATE PRODUCT
    const update = async (e: React.FormEvent) => {
        e.preventDefault()

        const result = await fetch(`${url}/${product.articleNumber}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(product)
        })
    
        if (result.status === 200){
            console.log("Status 200 - Product updated")
            setSubmitted(true)
            setProduct(await result.json())
        }
    }

    // DELETE PRODUCT
    const remove = async (articleNumber: string) => {
        const result = await fetch(`${url}/${articleNumber}`, {
            method: 'delete',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
    
        if (result.status === 204)
            setProduct(product_default)
            setSubmitted(true)
            console.log("Product deleted")
    }


    return (
        <ProductContext.Provider value={{ 
                product, 
                setProduct, 
                products,
                setProducts,
                GQLproducts,
                filteredProducts, 
                featuredProducts, 
                flashSaleProducts, 
                bestSellingProducts, 
                latestProducts, 
                topReactedProducts, 
                fetchProduct, 
                fetchProducts,
                getProductsGQL,
                getProductsQuery,
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
