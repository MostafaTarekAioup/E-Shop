import React from 'react'
import './ProductDescription.style.scss'
const ProductDescription = () => {
    return (
        <section>
            <div className="description_container">
                <div className="description">
                    <h4>Details and product description</h4>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam omnis ratione consectetur facere inventore, maxime iure facilis asperiores dolorem unde neque sequi necessitatibus nam exercitationem rem dignissimos quia nisi maiores?
                    </p>
                </div>
                <div className="brand">
                    <ul>
                        <li><span>Available :</span> In Stock</li>
                        <li><span>SKU :</span>RecoM2MyHJGHLVi5l </li>
                        <li><span>Brand :</span> Liddy</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ProductDescription
