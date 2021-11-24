import React from 'react'
import SingleCartItem from './SingleCartItem'
import './cartComponent.style.scss'
const CartComponent = () => {
    return (
        <section className='cart_content_container'>
                    <div className="cart_items"> 
                        <SingleCartItem/>
                        <SingleCartItem/>
                        <SingleCartItem/>
                        <SingleCartItem/>
                        <SingleCartItem/>
                    </div>
        </section>
    )
}

export default CartComponent
