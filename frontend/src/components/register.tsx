import React from "react";
import { Form, Button, Container } from "react-bootstrap";

function Register() {
    return (
        <>
            <Container className="lg">
                <Form className="d-flex flex-column align-items-center justify-content-center mt-5" style={{height: "70vh", minWidth: "40vw"}}>
                    <Form.Label className="fs-2">Rejestracja</Form.Label>
                    <Form.Group className="p-3 col-12 col-sm-8 col-md-7 col-lg-5">
                        <Form.Label>
                            Imie
                        </Form.Label>
                        <Form.Control type="text" placeholder="Imie" />
                    </Form.Group>
                    <Form.Group className="p-3 col-12 col-sm-8 col-md-7 col-lg-5">
                        <Form.Label>
                            Nazwisko
                        </Form.Label>
                        <Form.Control type="text" placeholder="Nazwisko" />
                    </Form.Group>
                    <Form.Group className="p-3 col-12 col-sm-8 col-md-7 col-lg-5">
                        <Form.Label>
                            Login
                        </Form.Label>
                        <Form.Control type="text" placeholder="Login" />
                    </Form.Group>
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
                        Zarejestruj
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default Register;