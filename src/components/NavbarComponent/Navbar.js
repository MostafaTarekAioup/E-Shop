import React , {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FaBars , FaUserAlt , FaShoppingCart } from "react-icons/fa";
import logo from '../../assets/logo.svg'
import './Navbar.style.scss'
import {useGlopalContext} from '../../ContextAPI/context'
const Navbar = () => {
    const {isSubmenuOpen , setIsSubmenuOpen , navbarColor , setNavbarColor} = useGlopalContext()
    const toggleVisibility = () => {
    if (window.pageYOffset > 50) {
      setNavbarColor(true)
    } else {
     setNavbarColor(false)
    }
  }
  useEffect(()=>{
      window.addEventListener("scroll", toggleVisibility);
  },[])
return <>
    <div className={`${navbarColor?'Navbar whiteNav':'Navbar whiteNav'}`}>
        <div className="container">
            <nav>
            <Link className='logo nav_btn' to='/'>
                <img src={logo} alt="" />
                <div className="second_logo">
                    <p>
                        <svg className='' xmlns="http://www.w3.org/2000/svg" width="42.996" height="32.879" viewBox="0 0 42.996 32.879">
                            <path id="noun_cloth_2129414" d="M436.271,456.879a1.263,1.263,0,0,1-1.22-.814l-3.062-8.038H418.527A2.527,2.527,0,0,1,416,445.5V426.529A2.528,2.528,0,0,1,418.532,424h17.7a1.264,1.264,0,0,1,1.144.726l3.823,8.126h15.267A2.527,2.527,0,0,1,459,435.381V454.35a2.528,2.528,0,0,1-2.532,2.529Zm-.84-30.35h-16.9s0,6.323,0,18.969h25.828Zm6.961,8.852,5.1,10.842a1.265,1.265,0,0,1-.312,1.49L439.6,454.35h16.864s0-6.323,0-18.969Zm-5.624,18.085,6.216-5.439H434.7Z" transform="translate(-416 -424)"/>
                        </svg>
                        E-shop
                    </p>
                </div>

            </Link>

            <ul className='Nav_links'>
                <li>
                    <Link className='nav_btn' to='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link className='nav_btn' to='/apout'>
                        About
                    </Link>
                </li>
                <li>
                    <Link className='nav_btn' to='/products'>
                        Products
                    </Link>
                </li>
                
                
            </ul>
            <ul className="second_nav ">
                <li>
                     <Link className='nav_btn' to='/cart'>
                        <FaShoppingCart/>
                    </Link>
                </li>
                <li>
                     <Link className='nav_btn' to='/cart'>
                        <FaUserAlt/>
                    </Link>
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
