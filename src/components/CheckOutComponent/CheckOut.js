import React from 'react'
import './CheckOut.style.scss'
const CheckOut = () => {
    return (
        <section>
            <div className="check_out_container">
                <div className="check_out_details">
                    <p className='Subtotal'>Subtotal: 1200$</p>
                    <p>Shipping: 10$</p>
                    <p>Taxes(5%): 60$</p>
                </div>
                <div className="check_out">
                    <p>total: 1270$</p>
                    <hr />
                    <button>check out</button>
                </div>
            </div>
        </section>
    )
}

export default CheckOut
