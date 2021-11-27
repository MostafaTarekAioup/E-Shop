import React, { useRef } from 'react'
import Glide from 'react-glidejs';
import 'react-glidejs/dist/index.css';
import {SingleProduct} from '..'
import './selectedForU.style.scss'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
const SelectedForU = () => {
    const gliderRef = useRef(null);
    const products = useSelector((state)=> state.products.products)
    return (
        <section className='featuren_products_container'>
            <div className="container">
                <div className="fetature">
                    <p>Selected just for you</p>
                    <Link  to='/products'>
                        <button>Show more</button>
                    </Link>
                </div>
                <div className="featuren_products">
                    <Glide
                        ref={gliderRef}
                        throttle={0}
                        type="slider"
                        customSlideAnimation={{
                        timeout: 500,
                        classNames: 'fade',
                        }}
                       
                        
                        breakpoints= {
                            {
                             1024: {
                                perView: 3
                            },
                            600: {
                            perView: 2
                            },
                             400: {
                            perView: 1
                            }
                            }
                        }
                        perView={5}
                        startAt={2}
                        slideClassName="slider__frame"
                        focusAt="center">
                        {
                            products.map((product)=>{
                                return <div key={product.id} className='single_card_container'>
                                <SingleProduct {...product}/>
                            </div>
                            })
                        }
                    </Glide>  
                </div>
                
            </div>
        </section>
    )
}

export default SelectedForU
