import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap'

const CharacterCard= ({ characters })=> {

    return (
      <Container>
      <Row>
        {characters.map((character, index) => (
          <Col md={4} key={index}>
            <Card>
            <Card.Img variant="top" src={character.image} />
              <Card.Body>
                <Card.Title>
                  <h2>{character.name}</h2>
                </Card.Title>
                <Card.Text>{character.status} - {character.species}</Card.Text>
                <Card.Text>
                  Last Known Location: {character.location.name}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
     
     
      
      );
}

export default CharacterCard