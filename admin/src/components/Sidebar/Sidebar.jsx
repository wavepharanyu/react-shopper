import React from 'react'
import './Sidebar.css'
import { Link } from "react-router-dom"
import addIcon from '../../assets/Product_Cart.svg'
import listIcon from '../../assets/Product_list_icon.svg'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <Link to='/addproduct'>
            <div className="sidebar-item">
                <img src={addIcon} alt="" />
                <p>Add Product</p>
            </div>
        </Link>

        <Link to='/listproduct'>
            <div className="sidebar-item">
                <img src={listIcon} alt="" />
                <p>Product List</p>
            </div>
        </Link>
    </div>
  )
}

export default Sidebar