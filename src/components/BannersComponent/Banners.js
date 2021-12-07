import React from 'react'
import './banners.style.scss'
import { Link } from 'react-router-dom'
const Banners = () => {
    return (
        <section className='banners'>
            <div className="container">
                <div className="banners_container">
                    <div className="banner banner1">
                        {/* <img src={banner1} alt="" className='banner_bg' /> */}
                        <div className="banner_info">
                            <div>
                                <p>New collection <br /> available now</p>
                                <Link to='/products'>
                                    <button>View All</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="banner banner2">
                        {/* <img src={banner2} alt="" className='banner_bg' /> */}
                        <div className="banner_info">
                            <div>
                                <p>Redefining the <br /> modern design</p>
                                <Link to='/products'>
                                    <button>check more</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banners
