// import Cart from "./component/Cart";
import React ,{useState}from "react";
import "./App.css";
import Header from "./component/Header";
import Cart from "./component/Cart";
import ProductsList from './component/ProductList'



function App() {
  const [showcart,setShowCart]=useState(false)

  const showCartHander=()=>{
    setShowCart(true);
  }

  const hideCartHandler=()=>{
    setShowCart(false)
  }


  return (
    <React.Fragment>
      
      <Header onClick={showCartHander} />
      <ProductsList  onClick={showCartHander}/>
      {showcart &&<Cart onClose={hideCartHandler}/>}
      
    </React.Fragment>
  );
}

export default App;
