import React from 'react'
import {CartComponent , BreadCrumb , CheckOut} from '../components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const CartPage = () => {
    const cartItems = useSelector((state)=>state.cart.cardData)
    // empty cart
    if(cartItems.length === 0){
        return <div className='empty_cart'>
            <div>
                <p>Your Cart Is Empty</p>
                <Link to='/products' className='cart_btn'>
                    <button className=''>Fill It</button>
                </Link>
            </div>
        </div>
    }
    return (
        <main>
            <div className="container">
                <div className="bread_crumb">
                    <BreadCrumb title='Cart' product/>
                </div>
            <div className="cart_content">
                    <div className="cart_items">
                        <CartComponent/>
                    </div>
                    <div className="check_out" style={{padding:'10px'}}>
                        <CheckOut/>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default CartPage
