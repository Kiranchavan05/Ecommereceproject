import React,{useContext} from "react";
import CartContext from "../store/Cart-Context";

import  Modal  from './Modal'

// const cartElements = [
//   {
//     title: "Colors",
//     price: 100,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
//     quantity: 2,
//   },
//   {
//     title: "Black and white Colors",
//     price: 50,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
//     quantity: 3,
//   },
//   {
//     title: "Yellow and Black Colors",
//     price: 70,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
//     quantity: 1,
//   },
//];

const Cart = (props) => {

  const cartCtx=useContext(CartContext)
  const totalAmount=`$${cartCtx.totalAmount}`

  
  return (
    <Modal onClose={props.onClose}
      style={{
        margin: " 0px",
        display: "flex",
        position: "fixed",
        top: "50px",
        height: "95%",
        right: "0",
        backgroundColor: "rgb(255, 255, 255)",
        border: "1px solid rgb(177, 103, 103)",
      }}
    >

      {
        <div>
          <h2 style={{ margin: "20px 0px", padding: "0" }}>CART</h2>
          <button onClick={props.onClose}
            style={{
              position: "absolute",
              cursor: "pointer",
              color: "red",
              top: "0",
              right: "0",
              margin: "20px",
              background: "lightblack",
              fontSize: "16px",
              fontWeight: "700",
              padding: "5px",
            }}
            
          >
            X
          </button>
          <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            <span
              style={{
                alignItems: "center",
                
                marginRight: "1.5rem",
                paddingBottom: "10px",
                marginTop: "10px",
              }}
            >
              ITEM
            </span>

            <span
              style={{
                alignItems: "center",
                borderBottom: "1px solidblack",
                marginRight: "1.5rem",
                paddingBottom: "0px",
                marginTop: "10px",
              }}
            >
              PRICE
            </span>
            <span
              style={{
                alignItems: "center",
                borderBottom: "1px solidblack",
                marginRight: "1.5rem",
                paddingBottom: "10px",
                marginTop: "10px",
              }}
            >
              QUANTITY
            </span>
          </div>
          <div>
            {cartCtx.items.map((prod) => (
              <div style={{ fontsize: "1px", display: "flex" }}>
                <div>
                  <span
                    style={{
                      alignItems: "center",
                      borderBottom: "1px solidblack",
                      marginRight: "1.5rem",
                      paddingBottom: "10px",
                      marginTop: "10px",
                      
                    }}
                  >
                    <img
                      style={{
                        padding:'3.5px',
                        width: "100px",
                        borderRadius: "8%",
                        marginRight: "20px",
                      }}
                      src={prod.imageUrl}
                      alt={prod.title}
                    />
                    <span
                      style={{
                        alignItems: "center",
                        borderBottom: "1px solid black",
                        marginRight: "1.5rem",
                        paddingBottom: "10px",
                        marginTop: "10px",
                      }}
                    >
                      {prod.title}
                    </span>
                  </span>
                  <span
                    style={{
                      alignItems: "center",
                      borderBottom: "1px solid black",
                      marginRight: "1rem",
                      paddingBottom: "10px",
                      marginTop: "10px",
                    }}
                  >
                    {prod.price}
                  </span>
                  <span
                    style={{
                      alignItems: "center",
                      borderBottom: "1px solid black",
                      marginRight: "1.5rem",
                      paddingBottom: "10px",
                      marginTop: "10px",
                    }}
                  >
                    <span
                      style={{
                        alignItems: "center",
                        borderBottom: "1px solid black",
                        marginRight: "1.5rem",
                        paddingBottom: "10px",
                        marginTop: "10px",
                      }}
                    >
                      {prod.quantity}
                    </span>
                    <button
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        background: "red",
                        cursor: "pointer",
                        border: "none",
                        borderRadius: "8%",
                        height: "30px",
                        outline: "none",
                        padding: "0px 7px",
                      }}
                    >
                      REMOVE
                    </button>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              fontSize: "1.2rem",
              margin: "20px",
            }}
          >
            <span
              style={{ boxSizing: "border-box", margin: "0", padding: "0" }}>
              {totalAmount}
            </span>
            <h1
              style={{
                marginRight: "10px",
                fontSize: "1.5rem",
              }}
            >Total</h1>
            
          </div>
          <div>
            <button
              style={{
                display: "flex",
                alignitems: "center",
                justifycontent: "center",
                margin: "auto",
                margintop: "50px",
                background: "#56CCF2",
                color: "white",
                fontsize: "1.2rem",
                fontweight: "bold",
                border: "none",
                borderradius: "10%",
                padding: "12px",
                cursor: "pointer",
              }}
            >
              PURCHASE
            </button>
          </div>
        </div>
      }
    </Modal>
  );
};

export default Cart;
