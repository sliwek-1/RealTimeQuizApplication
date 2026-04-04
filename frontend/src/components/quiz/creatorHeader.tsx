import { Container, Nav, Navbar } from "react-bootstrap";



import "../../css/quiz/creator.css";

export function CreatorMenu() {
    return (
        <>
            <Container>
                    <Navbar>
                        <Nav>
                            <Nav.Link href="/quiz/init">Tutuł i Opis</Nav.Link>
                            <Nav.Link href="/quiz/questions">Menadżer Pytań</Nav.Link>
                            <Nav.Link href="/quiz/exam-rules">Zasady Egzaminu</Nav.Link>
                            <Nav.Link href="/quiz/start-screen">Ekran Startowy</Nav.Link>
                            <Nav.Link href="/quiz/summary">Ekran Podsumowania</Nav.Link>
                        </Nav>
                    </Navbar>
            </Container>
        </>
    )
}