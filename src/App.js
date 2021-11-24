import './App.scss';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import {Home, About , Cart , Error , Products , SinglrProduct , CheckOut , PrivateRoute} from './pages'
import {ScrollToTop} from './components'
import {Navbar,Sidebar ,Footer} from './components'
function App() {
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
