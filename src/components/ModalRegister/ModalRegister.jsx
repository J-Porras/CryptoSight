import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { db } from "../../api/firebase.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { async } from "@firebase/util";
const ModalRegister = (props) => {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const auth = getAuth();

  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
      localStorage.setItem("uid", auth.currentUser.uid);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  const onRegister = async (e) => {
    e.preventDefault();
    await registerWithEmailAndPassword(name, email, password);
    setEmail("");
    setName("");
    setPassword("");
    handleClose();
  };
  return (
    <>
      <Button variant="outline-light" onClick={handleShow}>
        Registrarse
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="userName">
              <Form.Label className="ms-3">Nombre</Form.Label>
              <Form.Control
                type="text"
                name="userName"
                placeholder="Nombre"
                autoFocus
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="userEmail">
              <Form.Label className="ms-3">Correo</Form.Label>
              <Form.Control
                type="email"
                name="userEmail"
                placeholder="name@example.com"
                autoFocus
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="userPassword">
              <Form.Label className="ms-2">Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="userPassword"
                placeholder="Contraseña"
                autoFocus
                defaultValue={password}
                minLength="6"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onRegister}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

ModalRegister.propTypes = {};

export default ModalRegister;
