import React from 'react'
import SingleCartItem from './SingleCartItem'
import './cartComponent.style.scss'
import { useSelector  , useDispatch} from 'react-redux'
import { cartSliceActions } from '../../redux/cardSlice'
const CartComponent = () => {
    const cartData = useSelector((state)=>state.cart.cardData)
    const dispatch = useDispatch()
    const clearCartHanddler=()=>{
        dispatch(cartSliceActions.claerCart())
    }
    return (
        <section className='cart_content_container'> 
                <div className="cart_items"> 
                {
                    cartData.map((item)=>{
                        return <SingleCartItem key={item.newId} {...item}/>
                    })
                }
            </div>
            
                <div className='clear_cart'>
                    <button className="clear_cart_btn" onClick={clearCartHanddler}>Clear Cart</button>
                </div>
            
        </section>
    )
}

export default CartComponent
