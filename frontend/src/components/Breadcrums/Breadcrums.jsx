import React from 'react'
import './Breadcrums.css'
import arrowIcon from '../../assets/breadcrum_arrow.png'

const Breadcrums = ({product}) => {
  return (
    <div className="breadcrums">
        HOME <img src={arrowIcon} alt="" /> SHOP  <img src={arrowIcon} alt="" /> {product.category} <img src={arrowIcon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrums