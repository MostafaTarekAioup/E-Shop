import React from 'react'
import './Breadcrumb.style.scss'
import { FaHome } from "react-icons/fa";
const BreadCrumb = () => {
    return (
        <section>
                <div className="container">
                    <div className="breadCrumb_container">
                        <h4> <FaHome/> / Products </h4>
                    </div>
                </div>
        </section>
    )
}

export default BreadCrumb
