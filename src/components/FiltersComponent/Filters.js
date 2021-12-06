import React from 'react'
import './Filters.style.scss'
import { FaAngleUp , FaAngleDown , FaCog } from "react-icons/fa";
import {useGlopalContext} from '../../ContextAPI/context'
import { useSelector , useDispatch  } from 'react-redux';
import {productsSliceActions} from '../../redux/ProductSlice'
import {currencyFormater} from '../../utils/helpers'

const Filters = () => {
    const {
        isCatagori , setIsGategory ,
        isCompany , setIsCompany ,
        isColors , setIsColors , 
        isPrice , setIsPrice ,
        isFilterActive , setIsFilterActive,
        } = useGlopalContext()
    const filters = useSelector((state)=> state.products.categories)
    const colors = useSelector((state)=> state.products.colors)
    const companies = useSelector((state)=> state.products.companyes)
    const priceMax = useSelector((state)=> state.products.filtres.max_price)
    const priceMin = useSelector((state)=> state.products.filtres.min_price)
    const currentPrice = useSelector((state)=> state.products.filtres.price)
    const categorie = useSelector((state)=> state.products.filtres.categorie)
    const companie = useSelector((state)=> state.products.filtres.companie)
    const currentColor = useSelector((state)=> state.products.filtres.color)
    const shipping = useSelector((state)=> state.products.filtres.shipping)
    const search = useSelector((state)=> state.products.filtres.search)
    const dispatch = useDispatch()


   const updateFiltersHandller = (e)=>{
       let name = e.target.name 
       let value = e.target.value 
       if(name !== 'search' && name !== 'price'){
        setIsFilterActive(false)
       }
       if(name === 'price'){
            value = Number(value)
        }
        if(name === 'shipping'){
            value = e.target.checked    
        }
       dispatch(productsSliceActions.updateFilters({name  , value}))
   }

    return (
        <section className='filters_component'>
            <div className="filters_icon" onClick = {()=>setIsFilterActive(!isFilterActive)}>
                <FaCog/>
            </div>
            <div className="search_bar">
                <input type="text" name = 'search' placeholder='Search' value={search} onChange={updateFiltersHandller} />
                
            </div>
            {/* catagories filter  */}
            <div className="catagories">
                <div className="title" onClick={()=> setIsGategory(!isCatagori)}>
                    <p>Category</p>
                    {isCatagori? <FaAngleUp/>:<FaAngleDown/> }
                </div>
                <div className={`${isCatagori? 'catagories_content catagories_content_Active' : 'catagories_content'}`}>
                   <div>
                        {
                                filters.map((cat , index)=>{
                                    return <button key = {index} type='button' name ='categorie' value={cat} className={`${cat ===  categorie && 'active'}`} onClick={updateFiltersHandller} >{cat}</button>
                                })
                        }
                   </div>
                </div>
            </div>
            {/* // companies filter  */}
            <div className="catagories">
                <div className="title" onClick={()=> setIsCompany(!isCompany)}>
                    <p>Company</p>
                    {isCompany? <FaAngleUp/>:<FaAngleDown/> }
                </div>
                    <div className={`${isCompany? 'catagories_content catagories_content_Active' : 'catagories_content'}`}>
                    <select name='companie' value = {companie} onChange={updateFiltersHandller}>
                        {
                            companies.map((company,index)=>{
                                return <option key = {index} value={company}>{company}</option>
                            })
                        }
                    </select>
                </div>
            </div>
             {/* colors filter  */}
             <div className="catagories">
                <div className="title" onClick={()=> setIsColors(!isColors)}>
                    <p>Colors</p>
                    {isColors? <FaAngleUp/>:<FaAngleDown/> }
                </div>
                <div className={`${isColors? 'catagories_content catagories_content_Active' : 'catagories_content'}`}>
                    <div className="colors_filter">
                                <div className='colors_container'>
                                    {
                                        colors.map((color , index)=>{
                                            return <button 
                                                        className={`color ${ color === currentColor && 'active_color'}`} 
                                                        key={index} 
                                                        style={{backgroundColor:color}} 
                                                        onClick={updateFiltersHandller}
                                                        value={color}
                                                        name = 'color'
                                                        type='button'
                                                        >
                                                        {color === 'All' && 'All'}
                                                    </button>
                                        })
                                    }
                                </div>
                    </div>
                </div>
            </div>
            {/* price filter  */}
            <div className="catagories">
                <div className="title" onClick={()=> setIsPrice(!isPrice)}>
                    <p>Price</p>
                    {isPrice? <FaAngleUp/>:<FaAngleDown/> }
                </div>
                <div className={`${isPrice? 'catagories_content catagories_content_Active' : 'catagories_content'}`}>
                    <div className="Price_range">
                           <p>{currencyFormater(currentPrice)}</p>
                           <input 
                                type="range" 
                                name = 'price' 
                                value={Number(currentPrice)} 
                                onChange = {updateFiltersHandller} 
                                min={priceMin} 
                                max={priceMax}
                             />
                    </div>
                </div>
            </div>
            <div className="free_shipping_filter">
                <label htmlFor="freeshipping">Free Shipping </label>
                <input 
                type="checkbox" 
                id='freeshipping' 
                name='shipping' 
                checked={shipping} 
                onChange={updateFiltersHandller} 
                />
            </div>
            <div className="clear_filter">
                <button onClick={()=> {dispatch(productsSliceActions.defaultFilters()) ;setIsFilterActive(false)}}>clear filter</button>
            </div>
        </section>
    )
}

export default Filters
