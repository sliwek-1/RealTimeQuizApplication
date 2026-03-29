import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Row, Col, Badge} from "react-bootstrap";

import Card from 'react-bootstrap/Card';
import { Link } from "@tanstack/react-router";

function FrontPage() {
    return (
        <>
            <div className="bg-light min-vh-100">
            {/* 1. NAVBAR */}
            <Navbar bg="white" expand="lg" className="shadow-sm py-3 mb-5">
                <Container>
                    <Navbar.Toggle aria-controls="main-nav" />
                    <Navbar.Collapse id="main-nav">
                        <Nav className="ms-auto text-uppercase small fw-semibold">
                            <Nav.Link href="/quiz" className="px-3">Lista quizów</Nav.Link>
                            <Nav.Link href="/quiz" className="px-3">Moje quizy</Nav.Link>
                            <Nav.Link href="/quiz" className="px-3">Kreator</Nav.Link>
                            <Button variant="outline-primary" href="/session/create" className="ms-lg-3 btn-sm">
                                Utwórz sesję
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container>
                {/* 2. SEKCJA: DOŁĄCZ DO SESJI */}
                <Row className="justify-content-center mb-5">
                    <Col md={10} lg={8}>
                        <Card className="border-0 shadow-sm p-4 text-center">
                            <Card.Body>
                                <h2 className="fw-bold mb-3">Dołącz do sesji</h2>
                                <p className="text-muted mb-4">Wprowadź unikalny kod otrzymany od organizatora, aby rozpocząć quiz.</p>
                                <Form className="d-flex gap-2 justify-content-center mx-auto" style={{ maxWidth: '400px' }}>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="KOD: ABCXYZ" 
                                        maxLength={6} 
                                        className="form-control-lg text-center fw-bold text-uppercase"
                                    />
                                    <Button variant="success" size="lg" className="px-4">Dołącz</Button>
                                </Form>
                                <Form.Text className="text-muted d-block mt-2 small">
                                    Kod powinien składać się z 6 znaków.
                                </Form.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* 3. SEKCJA: MOJE QUIZY */}
                <div className="d-flex justify-content-between align-items-end mb-4">
                    <div>
                        <h3 className="fw-bold mb-0">Moje Quizy</h3>
                        <p className="text-muted small mb-0">Twoje ostatnio utworzone i ulubione arkusze</p>
                    </div>
                    <Button variant="link" className="text-success fw-semibold text-decoration-none">Zobacz wszystkie →</Button>
                </div>

                <Row className="g-4 mb-5">
                    {[
                        { title: "Egzamin Programowanie", desc: "Składnia języka C/C++ oraz podstawowe algorytmy.", author: "M. Śliwiński", questions: 22, type: "Publiczny" },
                        { title: "Egzamin Sieci", desc: "Warstwy modelu ISO/OSI oraz protokoły sieciowe TCP/IP.", author: "M. Śliwiński", questions: 10, type: "Prywatny" },
                        { title: "Mapowanie i Szeregowanie", desc: "Algorytmy mapowania cache oraz szeregowania procesów.", author: "M. Śliwiński", questions: 40, type: "Prywatny" },
                        { title: "Bazy Danych", desc: "Normalizacja baz danych i zapytania SQL.", author: "M. Śliwiński", questions: 15, type: "Publiczny" }
                    ].map((quiz, idx) => (
                        <Col key={idx} xs={12} sm={6} lg={3}>
                            <Card className="h-100 border-0 shadow-sm hover-shadow transition">
                                <Card.Body className="d-flex flex-column">
                                    <div className="mb-3">
                                        <Badge bg={quiz.type === 'Publiczny' ? 'success' : 'secondary'} className="mb-2 fw-normal">
                                            {quiz.type}
                                        </Badge>
                                        <Card.Title className="fw-bold h5 mb-2">{quiz.title}</Card.Title>
                                        <Card.Text className="text-muted small" style={{ minHeight: '3rem' }}>
                                            {quiz.desc}
                                        </Card.Text>
                                    </div>
                                    <div className="mt-auto">
                                        <div className="d-grid mb-3">
                                            <Button variant="outline-success" size="sm">Rozpocznij</Button>
                                        </div>
                                        <div className="border-top pt-2">
                                            <p className="text-muted mb-0" style={{ fontSize: '0.75rem' }}>
                                                {quiz.author} • {quiz.questions} pytań
                                            </p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
        </>
    )
}

export default FrontPage;