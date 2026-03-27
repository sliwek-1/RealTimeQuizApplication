import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


export function SessionCreate() {

    const [selectedStartDate, setStartSelectedDate] = useState(new Date());
    const [selectedEndDate, setEndSelectedDate] = useState(() => {
        const d = new Date();
        d.setHours(d.getHours() + 1);
        return d;
    });
    const [dateError, setDateError] = useState("");

    const onSubmit = () => {
        if(selectedStartDate < new Date()) setDateError("Data rozpoczęcia sesji nie może być w przeszłość");
        if(selectedStartDate > selectedEndDate) setDateError("Data rozpoczęcia sesji nie może być po jego zakończeniu");
        if(selectedEndDate < selectedStartDate) setDateError("Sesja nie może się skończyć zanim się zacznie");
    }

    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Tytuł</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Opis</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" />
                </Form.Group>
                <Form.Select aria-label="Default select example">
                    <option>Wybierz jedną z opcji</option>
                    <option value="Publiczna">Publiczna</option>
                    <option value="Prywatna">Prywatna</option>
                </Form.Select>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Data rozpoczęcia</Form.Label>
                    <DatePicker
                        selected={selectedStartDate}
                        onChange={(date: any) => { setStartSelectedDate(date); onSubmit(); }}

                        showTimeSelect           // Enables the time sidebar
                        timeIntervals={10}       // Sets increments (15, 30, 60 mins)
                        timeCaption="Time"       // Title above the time list
                        dateFormat="MMMM d, yyyy h:mm aa" // How it looks in the input box
                        
                        // --- Styling ---
                        className="form-control" // Applies Bootstrap input styling
                        placeholderText="Click to select"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Data zakoniczenia</Form.Label>
                    <DatePicker
                        selected={selectedEndDate}
                        onChange={(date: any) => { setEndSelectedDate(date),  onSubmit(); }}
                        // --- Time Settings ---
                        showTimeSelect           // Enables the time sidebar
                        timeIntervals={10}       // Sets increments (15, 30, 60 mins)
                        timeCaption="Time"       // Title above the time list
                        dateFormat="MMMM d, yyyy h:mm aa" // How it looks in the input box
                        
                        // --- Styling ---
                        className="form-control" // Applies Bootstrap input styling
                        placeholderText="Click to select"
                    />
                </Form.Group>
                {dateError}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}