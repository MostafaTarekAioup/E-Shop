import React from 'react'
import { Route , Redirect } from 'react-router'
import { useGlopalContext } from '../ContextAPI/context'
const PrivateRoute = ({children , ...rest}) => {
    const {appUser} = useGlopalContext()
return <Route {...rest} render={()=>{
    return appUser ? children : <Redirect to='/'></Redirect>
}}>
    </Route>
}

export default PrivateRoute
