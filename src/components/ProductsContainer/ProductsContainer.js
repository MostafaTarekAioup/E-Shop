import React from 'react'
import './ProductsContainer.style.scss'
import {SingleProduct} from '../../components'
import {useSelector } from 'react-redux'
// import { FaListAlt , FaTh } from "react-icons/fa";

const ProductsContainer = () => {
    const products = useSelector((state)=>state.products.products)   
    return <>
             <section>
            <div className="products_sort">
                <div className="items_found">
                    <p>{products.length} Items Found</p>
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
                {products.map((product)=>{
                    const  {id} = product
                    return <SingleProduct key={id} {...product}/>
                })}
            </div>
        </section>
    </>
}

export default ProductsContainer
