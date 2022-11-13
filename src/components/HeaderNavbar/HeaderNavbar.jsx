import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ModalLogin from "../ModalLogin/ModalLogin";
import ModalRegister from "../ModalRegister/ModalRegister";
import Button from "react-bootstrap/Button";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";
import Educative from "../Education/Educative";
import Wallets from "../Education/Wallets";
import "./HeaderNavbar.scss";
import { useEffect } from "react";
import { getCurrentUserID } from "../../utils/utils";
import { doc, getDoc } from "firebase/firestore";
import { db, getCurrentUserInfo, logOut } from "../../api/firebase";

const HeaderNavbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  return (
    <Navbar variant="dark" bg="primary" expand="lg" className="p-3">
      <Navbar.Brand href="/">CryptoSight</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {isLoggedIn && (
            <Link to="/portafolio" className="plain-text__nav">
              Portafolio
            </Link>
          )}

          <NavDropdown title="Guia de Crypto" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <Educative />
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Wallets />
            </NavDropdown.Item>

            <NavDropdown.Divider />
            <NavDropdown.Item>
              <Link to="/glosario" className="plain-text">
                Glosario
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="mx-1">
          {!isLoggedIn ? (
            <Container>
              <ModalLogin setIsLoggedIn={setIsLoggedIn} />
              <ModalRegister />
            </Container>
          ) : (
            <Button variant="outline-light" onClick={logOut}>
              Log Out
            </Button>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeaderNavbar;
