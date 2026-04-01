import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { Editor } from '@tinymce/tinymce-react'; 
import { useRef } from 'react';
import { image_handler } from "../../../utils/imageHandler";

export function AddQuestionTab() {


    const [choice, setChoice] = useState('singel');
    const editorRef1 = useRef<any>(null);

    const [answers, setAnswers] = useState([
        {id: crypto.randomUUID(), editor: ''},
        {id: crypto.randomUUID(), editor: ''},
        {id: crypto.randomUUID(), editor: ''},
        {id: crypto.randomUUID(), editor: ''},
    ])

    const log = () => {
        if (editorRef1.current ) {
            console.log(editorRef1.current?.getContent());

        }
    };

    return (
        <>
        <Container fluid className="mb-5">
                    <h2 className="text-center mb-4 fw-bold">Dodaj pytanie</h2>
                    <Row className="justify-content-left">
                        <Col xs={12} md={8} lg={6}>
                            <Card className="border-0">
                                <Card.Body>
                                    <Form>
                                        <Row>        
                                            <Form.Group className="mb-3" controlId="title">
                                                <Form.Label className="small fw-semibold">Zapisz Pytanie</Form.Label>
                                                <Editor
                                                    tinymceScriptSrc="/tinymce/tinymce.min.js"
                                                    licenseKey="gpl"
                                                    onInit={ (_evt, editor) => editorRef1.current = editor }
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
                                                    <option value="singel">Jednokrotnego Wyboru</option>
                                                    <option value="multi">Wielokrotnego Wyboru</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Row>

                                        <Row>
                                            <Form.Label className="small fw-semibold">Wpisz odpowiedzi na pytania</Form.Label>
                                            <Form.Group className="d-flex justify-content-between flex-column">
                                                {answers.map((answer, index) => (
                                                    <>
                                                        <Form.Label className="small fw-semibold">Odp. {index+1})</Form.Label>
                                                        <div className="w-100 my-3 d-flex flex-row">
                                                            <Form.Check type={choice == 'singel' ? 'radio' : 'checkbox'} name="choice" className="m-3" />
                                                            <Editor
                                                                tinymceScriptSrc="/tinymce/tinymce.min.js"
                                                                licenseKey="gpl"
                                                                onInit={ (_evt, editor) => editorRef1.current = editor }
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
                                                        </div>
                                                </>
                                                ))}
                                            </Form.Group>
                                        </Row>

                                        <Row>

                                            <Form.Group>
                                                <Form.Label className="small fw-semibold">Podaj punktacje pytania</Form.Label>
                                                <Form.Control type="number" defaultValue={1}/>
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