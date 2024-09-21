import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import cartIcon from '../../assets/cart_icon.png'
import { Link } from "react-router-dom"
import { ShopContext } from "../../context/ShopContext"
import dropdownIcon from '../../assets/nav_dropdown.png'

const Navbar = () => {
    const [menu, setMenu] = useState("shop")
    const { getTotalCartItems } = useContext(ShopContext)
    const menuRef = useRef()

    const dropdownToggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible')
    }

    const logout = () => {
        localStorage.removeItem('auth-token')
        window.location.replace('/')
    }

  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <div className="nav-dropdown">Menu<img  src={dropdownIcon} onClick={dropdownToggle}/></div>
        <ul ref={menuRef} className="nav-menu">
            <li onClick={() => {setMenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop" ? <hr/> : <></>}</li>
            <li onClick={() => {setMenu("mens")}}><Link to='/mens'>Men</Link>{menu==="mens" ? <hr/> : <></>}</li>
            <li onClick={() => {setMenu("womens")}}><Link to='/womens'>Women</Link>{menu==="womens" ? <hr/> : <></>}</li>
            <li onClick={() => {setMenu("kids")}}><Link to='/kids'>Kids</Link>{menu==="kids" ? <hr/> : <></>}</li>
        </ul>
        <div className="nav-login-cart">
            {localStorage.getItem('auth-token')
                ? <button onClick={logout}>Logout</button>
                : <Link to='/login'><button>Login</button></Link>
            }
            <Link to='/cart'><img src={cartIcon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar