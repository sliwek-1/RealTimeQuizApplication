import { useForm, Controller, useFieldArray, useWatch } from "react-hook-form"
import { Form, Button, Container, Row, Col, Card, CloseButton } from 'react-bootstrap';
import type { Questions, Answers, Choice } from "../../../types/creatorPanelTypes";
import type { SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addQuestionValidationSchema } from "../../../formsValidationSchema/addQuestionSchema";
import { useDispatch, useSelector } from "react-redux";
import { addQuestionToStorage } from "../../../features/examConfigurationSlice";
import { EditorComponent } from "../editorComponent";
 
export function AddQuestionForm() {

    const dispatch = useDispatch();

    const resolver = yupResolver(addQuestionValidationSchema)
    const {register, handleSubmit, control} = useForm({ 
        resolver: resolver,
        defaultValues: {
            answers: [
                
            ]
        }
    });

    const {fields, append, remove} = useFieldArray({
        control,
        name: "answers"
    })

    const selectedChoice = useWatch({
        control,
        name: "type",
        defaultValue: "singleChoice"
    })

    const onSubmit: SubmitHandler<Questions> = (data: Questions) => {
        console.log(data)
        dispatch(addQuestionToStorage(data));
    }
    
    return (
        <>
                <Container className="mb-5">
                    <Row className="justify-content-start border rounded p-5">
                        <Col xs={12} md={8} lg={6}>
                            <Card className="border-0">
                                <Card.Body>
                                    <Form onSubmit={handleSubmit(onSubmit, (err) => console.log("BŁĘDY:", err))}>
                                        <input hidden value={crypto.randomUUID()} {...register("id")}/>
                                        <Row>        
                                            <Form.Group className="mb-3" controlId="title">
                                                <Form.Label className="small fw-semibold">Zapisz Pytanie</Form.Label>
                                                <EditorComponent control={control} name="question" />
                                                
                                            </Form.Group>
                                                
                                            <Form.Group className="mb-4" controlId="visibility">
                                                <Form.Label className="small fw-semibold">Typ pytania</Form.Label>
                                                <Form.Select {...register("type")}>
                                                    <option value="singleChoice">Jednokrotnego Wyboru</option>
                                                    <option value="multiChoice">Wielokrotnego Wyboru</option>
                                                </Form.Select>
                                               
                                            </Form.Group>
                                        </Row>

                                        <Row className="mb-5">
                                            <Form.Group>
                                                <Form.Label className="small fw-semibold md-2">Podaj punktacje pytania</Form.Label>
                                                <Form.Control type="number" defaultValue={1} {...register('questionWeight')}/>
                                                
                                            </Form.Group>
                                        </Row>

                                        <Row>
                                            <Form.Label className="small fw-semibold">Wpisz odpowiedzi na pytania</Form.Label>
                                            <Form.Group className="d-flex justify-content-between flex-column">
                                                
                                                {fields.map((answer, index) => (
                                                    <div className="d-flex g-3" key={answer.id}>
                                                        <Controller 
                                                            control={control}
                                                            name={`answers.${index}.isCorrect`}
                                                            render={({field: {onChange, value }}) => (
                                                                <Form.Check 
                                                                    type={selectedChoice == 'singleChoice' ? 'radio' : 'checkbox'} 
                                                                    checked={value}  
                                                                    name="choice" 
                                                                    className="m-3" 
                                                                    onChange={(e) => onChange(e.target.checked)}
                                                                />
                                                            )}
                                                        />
                                                        <EditorComponent control={control} name={`answers.${index}.content`} />
                                                        <CloseButton onClick={() => remove(index)}/>
                                                    </div>
                                                ))}
                                            </Form.Group>

                                            <Row>
                                                <Col>
                                                    {fields.length == 10 ? "" :  
                                                        <Button variant="success" className="w-50" onClick={() => append({
                                                            id: crypto.randomUUID(),
                                                            isCorrect: false,
                                                            content: ""
                                                        })}>Dodaj</Button>
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