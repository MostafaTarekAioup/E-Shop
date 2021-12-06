import React from 'react'
import './ProductDescription.style.scss'
const ProductDescription = ({company , id , description , stock}) => {
    return (
        <section>
            <div className="description_container">
                <div className="description">
                    <h4>Details and product description</h4>
                    <p>{description}</p>
                </div>
                <div className="brand">
                    <ul>
                        <li><span>Available :</span> {stock > 0 ? 'In Stock' : 'Out of stuck'}</li>
                        <li><span>SKU :</span>{id} </li>
                        <li><span>Brand :</span>{company}</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ProductDescription
