import React , {useEffect,useState} from 'react'
import './scrollToTop.style.scss'
import { FaAngleUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [scrollToTO , setIsScrollToTop] = useState(false)
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        };
        useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 200) {
            setIsScrollToTop(true);
            } else {
            setIsScrollToTop(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);

        }, []);
    return (
        <div className={`${scrollToTO ? 'scroll_to_top_container active_scroll_par' :'scroll_to_top_container'}`}
            title='scroll to top'
            onClick={scrollToTop}
            >
            <FaAngleUp/>
        </div>
    )
}

export default ScrollToTop
