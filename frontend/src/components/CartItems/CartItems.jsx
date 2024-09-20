import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from './../../context/ShopContext';
import removeIcon from '../../assets/cart_cross_icon.png'

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, addToCart, clearFromCart, getTotalCartAmount } = useContext(ShopContext)
  return (
    <div className="cart-items">
      <div className="cart-items-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>remove</p>
      </div>
      <hr />
      {all_product.map((product) => {
        if(cartItems[product.id] > 0){
          return(
            <div>
              <div className="cart-items-format cart-items-main">
                <img src={product.image} alt="" className="cart-product-icon"/>
                <p>{product.name}</p>
                <p>${product.new_price}</p>
                <div className="cart-items-quantity"><button onClick={() => {removeFromCart(product.id)}} className="cart-items-quantity-btn">-</button><span className="cart-items-quantity-text">{cartItems[product.id]}</span><button onClick={() => {addToCart(product.id)}} className="cart-items-quantity-btn">+</button></div>
                <p>${product.new_price*cartItems[product.id]}</p>
                <img className="cart-remove-icon" src={removeIcon} onClick={() => {clearFromCart(product.id)}} alt="" />
              </div>
              <hr />
            </div>
          )
        }else{
          return null
        }
      })}
      <div className="cart-items-down">
        <div className="cart-items-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cart-items-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-items-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cart-items-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-items-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cart-items-promobox">
            <input type="text" placeholder="Promo Code"/>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems