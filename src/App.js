import './App.scss';
import React , {useEffect} from 'react'
import {Home, About , Cart , Error , Products , SinglrProduct , CheckOut , PrivateRoute} from './pages'
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import {productsSliceActions} from './redux/ProductSlice'
import { cartSliceActions } from './redux/cardSlice';
import {useSelector , useDispatch} from 'react-redux'
import {ScrollToTop,Navbar,Sidebar ,Footer} from './components'
import axios from 'axios'
function App() {
    const dispatch = useDispatch()
    const API = useSelector((state)=>state.products.apiUrl)
    const products = useSelector((state)=>state.products.products)
    const cartData = useSelector((state)=> state.cart.cardData)
    // fetch products 
    const fetchProductsData = async()=>{
      dispatch(productsSliceActions.setIsLoading({loading:true}))
      await axios({
          method:'GET',
          url:API,
       }).then((response)=>{
         // fetch products data 
          dispatch(productsSliceActions.fetchData({data:response.data}))
          // set Loading False
          dispatch(productsSliceActions.setIsLoading({loading:false}))
       }).catch((error)=>{
          dispatch(productsSliceActions.setIsError({error:true}))
          dispatch(productsSliceActions.setIsLoading({loading:false}))
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
 // store cart data to local storage 
useEffect(()=>{
  localStorage.setItem('cart_items' , JSON.stringify(cartData))
  dispatch(cartSliceActions.updateCheckOutValues())
   // eslint-disable-next-line
},[cartData])
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
         <Route exact  path='/products/:id' children={<SinglrProduct/>}/>
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
