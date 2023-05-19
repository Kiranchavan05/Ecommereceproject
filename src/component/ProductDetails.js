import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import {useParams} from "react-router-dom"
import CartContext from "../store/Cart-Context";

const productArr = [
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

const ProductDetails = () => {
  const params = useParams();
  console.log(params);

  const cartCtx = useContext(CartContext);

  const addItemToCart = (product) => {
    cartCtx.addItem(product);
  };

  const product = productArr.find((prod) => prod.id === +params.productId);
  return (
    <Container style={{ marginTop: "30px", textAlign: "center" }}>
      <div>
        <h1>{product.title}</h1>
        <img src={product.imageUrl} alt={product.title}></img>
      </div>
      <div style={{
            margin: "20px",
            alignItems: "center",
            justifyContent: "space-between",
            background: "white",
           marginLeft:'6rem',
            display: "flex",
          }}>
        <span style={{
            marginLeft:'35%',
             margin: "10px",
             padding: "8px",
             alignItems: "center",
             justifyContent: "space-between",
             background: "green",
             borderRadius: "10%",
             display: "flex",
        }}>Price: ${product.price}</span>
        <button
          style={{
            marginRight:'35%',
            padding: "8px",
            color: "black",
            border: "none",
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "10%",
            background: "#56CCF2",
          }}
          onClick={() => addItemToCart(product)}
          
        >Add
        to
        Cart</button>
      </div>
      <div>This is a bueatiful multicolours</div>
    </Container>
  );
};
export default ProductDetails;
