import React,{useState} from 'react'
import { FaTrash } from "react-icons/fa";
import {currencyFormater} from '../../utils/helpers.js'
import {useSelector , useDispatch } from 'react-redux'
import {cartSliceActions} from '../../redux/cardSlice'

const SingleCartItem = ({ newId,id, name, color, description, price ,  amount ,  stock, image}) => {
    const [isRemoved , setIsRemoved] = useState(false)
    const [des , setDesc] = useState(false)
    const dispatch = useDispatch()

    const removeHandller = (newId )=>{
        setTimeout(() => {
            dispatch(cartSliceActions.removeCartItem({newId }))
        }, 300);
    }
   
    return (
        <article className={`${isRemoved? 'single_cart_item_container removed' : 'single_cart_item_container'}`}>
            <div className="cart_item">
                <div className="product_image">
                    <img src={image} alt="product" />
                    <div className="remove">
                        <FaTrash className='remove_btn' onClick={()=>{setIsRemoved(true) ; removeHandller(newId )}}/>
                    </div>
                </div>
                <div className="product_details">
                    <div className="product_name_description">
                        <div className="product_name">
                            <p className='name'>{name}</p>
                            <span className='color' style={{backgroundColor:color}}></span>
                        </div>
                        <div className="description">
                            <p>{des ? description : description.substring(0,150)} <span onClick={()=> setDesc(!des)} className='more_btn'>{des? '...Less Details': ' ...More Details'}</span></p>
                        </div>
                    </div>
                    <div className="product_price_container">
                        <div className="product_amount">
                            <span className='btn' onClick={()=>dispatch(cartSliceActions.updateCartAmount({id , type:'decrease' , color}))}>-</span>
                            <span>{amount}</span>
                            <span className='btn' onClick={()=>dispatch(cartSliceActions.updateCartAmount({id , type:'increase' , color}))}>+</span>
                        </div>
                        <div className="product_price">
                            <span className='piece_price'>{currencyFormater(price)}</span>
                            <span className='all_pices_price'>{currencyFormater(price * amount)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default SingleCartItem
