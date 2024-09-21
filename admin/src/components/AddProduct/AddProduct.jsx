import React, { useState } from 'react'
import './AddProduct.css'
import uploadArea from '../../assets/upload_area.svg'
import axios from 'axios'

const AddProduct = () => {
    const [image, setImage] = useState(false)
    const [productDetails, setProductDetails] = useState({
        name: '',
        image:'',
        category: 'women',
        new_price: "",
        old_price: ""
    })

    const imageHandler = (e) => {
        setImage(e.target.files[0])
    }

    const changeHandler = (e) => {
        setProductDetails({...productDetails, [e.target.name]: e.target.value})
    }

    const addProduct = async(event) =>{
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", productDetails.name)
        formData.append("old_price", Number(productDetails.old_price))
        formData.append("new_price", Number(productDetails.new_price))
        formData.append("category", productDetails.category)
        formData.append("image", image)

        let responseData = await axios.post('http://localhost:4000/api/product/add',formData)

        if(responseData.data.success){
            console.log('success')
            alert("Product Added")
        }
    }

  return (
    <div className="add-product">
        <div className="add-product-itemfield">
            <p>Product title</p>
            <input onChange={changeHandler} value={productDetails.name} type="text" name="name" placeholder="Type here"/>
        </div>
        <div className="add-product-price">
            <div className="add-product-itemfield">
                <p>Price</p>
                <input onChange={changeHandler} value={productDetails.old_price} type="text" name="old_price" placeholder="Type here"/>
            </div>
            <div className="add-product-itemfield">
                <p>Offer Price</p>
                <input onChange={changeHandler} value={productDetails.new_price} type="text" name="new_price" placeholder="Type here"/>
            </div>
        </div>
        <div className="add-product-itemfield">
            <p>Product Category</p>
            <select onChange={changeHandler} value={productDetails.category} className="add-product-selector" name="category">
                <option value="women">Women</option>
                <option value="men">Men</option>
                <option value="kid">Kid</option>
            </select>
        </div>
        <div className="add-product-itemfield">
            <label htmlFor="file-input">
                <img src={image ? URL.createObjectURL(image) : uploadArea} className="add-product-thumbnail-img" alt="" />
            </label>
            <input onChange={imageHandler} type="file" name="image" id='file-input' hidden/>
        </div>
        <button onClick={addProduct} className="add-product-btn">Add</button>
    </div>
  )
}

export default AddProduct