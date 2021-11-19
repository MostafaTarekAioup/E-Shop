import React from 'react'
import './footer.style.scss'
import { FaFacebookF , FaTwitter , FaLinkedinIn , FaInstagram , FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer_content">
                    <div className="footer_logo">
                            <h3 className="logo">
                                <svg xmlns="http://www.w3.org/2000/svg" width="45.77" height="35.001" viewBox="0 0 45.77 35.001">
                                    <path id="noun_cloth_2129414" d="M437.579,459a1.344,1.344,0,0,1-1.3-.867l-3.26-8.556H418.69a2.69,2.69,0,0,1-2.69-2.692V426.692A2.691,2.691,0,0,1,418.7,424h18.843a1.346,1.346,0,0,1,1.218.773l4.07,8.65h16.252a2.69,2.69,0,0,1,2.69,2.692v20.192a2.691,2.691,0,0,1-2.7,2.692Zm-.895-32.308H418.7s0,6.731,0,20.192h27.494Zm7.41,9.423,5.432,11.542a1.346,1.346,0,0,1-.332,1.586l-8.073,7.064h17.952s0-6.731,0-20.192Zm-5.986,19.251,6.617-5.79H435.9Z" transform="translate(-416 -424)"/>
                                </svg>
                                <span className='logo_title'> <span className='Logo_design'>E-</span>Shop</span>
                            </h3> 
                            <p>High quality Scandinavian furniture made from eco-friendly materials. Designed for modern, minimalist apartments</p>
                            <div className="social_icons">
                                <a href="##" className='social_icon'><FaFacebookF/></a>
                                <a href="##" className='social_icon'><FaTwitter/></a>
                                <a href="##" className='social_icon'><FaLinkedinIn/></a>
                                <a href="##" className='social_icon'><FaInstagram/></a>
                                <a href="##" className='social_icon'><FaYoutube/></a>
                            </div>
                    </div>
                    <div className="footer_groups">
                        <div className=" footer_group">
                            <h4>Shopping online</h4>
                            <ul>
                                <li><a href="##">Order Status</a></li>
                                <li><a href="##">Shipping and Delivery</a></li>
                                <li><a href="##">Returns</a></li>
                                <li><a href="##">Payment Options</a></li>
                                <li><a href="##">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className=" footer_group">
                            <h4>Information</h4>
                            <ul>
                                <li><a href="##">Gift Cards</a></li>
                                <li><a href="##">Find a store</a></li>
                                <li><a href="##">Newsletter</a></li>
                                <li><a href="##">Bacome a member</a></li>
                                <li><a href="##">Site feedback</a></li>
                            </ul>
                        </div>
                        <div className=" footer_group">
                            <h4>Contact</h4>
                            <ul>
                                <li><a href="##">store@e-shop.com</a></li>
                                <li><a href="##">Hotline: +1 131 138 138</a></li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
