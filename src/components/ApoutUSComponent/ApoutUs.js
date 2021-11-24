import React from 'react'
import './ApoutUs.style.scss'
import ApoutImage from '../../assets/ApoutUs.webp'
import { FaFacebookF , FaGithub , FaLinkedinIn , FaInternetExplorer} from "react-icons/fa";
const ApoutUs = () => {
    return (
        <section>
            <div className='apout_us_container'>
               <div className="mask">
                    <div className='container'>
                    <div className='apout_us'>
                            <div className='Image_apout'>
                                <img src={ApoutImage} alt=""/>   
                            </div>
                            <div className='apout_details'>
                                <h2>Our Story</h2>
                                <div className="line"></div>
                               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio </p> 
                               <div className="credits">
                                   <h2>Contact Me</h2>
                                   <div className="line"></div>
                                   <p>This Website developed by <span>Mostafa Tarek</span> a Front-End React developer</p>
                                   <div className="social_icons">
                                        <a href="https://www.facebook.com/mostafatarekaioup/" className='social_icon' target='Facebook' title='Facebook'><FaFacebookF/></a>
                                        <a href="https://github.com/MostafaTarekAioup" title='GitHub' target='Github' className='social_icon'><FaGithub/></a>
                                        <a href="https://www.linkedin.com/in/mostafa-tarek-050936193/" target='LinkedIn' title='LinkedIn' className='social_icon'><FaLinkedinIn/></a>
                                        <a href="https://mostafa-tarek-portfolio.netlify.app/" target='Portfolio' title='Portfolio' className='social_icon'><FaInternetExplorer/></a>
                                    </div>
                               </div>
                            </div>
                    </div>
                </div>
               </div>
            </div>
        </section>
    )
}

export default ApoutUs
