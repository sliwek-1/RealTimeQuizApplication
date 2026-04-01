import React from "react";
import {Row, Col, Container, Card, ListGroup} from "react-bootstrap";
import "../../css/quiz/creator.css";

export function CreatorMenu() {
    return (
        <>
            <Container>
                <Row className="justify-content-between g-4" lg={12}>
                    <Col xs={12} md={4} lg={2}>
                        <Card className="border-0">
                            <Card.Title className="lg">Stwórz test</Card.Title>
                            <Card.Body>
                                <ListGroup>
                                    <ListGroup.Item>Stwórz quiz</ListGroup.Item>
                                    <ListGroup.Item>Dodaj pytania</ListGroup.Item>
                                    <ListGroup.Item>Zasady Egzaminu</ListGroup.Item>
                                    <ListGroup.Item>Ekran Startowy</ListGroup.Item>
                                    <ListGroup.Item>Ekran Podsumowania</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={8} lg={10}>
                        <Card className="border-0 shadow-sm">
                            <h1>Stwórz test</h1>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}