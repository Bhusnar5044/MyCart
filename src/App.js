import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Pages/HomePage/HomePage';
import ProductViewPage from './Pages/ProductViewPage/ProductViewPage';
import CartPage from './Pages/CartPage/CartPage';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-brands-svg-icons'
import { faSlidersH,faHouseUser,faUserLock,faRupeeSign ,faMinus,faPlus,faTrashAlt,faBars,faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import SignInPage from './Pages/SignInPage/SignInPage';

library.add(faSlidersH, faHouseUser, faUserLock,faRupeeSign,faMinus,faPlus,faTrashAlt,faBars,faShoppingCart)

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
      <Switch>
        <Route path='/' exact>
          <Homepage/>
        </Route>
        <Route path='/productViewPage' >
          <ProductViewPage/>
        </Route>
        <Route path='/cartpage'>
          <CartPage/>
        </Route>
        <Route path='/SignInPage'>
          <SignInPage/>
        </Route>
        <Route path='*'>
          <PageNotFound/>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
