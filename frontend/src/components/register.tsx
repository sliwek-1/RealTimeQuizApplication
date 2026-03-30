import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { registerValidationSchema } from "../formsValidationSchema/schema.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRegister } from "../hooks/register";



type Inputs = {
    name: string,
    surrname: string,
    login: string,
    email: string,
    password: string,
}

function Register() {
    const resolver = yupResolver(registerValidationSchema);
    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>({ resolver });
    const {registerUser, isLoading} = useRegister();
    const onSubmit: SubmitHandler<Inputs> = (data) => registerUser(data);

    return (
        <>
            <Container className="lg">
                <Form className="d-flex flex-column align-items-center justify-content-center mt-5" style={{height: "70vh", minWidth: "40vw"}}  onSubmit={handleSubmit(onSubmit)}>
                    <Form.Label className="fs-2">Rejestracja</Form.Label>
                    <Form.Label>{errors.root ? errors.root?.message : " "}</Form.Label>
                    <Form.Group className="p-3 col-12 col-sm-8 col-md-7 col-lg-5">
                        <Form.Label>
                            Imie
                        </Form.Label>
                        <Form.Control type="text" placeholder="Imie" {...register("name")}/>
                        {errors.name && <Form.Label className="text-danger">{errors.name.message}</Form.Label>}
                    </Form.Group>
                    <Form.Group className="p-3 col-12 col-sm-8 col-md-7 col-lg-5">
                        <Form.Label>
                            Nazwisko
                        </Form.Label>
                        <Form.Control type="text" placeholder="Nazwisko" {...register("surrname")}/>
                        {errors.surrname && <Form.Label className="text-danger">{errors.surrname.message}</Form.Label>}
                    </Form.Group>
                    <Form.Group className="p-3 col-12 col-sm-8 col-md-7 col-lg-5">
                        <Form.Label>
                            Login
                        </Form.Label>
                        <Form.Control type="text" placeholder="Login" {...register("login")}/>
                        {errors.login && <Form.Label className="text-danger">{errors.login.message}</Form.Label>}
                    </Form.Group>
                    <Form.Group className="p-3 col-12 col-sm-8 col-md-7 col-lg-5">
                        <Form.Label>
                            Adres Email
                        </Form.Label>
                        <Form.Control type="email" placeholder="Email" {...register("email")}/>
                        {errors.email && <Form.Label className="text-danger">{errors.email.message}</Form.Label>}
                    </Form.Group>
                    <Form.Group className="p-3 col-12 col-sm-8 col-md-7 col-lg-5">
                        <Form.Label>
                            Hasło
                        </Form.Label>
                        <Form.Control type="password" placeholder="Hasło" {...register("password")}/>
                        {errors.password && <Form.Label className="text-danger">{errors.password.message}</Form.Label>}
                    </Form.Group>
                    <Button type="submit" variant="primary" className="p-2 mt-5 col-12 col-sm-8 col-md-7 col-lg-4">
                        {isLoading ? <p>Logowanie...</p> : <p>Stwórz konto</p>}
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default Register;