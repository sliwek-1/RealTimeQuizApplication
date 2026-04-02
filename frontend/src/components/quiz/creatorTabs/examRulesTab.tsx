import { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

export function ExamRulesTab() {

    const [examTime, setExamTime] = useState("byExam");

    return (
        <>
            <Container fluid>
                <h2 className="text-center mb-4 fw-bold">Zasady Egzaminu</h2>
                <Row className="justify-content-left">
                    <Col xs={12} md={8} lg={6}>
                        <Card className="border-0">
                            <Card.Body>
                                <Form>
                                    <Row>        
                                        <Form.Group className="mb-3" controlId="title">
                                            <Form.Label className="small fw-semibold">Czas na Odp. (s)</Form.Label>
                                            <div className='d-flex justify-content-between align-items-center w-25'>
                                                <Form.Check type="radio" className='m-2' name='czas' onChange={() => setExamTime('byAnswer')} />
                                                {examTime == 'byAnswer' ?
                                                    <Form.Control type="number" defaultValue={30} />
                                                : 
                                                    <Form.Control type="number" defaultValue={30} disabled/>
                                                }
                                            </div>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="title">
                                            <Form.Label className="small fw-semibold">Czas na Egzamin. (min)</Form.Label>
                                            <div className='d-flex justify-content-between align-items-center w-25'>
                                                <Form.Check type="radio" className='m-2' name='czas' onChange={() => setExamTime('byExam')} defaultChecked/>
                                                {examTime == 'byExam' ?
                                                    <Form.Control type="number" defaultValue={60} />
                                                : 
                                                    <Form.Control type="number" defaultValue={60} disabled/>
                                                }
                                            </div>
                                        </Form.Group>
                    
                                        <Form.Group className="mb-3" controlId="description">
                                            <Form.Label className="small fw-semibold">Metoda ostrzegania o wykroczeniach</Form.Label>
                                            <div className='d-flex align-items-center w-75'>
                                                <Col>
                                                        <Form.Label>Wyłącz</Form.Label>
                                                </Col>
                                                <Col>
                                                        <Form.Check type='radio' className='m-2' name='examStartMethod' defaultChecked/>
                                                </Col>
                                            </div>
                                            <div className='d-flex align-items-center w-75'>
                                                <Col>
                                                    <Form.Label>Wyślij ostrzeżenie</Form.Label>
                                                </Col>
                                                <Col>
                                                    <Form.Check type='radio' className='m-2' name='examStartMethod'/>
                                                </Col>  
                                            </div>
                                            <div className='d-flex justify-content-between align-items-center w-75'>
                                                <Col>
                                                    <Form.Label>Wyślij ostrzeżenie i wyrzuć z egzaminu</Form.Label>
                                                </Col>
                                                <Col>
                                                    <Form.Check type='radio' className='m-2' name='examStartMethod'/>
                                                </Col>  
                                            </div>
                                            <div className='d-flex justify-content-between align-items-center w-75'>
                                                <Col>
                                                    <Form.Label>Liczba wykroczeni przed wyrzuceniem</Form.Label>
                                                </Col>
                                                <Col>
                                                    <Form.Control type="number" className='w-25' defaultValue={5} />
                                                </Col>
                                            </div>
                                            <Form.Label className='text-muted fs-7'> 
                                                Wykroczenia są zliczane na podstawie wyjścia użytkownika z karty egzaminu lub zminimalizowanie przeglądarki.
                                            </Form.Label>
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