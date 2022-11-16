import React from "react";
import { Container } from "react-bootstrap";
import ethereum2 from "../../../assets/ethereum2.jpg";
const Ethereum = () => {
  return (
    <Container className="px-5 my-5">
      <h1 className="d-flex justify-content-center">¿Qué es Ethereum? </h1>
      <section className="d-flex justify-content-center my-5">
        <img src={ethereum2}></img>
      </section>
      <section className="px-5">
        <p className="f9">
          Ethereum, lanzada en 2015, es la segunda criptomoneda más grande por
          capitalización de mercado después de Bitcoin. Pero, a diferencia de
          Bitcoin, no se creó para ser dinero digital. En su lugar, los
          fundadores de Ethereum se propusieron construir un nuevo tipo de
          plataforma informática global y descentralizada que tomara la
          seguridad y la apertura de las cadenas de bloques y extendiera esos
          atributos a una amplia gama de aplicaciones.
        </p>
        <p className="f9">
          Todo, desde las herramientas financieras y los juegos hasta las
          complejas bases de datos, ya funciona en la cadena de bloques de
          Ethereum. Y su potencial futuro solo está limitado por la imaginación
          de los desarrolladores.
        </p>
        <ul className="f9 px-4">
          <li className="f9">
            Las aplicaciones basadas en Ethereum se construyen mediante
            "contratos inteligentes"(smart contracts).
          </li>
          <li className="f9">
            Ethereum, al igual que Bitcoin, es un proyecto de código abierto que
            no pertenece ni es operado por un solo individuo. Cualquiera con una
            conexión a Internet puede ejecutar un nodo de Ethereum o interactuar
            con la red.
          </li>
          <li className="f9">
            Al igual que la cadena de bloques descentralizada de Bitcoin permite
            que dos extraños, en cualquier parte del mundo, envíen o reciban
            dinero sin que haya un banco de por medio, los contratos
            inteligentes
          </li>
        </ul>
        <section style={{ backgroundColor: "#f2f2f2" }}>
          <h2 className="p-3">
            ¿Cuál es la diferencia entre Ethereum, Ether y ETH?
          </h2>
          <p className="p-3">
            Ethereum es el nombre de la red. "Ether" es el token de criptomoneda
            nativo utilizado por la red Ethereum. Dicho esto, en el uso
            cotidiano la mayoría de la gente llama al token "ETH" (o simplemente
            "Ethereum"). Como forma de enviar, recibir o almacenar valor, ETH
            funciona de forma muy parecida a Bitcoin. Pero también tiene un
            papel especial en la red de Ethereum. Dado que los usuarios pagan
            cuotas en ETH para ejecutar contratos inteligentes, se puede pensar
            en él como el combustible que mantiene todo en funcionamiento (por
            eso esas cuotas se llaman "gasolina").
          </p>
        </section>
        <h2>¿Es seguro Ethereum?</h2>
        <p className="f9">
          Actualmente, ETH está protegido por la cadena de bloques de Ethereum
          de la misma manera que Bitcoin está protegido por su cadena de bloques
          (blockchain).
        </p>
      </section>
    </Container>
  );
};

export default Ethereum;
