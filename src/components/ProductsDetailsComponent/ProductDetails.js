import React , {useState} from 'react'
import Image1 from '../../assets/tempImages/1.jpg'
import Image2 from '../../assets/tempImages/2.jpg'
import Image3 from '../../assets/tempImages/3.jpg'
import Image4 from '../../assets/tempImages/4.jpg'
import Image5 from '../../assets/tempImages/5.jpg'
import { FaHeart } from "react-icons/fa";
import './ProductDetails.style.scss'
const ProductDetails = () => {
    const [imageIndex , setImageIndex] = useState(0)
    const imagesGallary = [
        {
            id:1,
            image:Image1
        },
        {
            id:2,
            image:Image2
        },
        {
            id:3,
            image:Image3
        },
        {
            id:4,
            image:Image4
        },
        {
            id:5,
            image:Image5
        },
    ]
    return (
        <section className='single_product_details_container'>
            <div className="container">
                <div className="single_product_details">
                    <div className="product_images">
                        <div className="side_images">
                            {
                                imagesGallary.map((img , index)=>{
                                    const {id , image} = img
                                    return <div className="single_gallery_image" onClick={()=>setImageIndex(index)}>
                                        <img src={image} key={id} alt='product name' />
                                    </div>
                                })
                            }
                        </div>
                        <div className="main_image">
                                <img src={imagesGallary[imageIndex].image} alt="product name" />    
                        </div>
                    </div>
                    <div className="product_details">
                        <div className="product_name_price">
                            <h2>Product Name</h2>
                            <p>$199.99</p>
                        </div>
                        
                        <div className="colors">
                                <p>Color :</p>
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
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
            </div>
        </section>
    )
}

export default ProductDetails
