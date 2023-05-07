// import Cart from "./component/Cart";
import React ,{useState}from "react";

import Header from "./component/Header";
import Cart from "./component/Cart";
import ProductsList from './component/ProductList'
import Footer from "./component/Footer";
import CartProvider from "./store/CartProvider";



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

      <Footer />
      
    </CartProvider>
  );
}

export default App;
