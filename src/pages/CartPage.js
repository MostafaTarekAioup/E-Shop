import React from 'react'
import {CartComponent , BreadCrumb , CheckOut} from '../components'
const CartPage = () => {
    return (
        <main>
            <div className="container">
                <div className="bread_crumb">
                    <BreadCrumb/>
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
