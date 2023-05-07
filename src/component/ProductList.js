import React, {useContext} from "react";
import { Container} from "react-bootstrap";
import BottomCartButton from "./BottomCartButton";
import CartContext from "../store/Cart-Context";

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

const ProductsList = (props) => {

  const cartCtx=useContext(CartContext);


  const addItemHandler=item=>{
    cartCtx.addItem({...item})
  }

  
  const product = productsArr.map((prod) => (
    <div
      key={prod.id}
      style={{
        margin: "0 auto",
        maxWidth: "10%",
        padding: "20px 30px",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
        }}
      >
        <h2
          style={{
            display: "block",
            width: "100%",
            textAlign: "center",
            fontSize: "24px",
            marginBottom: "15px",
          }}
        >
          {prod.title}
        </h2>
        <div style={{ margin: "20px" }}>
          <img
            src={prod.imageUrl}
            alt={prod.title}
            style={{
              // transformOrigin: "center center",
              objectFit: "cover",
              padding: "0px",
              margin: "0px",
              transition: "ease-in 0.5s",
              height: "250px",
              width: "250px",
            }}
          />
        </div>
        <div
          style={{
            margin: "20px",
            alignItems: "center",
            justifyContent: "space-between",
            background: "white",
            width: "80%",
            display: "flex",
          }}
        >
          <span> ${prod.price}</span>
          <button onClick={()=>addItemHandler(prod)}
            style={{
              
              padding: "8px",
              color: "white",
              border: "none",
              fontSize: "15px",
              fontWeight: "bold",
              borderRadius: "10%",
              background: "#56CCF2",
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <Container
      style={{ marginTop: "10px", textAlign: "center" }}
    >
      <h1
        style={{
          fontFamily: "metal mania",
          textAlign: "center",
          padding: "20px",
          fontSize: "30px",
          fontWeight: "bold",
          fontStyle:"oblique"
        }}
      >
        MUSIC
      </h1>
      <div> {product} </div>
      <BottomCartButton onClick={props.onClick} />
      
      
    </Container>
  );
};

export default ProductsList;