import React, {useState} from "react";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useCreateSession } from "../../hooks/session/create";
import { createSessionValidationSchema } from "../../formsValidationSchema/createSession.schema";

import "react-datepicker/dist/react-datepicker.css";

type Input = {
    title: string,
    description: string,
    status: string,
    isAccountRequired: boolean,
    isWarnings: boolean,
    answerTime: number,
    examTime: number,
    passRate?: number
}

export function SessionCreate() {
    const resolver = yupResolver(createSessionValidationSchema)
    const {register, handleSubmit, formState: {errors}} = useForm<Input>({ resolver });
    const [passThreshold, setPassThreshold] = useState<number>(0.5);
    const {isLoading, createSession} = useCreateSession();
    const onSubmit: SubmitHandler<Input> = (data) => {
        let d: Input = {
            ...data,
            passRate: passThreshold,
        }   
        createSession(d);
        console.log(d);
    };

    return (
        <>
        <Container className="py-5">
            <Row className="justify-content-md-center">
                <Col xs={12} md={8} lg={6}>
                    <Card className="shadow-sm border-0 bg-light">
                        <Card.Body className="p-4">
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <h2 className="text-center mb-4 fw-bold">Konfiguracja Sesji</h2>
                                
                                <Form.Group className="mb-3" controlId="title">
                                    <Form.Label className="small fw-semibold">Tytuł</Form.Label>
                                    <Form.Control type="text" placeholder="Wprowadź tytuł sesji" {...register("title")}/>
                                    {errors.title && <Form.Label className="text-danger">{errors.title.message}</Form.Label>}
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="description">
                                    <Form.Label className="small fw-semibold">Opis</Form.Label>
                                    <Form.Control as="textarea" rows={2} placeholder="Krótki opis..." {...register("description")}/>
                                    {errors.description && <Form.Label className="text-danger">{errors.description.message}</Form.Label>}
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="visibility">
                                    <Form.Label className="small fw-semibold">Widoczność sesji</Form.Label>
                                    <Form.Select {...register("status")}>
                                        <option value="">Wybierz jedną z opcji</option>
                                        <option value="public">Publiczna</option>
                                        <option value="private">Prywatna</option>
                                    </Form.Select>
                                    {errors.status && <Form.Label className="text-danger">{errors.status.message}</Form.Label>}
                                </Form.Group>

                                <hr className="my-4 text-muted" />
                                <h5 className="mb-3 text-secondary">Zasady sesji</h5>

                                <div className="bg-white p-3 rounded mb-4 border">
                                    <Form.Group className="mb-2" controlId="requireLogin">
                                        <Form.Check 
                                            type="checkbox" 
                                            label="Wymagaj zalogowania" 
                                            {...register("isAccountRequired")}
                                        />
                                        {errors.isAccountRequired && <Form.Label className="text-danger">{errors.isAccountRequired.message}</Form.Label>}
                                    </Form.Group>

                                    <Form.Group className="mb-0" controlId="warnings">
                                        <Form.Check 
                                            type="checkbox" 
                                            label="Ostrzeżenia o wykroczeniach" 
                                            {...register("isWarnings")}
                                        />
                                        {errors.isWarnings && <Form.Label className="text-danger">{errors.isWarnings.message}</Form.Label>}
                                    </Form.Group>
                                </div>

                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="answerTime">
                                            <Form.Label className="small fw-semibold">Czas odp. (s)</Form.Label>
                                            <Form.Control type="number" {...register("answerTime")}/>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="examTime">
                                            <Form.Label className="small fw-semibold">Czas egz. (min)</Form.Label>
                                            <Form.Control type="number" {...register("examTime")} />
                                        </Form.Group>
                                    </Col>
                                    <p className="text-muted text-sm-start">
                                        Jeśli ustawisz dwie wartość na raz to domyślnie brany jest pod uwage czas odp.
                                    </p>
                                    {errors.answerTime && <Form.Label className="text-danger">{errors.answerTime.message}</Form.Label>}
                                    {errors.examTime && <Form.Label className="text-danger">{errors.examTime.message}</Form.Label>}
                                </Row>

                                <Form.Group className="mb-4" controlId="passThreshold">
                                    <div className="d-flex justify-content-between">
                                        <Form.Label className="small fw-semibold">Próg zdania</Form.Label>
                                        <span className="badge bg-success">{(passThreshold * 100).toFixed(0)}%</span>
                                    </div>
                                    <Form.Range 
                                        min={0}
                                        max={1}
                                        step={0.01}
                                        value={passThreshold}
                                        onChange={(e) => setPassThreshold(parseFloat(e.target.value))}
                                        color="green"
                                    />
                                    {errors.passRate && <Form.Label className="text-danger">{errors.passRate.message}</Form.Label>}
                                </Form.Group>

                                <div className="d-grid gap-2">
                                    <Button variant="success" size="lg" type="submit" className="mt-2">
                                        {isLoading ? <p>Tworzenie sesji</p> : <p>Stwórz sesję</p>}
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