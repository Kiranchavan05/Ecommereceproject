import React from "react";
import { Container,Nav,Navbar,Button, Alert } from "react-bootstrap";
// import classes from "./Header.module.css";

const Header = () => {
  return (
    <React.Fragment>


      <Navbar bg='dark' variant="dark">
        <Container>
          <Navbar.Brand href="#home" ></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="store">STORE</Nav.Link>
            <Nav.Link href="about">ABOUT</Nav.Link>
          </Nav>
        <Button variant="outline-info">cart</Button>
        </Container>
        
      </Navbar>
      
      <Alert className="bg-secondary text-white ">
        <h1><Alert.Heading  >The Generics</Alert.Heading></h1> 
      </Alert>
      </React.Fragment>

  );
};

export default Header;