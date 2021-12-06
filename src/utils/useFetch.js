import React , {useEffect} from 'react'
import {useSelector , useDispatch} from 'react-redux'
import axios from 'axios'
import {productsSliceActions} from '../redux/ProductSlice'
export const useFetch = ()=>{
    const dispatch = useDispatch()
    const API = useSelector((state)=>state.products.apiUrl)
    const products = useSelector((state)=>state.products.products)

    const fetchProductsData = async()=>{
        dispatch(productsSliceActions.setIsLoading({loading:true}))
        await axios({
            method:'GET',
            url:API,
         }).then((response)=>{
           // fetch products data 
            dispatch(productsSliceActions.fetchData({data:response.data}))
            // fetch all catagories
            dispatch(productsSliceActions.fetchFilters({data:response.data}))
            // fetch all colors
            dispatch(productsSliceActions.fetchColors({data:response.data}))
            // fetch all companies
            dispatch(productsSliceActions.fetchcompanyes({data:response.data}))
            // fetch Prices range
            dispatch(productsSliceActions.fetchMinMaxPrice({data:response.data}))
            // set Loading False
            dispatch(productsSliceActions.setIsLoading({loading:false}))
         }).catch((error)=>{
            dispatch(productsSliceActions.setIsError({error:true}))
            dispatch(productsSliceActions.setIsLoading({loading:false}))
            console.log(error)
         })
    }
    useEffect(()=>{
        if(products.length === 0){
            fetchProductsData()
        }else{
            return
        }
        // eslint-disable-next-line
    },[])
}