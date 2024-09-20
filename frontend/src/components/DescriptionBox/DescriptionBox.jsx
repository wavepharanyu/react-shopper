import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className="description-box">
        <div className="description-box-nav">
            <div className="description-box-nav-box">Description</div>
            <div className="description-box-nav-box fade">Reviews (123)</div>
        </div>
        <div className="description-box-desc">
            <p>An e-commerce website is an online platform that enables businesses to sell products or services, allowing customers to browse, make purchases, 
                and complete transactions electronically. An e-commerce website, also known as an online store or online shop, is a digital platform that 
                allows businesses to sell products or services over the internet. It serves as a virtual storefront where customers can browse through a 
                wide range of offerings, add items to their cart, and complete transactions online. The primary purpose of 
            </p>
            <p>
                an e-commerce website is to facilitate the buying and selling process in a convenient and efficient manner. These websites typically include various features and 
                functionalities such as product catalogs, search filters, shopping carts, secure payment gateways
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox