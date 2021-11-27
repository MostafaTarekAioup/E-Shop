import './App.scss';
import React , {useEffect} from 'react'
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import {Home, About , Cart , Error , Products , SinglrProduct , CheckOut , PrivateRoute} from './pages'
import {ScrollToTop} from './components'
import {Navbar,Sidebar ,Footer} from './components'
import { useGlopalContext } from './ContextAPI/context';
import {productsSliceActions} from './redux/ProductSlice'
import axios from 'axios'
import {useSelector , useDispatch} from 'react-redux'
function App() {
  const { setLoading} = useGlopalContext()
  const dispatch = useDispatch()
    const API = useSelector((state)=>state.products.apiUrl)
    const products = useSelector((state)=>state.products.products)
    const fetchProductsData = async()=>{
      setLoading(true)
      await axios({
          method:'GET',
          url:API,
       }).then((response)=>{
         console.log(response.data)
          dispatch(productsSliceActions.fetchData({data:response.data}))
          setLoading(false)
       }).catch((error)=>{
          console.log(error)
       })
  }
  useEffect(()=>{
    if(products.length === 0){
        fetchProductsData()
    }else{
        return
    }
    // eslint-disable-next-line
},[])
  return <>
    <Router>
      <ScrollToTop/>
      <Navbar/>
      <Sidebar/>
      <Switch>
        {/* // home page  */}
        <Route exact path='/'>
            <Home/>
        </Route>
         {/* // About Page  */}
         <Route exact  path='/apout'>
            <About/>
        </Route>
          {/* // Cart Page  */}
         <Route exact  path='/cart'>
            <Cart/>
        </Route>
          {/* // Products Page  */}
         <Route exact  path='/products'>
            <Products/>
        </Route>
          {/* // SinglrProduct Page  */}
         <Route exact  path='/product/:id' children={<SinglrProduct/>}/>
          {/* // CheckOut Page  */}
         <Route exact  path='/checkOut'>
            <CheckOut/>
        </Route>
         {/* // Private Route Page  */}
         <Route exact  path='/privateRoute'>
            <PrivateRoute/>
        </Route>
        {/* // Error Route Page  */}
         <Route  path='*'>
            <Error/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  </>
}


export default App;
