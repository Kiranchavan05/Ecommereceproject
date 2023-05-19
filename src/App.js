// import Cart from "./component/Cart";
import React ,{useState}from "react";
import Header from './component/Header'
import Footer from "./component/Footer";
import Cart from "./component/Cart";
// import ProductsList from './component/ProductList'
import Store from "./component/Store";
import CartProvider from "./store/CartProvider";
import ProductDetails from "./component/ProductDetails";
import { Route,Switch,Redirect } from "react-router-dom";
import About from "./component/About";

import Home from "./component/Home";
import Contactus from "./component/Contactus";
import Login from "./component/Login";

// const router=createBrowserRouter([
//   {path:'/', element:<p>Welcom</p>},
//   {path:'/store', element:<ProductsList />},
//   {path:'/about', element:<About />}
// ])

function App() {
  const [showcart,setShowCart]=useState(false)

  const showCartHandler = () => {
    setShowCart(true);
  }

  const hideCartHandler = ()=> {
    setShowCart(false)
  }


  return (
    <CartProvider>
      {showcart && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      {/* <main>
      <ProductsList  onClick={showCartHander}/>
      </main> */}
      
      {/* <Route path='/home' element={<Home />} />
      <Route path='store' element={<ProductsList />} />
      <Route path='about' element={<About />} />
      <Route path='/contactus' element={<Contactus />} /> */}
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/home' />
          </Route>

          <Route path="/home" exact>
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>
          <Route path="/store" exact>
            <Store onClick={showCartHandler} />
          </Route>

          <Route path="/contactus">
            <Contactus />
          </Route>
          <Route path="/store/:productId">
            <ProductDetails />
          </Route>

          <Route path="/login" >
            <Login />
          </Route>

        </Switch>
      </main>
      
      <Footer />
      
    </CartProvider>
  );
}

export default App;
