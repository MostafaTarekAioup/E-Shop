import React from 'react'
import './Filters.style.scss'
import { FaAngleUp , FaAngleDown , FaCog } from "react-icons/fa";
import {useGlopalContext} from '../../ContextAPI/context'
const Filters = () => {
    const {isCatagori , setIsGategory , isCompany , setIsCompany , isColors , setIsColors , isPrice , setIsPrice ,isFilterActive , setIsFilterActive} = useGlopalContext()
    return (
        <section className='filters_component'>
            <div className="filters_icon" onClick = {()=>setIsFilterActive(!isFilterActive)}>
                <FaCog/>
            </div>
            <div className="search_bar">
                <input type="text" placeholder='Search' />
            </div>
            <div className="catagories">
                <div className="title" onClick={()=> setIsGategory(!isCatagori)}>
                    <p>Category</p>
                    {isCatagori? <FaAngleUp/>:<FaAngleDown/> }
                </div>
                <div className={`${isCatagori? 'catagories_content catagories_content_Active' : 'catagories_content'}`}>
                    <ul>
                        <li>All</li>
                        <li>Office</li>
                        <li>Living Room</li>
                        <li>Kitchen</li>
                        <li>Bedroom</li>
                        <li>Dining</li>
                        <li>Kids</li>
                    </ul>
                </div>
            </div>
            <div className="catagories">
                <div className="title" onClick={()=> setIsCompany(!isCompany)}>
                    <p>Company</p>
                    {isCompany? <FaAngleUp/>:<FaAngleDown/> }
                </div>
                <div className={`${isCompany? 'catagories_content catagories_content_Active' : 'catagories_content'}`}>
                    <select>
                        <option value="1">company 1</option>
                        <option value="1">company 2</option>
                        <option value="1">company 3</option>
                        <option value="1">company 4</option>
                        <option value="1">company 5</option>
                    </select>
                </div>
            </div>
             <div className="catagories">
                <div className="title" onClick={()=> setIsColors(!isColors)}>
                    <p>Colors</p>
                    {isColors? <FaAngleUp/>:<FaAngleDown/> }
                </div>
                <div className={`${isColors? 'catagories_content catagories_content_Active' : 'catagories_content'}`}>
                    <div className="colors_filter">
                            <ul>
                                <li>All</li>
                                <li className='color red'></li>
                                <li className='color green'></li>
                                <li className='color blue'></li>
                                <li className='color white'></li>
                            </ul>
                    </div>
                </div>
            </div>
            <div className="catagories">
                <div className="title" onClick={()=> setIsPrice(!isPrice)}>
                    <p>Price</p>
                    {isPrice? <FaAngleUp/>:<FaAngleDown/> }
                </div>
                <div className={`${isPrice? 'catagories_content catagories_content_Active' : 'catagories_content'}`}>
                    <div className="Price_range">
                           <p>1000</p>
                           <input type="range" min='0' max='20000'  />
                    </div>
                </div>
            </div>
            <div className="free_shipping_filter">
                <label htmlFor="freeshipping">Free Shipping </label>
                <input id='freeshipping' type="checkbox" />
            </div>
            <div className="clear_filter">
                <button>clear filter</button>
            </div>
        </section>
    )
}

export default Filters
