import React from "react";
import { Container,Nav,Navbar,Button, Alert } from "react-bootstrap";
import Footer from "./Footer";



const Header = (props) => {
  return (
    <React.Fragment>


      <Navbar bg='dark' variant="dark">
        <Container>
          <Navbar.Brand href="#home" ></Navbar.Brand>
          <Nav className="me-auto" >
            <Nav.Link href="https://prasadyash2411.github.io/ecom-website/index.html"  >HOME</Nav.Link>
            <Nav.Link href="https://prasadyash2411.github.io/ecom-website/about.html" >STORE</Nav.Link>
            <Nav.Link href="https://prasadyash2411.github.io/ecom-website/about.html#"  >ABOUT</Nav.Link>
          </Nav>
        <Button onClick={props.onClick}  variant="outline-info">cart</Button>
        <span style={{
          color:'white',
        }}>2</span>
        </Container>
        
      </Navbar>
     

      <Alert className="bg-secondary text-white ">
          <Alert.Heading ><h1 style={{
            textAlign:'center',
            padding:'2rem',
            
            fontSize:'6.3rem',
            
          }}>The Generics</h1></Alert.Heading>
      </Alert>
      
      <Footer />
      </React.Fragment>

  );
};

export default Header;