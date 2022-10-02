import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ModalLogin from "../ModalLogin/ModalLogin";
import ModalRegister from "../ModalRegister/ModalRegister";
import Button from "react-bootstrap/Button";

const HeaderNavbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
      <Navbar variant="dark" bg="primary" expand="lg" className="p-3">
        <Navbar.Brand href="/">CryptoSight</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Portafolio</Nav.Link>

            <NavDropdown title="Guia de Crypto" id="basic-nav-dropdown">


              <NavDropdown.Item href="/">Lo basico</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Glosario</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="mx-1">

            {!isLoggedIn ? (
              <Container  >
                   <ModalLogin  />
                   <ModalRegister/>
              </Container>
            ) : (
              <Button variant="outline-light">Log Out</Button>
            )}
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>

  );
};

export default HeaderNavbar;
