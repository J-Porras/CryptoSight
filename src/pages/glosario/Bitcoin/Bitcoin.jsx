import React from "react";
import { Container } from "react-bootstrap";
import bitcoin from "../../../assets/bitcoin.png";
const Bitcoin = () => {
  return (
    <Container className="px-5 my-5">
      <h1 className="d-flex justify-content-center">¿Qué es el Bitcoin? </h1>
      <section className="d-flex justify-content-center my-5">
        <img src={bitcoin} width="640" height="360"></img>
      </section>
      <section className="px-5">
        <p className="f9">
          Bitcoin fue creado por <strong>Satoshi Nakamoto</strong>, una persona
          o equipo con seudónimo que describió la tecnología en un libro blanco
          de 2008. Es un concepto atractivo y sencillo: el bitcoin es un dinero
          digital que permite realizar transacciones seguras entre pares en
          Internet.
        </p>
        <ul className="f9 px-4    ">
          <li className="f9">
            A diferencia de servicios como Venmo y PayPal, que se basan en el
            sistema financiero tradicional para obtener el permiso para
            transferir dinero y en las cuentas de débito/crédito existentes, el
            bitcoin está descentralizado: dos personas cualesquiera, en
            cualquier parte del mundo, pueden enviarse bitcoins entre sí sin la
            participación de un banco, gobierno u otra institución.
          </li>
          <br></br>

          <li className="f9">
            Todas las transacciones con Bitcoin se registran en la cadena de
            bloques, que es similar al libro mayor de un banco, o al registro de
            los fondos de los clientes que entran y salen del banco. En términos
            sencillos, es un registro de todas las transacciones realizadas con
            Bitcoin.
          </li>
          <br></br>
          <li className="f9">
            A diferencia del libro de contabilidad de un banco, la cadena de
            bloques de Bitcoin está distribuida por toda la red. Ninguna
            empresa, país o tercero tiene el control de la misma, y cualquiera
            puede formar parte de esa red.
          </li>
        </ul>
        <p className="f9">
          <strong>
            Cuando el Bitcoin apareció por primera vez, supuso un gran avance en
            la informática,
          </strong>{" "}
          porque resolvió un problema fundamental del comercio en Internet:
          ¿cómo transferir valor entre dos personas sin un intermediario de
          confianza (como un banco) en medio? Al resolver ese problema, la
          invención del bitcoin tiene amplias ramificaciones: Al ser una moneda
          diseñada para Internet, permite realizar transacciones financieras a
          través de las fronteras y en todo el mundo sin la intervención de
          bancos, compañías de tarjetas de crédito, prestamistas o incluso
          gobiernos.
        </p>
      </section>
    </Container>
  );
};

export default Bitcoin;
