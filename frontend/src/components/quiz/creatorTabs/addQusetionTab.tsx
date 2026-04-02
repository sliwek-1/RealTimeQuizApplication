import React, { useState } from "react";
import { useForm } from "react-hook-form"
import { Form, Button, Container, Row, Col, Card, CloseButton } from 'react-bootstrap';
import { Editor } from '@tinymce/tinymce-react'; 
import { useRef } from 'react';
import { image_handler } from "../../../utils/imageHandler";
import "../../../css/quiz/creator.css";
import type { Questions } from "../../../types/creatorPanelTypes";
import type { SubmitHandler } from "react-hook-form";

export function AddQuestionTab() {
    const { register, handleSubmit, formState: {errors}, setValue } = useForm<Questions>({  });
 
    const [choice, setChoice] = useState('singleChoice');
    const [questionContent, setQuestion] = useState("")

    const [answers, setAnswers] = useState([
        {id: crypto.randomUUID(), editor: 'Zapisz odpowiedz na pytanie', isCorrect: false},
        {id: crypto.randomUUID(), editor: 'Zapisz odpowiedz na pytanie', isCorrect: false},
        {id: crypto.randomUUID(), editor: 'Zapisz odpowiedz na pytanie', isCorrect: false},
        {id: crypto.randomUUID(), editor: 'Zapisz odpowiedz na pytanie', isCorrect: false},
    ])

    const addAnswer = () => {
        setAnswers((e) => [...answers, {id: crypto.randomUUID(), editor: 'Zapisz odpowiedz na pytanie', isCorrect: false}])
    }

    const removeAnswer = (id: string) => {
        const newList = answers.filter((answer) => answer.id !== id);
        console.log(id, newList)
        setAnswers(newList);
    }

    const updateAnswer = (id: string, newEditor: string) => {
        const updatedList = answers.map((answer) => (
            answer.id === id ? {...answer, editor: newEditor} : answer
        ));
        setAnswers(updatedList)
    }

    const updateIsCorrect = (id: string) => {
        if(choice == 'singleChoice') {
            setAnswers((prev) => (
                prev.map((answer) => (
                    answer.id !== id ? {...answer, isCorrect: false} : answer
                ))
            ));
        }

        setAnswers((prev) => (
            prev.map((answer) => (
                answer.id === id ? {...answer, isCorrect: !answer.isCorrect} : answer
            ))
        ));

    }

    const onSubmit: SubmitHandler<Questions> = (data) => {
        let newData = {
            id: crypto.randomUUID(),
            questionContent,
            questionWeight: data.questionWeight,
            answers: [...answers],
        }
        console.log(newData)
    }; 
    
    return (
        <>
        <Container fluid className="mb-5">
                    <h2 className="text-center mb-4 fw-bold">Dodaj pytanie</h2>
                    <Row className="justify-content-left">
                        <Col xs={12} md={8} lg={6}>
                            <Card className="border-0">
                                <Card.Body>
                                    <Form onSubmit={handleSubmit(onSubmit)}>
                                        <Row>        
                                            <Form.Group className="mb-3" controlId="title">
                                                <Form.Label className="small fw-semibold">Zapisz Pytanie</Form.Label>
                                                <Editor
                                                    tinymceScriptSrc="/tinymce/tinymce.min.js"
                                                    licenseKey="gpl"
                                                    value={questionContent}
                                                    onEditorChange={(content) => setQuestion(content)}
                                                    initialValue="<p>Zapisz tutaj treść pytania lub upuść obrazek</p>"
                                                    init={{
                                                    base_url: '/tinymce', 
                                                    suffix: '.min',
                                                    promotion: false,     
                                                    branding: false,
                                                    height: 250,
                                                    width: 750,
                                                    menubar: false,
                                                    plugins: [
                                                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                                                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                                        'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount',
                                                    ],
                                                    toolbar: 'undo redo | blocks | ' +
                                                        'bold italic forecolor code | alignleft aligncenter ' +
                                                        'alignright alignjustify | bullist numlist outdent indent | ' +
                                                        'removeformat | help',
                                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                                                    images_upload_handler: (blobInfo: any, progress: any) => image_handler(blobInfo, progress)
                                                    }}
                                                />
                                            </Form.Group>
                                                
                                            <Form.Group className="mb-4" controlId="visibility">
                                                <Form.Label className="small fw-semibold">Typ pytania</Form.Label>
                                                <Form.Select onChange={(e) => setChoice(e.currentTarget.value)}>
                                                    <option value="singleChoice">Jednokrotnego Wyboru</option>
                                                    <option value="multiChoice">Wielokrotnego Wyboru</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Row>

                                        <Row>
                                            <Form.Label className="small fw-semibold">Wpisz odpowiedzi na pytania</Form.Label>
                                            <Form.Group className="d-flex justify-content-between flex-column">
                                                {answers.map((answer, index) => (
                                                    <>
                                                    <li key={index}>
                                                        <Form.Label className="small fw-semibold">Odp. {index+1})</Form.Label>
                                                        <div className="w-100 my-3 d-flex flex-row answers">
                                                            <Form.Check type={choice == 'singleChoice' ? 'radio' : 'checkbox'} checked={answer.isCorrect} onChange={(e) => updateIsCorrect(answer.id)}  name="choice" className="m-3" />
                                                            <Editor
                                                                tinymceScriptSrc="/tinymce/tinymce.min.js"
                                                                licenseKey="gpl"
                                                                value={answer.editor}
                                                                onEditorChange={(content) => updateAnswer(answer.id, content)}
                                                                initialValue="<p>Zapisz odpowiedz na pytanie</p>"
                                                                init={{
                                                                base_url: '/tinymce', 
                                                                suffix: '.min',
                                                                promotion: false,     
                                                                branding: false,
                                                                height: 150,
                                                                menubar: false,
                                                                plugins: [
                                                                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                                                                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                                                    'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount',
                                                                ],
                                                                toolbar: 'undo redo | blocks | ' +
                                                                    'bold italic forecolor code | alignleft aligncenter ' +
                                                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                                                    'removeformat | help',
                                                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                                                                images_upload_handler: (blobInfo: any, progress: any) => image_handler(blobInfo, progress)
                                                                }}
                                                            />
                                                            <CloseButton className="m-2" onClick={(e) => removeAnswer(answer.id)}/>
                                                        </div>
                                                    </li>
                                                </>
                                                ))}
                                            </Form.Group>

                                            <Row>
                                                <Col>
                                                    {answers.length == 10 ? "" :  
                                                        <Button variant="success" className="w-25" onClick={() => addAnswer()}>Dodaj</Button>
                                                    }
                                                </Col>
                                                <Col></Col>
                                            </Row>
                                        </Row>

                                        <Row>
                                            <Form.Group>
                                                <Form.Label className="small fw-semibold">Podaj punktacje pytania</Form.Label>
                                                <Form.Control type="number" defaultValue={1} {...register('questionWeight')}/>
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