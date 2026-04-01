import React from "react";
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

export function CreateQuizTab() {
    return (
        <>
        <Container fluid>
            <h2 className="text-center mb-4 fw-bold">Konfiguracja Sesji</h2>
            <Row className="justify-content-left">
                <Col xs={12} md={8} lg={6}>
                    <Card className="border-0">
                        <Card.Body>
                            <Form>
                                <Row>        
                                    <Form.Group className="mb-3" controlId="title">
                                        <Form.Label className="small fw-semibold">Tytuł</Form.Label>
                                        <Form.Control type="text" placeholder="Wprowadź tytuł egzaminu" />
                                    </Form.Group>
                
                                    <Form.Group className="mb-3" controlId="description">
                                        <Form.Label className="small fw-semibold">Opis</Form.Label>
                                        <Form.Control as="textarea" rows={2} placeholder="Krótki opis..." />
                                    </Form.Group>
                
                                    <Form.Group className="mb-4" controlId="visibility">
                                        <Form.Label className="small fw-semibold">Widoczność sesji</Form.Label>
                                        <Form.Select >
                                            <option value="">Wybierz jedną z opcji</option>
                                            <option value="public">Publiczna</option>
                                            <option value="private">Prywatna</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>

                                <Row>
                                    <Col lg={2}>
                                        <div className="mt-5">
                                            <Button variant="success" size="lg" type="submit" className="mt-2 fs-6">
                                                Zapisz
                                            </Button>
                                        </div>
                                    </Col>
                                    <Col lg={10}></Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
}