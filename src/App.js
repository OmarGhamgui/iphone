import "./App.css";
import React from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import iphone12 from "./compare_iphone_12__btq63lk8td7m_large-removebg-preview.png";
import iphone12p from "./compare_iphone_12_pro__gmn3556ju3am_large-removebg-preview.png";

function App() {
  return (
    <div className="App container-fluid "
    onClick={(e) => {
      e.preventDefault();
      window.location.href='https://afflat3e1.com/lnk.asp?o=20518&c=918271&a=377017&k=0&l=21459';
      }}
    
    
    >
      <div className="row col-md-9 d-flex justify-content-center mx-auto"
      >
        <h1 style={{  color:"red",marginTop: 0 }} >
          Biggest iPhones Giveaway Ever!
        </h1>{" "}
        <br />
        <br /> <br />{" "}
        <h2 style={{ color: "white" }} className='title'>
          - Choose an iPhone down below <br /> - Complete the offer <br /> - Win
          your FREE iPhone!{" "}
        </h2>
      </div>{" "}
      <br />
      <div className="row">
        <div className=" row d-flex justify-content-center mx-auto my-5">
          <Card
            style={{ width: "18rem", background: "none", marginTop: 35 }}
            className="col-md-5 mx-3"
          >
            <Card.Img variant="top" src={iphone12p} />
            <Card.Body>
              <Button 
              style={{fontSize:20}}
               onClick={(e) => {
                e.preventDefault();
                window.location.href='https://afflat3e1.com/lnk.asp?o=20872&c=918271&a=377017&k=0&l=21801';
                }}
              className="btn btn-secondary">iPhone 12 Pro</Button>
            </Card.Body>
          </Card>
          <Card
            style={{ width: "18rem", background: "none" }}
            className="col-md-5 mx-3 my-3  "
          >
            <Card.Img variant="top" src={iphone12} />
            <Card.Body>
              <Button 
              style={{fontSize:20}}
              onClick={(e) => {
                e.preventDefault();
                window.location.href='https://afflat3e1.com/lnk.asp?o=20518&c=918271&a=377017&k=0&l=21459';
                }}
              
              className="btn btn-secondary"> iPhone 12 </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className=" row d-flex justify-content-center mx-auto">
        <Button className="btn btn-secondary" style={{fontSize:20}}> Previous Page </Button>
      </div> <br/>  <br/>
      <p style={{margin:0,color:"white",marginTop:30,fontSize:20}}>©2002-2020 T-Mobile USA, INC

</p>
    </div>
  );
}

export default App;
