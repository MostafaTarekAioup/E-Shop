import React ,{useContext , useState ,useEffect} from 'react'

const AppContext = React.createContext()

const AppProvider = ({children})=>{
    const [isSubmenuOpen , setIsSubmenuOpen] = useState(false)
    const [navbarColor , setNavbarColor] = useState(false)
    const [isCatagori , setIsGategory] = useState(true)
    const [isCompany , setIsCompany] = useState(true)
    const [isColors , setIsColors] = useState(true)
    const [isPrice , setIsPrice] = useState(true)
    const [isFilterActive , setIsFilterActive] = useState(false)

    return <AppContext.Provider value={{
        isSubmenuOpen , setIsSubmenuOpen,
        navbarColor , setNavbarColor,
        isCatagori , setIsGategory,
        isCompany , setIsCompany,
        isColors , setIsColors,
        isPrice , setIsPrice,
        isFilterActive , setIsFilterActive
    }}>{children}</AppContext.Provider>
}
export const useGlopalContext =()=>{
 return useContext(AppContext)
}
export {AppContext,AppProvider}