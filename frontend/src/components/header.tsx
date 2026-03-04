import React from "react";
import { Navbar, Nav, Dropdown, Container, Button } from "react-bootstrap"

function Header() {
    let isRegister = false;
    return (
        <Navbar expand="lg" style={{width: "100vw", height: "10vh", background: "#eef"}}>
            <Container>
                <Navbar.Brand href="/">Quiz Applcation</Navbar.Brand>
                    {!isRegister ? 
                        <Nav className="justify-content-end p-1">
                            <Nav.Link href="/login">
                                <Button variant="primary">Login</Button>
                            </Nav.Link>
                            <Nav.Link href="/register">
                                <Button variant="primary">Register</Button>
                            </Nav.Link>
                        </Nav>    
                    :
                        <Nav className="justify-content-end p-1">
                           <Dropdown>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                    msliwinski
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Settings</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav> 
                    }
            </Container>
        </Navbar>
    )
}

export { Header };