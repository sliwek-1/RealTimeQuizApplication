import {Row, Col, Container, Table, Button} from "react-bootstrap";
import type { RootState } from "../../../store";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import type { SetVisibilityProp } from "../creatorTabs/addQusetionTab";
import { removeQuestionFromStorage } from "../../../features/examConfigurationSlice";

export function QuestionsList({ setVisibility }: SetVisibilityProp) {

    const dispatch = useDispatch();
    const questions = useSelector((state: RootState) => state.examConfig.questions);

    const handleUpdate = () => {

    }

    const handleDelete = (questionId: string) => {
        dispatch(removeQuestionFromStorage(questionId))
    }   

    return (
        <>
            <Container fluid>
                <div className="w-100 d-flex justify-content-end">
                    <Button variant="success" size="sm" onClick={() => setVisibility(true)}>
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
                                        <td><Button variant="primary" size="sm">Edytuj</Button></td>
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
