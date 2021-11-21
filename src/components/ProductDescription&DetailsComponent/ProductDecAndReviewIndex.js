import React , {useState} from 'react'
import ProductDescription from './ProductDescription'
import ProductReview from './ProductReview'
import './ProductDescription.style.scss'
const ProductDecAndReviewIndex = () => {
    const [isDescription , setIsDescription] = useState(true)
    const [isReview , setIsReview] = useState(false)
    const handleDescription = ()=>{
        setIsReview(false)
        setIsDescription(true)
    }
    const handleReviews = ()=>{
        setIsDescription(false)
        setIsReview(true)
        
    }
    return (
        <section>
            <div className="Product_description_nav">
                <div>
                    <button onClick={()=>handleDescription()} className={`${isDescription?'active_btn btn':'btn'}`}>Description</button>
                </div>
                <div>
                    <button onClick={()=>handleReviews()} className={`${isReview? 'active_btn btn reviews_btn' : 'btn reviews_btn'}`} >Reviews <span>(20)</span></button>
                </div>
            </div>
            <div className="Product_review_Description">
                {isDescription && <ProductDescription/>}
                {isReview && <ProductReview/>}
            </div>
        </section>
    )
}

export default ProductDecAndReviewIndex
