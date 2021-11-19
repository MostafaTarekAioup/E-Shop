import React from 'react'
import { Link } from 'react-router-dom'
import { FaTimes } from "react-icons/fa";
import './sidebar.style.scss'
import {useGlopalContext} from '../../ContextAPI/context'
const Sidebar = () => {
    const {isSubmenuOpen , setIsSubmenuOpen} = useGlopalContext()

    return (
        <div className={`${isSubmenuOpen?'side_bar_container active_sidebar':'side_bar_container'}`}>
            <div className="close_btn" onClick={()=>setIsSubmenuOpen(!isSubmenuOpen)}>
                <FaTimes/>
            </div>
            <ul>
                <li>
                    <Link className='nav_btn' to='/' onClick={()=>setIsSubmenuOpen(!isSubmenuOpen)}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link className='nav_btn' to='/apout' onClick={()=>setIsSubmenuOpen(!isSubmenuOpen)}>
                        About
                    </Link>
                </li>
                <li>
                    <Link className='nav_btn' to='/products' onClick={()=>setIsSubmenuOpen(!isSubmenuOpen)}>
                        Products
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
