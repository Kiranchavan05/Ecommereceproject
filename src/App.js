// import Cart from "./component/Cart";
import React ,{useState}from "react";

import Cart from "./component/Cart";
import ProductsList from './component/ProductList'
import Footer from "./component/Footer";
import CartProvider from "./store/CartProvider";
import { Routes, Route } from "react-router-dom";
import About from "./component/About";
import Header from './component/Header'
import Home from "./component/Home";

// const router=createBrowserRouter([
//   {path:'/', element:<p>Welcom</p>},
//   {path:'/store', element:<ProductsList />},
//   {path:'/about', element:<About />}
// ])

function App() {
  const [showcart,setShowCart]=useState(false)

  const showCartHander = () => {
    setShowCart(true);
  }

  const hideCartHandler = ()=> {
    setShowCart(false)
  }


  return (
    <CartProvider>
      {showcart && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHander} />
      {/* <main>
      <ProductsList  onClick={showCartHander}/>
      </main> */}
      <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='store' element={<ProductsList />} />
      <Route path='about' element={<About />} />
      </Routes>
      
      <Footer />
      
    </CartProvider>
  );
}

export default App;
