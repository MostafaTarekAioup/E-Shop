import React , {useState , useEffect} from 'react'
import { FaHeart } from "react-icons/fa"
import { useParams } from 'react-router'
import axios from 'axios'
import './ProductDetails.style.scss'
import {Loading} from '../'
const ProductDetails = () => {
    const [imageIndex , setImageIndex] = useState(0)
    const [isloading , setIsLoading] = useState(true)
    const {id} = useParams()
    const [singleProduct , setSingleProduct] = useState([])

    const fetchProduct =  ()=>{
        setIsLoading(true)
        axios({
            method:'GET',
            url:`https://course-api.com/react-store-single-product?id=${id}`,
         }).then((response)=>{
           setSingleProduct(response.data)
           setIsLoading(false)
         }).catch((error)=>{
            console.log(error)
         })
    }
    useEffect(()=>{
        fetchProduct()
    },[id])
    return (
        <section className='single_product_details_container'>
            {
                isloading && <Loading/>
            }
            {!isloading && <div className="container">
                <div className="single_product_details">
                    <div className="product_images">
                        <div className="side_images">
                            {
                                singleProduct.images.map((img , index)=>{
                                    const {id , url} = img
                                    return <div className="single_gallery_image" key={id} onClick={()=>setImageIndex(index)}>
                                        <img src={url}  alt={`${singleProduct.name}`} />
                                    </div>
                                })
                            }
                        </div>
                        <div className="main_image">
                                <img src={singleProduct.images[imageIndex].url} alt="product name" />    
                        </div>
                    </div>
                    <div className="product_details">
                        <div className="product_name_price">
                            <h2>{singleProduct.name}</h2>
                            <p>${singleProduct.price}</p>
                        </div>
                        
                        <div className="colors">
                                <p>Color :</p>
                                <ul>
                                    {
                                        singleProduct.colors.map((color , index)=>{
                                            return <li key={index} style={{backgroundColor:color}}></li>
                                        })
                                    }
                                </ul>
                        </div>
                        <div className="quantity_favorits_addTocart">
                            <div className="quantity">
                                <ul>
                                    <li>-</li>
                                    <li>1</li>
                                    <li>+</li>
                                </ul>
                            </div>
                            <div className="add_to_cart_btn">
                                <button>Add to cart</button>
                            </div>
                            <div className="favorits_btn ">
                                <FaHeart  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </section>
    )
}

export default ProductDetails
