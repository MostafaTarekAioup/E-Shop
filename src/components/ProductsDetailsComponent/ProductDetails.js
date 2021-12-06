import React , {useState} from 'react'
import { FaHeart } from "react-icons/fa"
import './ProductDetails.style.scss'
import {currencyFormater} from '../../utils/helpers'
import {cartSliceActions} from '../../redux/cardSlice'
import {useSelector , useDispatch } from 'react-redux'
const ProductDetails = ({ id ,description  , images , name , price , colors ,imageIndex , setImageIndex , stock }) => {
    const [currentColor , setCurrentColor] = useState(0)
    const [amount , setAmount] = useState(1)
    const dispatch = useDispatch()
    const cartData = useSelector((state)=>state.cart.cardData)
    console.log(cartData)

    const amountHandller = (type)=>{
        if(type === 'increase'){
            if (amount >= stock){
                setAmount(stock)
            }else{
                setAmount(amount+1)
            }
        }
        if(type==='decrease'){
            if (amount === 1){
                setAmount(1)
            }else{
                setAmount(amount-1)
            }
        }
    }
    const addToCartHanddler = (name  , price , color , id , newId , description , amount , stock , image )=>{
        if(cartData.find((item)=> item.id===id && item.color === color)){
            dispatch(cartSliceActions.updateCartAmount({id,type:'increase',amount , color}))
        }else{
            let cartItem = {
                id,
                name,
                color,
                description,
                price , 
                amount , 
                stock,
                image,
                newId
            }
            dispatch(cartSliceActions.addToCard({data:cartItem}))
        }
    }
    return (
        <section className='single_product_details_container'>
           <div className="container">
                <div className="single_product_details">
                    <div className="product_images">
                        <div className="side_images">
                            {
                                images.map((img , index)=>{
                                    const {id , url} = img
                                    return <div className={`single_gallery_image ${index === imageIndex && 'active_image'}`} key={id} onClick={()=>setImageIndex(index)}>
                                        <img src={url}  alt={`${name}`} />
                                    </div>
                                })
                            }
                        </div>
                        <div className="main_image">
                                <img src={images[imageIndex].url} alt="product name" />    
                        </div>
                    </div>
                    <div className="product_details">
                        <div className="product_name_price">
                            <h2>{name}</h2>
                            <p>{currencyFormater(price)}</p>
                        </div>
                        
                        <div className="colors">
                                <p>Color :</p>
                                <ul>
                                    {
                                        colors.map((color , index)=>{
                                            return <li 
                                            key={index} 
                                            className={`${index === currentColor && 'active_color'}`} 
                                            onClick={()=>setCurrentColor(index)} 
                                            style={{backgroundColor:color}}>
                                            </li>
                                        })
                                    }
                                </ul>
                        </div>
                        {stock > 0 && <div className="quantity_favorits_addTocart">
                            <div className="quantity">
                                <ul>
                                    <li onClick={()=>amountHandller('decrease')}>-</li>
                                    <li>{amount}</li>
                                    <li onClick={()=>amountHandller('increase')}>+</li>
                                </ul>
                            </div>
                            <div className="add_to_cart_btn" onClick={()=>addToCartHanddler(name  , price , colors[currentColor] ,id , new Date().getTime().toString() , description , amount , stock ,images[0].url)}>
                                <button>Add to cart</button>
                            </div>
                            <div className="favorits_btn ">
                                <FaHeart  />
                            </div>
                        </div>}
                        {
                            stock <= 0 && <div className='out_of_stock'>
                                <p>Out of stock</p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails
