import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { db } from '../../api/firebase.js';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection , query, orderBy , onSnapshot, addDoc,serverTimestamp} from 'firebase/firestore';
import { async } from "@firebase/util";
const ModalLogin = (props) => {
  const [show, setShow] = useState(false);
  const [password,setPassword]=useState("");
  const [email,setEmail]=useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const auth = getAuth();

  const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
     console.log( auth.currentUser.email);
     localStorage.setItem('uid', auth.currentUser.uid);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  const onLogin= async(e)=>{
    e.preventDefault()
    await logInWithEmailAndPassword(email,password);
    setEmail("")
    setPassword("")
    handleClose()
  }
  return (
    <>
      <Button variant="outline-light" onClick={handleShow} className="me-2">
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="ms-3">Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="name@example.com"
                autoFocus
                defaultValue={email} 
                onChange={(e) => setEmail(e.target.value)}
              />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="ms-2">Password</Form.Label>
        <Form.Control 
              type="password" 
              placeholder="Password" 
              autoFocus
              defaultValue={password} 
              onChange={(e) => setPassword(e.target.value)} 
        />
      </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onLogin}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

ModalLogin.propTypes = {};

export default ModalLogin;
