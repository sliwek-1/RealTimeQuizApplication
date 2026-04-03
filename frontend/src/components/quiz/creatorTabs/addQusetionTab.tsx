import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { Form, Button, Container, Row, Col, Card, CloseButton } from 'react-bootstrap';
import { Editor } from '@tinymce/tinymce-react'; 
import { image_handler } from "../../../utils/imageHandler";
import "../../../css/quiz/creator.css";
import type { Questions, Answers, Choice } from "../../../types/creatorPanelTypes";
import type { SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addQuestionValidationSchema } from "../../../formsValidationSchema/addQuestionSchema";

export function AddQuestionTab() {
    const resolver = yupResolver(addQuestionValidationSchema)
    const { register, handleSubmit, formState: {errors}, setValue } = useForm<Questions>({ 
        resolver: resolver,
        defaultValues: { 
            id: crypto.randomUUID()
        }
    });

    const [choice, setChoice] = useState('singleChoice');
    const [questionContent, setQuestion] = useState("")

    const [answers, setAnswers] = useState<Answers[]>([
        {id: crypto.randomUUID(), content: '', isCorrect: false},
        {id: crypto.randomUUID(), content: '', isCorrect: false},
        {id: crypto.randomUUID(), content: '', isCorrect: false},
        {id: crypto.randomUUID(), content: '', isCorrect: false},
    ])

    const addAnswer = () => {
        setAnswers((e) => [...answers, {id: crypto.randomUUID(), content: 'Zapisz odpowiedz na pytanie', isCorrect: false}]);
    }

    const removeAnswer = (id: string) => {
        const newList = answers.filter((answer) => answer.id !== id);
        console.log(id, newList)
        setAnswers(newList);
    }

    const updateAnswer = (id: string, newEditor: string) => {
        const updatedList = answers.map((answer) => (
            answer.id === id ? {...answer, content: newEditor} : answer
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

    // updates field values in react hook form state

    useEffect(() => {
        setValue('answers', answers, { shouldValidate: true });
    }, [answers]);

    useEffect(() => {
        setValue('question', questionContent);
    }, [questionContent])

    useEffect(() => {
        setValue('type', (choice as Choice));
    }, [choice])

    const onSubmit: SubmitHandler<Questions> = (data: Questions) => {
        console.log(data)
    }; 
    
    return (
        <>
        <Container fluid className="mb-5">
                    <Row className="justify-content-left border rounded p-5">
                        <Col xs={12} md={8} lg={6}>
                            <Card className="border-0">
                                <Card.Body>
                                    <Form onSubmit={handleSubmit(onSubmit, (err) => console.log("BŁĘDY:", err))}>
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
                                                {errors.question ? <Form.Label className="fs-6 text-danger">{errors.question.message}</Form.Label> : null}
                                            </Form.Group>
                                                
                                            <Form.Group className="mb-4" controlId="visibility">
                                                <Form.Label className="small fw-semibold">Typ pytania</Form.Label>
                                                <Form.Select onChange={(e) => setChoice(e.currentTarget.value)}>
                                                    <option value="singleChoice">Jednokrotnego Wyboru</option>
                                                    <option value="multiChoice">Wielokrotnego Wyboru</option>
                                                </Form.Select>
                                                {errors.type ? <Form.Label className="fs-6 text-danger">{errors.type.message}</Form.Label> : null}
                                            </Form.Group>
                                        </Row>

                                        <Row className="mb-5">
                                            <Form.Group>
                                                <Form.Label className="small fw-semibold md-2">Podaj punktacje pytania</Form.Label>
                                                <Form.Control type="number" defaultValue={1} {...register('questionWeight')}/>
                                                {errors.questionWeight ? <Form.Label className="fs-6 text-danger">{errors.questionWeight.message}</Form.Label> : null}
                                            </Form.Group>
                                        </Row>

                                        <Row>
                                            <Form.Label className="small fw-semibold">Wpisz odpowiedzi na pytania</Form.Label>
                                            <Form.Group className="d-flex justify-content-between flex-column">
                                                {answers.map((answer, index) => (
                                                    <>
                                                    {errors.answers?.[index]?.message}
                                                    <li key={index}>
                                                        <Form.Label className="small fw-semibold">Odp. {index+1})</Form.Label>
                                                        <div className="w-100 my-3 d-flex flex-row answers">
                                                            <Form.Check type={choice == 'singleChoice' ? 'radio' : 'checkbox'} checked={answer.isCorrect} onChange={(e) => updateIsCorrect(answer.id)}  name="choice" className="m-3" />
                                                            <Editor
                                                                tinymceScriptSrc="/tinymce/tinymce.min.js"
                                                                licenseKey="gpl"
                                                                value={answer.content}
                                                                onEditorChange={(content) => updateAnswer(answer.id, content)}
                                                                initialValue="<p>Zapisz odpowiedz</p>"
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
                                                       {errors.answers?.[index]?.content?.message ? <Form.Label className="text-danger">{errors.answers?.[index]?.content?.message}</Form.Label> : null}
                                                    </li>
                                                </>
                                                ))}
                                                {errors.answers ? <Form.Label className="fs-6 text-danger">{errors.answers.message}</Form.Label> : null}
                                            </Form.Group>

                                            <Row>
                                                <Col>
                                                    {answers.length == 10 ? "" :  
                                                        <Button variant="success" className="w-50" onClick={() => addAnswer()}>Dodaj</Button>
                                                    }
                                                </Col>
                                                <Col></Col>
                                            </Row>
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