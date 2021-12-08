import React, { useState } from 'react'
import './payment.style.scss'
import InputGroup from './InputGroup'
import {cartSliceActions} from '../../redux/cardSlice'
import { shippingSliceActions } from '../../redux/shippingDetailsSlice'
import { useSelector , useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
const Payment = () => {
    const firstname = useSelector((state)=> state.shipping.firstName)
    const Lastname = useSelector((state)=> state.shipping.lastName)
    const city = useSelector((state)=> state.shipping.city)
    const adress = useSelector((state)=> state.shipping.adress)
    const postalCode = useSelector((state)=> state.shipping.postalCode)
    const email = useSelector((state)=> state.shipping.email)
    const country = useSelector((state)=> state.shipping.country)
    const phoneNumber = useSelector((state)=> state.shipping.phoneNumber)
    const cardHolderName = useSelector((state)=> state.shipping.cardHolderName)
    const cardNumber = useSelector((state)=> state.shipping.cardNumber)
    const cardType = useSelector((state)=> state.shipping.cardType)
    const expire = useSelector((state)=> state.shipping.expire)
    const ccv = useSelector((state)=> state.shipping.ccv)
    const dispatch = useDispatch()
    const [isComplete , setIsComplete] = useState(false)
    let home = useHistory()

    const onSubmitHandller = (e)=>{
        e.preventDefault()
        setIsComplete(true)  
        setTimeout(()=>{
            dispatch(shippingSliceActions.clearShipping())
            dispatch(cartSliceActions.claerCart())
            home.push('./')
        },3000)
    }
    return (
        <section>
            <div className="container">
                {!isComplete && 
                    <div className="shipping_information">
                    <div className="mask">
                        
                    </div>
                    <div className="mask2">
                        
                    </div>
                    <div className="shipping_details">
                            {/* //shipping address  */}
                            
                                <form onSubmit = {onSubmitHandller}>
                                    <div className="adressAndPaymentDetails">
                                        <div>
                                            <div className="title">
                                                <h4>Adress details</h4>
                                            </div>
                                            <div className="adress_details">
                                                <InputGroup type = 'text' infor = 'first name' name='firstName'  invalue={firstname}  />
                                                <InputGroup type = 'text' infor = 'last name' name='lastName' invalue={Lastname}/>
                                                <InputGroup type = 'text' infor = 'city' name='city' invalue={city}/>
                                                <InputGroup type = 'text' infor = 'adress' name='adress' invalue={adress}/>
                                                <InputGroup type = 'number' infor = 'postal code' name='postalCode' invalue={postalCode}/>
                                                <InputGroup type = 'email' infor = 'email' name='email' invalue={email}/>
                                                <InputGroup type = 'text' infor = 'country' name='country' invalue={country}/>
                                                <InputGroup type = 'number' infor = 'phone number' name='phoneNumber' invalue={phoneNumber}/>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="title">
                                                <h4>payment</h4>
                                            </div>
                                            <div className="payment_details">
                                                <InputGroup type = 'text' infor = 'card holder name' name='cardHolderName' invalue={cardHolderName}/>
                                                <InputGroup type = 'number' infor = 'card number' name='cardNumber' invalue={cardNumber}/>
                                                <InputGroup type = 'text' infor = 'card type' name='cardType' invalue={cardType}/>
                                                <div className='card_exp'>
                                                    <InputGroup type = 'date' infor = 'expiry' name='expire' invalue={expire}/>
                                                    <InputGroup type = 'number' infor = 'ccv' name='ccv' invalue={ccv}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="submit">
                                        <button>Check out</button>
                                    </div>
                                </form>
                        </div>
                </div>
                }
                {
                    isComplete && <div className = 'thanks_for'>
                        <div>
                            <h4>thanks for buying from us </h4>
                            <p>redirecting to home page soon</p>
                        </div>
                    </div>
                }
            </div>
        </section>
    )
}

export default Payment
