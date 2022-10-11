import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const Wallets = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow}> Billeteras electrónicas</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <h1>¿Qué es una billetera electrónica y cuáles hay?</h1>
          <p>
            Las wallets o monederos de criptomonedas son uno de los elementos
            más importantes e indispensables a la hora de operar con estas. Esto
            debido a que son las que nos permiten enviar o recibir pagos en
            criptoactivos. A diferencia del sistema financiero tradicional,
            Bitcoin y otras criptomonedas son monedas totalmente digitales que
            no existen en el mundo físico y que funcionan basándose en
            criptografía. Por ello, el diseño de las wallets es de vital
            importancia para poder operar y gestionar nuestros fondos. Y aunque,
            el término monedero nos parezca similar al que usamos para guardar
            nuestro dinero físico, lo cierto es que en criptomonedas, lo que
            realmente se almacena en las wallets son las claves públicas y
            privadas. Las criptomonedas como tal, no existen como monedas, sino
            más bien como registros de transacciones contenidos dentro de una
            blockchain que es operada por nodos interconectados entre sí
            alrededor de todo el mundo. Entonces, las claves públicas y sobre
            todo, las claves privadas dentro de una wallet son las que nos dan
            la propiedad y derecho sobre las criptomonedas transferidas a una
            dirección en particular. Veamos esto con más detalle:
          </p>
        </Modal.Body>

        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default Wallets;
