import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { db } from '../../api/firebase.js';
import { collection , onSnapshot } from 'firebase/firestore';
const ModalRegister = (props) => {
  const [show, setShow] = useState(false);
  const [password,setPassword]=useState("");
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onRegister=(e)=>{
    e.preventDefault()

    setEmail("")
    setName("")
    setPassword("")
  }
  return (
    <>
      <Button variant="outline-light" onClick={handleShow}>
        Register
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registration</Modal.Title>
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
                value={email}  
                defaultValue={email} 
                onChange={(e) => setEmail(e.target.value)}
              />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="ms-3" >Name</Form.Label>
          <Form.Control
                type="text"
                placeholder="Name"
                autoFocus
                value={name}  
                defaultValue={name} 
                onChange={(e) => setName(e.target.value)}
              />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="ms-2">Password</Form.Label>
        <Form.Control 
              type="password" 
              placeholder="Password" 
              autoFocus
              value={password}
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
