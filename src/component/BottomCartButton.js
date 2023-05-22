import React from "react";
import { Button } from "react-bootstrap";

const BottomCartButton = (props) => {
  return (
  
    <Button
      variant="secondary"
      style={{
        textAlign: "center",
        justifyContent: "space-between",
        width: "10%",
        
        marginBottom:'1px',
        marginTop:'5rem',
        padding: "0.2rem",
        color: "#56CCF2",
        cursor:"pointer",
        scrollbarColor:'auto'
      
      }}
      onClick={props.onClick}
    >
      See the cart
    </Button>
  );
};

export default BottomCartButton;
