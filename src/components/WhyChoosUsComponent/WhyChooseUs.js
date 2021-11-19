import React from 'react'
import './whyChooseUs.style.scss'
import { FaShippingFast ,FaMoneyCheckAlt,FaHandHoldingUsd ,FaChartLine } from "react-icons/fa";
const WhyChooseUs = () => {
    return (
        <section className='why_choose_container'>
            <div className="container">
                <div className="why_us">
                    <h3>Why should you choose us?</h3>
                    <div className="advantages">
                        <div className="advantage">
                            <div className="advantage_icon">
                                <FaShippingFast/>
                            </div>
                            <div className="advantage_details">
                                <h4>Free Shipping</h4>
                                <p>All purchases over $399 are eligible for free shipping via UPS Pack and Ship.</p>
                            </div>
                        </div>
                        {/* /////////////////////////////////////// */}
                        <div className="advantage">
                            <div className="advantage_icon">
                               <FaMoneyCheckAlt/>
                            </div>
                            <div className="advantage_details">
                                <h4>Easy Payments</h4>
                                <p>All payments are processed instantly over a secure payment protocol.</p>
                            </div>
                        </div>
                        {/* /////////////////////////////////////// */}
                        <div className="advantage">
                            <div className="advantage_icon">
                                <FaHandHoldingUsd/>

                            </div>
                            <div className="advantage_details">
                                <h4>Money-Back Guarantee</h4>
                                <p>If an item arrived damaged or you've changed your mind, you can send it back for a full refund..</p>
                            </div>
                        </div>
                        {/* /////////////////////////////////////// */}
                        <div className="advantage">
                            <div className="advantage_icon">
                                <FaChartLine/>

                            </div>
                            <div className="advantage_details">
                                <h4>Finest Quality</h4>
                                <p>Designed to last, each of our products has been crafted with the finest materials.</p>
                            </div>
                        </div>
                        {/* /////////////////////////////////////// */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs
