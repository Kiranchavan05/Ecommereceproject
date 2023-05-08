// import Cart from "./component/Cart";
import React ,{useState}from "react";

import Header from "./component/Header";
import Cart from "./component/Cart";
import ProductsList from './component/ProductList'
import Footer from "./component/Footer";
import CartProvider from "./store/CartProvider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./component/About";

const router=createBrowserRouter([
  {path:'/', element:<p>Welcom</p>},
  {path:'/store', element:<ProductsList />},
  {path:'/about', element:<About />}
])

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
      <main>
      <ProductsList  onClick={showCartHander}/>
      </main>
      <RouterProvider router={router}/>

      <Footer />
      
    </CartProvider>
  );
}

export default App;
