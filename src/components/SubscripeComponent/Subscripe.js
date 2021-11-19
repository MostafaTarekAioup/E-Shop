import React from 'react'
import './Subscripe.style.scss'
const Subscripe = () => {
    const onSubmetHandller = (e)=>{
        e.preventDefault()
    }
    return (
        <section className='subscripe_container'>
            <div className="container">
                <div className="mask">
                    <div className="subcripe">
                        <p>Subscribe to our newsletter and receive exclusive offers every week</p>
                        <form action="POST" onSubmit={onSubmetHandller}>
                           <div className="input_group">
                                <label htmlFor="Email">
                                    <input type="email" id='Email' required  />
                                </label>
                           </div>
                            <div className="submit">
                                <button>Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscripe
