import React from "react";
import { Card } from "react-bootstrap";

const Header =()=>{

    const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjoVTwHIWdX0Uqhzu_G4VLVg6l1Fj0SziEKd19N8xmBI-6ACLqR65tEKYx-gfn810x4s4&usqp=CAU"

    const cardStyle ={
        textAlign: "center",

    }

    return(
        <Card className="Card">
            <Card.Img style={{height: "500px"}} src ={image} alt="rick and morty"/>
            <Card.ImgOverlay className="d-flex align-items-center text-center">
                <Card.Title style={cardStyle}>
                    <h1>Rick and Morty API</h1>
                </Card.Title>
            </Card.ImgOverlay>
        </Card>

    )    

}

export default Header