import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import axios from "axios"
import crossIcon from '../../assets/cross_icon.png'

const ListProduct = () => {
    const [allProducts, setAllProducts] = useState([])

    const fetchProducts = async() => {
        let response = await axios.get('http://localhost:4000/api/product/all')
        setAllProducts(response.data)
    }

    const removeProduct = async(id) => {
       let response = await axios.post('http://localhost:4000/api/product/remove', {id: id})
       if(response.data.success){
        await fetchProducts()
       }
    }

    useEffect(() => {
        fetchProducts()
    },[])

  return (
    <div className="list-product">
        <h1>All Products List</h1>
        <div className="list-product-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Old Price</p>
            <p>New Price</p>
            <p>Category</p>
            <p>Remove</p>
        </div>
        <div className="list-product-allproducts">
            <hr />
            {allProducts.map((product,index) => {
                return(
                    <div key={index} className="list-product-format-main list-product-format">
                        <img className="list-product-product-icon" src={product.image} alt="" />
                        <p>{product.name}</p>
                        <p>${product.old_price}</p>
                        <p>${product.new_price}</p>
                        <p>{product.category}</p>
                        <img onClick={() => {removeProduct(product.id)}} className="list-product-remove-icon" src={crossIcon} alt="" />
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ListProduct