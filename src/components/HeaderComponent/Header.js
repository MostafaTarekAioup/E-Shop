import React from 'react'
import './Header.style.scss'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <header className='header'>
           <div className="Header_mask">
                <div className="container">
                    <div className="header_details">
                        <h2>Make your house <br /> into a home</h2>
                        <div >
                            {/* <Link className="shop_btn" to='/products' > <span></span>  Shop Now </Link> */} 
                            <Link className="shop_btn" to='/products' > 
                                <svg id="Button" xmlns="http://www.w3.org/2000/svg" width="139" height="39" viewBox="0 0 139 39">
                                    <text id="Shop_now" data-name="Shop now" transform="translate(61 24)" fill="#fff" fontSize="13" fontFamily="SegoeUI, Segoe UI" letterSpacing="0.08em"><tspan x="0" y="0">SHOP NOW</tspan></text>
                                    <circle id="Ellipse_48" data-name="Ellipse 48" cx="19.5" cy="19.5" r="19.5" fill="#1a6eff"/>
                                    <path id="noun_Arrow_Left_2682937" data-name="noun_Arrow Left_2682937" d="M6.663,13.329,1.107,7.768,0,6.661,1.107,5.553,6.663,0,7.77,1.1,3,5.878H15.336V7.443H3L7.77,12.219Z" transform="translate(27 26.65) rotate(180)" fill="#fff"/>
                                </svg>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className="pills">
                    <div className="container">
                        <ul>
                        <li>
                           <div className="pill_logo">
                                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39">
                                    <g id="Group_208" data-name="Group 208" transform="translate(-298 -708)">
                                        <rect id="Rectangle_660" data-name="Rectangle 660" width="39" height="39" rx="10" transform="translate(298 708)" fill="#e1ecff"/>
                                        <g id="Group_179" data-name="Group 179" transform="translate(304.5 699.1)">
                                        <path id="Path_189" data-name="Path 189" d="M33.641,26.818l-.949-2.2A2.172,2.172,0,0,0,30.686,23.3H29.155v-.561a.842.842,0,0,0-.841-.841h-10.7a.557.557,0,0,0-.561.561.571.571,0,0,0,.561.561H27.99v4.141a.921.921,0,0,0,.927.927h3.731V30.7a.193.193,0,0,1-.194.194h-.69a2.075,2.075,0,0,0-1.79-1.035,2.122,2.122,0,0,0-1.79,1.035H22.425a2.075,2.075,0,0,0-1.79-1.035,2.122,2.122,0,0,0-1.79,1.035H16.861a.561.561,0,1,0,0,1.122h1.7a2.072,2.072,0,0,0,4.141,0h5.2a2.072,2.072,0,0,0,4.141,0H32.5A1.321,1.321,0,0,0,33.814,30.7V27.68A2.459,2.459,0,0,0,33.641,26.818ZM20.635,32.878a.949.949,0,1,1,.949-.949A.957.957,0,0,1,20.635,32.878Zm9.339,0a.949.949,0,1,1,.949-.949A.957.957,0,0,1,29.974,32.878Zm-.841-8.433h1.531a1.01,1.01,0,0,1,.949.625l.82,1.9h-3.3Z" transform="translate(-10.824)" fill="#1a6eff"/>
                                        <path id="Path_190" data-name="Path 190" d="M12.861,33.922h3.969a.561.561,0,1,0,0-1.122H12.861a.557.557,0,0,0-.561.561A.571.571,0,0,0,12.861,33.922Z" transform="translate(-7.686 -8.549)" fill="#1a6eff"/>
                                        <path id="Path_191" data-name="Path 191" d="M7.961,43.922h3.969a.561.561,0,1,0,0-1.122H7.961a.557.557,0,0,0-.561.561A.571.571,0,0,0,7.961,43.922Z" transform="translate(-3.843 -16.392)" fill="#1a6eff"/>
                                        <path id="Path_192" data-name="Path 192" d="M7.612,53.361a.557.557,0,0,0-.561-.561H3.061a.561.561,0,1,0,0,1.122H7.029A.549.549,0,0,0,7.612,53.361Z" transform="translate(0 -24.235)" fill="#1a6eff"/>
                                        </g>
                                    </g>
                                </svg>
                            </div> 
                            <div className="pill_details">
                                    <h3>Free Shipping</h3>
                                    <p>On purchases over $399</p>
                            </div>
                        </li>
                        <li>
                           <div className="pill_logo">
                                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39">
                                    <g id="Group_209" data-name="Group 209" transform="translate(-597 -708)">
                                        <rect id="Rectangle_661" data-name="Rectangle 661" width="39" height="39" rx="10" transform="translate(597 708)" fill="#e1ecff"/>
                                        <g id="noun_Happy_1563582" transform="translate(606 716.667)">
                                        <path id="Path_193" data-name="Path 193" d="M24.167,31.444a.722.722,0,0,1,.722.722.722.722,0,0,0,1.444,0,2.167,2.167,0,0,0-4.333,0,.722.722,0,0,0,1.444,0A.722.722,0,0,1,24.167,31.444Z" transform="translate(-16.389 -22.944)" fill="#1a6eff"/>
                                        <path id="Path_194" data-name="Path 194" d="M56.167,30A2.167,2.167,0,0,0,54,32.167a.722.722,0,0,0,1.444,0,.722.722,0,1,1,1.444,0,.722.722,0,0,0,1.444,0A2.167,2.167,0,0,0,56.167,30Z" transform="translate(-42.611 -22.944)" fill="#1a6eff"/>
                                        <path id="Path_195" data-name="Path 195" d="M10.667,2a8.667,8.667,0,1,0,8.667,8.667A8.667,8.667,0,0,0,10.667,2Zm0,15.889a7.222,7.222,0,1,1,7.222-7.222A7.222,7.222,0,0,1,10.667,17.889Z" fill="#1a6eff"/>
                                        <path id="Path_196" data-name="Path 196" d="M35.987,58.209l-.422.424a2.835,2.835,0,0,1-3.911,0l-.422-.424a.723.723,0,0,0-1.022,1.022l.424.422a4.207,4.207,0,0,0,5.958,0l.424-.422a.723.723,0,1,0-1.022-1.022Z" transform="translate(-22.943 -45.887)" fill="#1a6eff"/>
                                        </g>
                                    </g>
                                </svg>

                            </div> 
                            <div className="pill_details">
                                    <h3>99% Satisfied Customers</h3>
                                    <p>Our clients' opinions speak for themselves</p>
                            </div>
                        </li>
                        <li>
                           <div className="pill_logo">
                                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39">
                                    <g id="Group_210" data-name="Group 210" transform="translate(-894 -708)">
                                        <rect id="Rectangle_662" data-name="Rectangle 662" width="39" height="39" rx="10" transform="translate(894 708)" fill="#e1ecff"/>
                                        <g id="noun_guarantee_2519048" transform="translate(900 713.946)">
                                        <path id="Path_91" data-name="Path 91" d="M23.493,6.584,14.7,4.026a.7.7,0,0,0-.4,0h0L5.5,6.584A.7.7,0,0,0,5,7.26v7.681c0,6.685,8.948,9,9.331,9.092a.689.689,0,0,0,.352,0C15.232,23.892,24,21.563,24,14.941V7.26A.7.7,0,0,0,23.493,6.584Zm-.9,8.356c0,5.137-6.91,7.354-8.093,7.681-1.182-.327-8.093-2.533-8.093-7.681V7.791L14.5,5.434l8.093,2.354Z" transform="translate(0)" fill="#1a6eff"/>
                                        <path id="Path_92" data-name="Path 92" d="M26.782,18.7v.735a2.111,2.111,0,0,0,.352,4.191h1.056a.7.7,0,1,1,0,1.407H26.078a.7.7,0,1,0,0,1.407h.7v.7a.7.7,0,1,0,1.407,0v-.7a2.111,2.111,0,1,0,0-4.222H27.133a.7.7,0,0,1,0-1.407h2.111a.7.7,0,0,0,0-1.407H28.189v-.7a.7.7,0,1,0-1.407,0Z" transform="translate(-12.985 -9.076)" fill="#1a6eff"/>
                                        </g>
                                    </g>
                                </svg>

                            </div> 
                            <div className="pill_details">
                                    <h3>Originality Guaranteed</h3>
                                    <p>2 years warranty for each product from our store</p>
                            </div>
                        </li>
                    </ul>
                    </div>
                </div>
           </div>
        </header>
    )
}

export default Header
