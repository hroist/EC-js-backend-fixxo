import { useEffect } from 'react'
import { IProductContext, useProductContext } from '../contexts/ProductContext'
import { IProductListItem } from '../models/ProductsModels'


const UpdateProductForm = ( {item}:IProductListItem ) => {
  const { update, product, setProduct, fetchProduct, submitted } = useProductContext() as IProductContext

  useEffect(() => {
    fetchProduct(item.articleNumber)
  }, [])


  return (        
    <>
      <form onSubmit={update} className="add-product-form">  

        {
          submitted ? (
            <div>Product updated!</div>
          ) : (
          <>
            <h1>Product information</h1>
            <input value={item.articleNumber} readOnly type="text" className="" placeholder={item.articleNumber}></input>
            <input value={product.name} onChange={(e) => setProduct({...product, name: e.target.value})} type="text" className="" placeholder="Name"></input>
            <input value={product.category} onChange={(e) => setProduct({...product, category: e.target.value})} type="text" className="" placeholder="Category"></input>
            <input value={product.description} onChange={(e) => setProduct({...product, description: e.target.value})} type="text" className="" placeholder="Description"></input>
            <input value={product.rating} onChange={(e) => setProduct({...product, rating: Number(e.target.value)})} type="text" className="" placeholder="Rating"></input>
            <input value={product.price} onChange={(e) => setProduct({...product, price: Number(e.target.value)})} type="text" className="" placeholder="Price"></input>
            <input value={product.tag} onChange={(e) => setProduct({...product, tag: e.target.value})} type="text" className="" placeholder="Tag"></input>
            <input value={product.imageName} onChange={(e) => setProduct({...product, imageName: e.target.value})} type="text" className="" placeholder="Image url"></input>
            <button type="submit" className="button-forms">UPDATE PRODUCT</button>
          </>)
        }
      </form>
    </>
  )
}

export default UpdateProductForm