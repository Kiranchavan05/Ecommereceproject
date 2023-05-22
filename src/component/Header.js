import React, { useContext,useEffect} from "react";
import { Container, Nav, Navbar, Button} from "react-bootstrap";
// import CartContext from "../store/Cart-Context";
import SignContext from "../store/Sign-Context";
import {useHistory} from 'react-router-dom'


const Header = (props) => {
  // const cartCtx = useContext(CartContext);
  const SignCtx=useContext(SignContext)
  const history=useHistory()
  const isLoggedIn=!!SignCtx.token

  const numberOfCartItems = SignCtx.items.reduce((currNumber, item) => {
    return currNumber + item.quantity;
  }, 0);



  // let userEmail;
  // if (!!SignCtx.token) {
  //   console.log(userEmail)
  // } else {
  //   // userEmail=SignCtx.email.replace(/[@.]/g, "");
  // }

  let userEmail;
  if(SignCtx.token) {
    userEmail=SignCtx.email
  }
  const logoutHandler = () => {
    SignCtx.logout()
    history.replace('/Login')
  }

  

  // let userEmail;
  // if(!!SignCtx.token){
  //   userEmail=SignCtx.email.replace(/[@.]/g, "");
  // }

  async function getItems() {
    const res=await fetch(
      `https://crudcrud.com/api/f57a974d43b34bdc846d1382ec03cd3f/cart${userEmail}` 
    );
    const data=await res.json();
    data.map((item)=>{
      return SignCtx.addItem({...item})
    })
  }

  useEffect(() => {
   getItems()
  }, [userEmail]);


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
            <Nav.Link href='/contactus'>Contact us</Nav.Link>
            {
              !isLoggedIn && <Nav.Link href='/login'>Login</Nav.Link>
            }
            {
              isLoggedIn && <button style={{borderRadius: '6px',
                background: '#b674e2',
          
                padding: '0.5rem',
                textalign: 'center'}} onClick={logoutHandler}>Logout</button>
            }
          </Nav>
          <Button onClick={props.onShowCart} variant="outline-info" >
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
