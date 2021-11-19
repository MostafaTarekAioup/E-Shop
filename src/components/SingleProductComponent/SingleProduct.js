import React from 'react'
import './singleProduct.style.scss'
import productImg from '../../assets/apoutImg.webp'
import { FaSearch , FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
const SingleProduct = () => {
    return (
        <article>
            <div className="Product">
                <div className="product_image">
                    <img src={productImg} alt="name" />
                </div>
                
                <div className="Product_info">
                    <div className="product_link">  
                        <FaHeart className='productLink_icon'/>
                    </div>
                    <div className="info_cont">
                        <p className='product_name'>Holmustund</p>
                        <p className='price'>$1999.99</p>
                        <div className="product_colors">
                            <p>Colors</p>
                            <ul>
                                
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        <div className="btn_container">
                            <Link className='nav_btn' to='/product/:id'>
                                <button className='by_now_btn'>By Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default SingleProduct
