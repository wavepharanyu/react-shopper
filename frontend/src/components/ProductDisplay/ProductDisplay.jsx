import React, { useContext } from 'react'
import './ProductDisplay.css'
import starIcon from '../../assets/star_icon.png'
import starDullIcon from '../../assets/star_dull_icon.png'
import { ShopContext } from "../../context/ShopContext"

const ProductDisplay = ({product}) => {
    const { addToCart } = useContext(ShopContext)
  return (
    <div className="product-display">
        <div className="product-display-left">
            <div className="product-display-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="product-display-main-img">
                <img src={product.image} alt="" className="product-display-main-img" />
            </div>
        </div>
        <div className="product-display-right">
            <h1>{product.name}</h1>
            <div className="product-display-right-stars">
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
                <img src={starIcon} alt="" />
                <img src={starDullIcon} alt="" />
                <p>(107)</p>
            </div>
            <div className="product-display-right-prices">
                <div className="product-display-right-price-old">${product.old_price}</div>
                <div className="product-display-right-price-new">${product.new_price}</div>
            </div>
            <div className="product-display-right-description">
                A lightweight, usually knitted, pullover shirt, close-fitting and a round neckline and short sleeves, worn as an undershirt or outer garment.
            </div>
            <div className="product-display-right-size">
                <h1>Select Size</h1>
                <div className="product-display-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
            <p className="product-display-right-category"><span>Category: </span>Women, T-Shirt, Crop Top</p>
            <p className="product-display-right-category"><span>Tags: </span>Modern, Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay