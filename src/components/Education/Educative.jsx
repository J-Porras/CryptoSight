import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const Educative = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <p onClick={handleShow} className="m-0 p-0">
        ¿Qué son?
      </p>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h1 className="mb-3">¿Qué son las criptomonedas?</h1>
          <p>
            Una criptomoneda (también denominada criptodivisa) es un tipo de
            moneda digital que utiliza la criptografía para proporcionar un
            sistema de pagos seguro. Al contrario que el dinero tradicional, las
            criptomonedas no cuentan ni con una referencia física ni con el
            respaldo de ningún país, como sucede por ejemplo con el euro o el
            dólar. Generalmente las transacciones realizadas entre los usuarios
            de una criptomoneda se registran de forma descentralizada en un
            libro contable mediante la tecnología blockchain o de cadena de
            bloques.
            <br></br>
            <br></br>
            Mediante esta tecnología, se mantiene la privacidad de los usuarios,
            a la par que se gana en transparencia y en seguridad, haciendo
            innecesaria la existencia de una institución central que las
            controle.
            <br></br>
            <br></br>
            La principal criptomoneda es Bitcoin, creada en 2009 por alguien
            anónimo cuyo pseudónimo es Satoshi Nakamoto. Pero no es la única: a
            día de hoy ya existen más de 10.500 criptomonedas negociadas en
            múltiples mercados con una capitalización conjunta superior a los
            1.400 millones de dólares, de los cuales Bitcoin representa casi la
            mitad del total.
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Educative;
