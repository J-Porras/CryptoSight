import React from "react";
import blockchain2 from "../../../assets/blockchain2.png";
import { Container } from "react-bootstrap";
const Blockchain = () => {
  return (
    <Container className="px-5 my-5">
      <h1 className="d-flex justify-content-center">¿Qué es el blockchain? </h1>
      <section className="d-flex justify-content-center my-5">
        <img src={blockchain2}></img>
      </section>
      <section className="px-5">
        <p className="f9">
          Las criptomonedas como Bitcoin y Ethereum se basan en una tecnología
          llamada <strong> cadena de bloques o blockchain </strong>. En su forma
          más básica, una cadena de bloques es una lista de transacciones que
          cualquiera puede ver y verificar.
        </p>
        <p className="f9">
          La cadena de bloques de Bitcoin, por ejemplo, contiene un registro de
          cada vez que alguien envía o recibe bitcoins. Las criptomonedas y la
          tecnología blockchain que las impulsa permiten transferir valor en
          línea sin necesidad de un intermediario como un banco o una compañía
          de tarjetas de crédito.
        </p>
        <p className="f9">
          Las cadenas de bloques están formadas por una serie de bloques
          individuales. Cada bloque contiene información sobre las transacciones
          realizadas en un periodo de tiempo determinado. Los bloques se crean
          resolviendo problemas criptográficos. El proceso de resolución de
          estos problemas se conoce como minería o <em>mining </em>. La minería
          de un bloque en la cadena de bloques atrae una recompensa. Por
          ejemplo, al inicio de la cadena de bloques de Bitcoin, los mineros que
          resolvían el problema de hashing criptográfico necesario para añadir
          un nuevo bloque a la cadena de bloques eran recompensados con 50 BTC.
        </p>
        <p className="f9">
          Mientras tanto, el identificador único del bloque o <em>hash</em>
          se deriva de la información contenida en cada bloque anterior de la
          cadena de bloques. Esto significa que, para falsificar cualquier
          registro en la cadena de bloques, un actor malintencionado tendría que
          <strong>
            cambiar cada bloque en cada instancia de la cadena de bloques.
          </strong>
          <br></br>
          Por ello, las cadenas de bloques se consideran prácticamente
          infalsificables y se consideran registros inmutables de las
          transacciones.
        </p>
      </section>
    </Container>
  );
};

export default Blockchain;
