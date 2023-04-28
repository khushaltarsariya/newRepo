
import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
// import diamond1 from "./diamond.jpg";
// import markis from "./markis.jpg";
// import pan from "./pan.jpg";
import princess from "./princess.jpg";

const styles = {
  cardImage: {
    objectFit: 'cover',
    borderRadius: 55
  }
}

function Cards() {
    return (
        <Container style={{marginTop:'20px'}}>
            <div className="col-md-12 mb-5 text-center ">
                    <h3 className="main-heading">Details</h3>
                    <div className="underline mx-auto"></div>    
                </div>
            <Row>
              <Col md={4}>
                    <Card className="shadow p-3 mb-5 bg-white rounded" style={{width:"18rem"}} >
                        <Card.Img variant="top" src={princess} style={styles.cardImage} />
                        <Card.Body>
                            <Card.Title>Real Diamond</Card.Title>
                            <Card.Text>
                                This is a card text This is a card text This is a card text
                            </Card.Text>
                                <Button variant='success'>Read More...</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md={4}>
                    <Card className="shadow p-3 mb-5 bg-white rounded" style={{width:"18rem"}} >
                        <Card.Img variant="top" src={princess} style={styles.cardImage}/>
                        <Card.Body>
                            <Card.Title>Markis</Card.Title>
                            <Card.Text>
                                This is a card text This is a card text This is a card text
                            </Card.Text>
                                <Button variant='success'>Read More...</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md={4}>
                    <Card className="shadow p-3 mb-5 bg-white rounded" style={{width:"18rem"}} >
                        <Card.Img variant="top" src={princess} />
                        <Card.Body>
                            <Card.Title>Pan cut</Card.Title>
                            <Card.Text>
                                This is a card text This is a card text This is a card text
                            </Card.Text>
                                <Button variant='success'>Read More...</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md={4}>
                    <Card className="shadow p-3 mb-5 bg-white rounded" style={{width:"18rem",marginTop:"0px"}} >
                        <Card.Img variant="top" src={princess} />
                        <Card.Body>
                            <Card.Title>princess cut</Card.Title>
                            <Card.Text>
                                This is a card text This is a card text This is a card text
                            </Card.Text>
                                <Button variant='success'>Read More...</Button>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col md={4}>
                    <Card className="shadow p-3 mb-5 bg-white rounded" style={{width:"18rem",marginTop:"0px"}} >
                        <Card.Img variant="top" src={princess} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                This is a card text This is a card text This is a card text
                            </Card.Text>
                                <Button variant='success'>Read More...</Button>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col md={4}>
                    <Card className="shadow p-3 mb-5 bg-white rounded" style={{width:"18rem",marginTop:"0px"}} >
                        <Card.Img variant="top" src={princess} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                This is a card text This is a card text This is a card text
                            </Card.Text>
                                <Button variant='success'>Read More...</Button>
                        </Card.Body>
                    </Card>
                    </Col>
            </Row>
        </Container>
    )
}

export default Cards