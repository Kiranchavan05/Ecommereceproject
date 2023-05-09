import React, { useContext } from "react";
import { Container, Nav, Navbar, Button} from "react-bootstrap";
import CartContext from "../store/Cart-Context";
// import { NavLink } from "react-router-dom";

const Header = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.quantity;
  }, 0);
  return (
    <React.Fragment>
      <Navbar
        style={{ position: "fixed", width: "100%", }}
        bg="dark"
        variant="dark"
        
      >
        <Container>
          <Navbar.Brand style={{textAlign:"center", width:'40%', color:'white'}} href="#home"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">HOME</Nav.Link>
            <Nav.Link href="/store">STORE</Nav.Link>
            <Nav.Link href="/about">ABOUT</Nav.Link>
          </Nav>
          <Button onClick={props.onShowCart} variant="outline-info">
            cart
          </Button>
          <span
            style={{
              color: "white",
            }}
          >
            {numberOfCartItems}
          </span>
        </Container>
      </Navbar>
      <header
        style={{
          textAlign: "center",
          padding: "2rem",

          fontSize: "6.3rem",
          color: "white",
          background: "#777",
        }}
      >
        The Generics
      </header>

      {/* <Alert className="bg-secondary text-white ">
          <Alert.Heading ><h1 style={{
            textAlign:'center',
            padding:'2rem',
            
            fontSize:'6.3rem',
            
          }}>The Generics</h1></Alert.Heading>
      </Alert> */}
    </React.Fragment>
  );
};

export default Header;
