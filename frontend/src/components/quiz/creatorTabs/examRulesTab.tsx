import { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import type { ExamRules } from '../../../types/creatorPanelTypes';
import type { SubmitHandler } from 'react-hook-form';

export function ExamRulesTab() {

    const { register, handleSubmit, formState: {errors} } = useForm<ExamRules>({ })
    const [examTime, setExamTime] = useState("byExam");

    const onSubmit: SubmitHandler<ExamRules> = (data: ExamRules) => {
        console.log(data)
    }

    return (
        <>
            <Container fluid>
                <Row className="justify-content-left border rounded p-5">
                    <Col xs={12} md={8} lg={6}>
                        <Card className="border-0">
                            <Card.Body>
                                <Form onSubmit={handleSubmit(onSubmit)}>
                                    <Row>        
                                        <Form.Group className="mb-4">
                                            <Form.Label className="small fw-semibold">Czas na wykonanie egzaminu</Form.Label>
                                            <Form.Select  {...register('examTimeBy')} defaultValue={"exam"}>
                                                <option value="exam">Czas na cały egzamin (m)</option>
                                                <option value="answer">Czas na jedno pytanie (s)</option>
                                            </Form.Select>

                                            <Form.Label className='small fw-semibold mt-4'>Podaj czas</Form.Label>
                                            <Form.Control type='number' defaultValue={60}  {...register('examTime')}/> 
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                            <Form.Label className="small fw-semibold">System wykrywania wykroczeń</Form.Label>
                                            <Form.Select  {...register('punishmentMethod')}>
                                                <option value="Off" defaultChecked>Wyłącz</option>
                                                <option value="sendWarnings">Wyślij ostrzeżenie</option>
                                                <option value="sendWarningsAndKick">Wyślij ostrzeżenie i wyrzuć z egzaminu</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group>
                                            <div className='d-flex justify-content-between align-items-center w-75'>
                                                <Col>
                                                    <Form.Label>Liczba wykroczeni przed wyrzuceniem</Form.Label>
                                                </Col>
                                                <Col>
                                                    <Form.Control type="number" className='w-100' {...register('chances')} defaultValue={5} />
                                                </Col>
                                            </div>
                                            <Form.Label className='text-muted fs-7'> 
                                                Wykroczenia są zliczane na podstawie wyjścia użytkownika z karty egzaminu lub zminimalizowanie przeglądarki.
                                            </Form.Label>
                                        </Form.Group>
                                        <div className='d-flex justify-content-between align-items-center w-75'>
                                                <Col>
                                                    <Form.Label>Próg zaliczenia egzaminu (%)</Form.Label>
                                                </Col>
                                                <Col>
                                                    <Form.Control type="number" className='w-35' {...register('passRate')} defaultValue={50} min={0} max={100}/>
                                                </Col>
                                        </div>
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