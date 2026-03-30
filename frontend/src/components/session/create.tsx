import React, {useState} from "react";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";

import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';


import "react-datepicker/dist/react-datepicker.css";


export function SessionCreate() {

    
    const [passThreshold, setPassThreshold] = useState<number>(0.5);
    
    const handleSubmit = () => {
        console.log("submit")
    }

    return (
        <>
        <Container className="py-5">
            <Row className="justify-content-md-center">
                <Col xs={12} md={8} lg={6}>
                    <Card className="shadow-sm border-0 bg-light">
                        <Card.Body className="p-4">
                            <Form onSubmit={handleSubmit}>
                                <h2 className="text-center mb-4 fw-bold">Konfiguracja Sesji</h2>
                                
                                <Form.Group className="mb-3" controlId="title">
                                    <Form.Label className="small fw-semibold">Tytuł</Form.Label>
                                    <Form.Control name="title" type="text" placeholder="Wprowadź tytuł sesji" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="description">
                                    <Form.Label className="small fw-semibold">Opis</Form.Label>
                                    <Form.Control name="description" as="textarea" rows={2} placeholder="Krótki opis..." />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="visibility">
                                    <Form.Label className="small fw-semibold">Widoczność sesji</Form.Label>
                                    <Form.Select name="visibility">
                                        <option value="">Wybierz jedną z opcji</option>
                                        <option value="public">Publiczna</option>
                                        <option value="private">Prywatna</option>
                                    </Form.Select>
                                </Form.Group>

                                <hr className="my-4 text-muted" />
                                <h5 className="mb-3 text-secondary">Zasady sesji</h5>

                                <div className="bg-white p-3 rounded mb-4 border">
                                    <Form.Group className="mb-2" controlId="requireLogin">
                                        <Form.Check 
                                            name="requireLogin"
                                            type="checkbox" 
                                            label="Wymagaj zalogowania" 
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-0" controlId="warnings">
                                        <Form.Check 
                                            name="warnings"
                                            type="checkbox" 
                                            label="Ostrzeżenia o wykroczeniach" 
                                        />
                                    </Form.Group>
                                </div>

                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="answerTime">
                                            <Form.Label className="small fw-semibold">Czas odp. (s)</Form.Label>
                                            <Form.Control name="answerTime" type="number" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="examTime">
                                            <Form.Label className="small fw-semibold">Czas egz. (min)</Form.Label>
                                            <Form.Control name="examTime" type="number" />
                                        </Form.Group>
                                    </Col>
                                    <p className="text-muted text-sm-start">
                                        Jeśli ustawisz dwie wartość na raz to domyślnie brany jest pod uwage czas odp.
                                    </p>
                                </Row>

                                <Form.Group className="mb-4" controlId="passThreshold">
                                    <div className="d-flex justify-content-between">
                                        <Form.Label className="small fw-semibold">Próg zdania</Form.Label>
                                        <span className="badge bg-success">{(passThreshold * 100).toFixed(0)}%</span>
                                    </div>
                                    <Form.Range 
                                        name="passThreshold"
                                        min={0}
                                        max={1}
                                        step={0.01}
                                        value={passThreshold}
                                        onChange={(e) => setPassThreshold(parseFloat(e.target.value))}
                                        color="green"
                                    />
                                </Form.Group>

                                <div className="d-grid gap-2">
                                    <Button variant="success" size="lg" type="submit" className="mt-2">
                                        Stwórz sesję
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    );
}