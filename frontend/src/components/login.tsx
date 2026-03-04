import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form"

function Login() {
    return (
        <>
            <Container className="lg">
                <Form className="d-flex flex-column align-items-center justify-content-start mt-5" style={{height: "70vh", minWidth: "40vw"}}>
                    <Form.Label className="fs-2">Logowanie</Form.Label>
                    <Form.Group className="p-3 col-12 col-sm-8 col-md-7 col-lg-5">
                        <Form.Label>
                            Adres Email
                        </Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="p-3 col-12 col-sm-8 col-md-7 col-lg-5">
                        <Form.Label>
                            Hasło
                        </Form.Label>
                        <Form.Control type="password" placeholder="Hasło"/>
                    </Form.Group>
                    <Button variant="primary" className="p-2 mt-5 col-12 col-sm-8 col-md-7 col-lg-4">
                        Zaloguj
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default Login;