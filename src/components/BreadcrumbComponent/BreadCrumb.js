import React from 'react'
import './Breadcrumb.style.scss'
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
const BreadCrumb = ({title , product}) => {
    return (
        <section>
                <div className="container">
                    <div className="breadCrumb_container">
                        <Link className='link_btn' to='/'><FaHome/></Link>
                         {product && <Link  className='link_btn' to='/products'>/ Products</Link>}
                          / {title} 
                    </div>
                </div>
        </section>
    )
}

export default BreadCrumb
