import React , {useEffect} from 'react'
import './ProductsContainer.style.scss'
import {SingleProduct} from '../../components'
import {useSelector , useDispatch } from 'react-redux'
import { productsSliceActions } from '../../redux/ProductSlice'
const ProductsContainer = () => {
    const filterdProducts = useSelector((state)=>state.products.filterdProducts) 
    const sort = useSelector((state)=>state.products.sort) 
    const filtres = useSelector((state)=>state.products.filtres)   
    const dispatch = useDispatch()
    const sortHandller=(e)=>{
        const value = e.target.value
        dispatch(productsSliceActions.setSortValue({sortValue:value}))
    } 
    useEffect(()=>{
        dispatch(productsSliceActions.filterProduct())
        dispatch(productsSliceActions.setSortValue({sortValue:sort}))
        // eslint-disable-next-line
    },[ sort,filtres])
    return <>
             <section>
            <div className="products_sort">
                <div className="items_found">
                    <p>{filterdProducts.length} Items Found</p>
                </div>
                <div className="line"></div>
                <div className="sort">
                    <p>sort by</p>
                    <select name="sort" id="sort" value={sort} onChange={sortHandller}>
                        <option value="price-lowest">Price (lowest)</option>
                         <option value="highest-price">Price (Highest)</option>
                        <option value="name-a-z">Name (A-Z)</option>
                        <option value="name-z-a">Name (Z-A)</option>
                    </select>
                </div>
            </div>
            {
                filterdProducts.length === 0 &&  
                    <div className="no_match_products">
                        <p>Sorry no Products match your search</p>
                    </div>
            }
            <div className="all_products_container">
                {filterdProducts.map((product)=>{
                    const  {id} = product
                    return <SingleProduct key={id} {...product}/>
                })}
            </div>
        </section>
    </>
}

export default ProductsContainer
