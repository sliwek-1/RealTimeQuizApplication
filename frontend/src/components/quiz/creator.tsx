import React, { useState } from "react";
import { Row, Col, Container, Card, ListGroup, Button } from "react-bootstrap";
import "../../css/quiz/creator.css";
import type { useSearch } from "@tanstack/react-router";

export function CreatorMenu() {

    const [activeTab, setTab] = useState("createQuiz");

    const renderTabs = () => {
        switch(activeTab) {
            case 'createQuiz':
                return <p>create quiz</p>
            case 'addQuestion':
                return <p>add questtion</p>
            case 'examRules':
                return <p>exam rules</p>
            case 'startScreen':
                return <p>startowy ekran</p>
            case 'summaryScreen':
                return <p>ekran podsumowania</p>
            default:
                return <p>create quiz</p>
        }
    }

    return (
        <>
            <Container fluid>
                <Row className="justify-content-between g-4 mt-5" lg={12}>
                    <Col xs={12} md={4} lg={2} className="left-panel">
                        <Card className="border-0 w-100 d-flex justify-content-center align-items-center">
                            <Card.Title className="lg">Stwórz test</Card.Title>
                            <Card.Body className="w-100">
                                <div className="tabs">
                                    <div className="w-100 p-3 rounded shadow-sm" onClick={() => setTab('createQuiz')}>Stwórz quiz</div>
                                    <div className="w-100 p-3 rounded shadow-sm" onClick={() => setTab('addQuestion')}>Dodaj pytania</div>
                                    <div className="w-100 p-3 rounded shadow-sm" onClick={() => setTab('examRules')}>Zasady Egzaminu</div>
                                    <div className="w-100 p-3 rounded shadow-sm" onClick={() => setTab('startScreen')}>Ekran Startowy</div>
                                    <div className="w-100 p-3 rounded shadow-sm" onClick={() => setTab('summaryScreen')}>Ekran Podsumowania</div>
                                </div>
                                <div className="button-placeholder border-top">
                                    <Button variant="success" className="w-100 p-2 mt-3">Aktywuj quiz</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={8} lg={10} className="main-panel">
                        <Card className="border-0 shadow-sm h-100">
                            {renderTabs()}
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}