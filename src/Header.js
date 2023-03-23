import React from "react";
import { Container } from "react-bootstrap";

const Header =()=>{

    const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjoVTwHIWdX0Uqhzu_G4VLVg6l1Fj0SziEKd19N8xmBI-6ACLqR65tEKYx-gfn810x4s4&usqp=CAU"


    return(
    <Container className="d-flex align-items-center justify-content-center ">
      <div className="position-relative">
        <img src={image} alt="Rick and Morty" className="w-100" />
        <div className=" justify-content-center">
          <h1>Rick and Morty API</h1>
        </div>
      </div>

    </Container>

    )    

}

export default Header