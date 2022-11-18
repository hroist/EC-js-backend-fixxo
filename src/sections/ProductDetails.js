import React, { useState } from 'react'
import ImageSlider from '../components/ImageSlider'
import SizeButton from '../components/ui/SizeButton';
import { useShoppingCart } from '../contexts/ShoppingCartContext';
import { currencyFormatter } from '../utilities/currencyFormatter';
import Dropdown from '../components/ui/Dropdown'


const ProductDetails = ({item}) => {

    const { addMultipleItems } = useShoppingCart()

    const slides = [
        {url: item.imageName, title: item.name },
        {url: "https://images.pexels.com/photos/2340254/pexels-photo-2340254.jpeg", title: "Placeholder-1" },
        {url: "https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg", title: "Placeholder-2" },
        {url: "https://images.pexels.com/photos/911254/pexels-photo-911254.jpeg", title: "Placeholder-3" }
    ];
  
    const [counter, setCounter] = useState(1)
    const handleClickPlus = () => {
        setCounter(counter + 1)
      }

    const handleClickMinus = () => {
        if(counter === 0) {
            setCounter(0)
        } else {
            setCounter(counter - 1)
        }
    }

    const [productDetails, setProductDetails] = useState("product-details-description")
    const handleProductDetails = (e) => {
        setProductDetails(e.target.id)
    }

  return (
    <section className="product-details">
        <div className="container-small">
            <div className="product-details-card">
                <div className="sb-content-top">
                    <div className="product-details-images">
                        <ImageSlider slides={slides} />
                    </div>

                    <div className="product-details-content">
                        <h1>{item.name}</h1>
                        <p>SKU: {item.articleNumber} BRAND: The Northland</p>
                        <div className="card-review-stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <p className="card-original-price">{currencyFormatter(item.price)}</p>
                        <p className="product-description">Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly. (read more) </p>
                        <div className="product-details-grid">
                            <div className='l-content'>Size:</div>
                            <div className='sizes'>
                                <SizeButton size="XS" />
                                <SizeButton size="S" />
                                <SizeButton size="M" />
                                <SizeButton size="XXL" />
                            </div>
                        </div>
                        <div className="product-details-grid">
                            <div className="pt-1">Color:</div>
                            <Dropdown colors={["red", "gray", "black", "white"]} />
                        </div>
                        <div className="product-details-grid">
                            <div className='l-content'>Quantity:</div> 
                            <div className="start-content gap">
                                <div className="quantity-counter">
                                    <div onClick={handleClickMinus} className='decrease c-content'>
                                        -
                                    </div>
                                    <div data-testid="counter" className='counter-number c-content'>
                                        {counter}
                                    </div>
                                    <div onClick={handleClickPlus} className='increase c-content'>
                                        +
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className='product-details-grid'>
                            <div></div>
                            <div>
                                <button className="button-forms" onClick={() => addMultipleItems({articleNumber: item.articleNumber, product: item}, counter)}>ADD TO CART</button>
                            </div>                           
                        </div>
                        <div className="product-details-grid">
                            <div>Share:</div>
                            <div className="start-content share-links">
                                <a href="https://facebook.com">
                                    <span className="fa-stack">
                                        <i className="fa-solid fa-circle fa-stack-2x"></i>
                                        <i className="fa-brands fa-facebook-f fa-stack-1x fa-inverse" style={{color: "Black"}}></i>
                                    </span>
                                </a>
                                <a href="https://instagram.com">
                                    <span className="fa-stack">
                                        <i className="fa-solid fa-circle fa-stack-2x"></i>
                                        <i className="fa-brands fa-instagram fa-stack-1x fa-inverse" style={{color: "Black"}}></i>
                                    </span>
                                </a>
                                <a href="https://twitter.com">
                                    <span className="fa-stack">
                                        <i className="fa-solid fa-circle fa-stack-2x"></i>
                                        <i className="fa-brands fa-twitter fa-stack-1x fa-inverse" style={{color: "Black"}}></i>
                                    </span>
                                </a>
                                <a href="https://google.com">
                                    <span className="fa-stack">
                                        <i className="fa-solid fa-circle fa-stack-2x"></i>
                                        <i className="fa-brands fa-google fa-stack-1x fa-inverse" style={{color: "Black"}}></i>
                                    </span>
                                </a>
                                <a href="https://linkedin.com">
                                    <span className="fa-stack">
                                        <i className="fa-solid fa-circle fa-stack-2x"></i>
                                        <i className="fa-brands fa-linkedin-in fa-stack-1x fa-inverse" style={{color: "Black"}}></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-details-nav">
                    <ul className="product-details-nav-list gap start-content">
                        <li id="product-details-description" onClick={handleProductDetails} className="product-details-nav-item">Description</li>
                        <li id="product-details-additional" onClick={handleProductDetails} className="product-details-nav-item">Additional</li>
                        <li id="product-details-shipping" onClick={handleProductDetails} className="product-details-nav-item">Shipping & Return</li>
                        <li id="product-details-reviews" onClick={handleProductDetails} className="product-details-nav-item">Reviews</li>
                    </ul>

                    <div className="product-details-box">
                        <div className={`product-details-text ${productDetails === "product-details-description" ? "active" : "" }`}>
                            <p>Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard. </p>
                        </div>
                        <div className={`product-details-text ${productDetails === "product-details-additional" ? "active" : "" }`}>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit fuga, in laborum voluptatem quas voluptates beatae molestias quia iusto saepe aliquam illo consequatur quo doloribus neque nostrum deleniti, cumque nesciunt!</p>
                        </div>
                        <div className={`product-details-text ${productDetails === "product-details-shipping" ? "active" : "" }`}>
                            <p>Shopping and return details</p>
                        </div>
                        <div className={`product-details-text ${productDetails === "product-details-reviews" ? "active" : "" }`}>
                            <p>On even feet time have an no at. Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )


}

export default ProductDetails