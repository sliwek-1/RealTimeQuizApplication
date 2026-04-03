import {Row, Col, Container, Table, Button} from "react-bootstrap";
import type { RootState } from "../../../../store";
import { useSelector } from "react-redux";
import { useState } from "react";
import type { SetVisibilityProp } from "../addQusetionTab";


export function QuestionsList({ setVisibility }: SetVisibilityProp) {

    const questions = useSelector((state: RootState) => state.examConfig.questions);

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
                                <p>Brak pytań</p>
                            :
                                questions.map((question, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>
                                            <div dangerouslySetInnerHTML={{ __html: question.question }} />
                                        </td>
                                        <td><Button variant="primary" size="sm">Edytuj</Button></td>
                                        <td><Button variant="danger" size="sm">Usuń</Button></td>
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
