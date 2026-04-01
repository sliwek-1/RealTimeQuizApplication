import React from "react";
import {Row, Col, Container, Card, ListGroup, Button} from "react-bootstrap";
import "../../css/quiz/creator.css";

export function CreatorMenu() {
    return (
        <>
            <Container fluid>
                <Row className="justify-content-between g-4 mt-5" lg={12}>
                    <Col xs={12} md={4} lg={2} className="left-panel">
                        <Card className="border-0 w-100 d-flex justify-content-center align-items-center">
                            <Card.Title className="lg">Stwórz test</Card.Title>
                            <Card.Body className="w-100">
                                <div className="tabs">
                                    <div className="w-100 p-3 rounded shadow-sm">Stwórz quiz</div>
                                    <div className="w-100 p-3 rounded shadow-sm">Dodaj pytania</div>
                                    <div className="w-100 p-3 rounded shadow-sm">Zasady Egzaminu</div>
                                    <div className="w-100 p-3 rounded shadow-sm">Ekran Startowy</div>
                                    <div className="w-100 p-3 rounded shadow-sm">Ekran Podsumowania</div>
                                </div>
                                <div className="button-placeholder border-top">
                                    <Button variant="success" className="w-100 p-2 mt-3">Aktywuj quiz</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={8} lg={10} className="main-panel">
                        <Card className="border-0 shadow-sm">
                            <h1>Stwórz test</h1>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}