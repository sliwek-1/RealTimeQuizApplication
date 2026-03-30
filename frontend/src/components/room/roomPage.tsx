import React from "react";
import { Container, Nav, Row, Col, Card, ListGroup, Badge, Button, Navbar } from 'react-bootstrap';

export function RoomPage() {

    const participants = [
        { id: 1, name: "Mateusz Śliwiński", isAdmin: true },
        { id: 2, name: "Anna Kowalska", isAdmin: false },
        { id: 3, name: "Jan Nowak", isAdmin: false },
        { id: 4, name: "robert_99", isAdmin: false },
    ];

    return (
        <div className="bg-light min-vh-100">
            {/* Minimalistyczny Navbar z kodem sesji */}
            <Navbar bg="white" className="shadow-sm mb-4">
                <Container>
                    <Navbar.Brand className="fw-bold">Poczekalnia Sesji</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Badge bg="dark" className="fs-6 px-3 py-2">KOD: ABCXYZ</Badge>
                    </Nav>
                </Container>
            </Navbar>

            <Container>
                <Row className="g-4">
                    {/* LEWA STRONA: LISTA UŻYTKOWNIKÓW */}
                    <Col lg={8}>
                        <Card className="border-0 shadow-sm">
                            <Card.Body className="p-4">
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <h4 className="fw-bold mb-0">Uczestnicy</h4>
                                    <Badge bg="success" pill>{participants.length} osób</Badge>
                                </div>
                                
                                <ListGroup variant="flush">
                                    {participants.map((user) => (
                                        <ListGroup.Item 
                                            key={user.id} 
                                            className="d-flex justify-content-between align-items-center py-3 border-light"
                                        >
                                            <div className="d-flex align-items-center">
                                                <div 
                                                    className="bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                                                    style={{ width: '40px', height: '40px' }}
                                                >
                                                    {user.name.charAt(0).toUpperCase()}
                                                </div>
                                                <span className="fw-medium text-dark">{user.name}</span>
                                            </div>
                                            {user.isAdmin && <Badge bg="light" text="dark" className="border">Organizator</Badge>}
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>

                                {participants.length === 0 && (
                                    <p className="text-center text-muted py-5">Oczekiwanie na pierwszych uczestników...</p>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* PRAWA STRONA: PANEL INFORMACYJNY */}
                    <Col lg={4}>
                        <div className="sticky-top" style={{ top: '1.5rem' }}>
                            {/* Podstawowe info o Quizie */}
                            <Card className="border-0 shadow-sm mb-4">
                                <Card.Body className="p-4">
                                    <h5 className="fw-bold mb-3 border-bottom pb-2">O Quizie</h5>
                                    <h6 className="text-primary fw-bold">Egzamin Programowanie</h6>
                                    <p className="text-muted small">Składnia języka C/C++ oraz podstawowe algorytmy wyszukiwania.</p>
                                    <div className="small">
                                        <div className="d-flex justify-content-between mb-1">
                                            <span>Pytania:</span>
                                            <span className="fw-bold">22</span>
                                        </div>
                                        <div className="d-flex justify-content-between mb-1">
                                            <span>Autor:</span>
                                            <span className="fw-bold text-truncate ms-2">M. Śliwiński</span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>

                            {/* Konfiguracja sesji */}
                            <Card className="border-0 shadow-sm mb-4 bg-white">
                                <Card.Body className="p-4">
                                    <h5 className="fw-bold mb-3 border-bottom pb-2">Ustawienia</h5>
                                    <div className="small text-muted">
                                        <div className="d-flex justify-content-between mb-2">
                                            <span>Czas na odp:</span>
                                            <span className="text-dark fw-semibold">30s</span>
                                        </div>
                                        <div className="d-flex justify-content-between mb-2">
                                            <span>Limit czasu:</span>
                                            <span className="text-dark fw-semibold">45 min</span>
                                        </div>
                                        <div className="d-flex justify-content-between mb-2">
                                            <span>Próg zdania:</span>
                                            <span className="text-dark fw-semibold">60%</span>
                                        </div>
                                        <div className="d-flex justify-content-between mb-2">
                                            <span>Ostrzeżenia:</span>
                                            <span className="text-dark fw-semibold">Włączone</span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>

                            {/* Przycisk START */}
                            <div className="d-grid shadow-sm rounded">
                                <Button variant="success" size="lg" className="py-3 fw-bold border-0">
                                    ROZPOCZNIJ SESJĘ
                                </Button>
                            </div>
                            <p className="text-center text-muted small mt-3">
                                Tylko organizator może rozpocząć quiz.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}