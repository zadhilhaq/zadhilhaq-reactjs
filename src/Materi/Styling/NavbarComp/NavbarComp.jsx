import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function NavbarComp() {
    
    return(
      <div>
        <Container fluid>
          <Row>
            <Navbar bg="gold" expand="lg">
              <Container>
                <Navbar.Brand href="#home">RDU</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Biografi</Nav.Link>
                    <Nav.Link href="#link">Contact</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Row>
        </Container>
      </div>
    
    );
  }