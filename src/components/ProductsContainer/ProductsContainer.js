import React from 'react'
import './ProductsContainer.style.scss'
import {SingleProduct} from '../../components'
import { FaListAlt , FaTh } from "react-icons/fa";
const ProductsContainer = () => {
    
    return (
        <section>
            <div className="products_sort">
                <div className="display_icons">
                    <FaTh className='sort_icon'/>
                    <FaListAlt className='sort_icon'/>
                </div>
                <div className="items_found">
                    <p>23 Items Found</p>
                </div>
                <div className="line"></div>
                <div className="sort">
                    <p>sort by</p>
                    <select name="" id="">
                        <option value="">Price (lowest)</option>
                         <option value="">Price (Hightest)</option>
                        <option value="">Name (Z-A)</option>
                        <option value="">Name (Z-A)</option>
                    </select>
                </div>
            </div>
            <div className="all_products_container">
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
                <SingleProduct/>
            </div>
        </section>
    )
}

export default ProductsContainer
