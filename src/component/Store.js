import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import BottomCartButton from "./BottomCartButton";
// import CartContext from "../store/Cart-Context";
// import { Link } from "react-router-dom";
import SignContext from "../store/Sign-Context";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const productsArr = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 1,
  },
  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 1,
  },
  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
  {
    id: 4,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    quantity: 1,
  },
];

const Store = (props) => {
  // const cartCtx = useContext(CartContext);
  const SignCtx=useContext(SignContext)
  const history=useHistory()
  const userEmail=SignCtx.email
  const addItemHandler = (item) => {
    SignCtx.addItem({ ...item, quantity: 1 });

    fetch(`https://crudcrud.com/api/f57a974d43b34bdc846d1382ec03cd3f/cart${userEmail}`,
    {
      method:'POST',
      body:JSON.stringify(item),
      headers:{
        'Content-Type':'application/json'
      }
    })
    console.log(item);
  };



  const routeChanger = (prod) => {
    console.log(prod)
    history.push(`/store/${prod.id}`);
  }


  const product = productsArr.map((prod) => (
    <div key={prod.id}>
      <div >
        <h2>{prod.title}</h2>
        <div style={{ margin: "30px" ,}}>
          <img src={prod.imageUrl} alt={prod.title} />
        </div>
        <div >
          <span style={{marginRight:'5rem'}}>Price: ${prod.price}</span>
          <button style={{
            padding: "8px",
            color: "black",
            border: "none",
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "10%",
            background: "#56CCF2",}} onClick={() => addItemHandler(prod)}>Add To Cart</button>
        </div>

          <button style={{
            margin: "20px",
            alignItems: "center",
            justifyContent: "space-between",
            background: "black",
            color:'violet',
            borderRadius: "20%",
            marginRight: "1.5rem",
            paddingBottom: "5px",
            marginTop: "2rem",
            padding:'0.5rem',

            
          }} onClick={()=>routeChanger(prod)}>Open Cart</button>
         
      </div>
    </div>
  ));

  return (
    <Container>
      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <h1>MUSIC</h1>
        <div> {product} </div>
        <BottomCartButton onClick={props.onClick} />
      </div>
    </Container>
  );
};
export default Store;
