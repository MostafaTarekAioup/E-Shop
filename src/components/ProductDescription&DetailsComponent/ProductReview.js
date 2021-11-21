import React from 'react'
import './ProductDescription.style.scss'
import { FaStar , FaStarHalfAlt  , FaRegUser} from "react-icons/fa";
import user1 from '../../assets/users/user1.png'
import user2 from '../../assets/users/user2.png'
import user3 from '../../assets/users/user3.png'
const ProductReview = () => {
    return (
        <section>
            <div className="reviews_container">
                <div className="ratings_container">
                    <div className="all_ratings_content">
                        <div className="total_revirws_rating">
                            <div className="score">
                                <p>4.5</p>
                            </div>
                            <div className="stars">
                                <ul>
                                    <li><FaStar/></li>
                                    <li><FaStar/></li>
                                    <li><FaStar/></li>
                                    <li><FaStar/></li>
                                    <li><FaStarHalfAlt/></li>
                                </ul>
                            </div>
                            <div className="all_reviews_counter">
                                    <p><FaRegUser/> 30 all reviews</p>
                            </div>
                        </div>
                        <div className="single_stare_rate">
                            <ul>
                                <li><FaStar className='star'/><p>1</p> <div className='progress_par_container'><div className="progress_bar" style={{width:'0'}}></div></div></li>
                                <li><FaStar className='star'/><p>2</p> <div className='progress_par_container'><div className="progress_bar" style={{width:'0'}}></div></div></li>
                                <li><FaStar className='star'/><p>3</p> <div className='progress_par_container'><div className="progress_bar" style={{width:'10%'}}></div></div></li>
                                <li><FaStar className='star'/><p>4</p> <div className='progress_par_container'><div className="progress_bar" style={{width:'30%'}}></div></div></li>
                                <li><FaStar className='star'/><p>5</p> <div className='progress_par_container'><div className="progress_bar" style={{width:'60%'}}></div></div></li>
                            </ul>
                        </div>
                    </div>
                   
                <div className="add_review_btn">
                        <button>Add Review</button>
                 </div>
                </div>
                
                {/* ////////////// */}
                <div className="user_reviews">
                    <ul>
                        <li className='single_review'>
                            <div className="user_img">
                                <img src={user1} alt="user" />
                            </div>
                            <div className="user_review">
                                <div className="user_name">
                                    <p>John Doe</p>
                                </div>
                                <div className="user_rate">
                                <ul>
                                    <li><FaStar/></li>
                                    <li><FaStar/></li>
                                    <li><FaStar/></li>
                                    <li><FaStar/></li>
                                    <li><FaStarHalfAlt/></li>
                                </ul>
                                </div>
                                <div className="user_des">
                                   <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. A sunt tempora minus distinctio iste odit exercitationem accusantium earum delectus consectetur neque, enim nihil fuga tempore, vero repellendus, fugiat quam voluptates!</p>
                                </div>
                                
                            </div>
                        </li>
                        <li className='single_review'>
                            <div className="user_img">
                                <img src={user2} alt="user" />
                            </div>
                            <div className="user_review">
                                <div className="user_name">
                                    <p>Eveline Gosok</p>
                                </div>
                                <div className="user_rate">
                                <ul>
                                    <li><FaStar/></li>
                                    <li><FaStar/></li>
                                    <li><FaStar/></li>
                                    <li><FaStar/></li>
                                    <li><FaStarHalfAlt/></li>
                                </ul>
                                </div>
                                <div className="user_des">
                                   <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. A sunt tempora minus distinctio iste odit </p>
                                </div>
                                
                            </div>
                        </li>
                        <li className='single_review'>
                            <div className="user_img">
                                <img src={user3} alt="user" />
                            </div>
                            <div className="user_review">
                                <div className="user_name">
                                    <p>Anne Okombo</p>
                                </div>
                                <div className="user_rate">
                                <ul>
                                    <li><FaStar/></li>
                                    <li><FaStar/></li>
                                    <li><FaStar/></li>
                                    <li><FaStar/></li>
                                    <li><FaStarHalfAlt/></li>
                                </ul>
                                </div>
                                <div className="user_des">
                                   <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. A sunt tempora minus distinctio iste odit exercitationem accusantium earum</p>
                                </div>
                                
                            </div>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ProductReview
