import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


import Card from 'react-bootstrap/Card';



function FrontPage() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container className="text-dark">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/quiz">Lista quizów</Nav.Link>
                        <Nav.Link href="/quiz">Moje quizy</Nav.Link>
                        <Nav.Link href="/quiz">Kreator quizów</Nav.Link>
                        <Nav.Link href="/quiz">Utwórz sesje</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container className="d-flex justify-content-right align-items-baseline mt-5 border-bottom" style={{height: "15vh"}}>
                    <div style={{width: "20vw"}}>
                        <h2>
                            Dołącz do sesji:
                        </h2>
                    </div>
                    <Form style={{width: "50vw"}}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Group className="d-flex gap-2">
                            <Form.Control type="email" placeholder="ABCXYZ" maxLength={6} style={{textTransform: "uppercase"}}/>
                            <Button variant="success" type="submit">
                                Dołącz
                            </Button>
                        </Form.Group>
                        <Form.Text className="text-dark">
                            Podaj 6 cyfrowy kod sesji
                        </Form.Text>
                    </Form.Group>
                    </Form>
            </Container>

            <Container className="d-flex justify-content-right align-items-baseline flex-column mt-5 border-bottom" style={{height: "40vh"}}>
                    <div style={{width: "20vw", height: "10vh"}}>
                        <h2>
                            Moje Quizy
                        </h2>
                    </div>
                    
                    <Container className="d-flex align-items-base-center">
                        <Card style={{ flex: 1 }} className="m-2">
                            <Card.Body >
                                <div style={{height: "10vh"}}>
                                    <Card.Title>Egzamin Programowanie</Card.Title>
                                    <Card.Text>
                                        Składnia języwka C/C++
                                    </Card.Text>
                                </div>
                                <Button variant="success">Rozpocznij</Button>
                                <p className="text-muted sm mt-2">
                                    Autor: Mateusz Śliwiński, 22 pytania, Publiczny
                                </p>
                            </Card.Body>
                        </Card>
                        <Card style={{ flex: 1 }} className="m-2">
                            <Card.Body>
                                <div style={{height: "10vh"}}>
                                    <Card.Title>Egzamin Sieci</Card.Title>
                                    <Card.Text>
                                        Warsty modleu ISO/OSI, Protokoły sieciowe
                                    </Card.Text>
                                </div>
                                <Button variant="success">Rozpocznij</Button>
                                <p className="text-muted sm mt-2">
                                    Autor: Mateusz Śliwiński, 10 pytania, Prywanty
                                </p>
                            </Card.Body>
                        </Card>
                        <Card style={{ flex: 1 }} className="m-2">
                            <Card.Body>
                                <div style={{height: "10vh"}}>
                                    <Card.Title>Mapowanie i Szerwgowanie</Card.Title>
                                    <Card.Text>
                                        Aplogrymty mapowania cashe oraz szeregowania procesów
                                    </Card.Text>
                                </div>
                                <Button variant="success">Rozpocznij</Button>
                                <p className="text-muted sm mt-2">
                                    Autor: Mateusz Śliwiński, 40 pytania, Prywanty
                                </p>
                            </Card.Body>
                        </Card>
                        <Card style={{ flex: 1 }} className="m-2">
                            <Card.Body>
                                <div style={{height: "10vh"}}>
                                    <Card.Title>Mapowanie i Szerwgowanie</Card.Title>
                                    <Card.Text>
                                        Aplogrymty mapowania cashe oraz szeregowania procesów
                                    </Card.Text>
                                </div>
                                <Button variant="success">Rozpocznij</Button>
                                <p className="text-muted sm mt-2">
                                    Autor: Mateusz Śliwiński, 40 pytania, Prywanty
                                </p>
                            </Card.Body>
                        </Card>
                    </Container>
            </Container>
        </>
    )
}

export default FrontPage;