import React , {useEffect , useState} from 'react'
import { Link  , NavLink} from 'react-router-dom'
import { FaBars , FaUserAlt , FaShoppingCart ,FaMoon , FaSun , FaSignOutAlt} from "react-icons/fa";
import './Navbar.style.scss'
import {useGlopalContext} from '../../ContextAPI/context'
import { useSelector } from 'react-redux';
const Navbar = () => {
    const {isSubmenuOpen , setIsSubmenuOpen  , isDark , setIsDark , loginWithRedirect , logout,appUser , isAuthenticated} = useGlopalContext()
    const totalItems = useSelector((state)=> state.cart.total_items)
    
    // get theme from local storage
  useEffect(()=>{
    document.documentElement.className = isDark
    localStorage.setItem('theme' , isDark)
  },[isDark])
console.log(appUser)
return <>
    <div className='Navbar'>
        <div className="container">
            <nav>
            <Link className='logo nav_btn' to='/'>
                <div className="second_logo">
                    <p>
                        <svg className='filter_svg' xmlns="http://www.w3.org/2000/svg" width="42.996" height="32.879" viewBox="0 0 42.996 32.879">
                            <path id="noun_cloth_2129414" d="M436.271,456.879a1.263,1.263,0,0,1-1.22-.814l-3.062-8.038H418.527A2.527,2.527,0,0,1,416,445.5V426.529A2.528,2.528,0,0,1,418.532,424h17.7a1.264,1.264,0,0,1,1.144.726l3.823,8.126h15.267A2.527,2.527,0,0,1,459,435.381V454.35a2.528,2.528,0,0,1-2.532,2.529Zm-.84-30.35h-16.9s0,6.323,0,18.969h25.828Zm6.961,8.852,5.1,10.842a1.265,1.265,0,0,1-.312,1.49L439.6,454.35h16.864s0-6.323,0-18.969Zm-5.624,18.085,6.216-5.439H434.7Z" transform="translate(-416 -424)"/>
                        </svg>
                        E-shop
                    </p>
                </div>
            </Link>
            <ul className='Nav_links'>
                <li>    
                    <NavLink
                            exact 
                            to="/"
                            className={isActive =>
                                "nav_btn"  + (!isActive ? " " : " active_nav")
                            }
                        >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                            to="/apout"
                            className={isActive =>
                                "nav_btn"  + (!isActive ? " " : " active_nav")
                            }
                        >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                            to="/products"
                            className={isActive =>
                                "nav_btn"  + (!isActive ? " " : " active_nav")
                            }
                        >
                        Products
                    </NavLink>
                </li>
                
                
            </ul>
            <ul className="second_nav ">
                <li>
                     <Link className='nav_btn' to='/cart'>
                        <FaShoppingCart/>
                        {
                            totalItems > 0 && <span className='cart_length'>{totalItems}</span>
                        }
                    </Link>
                </li>
                <li>
                    {
                        !isAuthenticated && 
                            <div className="nav_btn" onClick={loginWithRedirect} title='Log In'>
                                <FaUserAlt/>
                            </div>
                    }
                    {
                        isAuthenticated && 
                            <div className="nav_btn" title='Log Out'>
                                <button className='log_out_menu'>
                                    { appUser !== null && <img src={appUser.picture} alt={appUser.nickname} />}
                                    <div className="dropmenu">
                                        <div className="image_name">
                                            <div className="userImage">
                                                { appUser !== null && <img src={appUser.picture} alt={appUser.nickname} />}
                                            </div>
                                            <div className="user_name">
                                                    { appUser !== null && <p>{appUser.nickname}</p>}
                                            </div>
                                        </div>
                                        <hr />
                                        <button className='log_out_btn' title='log out'  onClick={()=>logout({returnTo:window.location.origin})}> <FaSignOutAlt/>Log Out</button>
                                    </div>
                                </button>
                            </div>
                    }
                </li>
                <li>
                     <p className='nav_btn'>
                        {isDark ==='dark_theme' && <FaSun onClick={()=>{setIsDark('light_theme')}}/>}
                        {isDark ==='light_theme' && <FaMoon onClick={()=>{setIsDark('dark_theme')}}/>}
                    </p>
                </li>
                <li>
                    <div className="sidebar_icon" onClick={()=>setIsSubmenuOpen(!isSubmenuOpen)}>
                        <FaBars/>
                    </div>
                </li>
            </ul>
            
        </nav>
        </div>
    </div>
    </>
}
export default Navbar
