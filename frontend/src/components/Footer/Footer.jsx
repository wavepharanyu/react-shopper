import React from 'react'
import './Footer.css'
import footerLogo from '../../assets/logo_big.png'
import igIcon from '../../assets/instagram_icon.png'
import pintesterIcon from '../../assets/pintester_icon.png'
import whatsappIcon from '../../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src={footerLogo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={igIcon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pintesterIcon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsappIcon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright © 2024 - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer