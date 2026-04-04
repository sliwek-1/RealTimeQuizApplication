import React from "react";
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { Editor } from '@tinymce/tinymce-react'; 
import { useRef } from 'react';
import { image_handler } from "../../../utils/imageHandler";


export function SummaryScreenTab() {

    const happyEndingInfo = useRef<any>(null);
    const badEndingInfo = useRef<any>(null);

    return (
        <>
        <Container>
            <Row className="justify-content-left border rounded p-5">
                <Col xs={12} md={8} lg={6}>
                    <Card className="border-0">
                        <Card.Body>
                            <Form>
                                <Row>        
                                    <Form.Group className="mb-3">
                                        <Form.Label className="small fw-semibold">Informacja wyświtlana podczas pozytywnego wyniku</Form.Label>
                                        <Editor
                                            tinymceScriptSrc="/tinymce/tinymce.min.js"
                                            licenseKey="gpl"
                                            onInit={ (_evt, editor) => happyEndingInfo.current = editor }
                                            initialValue="<p>Gratylacje zaliczenia egzaminu.</p>"
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

                                    <Form.Group className="mb-3">
                                        <Form.Label className="small fw-semibold">Informacja wyświtlana podczas negatywnego wyniku</Form.Label>
                                        <Editor
                                            tinymceScriptSrc="/tinymce/tinymce.min.js"
                                            licenseKey="gpl"
                                            onInit={ (_evt, editor) => badEndingInfo.current = editor }
                                            initialValue="<p>Niestety nie udało ci się zaliczyć egzaminu. Powodzenia następnym razem</p>"
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
                                        <Form.Label className="small fw-semibold">Ustal wyświetlane dane w podsumowaniu</Form.Label>
                                            <Row>
                                                <Row>
                                                    <Col>
                                                        <Form.Label>Wynik w (ptk.)</Form.Label>
                                                    </Col>
                                                    <Col>
                                                        <Form.Check type="checkbox" defaultChecked/>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Form.Label>Wynik w (%.)</Form.Label>
                                                    </Col>
                                                    <Col>
                                                        <Form.Check type="checkbox"/>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Form.Label>Informacja o zdaniu egzaminu</Form.Label>
                                                    </Col>
                                                    <Col>
                                                        <Form.Check type="checkbox" name="userData" defaultChecked/>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <Form.Label>Średni wynik grupy</Form.Label>
                                                    </Col>
                                                    <Col>
                                                        <Form.Check type="checkbox" name="userData"/>
                                                    </Col>
                                                </Row>
                                            </Row>
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