import React from 'react'
import {Filters , BreadCrumb , ProductsContainer , Loading} from '../components'
import '../components/FiltersComponent/Filters.style.scss'
import {  FaCog } from "react-icons/fa";
import { useGlopalContext } from '../ContextAPI/context';
const ProductsPage = () => {
    const {isFilterActive , setIsFilterActive , loading } = useGlopalContext()
    return (
        <main>
            {
                loading && <Loading/>
            }
            {!loading && <div className="main">
                <div className="bread_crumb">
                    <BreadCrumb/>
                </div>
                <div className="second_filters_icon" onClick={()=>setIsFilterActive(!isFilterActive)}>
                    <FaCog/>
                </div>
                <div className="container">
                    <div className="products_page_container">
                        <div className={`${isFilterActive? ' filters_container active_filter_container' : 'filters_container'}`}>
                            <Filters/>
                        </div>
                        <div className="products_container">
                                <ProductsContainer/>
                        </div>
                    </div>
                </div>
            </div>
            }
        </main>
    )
}

export default ProductsPage
