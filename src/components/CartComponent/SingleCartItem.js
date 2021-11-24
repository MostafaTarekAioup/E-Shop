import React from 'react'
import product from '../../assets/ApoutUs.webp'
import { FaTrash } from "react-icons/fa";
const SingleCartItem = () => {
    const [isRemoved , setIsRemoved] = React.useState(false)
    return (
        <article className={`${isRemoved? 'single_cart_item_container removed' : 'single_cart_item_container'}`}>
            <div className="cart_item">
                <div className="product_image">
                    <img src={product} alt="product" />
                    <div className="remove">
                        <FaTrash className='remove_btn' onClick={()=>setIsRemoved(true)}/>
                    </div>
                </div>
                <div className="product_details">
                    <div className="product_name_description">
                        <div className="product_name">
                            <p className='name'>Product Name</p>
                            <span className='color'></span>
                        </div>
                        <div className="description">
                            <p>Lorem ipsum dolor sit amet consectetur </p>
                        </div>
                    </div>
                    <div className="product_price_container">
                        <div className="product_amount">
                            <span className='btn'>-</span>
                            <span>1</span>
                            <span className='btn'>+</span>
                        </div>
                        <div className="product_price">
                            <span className='piece_price'>200$</span>
                            <span className='all_pices_price'>800$</span>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default SingleCartItem
