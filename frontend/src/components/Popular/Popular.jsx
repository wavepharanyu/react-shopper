import React, { useState, useEffect } from 'react'
import './Popular.css'
import Item from "../Item/Item"
import axios from 'axios'

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([])

  const fetchPopularProducts = async() => {
    let response = await axios.get('http://localhost:4000/api/product/popularinwomen')
    setPopularProducts(response.data)
  }

  useEffect(() => {
    fetchPopularProducts()
  },[])
  return (
    <div className="popular">
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-item">
            {popularProducts.map((item,index) => {
                return <Item key={index} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default Popular