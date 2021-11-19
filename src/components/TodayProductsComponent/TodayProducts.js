import React , { useRef } from 'react'
import Glide from 'react-glidejs';
import 'react-glidejs/dist/index.css';
import './TodayProducts.style.scss'
import { SingleProduct } from '..';
const TodayProducts = () => {
    const gliderRef = useRef(null);
    return (
        <section className='today_products_container'>
            <div className="container">
                <div className="fetature">
                    <h4>Products in today</h4>
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
                        <div className='single_card_container'>
                            <SingleProduct/>
                        </div>
                        <div className='single_card_container'>
                            <SingleProduct/>
                        </div>
                        <div className='single_card_container'>
                            <SingleProduct/>
                        </div>
                        <div className='single_card_container'>
                            <SingleProduct/>
                        </div>
                        <div className='single_card_container'>
                            <SingleProduct/>
                        </div>
                        <div className='single_card_container'>
                            <SingleProduct/>
                        </div>
                        <div className='single_card_container'>
                            <SingleProduct/>
                        </div>
                        <div className='single_card_container'>
                            <SingleProduct/>
                        </div>
                        <div className='single_card_container'>
                            <SingleProduct/>
                        </div>
                    </Glide>  
                </div>
                
            </div>
        </section>
    )
}

export default TodayProducts
