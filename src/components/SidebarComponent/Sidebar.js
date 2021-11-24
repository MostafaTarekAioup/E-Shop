import React from 'react'
import { Link , NavLink } from 'react-router-dom'
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
                    <NavLink
                            exact 
                            to="/"
                            className={isActive =>
                                "nav_btn"  + (!isActive ? " " : " active_nav")
                            }
                            onClick={()=>setIsSubmenuOpen(!isSubmenuOpen)}
                        >
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink
                            exact 
                            to="/apout"
                            className={isActive =>
                                "nav_btn"  + (!isActive ? " " : " active_nav")
                            }
                            onClick={()=>setIsSubmenuOpen(!isSubmenuOpen)}
                        >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                            exact 
                            to="/products"
                            className={isActive =>
                                "nav_btn"  + (!isActive ? " " : " active_nav")
                            }
                            onClick={()=>setIsSubmenuOpen(!isSubmenuOpen)}
                        >
                        Products
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
