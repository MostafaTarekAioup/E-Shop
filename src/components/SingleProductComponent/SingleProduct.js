import React from 'react'
import './singleProduct.style.scss'
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {currencyFormater} from '../../utils/helpers'
const SingleProduct = ({id ,image , name , colors , price}) => {
    return (
        <article>
            <div className="Product">
                <div className="product_image">
                    <img src={image} alt={name} />
                </div>
                
                <div className="Product_info">
                    {/* <div className="product_link">  
                        <FaHeart className='productLink_icon'/>
                    </div> */}
                    <div className="info_cont">
                        <p className='product_name'>{name}</p>
                        <p className='price'>{currencyFormater(price)}</p>
                        <div className="product_colors">
                            <p>Colors</p>
                            <ul>
                               {colors.map((color , index)=>{
                                   return <li key={index} style={{backgroundColor:color}}></li>
                               })}
                            </ul>
                        </div>
                        <div className="btn_container">
                            <Link className='nav_btn' aria-label={`buy ${name} now`} to={`/products/${id}`}>
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
