import React, { useState } from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";

import { CreateQuizTab } from "./creatorTabs/createQuizTab";
import { AddQuestionTab } from "./creatorTabs/addQusetionTab";
import { StartScreenTab } from "./creatorTabs/startScreenTab";
import { ExamRulesTab } from "./creatorTabs/examRulesTab";
import { SummaryScreenTab } from "./creatorTabs/summaryTab";

import "../../css/quiz/creator.css";

export function CreatorMenu() {

    const [activeTab, setTab] = useState("createQuiz");
    const renderTabs = () => {
        switch(activeTab) {
            case 'createQuiz':
                return <CreateQuizTab />
            case 'addQuestion':
                return <AddQuestionTab />
            case 'examRules':
                return <ExamRulesTab />
            case 'startScreen':
                return <StartScreenTab />
            case 'summaryScreen':
                return <SummaryScreenTab />
            default:
                return <CreateQuizTab />
        }
    }

    return (
        <>
            <Container fluid>
                <Row className="justify-content-between g-4 mt-5" lg={12}>
                    <Col xs={12} md={4} lg={3} className="left-panel">
                        <Card className="border-0 w-100 d-flex justify-content-center align-items-center">
                            <Card.Title className="lg">Kreator</Card.Title>
                            <Card.Body className="w-100">
                                <div className="tabs">
                                    <div className={`w-100 p-3 rounded shadow-sm ${activeTab == 'createQuiz' ? 'active' : ''}`} onClick={() => setTab('createQuiz')}>Tutuł i Opis</div>
                                    <div className={`w-100 p-3 rounded shadow-sm ${activeTab == 'addQuestion' ? 'active' : ''}`} onClick={() => setTab('addQuestion')}>Pytania</div>
                                    <div className={`w-100 p-3 rounded shadow-sm ${activeTab == 'examRules' ? 'active' : ''}`} onClick={() => setTab('examRules')}>Zasady Egzaminu</div>
                                    <div className={`w-100 p-3 rounded shadow-sm ${activeTab == 'startScreen' ? 'active' : ''}`} onClick={() => setTab('startScreen')}>Ekran Startowy</div>
                                    <div className={`w-100 p-3 rounded shadow-sm ${activeTab == 'summaryScreen' ? 'active' : ''}`} onClick={() => setTab('summaryScreen')}>Ekran Podsumowania</div>
                                </div>
                                <div className="button-placeholder border-top">
                                    <Button variant="success" className="w-100 py-3 mt-3">Aktywuj Egzamin</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={8} lg={9} className="main-panel">
                        <Card className="border-0 border p-3 h-100">
                            {renderTabs()}
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}