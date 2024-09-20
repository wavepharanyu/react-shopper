import React from 'react'
import './Item.css'
import { Link } from "react-router-dom"

const Item = ({image, name, newPrice, oldPrice, id}) => {
  return (
    <div className="item">
        <Link to={`/product/${id}`} onClick={window.scrollTo(0,0)}>
        <img src={image} alt="" />
        <p>{name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                ${newPrice}
            </div>
            <div className="item-price-old">
                ${oldPrice}
            </div>
        </div>
        </Link>
    </div>
  )
}

export default Item