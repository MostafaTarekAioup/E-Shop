import React , {useEffect , useState} from 'react'
import {Loading,BreadCrumb , ProductDetails , ProductDecAndReviewIndex , SelectedForU} from '../components'
import { useParams } from 'react-router'
import axios from 'axios'
const SingleProductePage = () => {
    const [isloading , setIsLoading] = useState(true)
    const [imageIndex , setImageIndex] = useState(0)
    const [singleProduct , setSingleProduct] = useState([])
    const {id} = useParams()

    const fetchProduct =  ()=>{
        setIsLoading(true)
        axios({
            method:'GET',
            url:`https://course-api.com/react-store-single-product?id=${id}`,
         }).then((response)=>{
           setSingleProduct(response.data)
           setIsLoading(false)
         }).catch((error)=>{
            console.log(error)
         })
    }
    useEffect(()=>{
        fetchProduct()
        setImageIndex(0)
        console.log(singleProduct)
        /* eslint-disable */
        
    },[id])
    return (
        <main>
            <div className="container">
                {isloading && <Loading/> }
                {!isloading && <div>
                    <BreadCrumb title={singleProduct.name} product/>
                    <ProductDetails {...singleProduct} imageIndex ={imageIndex} setImageIndex={setImageIndex} />
                    <ProductDecAndReviewIndex {...singleProduct} />
                    <SelectedForU/>
                    </div>}
                
            </div>
        </main>
    )
}

export default SingleProductePage
