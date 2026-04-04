import {Row, Col, Container, Table, Button} from "react-bootstrap";
import type { RootState } from "../../../store";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { removeQuestionFromStorage } from "../../../features/examConfigurationSlice";
import type { Questions } from "../../../types/creatorPanelTypes";

export function QuestionsList() {

    const dispatch = useDispatch();
    const questions = useSelector((state: RootState) => state.examConfig.questions);

    const handleUpdate = (questionId: string) => {
        let question = questions.find(quest => quest.id == questionId)
        console.log(question)
    }

    const handleDelete = (questionId: string) => {
        dispatch(removeQuestionFromStorage(questionId))
    }   

    return (
        <>
            <Container className="p-5 border rounded">
                <div className="w-100 d-flex justify-content-end">
                    <Button variant="success" size="sm">
                        Dodaj
                    </Button>
                </div>
                <Row>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Pytanie</th>
                                <th>Edycja</th>
                                <th>Usuń</th>
                            </tr>
                        </thead>
                        <tbody>
                            {questions.length == 0 ? 
                                <tr>
                                    <td colSpan={4} className="h-100">
                                        <Container className="d-flex justify-content-center align-items-center w-100 h-100" fluid>
                                            <p>Brak pytań</p>
                                        </Container>
                                    </td>
                                </tr>
                            :
                                questions.map((question, index) => (
                                    <tr key={question.id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <div dangerouslySetInnerHTML={{ __html: question.question }} />
                                        </td>
                                        <td><Button variant="primary" size="sm" onClick={() => handleUpdate(question.id)}>Edytuj</Button></td>
                                        <td><Button variant="danger" size="sm" onClick={() => handleDelete(question.id)}>Usuń</Button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </>
    )
}
