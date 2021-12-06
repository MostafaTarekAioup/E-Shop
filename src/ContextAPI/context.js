
import React ,{useContext , useState , useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
const AppContext = React.createContext()

// light and dark theme local storage
const getStorageTheme = ()=>{
    let theme = 'light_theme'
    if(localStorage.getItem('theme')){
        theme = localStorage.getItem('theme')
    }
    return theme
}

const AppProvider = ({children})=>{
    const [isSubmenuOpen , setIsSubmenuOpen] = useState(false)
    const [isCatagori , setIsGategory] = useState(true)
    const [isCompany , setIsCompany] = useState(true)
    const [isColors , setIsColors] = useState(true)
    const [isPrice , setIsPrice] = useState(true)
    const [isFilterActive , setIsFilterActive] = useState(false)
    const [isDark , setIsDark] = useState(getStorageTheme())
    const [loading , setLoading] = useState(true)
    // Auth0 setup
    const {isAuthenticated , loginWithRedirect , logout , isLoading , user} = useAuth0()
    const [appUser , setAppUser] = useState(null)
  
    useEffect(()=>{
       if(isAuthenticated){
           setAppUser(user)
       }else{
        setAppUser(null)
       }
        // eslint-disapeled
    },[isAuthenticated])

    return <AppContext.Provider value={{
        isSubmenuOpen , setIsSubmenuOpen,
        isCatagori , setIsGategory,
        isCompany , setIsCompany,
        isColors , setIsColors,
        isPrice , setIsPrice,
        isFilterActive , setIsFilterActive,
        isDark , setIsDark ,
        loading , setLoading ,
        loginWithRedirect , logout,
        appUser , isAuthenticated ,isLoading
    }}>{children}</AppContext.Provider>
}
export const useGlopalContext =()=>{
 return useContext(AppContext)
}
export {AppContext,AppProvider}