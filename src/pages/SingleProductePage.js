import React from 'react'
import {BreadCrumb , ProductDetails , ProductDecAndReviewIndex , SelectedForU} from '../components'
const SingleProductePage = () => {
    return (
        <main>
            <div className="container">
                <BreadCrumb/>
                <ProductDetails/>
                <ProductDecAndReviewIndex/>
                <SelectedForU/>
            </div>
        </main>
    )
}

export default SingleProductePage
