import React ,{useContext , useState ,useEffect} from 'react'

const AppContext = React.createContext()
const getStorageTheme = ()=>{
    let theme = 'light_theme'
    if(localStorage.getItem('theme')){
        theme = localStorage.getItem('theme')
    }
    return theme
}
const AppProvider = ({children})=>{
    const [isSubmenuOpen , setIsSubmenuOpen] = useState(false)
    const [navbarColor , setNavbarColor] = useState(false)
    const [isCatagori , setIsGategory] = useState(true)
    const [isCompany , setIsCompany] = useState(true)
    const [isColors , setIsColors] = useState(true)
    const [isPrice , setIsPrice] = useState(true)
    const [isFilterActive , setIsFilterActive] = useState(false)
    const [isDark , setIsDark] = useState(getStorageTheme())

    return <AppContext.Provider value={{
        isSubmenuOpen , setIsSubmenuOpen,
        navbarColor , setNavbarColor,
        isCatagori , setIsGategory,
        isCompany , setIsCompany,
        isColors , setIsColors,
        isPrice , setIsPrice,
        isFilterActive , setIsFilterActive,
        isDark , setIsDark
    }}>{children}</AppContext.Provider>
}
export const useGlopalContext =()=>{
 return useContext(AppContext)
}
export {AppContext,AppProvider}