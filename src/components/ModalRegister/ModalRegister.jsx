import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { db } from '../../api/firebase.js';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection , query, orderBy , onSnapshot, addDoc,serverTimestamp} from 'firebase/firestore';
import { async } from "@firebase/util";
const ModalRegister = (props) => {
  const [show, setShow] = useState(false);
  const [password,setPassword]=useState("");
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const auth = getAuth();

  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "User"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  const onRegister= async(e)=>{
    e.preventDefault()
    await registerWithEmailAndPassword(name,email,password);
    setEmail("")
    setName("")
    setPassword("")
    handleClose()
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
