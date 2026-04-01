import React from "react";
import { Navbar, Nav, Dropdown, NavDropdown, Container, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import type { RootState } from "../store";

function Header() {
    const userData = useSelector((state: RootState) => state.user);
    console.log(userData)
return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className="shadow-sm py-2 sticky-top">
      <Container>
        {/* Logo z zielonym akcentem */}
        <Navbar.Brand href="/" className="fw-bold fs-4">
          quiz<span className="text-success">APP</span>
        </Navbar.Brand>

        {/* Przycisk hamburgera dla mobile */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-0" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {userData.uniqueId === "" ? (
              <>
                <Nav.Link href="/login" className="fw-medium px-3">
                  Zaloguj
                </Nav.Link>
                <Nav.Link href="/register" className="p-0">
                  <Button variant="success" className="px-4 rounded-pill fw-bold shadow-sm">
                    Dołącz teraz
                  </Button>
                </Nav.Link>
              </>
            ) : (
              <>
                <span className="d-none d-lg-block me-2 text-muted">Witaj,</span>
                <NavDropdown 
                  title={<span className="text-success fw-bold">{userData.login}</span>} 
                  id="user-dropdown" 
                  align="end"
                >
                  <NavDropdown.Item href="/profile">Mój Profil</NavDropdown.Item>
                  <NavDropdown.Item href="/settings">Ustawienia</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/logout" className="text-danger">
                    Wyloguj się
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export { Header };