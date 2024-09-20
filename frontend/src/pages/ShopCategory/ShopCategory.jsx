import React, { useContext } from 'react'
import './ShopCategory.css'
import { ShopContext } from "../../context/ShopContext"
import dropdownIcon from '../../assets/dropdown_icon.png'
import Item from "../../components/Item/Item"

const ShopCategory = ({category, banner}) => {
  const { all_product } = useContext(ShopContext)
  return (
    <div className="shop-category">
      <img className="shop-category-banner" src={banner} alt="" />
      <div className="shop-category-index">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shop-category-sort">
          Sort by <img src={dropdownIcon} alt="" />
        </div>
      </div>
      <div className="shop-category-products">
        {all_product.map((item,index) => {
          if(category === item.category){
            return <Item key={index} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price}/>
          }else{
            return null
          }
        })}
      </div>
      <div className="shop-category-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory