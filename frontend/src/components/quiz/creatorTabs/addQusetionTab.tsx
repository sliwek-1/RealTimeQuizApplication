import { Container } from 'react-bootstrap';
import { AddQuestionForm } from './addQuestionTab/addQuestionForm';
import { QuestionsList } from './addQuestionTab/questionsList';
import { useState } from 'react';

export interface SetVisibilityProp {
    setVisibility: (value: boolean) => void
}


export function AddQuestionTab() {
    
    const [showAddQuestion, setShow] = useState<boolean>(false)

    return (
        <>
            <Container fluid className="mb-5">
                    
                    {showAddQuestion ?
                        <AddQuestionForm setVisibility={setShow} />    
                        :
                        <QuestionsList setVisibility={setShow} />
                    }
            </Container>
        </>
    )
}