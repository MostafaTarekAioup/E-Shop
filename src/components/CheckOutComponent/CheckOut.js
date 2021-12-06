import React from 'react'
import './CheckOut.style.scss'
import { useSelector } from 'react-redux'
import { currencyFormater } from '../../utils/helpers'
import {useGlopalContext} from '../../ContextAPI/context'
import { useHistory } from 'react-router-dom'
const CheckOut = () => {
    const {isAuthenticated , loginWithRedirect } = useGlopalContext()
    const shippingFee = useSelector((state)=>state.cart.shipping_fee)
    const totalAmount = useSelector((state)=>state.cart.total_amount)
    const taxes = useSelector((state)=>state.cart.taxes)
    let history = useHistory();
    const checkOutHandller = ()=>{
        history.push("/checkOut");
    }
    return (
        <section>
            <div className="check_out_container">
                <div className="check_out_details">
                    <p className='Subtotal'>Subtotal: {currencyFormater(totalAmount)}</p>
                    <p>Shipping: {currencyFormater(shippingFee)}$</p>
                    <p>Taxes(5%): {currencyFormater(taxes)}</p>
                </div>
                <div className="check_out">
                    <p>total: {currencyFormater(totalAmount + shippingFee + taxes)}</p>
                    <hr />
                    {
                        isAuthenticated ? 
                        <button onClick={checkOutHandller}>check out</button> : 
                        <button onClick={loginWithRedirect}>Login to Check Out</button>
                    }
                </div>
            </div>
        </section>
    )
}

export default CheckOut
