import { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { Editor } from '@tinymce/tinymce-react'; 
import { useRef } from 'react';
import { image_handler } from "../../../utils/imageHandler";

export function StartScreenTab() {
        
    const startScreenInfo = useRef<any>(null);

    const [demandData, setDemand] = useState('on')

    return (
        <>
        <Container fluid>
            <h2 className="text-center mb-4 fw-bold">Konfiguracja Okna Startowego</h2>
            <Row className="justify-content-left">
                <Col xs={12} md={8} lg={6}>
                    <Card className="border-0">
                        <Card.Body>
                            <Form>
                                <Row>        
                                    <Form.Group className="mb-3" controlId="title">
                                        <Form.Label className="small fw-semibold">Informacja wyświtlana na stronie startowej użytkowników</Form.Label>
                                        <Editor
                                            tinymceScriptSrc="/tinymce/tinymce.min.js"
                                            licenseKey="gpl"
                                            onInit={ (_evt, editor) => startScreenInfo.current = editor }
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
                
                                    <Form.Group className="mb-3" controlId="description">
                                        <Form.Label className="small fw-semibold">Wymagane Dane użytkowników</Form.Label>
                                        
                                        <Row>
                                            <Col>
                                                <Form.Label>Anonimowi</Form.Label>
                                            </Col>
                                            <Col>
                                                <Form.Check type="radio" name="demandData" onChange={() => setDemand('off')}/>
                                            </Col>

                                            <Col>
                                                <Form.Label>Wymagaj Dane</Form.Label>
                                            </Col>
                                            <Col>
                                                <Form.Check type="radio" name="demandData" onChange={() => setDemand('on')} defaultChecked/>
                                            </Col>
                                        </Row>
                                        {demandData == 'on' ?
                                            <Row>
                                                <Row>
                                                    <Col>
                                                        <Form.Label>Imie</Form.Label>
                                                    </Col>
                                                    <Col>
                                                        <Form.Check type="checkbox" name="userData" defaultChecked/>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Form.Label>Nazwisko</Form.Label>
                                                    </Col>
                                                    <Col>
                                                        <Form.Check type="checkbox" name="userData"/>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Form.Label>Email</Form.Label>
                                                    </Col>
                                                    <Col>
                                                        <Form.Check type="checkbox" name="userData"/>
                                                    </Col>
                                                </Row>
                                            </Row> :
                                            <Form.Label>Egzamin zostanie przeprowadzony anonimowo</Form.Label>
                                        }
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