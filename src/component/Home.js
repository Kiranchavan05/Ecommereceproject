import React from "react";
import { Container, Table } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      {/* <header
        style={{
          textAlign: "center",
          padding: "2rem",

          fontSize: "6.3rem",
          color: "white",
          background: "#777",
        }}
      >
        The Generics
        
      </header> */}
      <h2
        style={{
          fontFamily: "cursive",
          textAlign: "center",
          padding: "20px",
          fontSize: "30px",
          
        }}
      >
        TOURS
      </h2>
      <Table striped bordered hover>
        
        <tbody>
            <tr>
                <td>JULY 16</td>
                <td>MUMBAI,IND</td>
                <td>MARINE DRIVE</td>
                <button style={{background:"#56CCF2"}}>BUY TICKET</button>
            </tr>
            <tr>
                <td>MAY 30</td>
                <td>HOSPET,IND</td>
                <td>ANJANADRI BETTA</td>
                <button style={{background:"#56CCF2"}}>BUY TICKET</button>
            </tr>
            <tr>
                <td>OCT 5</td>
                <td>GOA,IND</td>
                <td>MAGA BEACH</td>
                <button style={{background:"#56CCF2"}}>BUY TICKET</button>
            </tr>
            <tr>
                <td>APR 16</td>
                <td>UTTRAKHAND, IND</td>
                <td>KEDARNATH</td>
                <button style={{background:"#56CCF2"}}>BUY TICKET</button>
            </tr>
            <tr>
                <td>AUG 2</td>
                <td>LAS VEGAS, NV</td>
                <td>T-MOBILE ARENA</td>
                <button style={{background:"#56CCF2"}}>BUY TICKET</button>
            </tr>
            
            <tr>
                <td>AUG 7</td>
                <td>CONCORD,CA</td>
                <td>CONCORD PAVILION</td>
                <button style={{background:"#56CCF2"}}>BUY TICKET</button>
            </tr><br>
      </br>
            <br>
      </br>
        </tbody>

      </Table>

    </Container>
  );
};
export default Home;
