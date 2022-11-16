import { Container, Row, Col, Card } from "react-bootstrap";
import blockchain2 from "../../assets/blockchain2.png";
import ethereum2 from "../../assets/ethereum2.jpg";
import digitalLock from "../../assets/digital-lock.jpg";
import marketCap from "../../assets/market-cap.png";
import cryptocurrencies from "../../assets/cryptocurrencies.png";
import bitcoin from "../../assets/bitcoin.png";
import { Link } from "react-router-dom";

const Glosary = () => {
  const glosaryList = [
    {
      titulo: "¿Qué es el blockchain?",
      descripcion:
        "Las criptomonedas como Bitcoin y Ethereum funcionan con una tecnología llamada blockchain.",
      imagen: blockchain2,
      glosariourl: "blockchain",
    },
    {
      titulo: "¿Qué es Bitcoin?",
      descripcion:
        "La primera criptodivisa del mundo ampliamente adoptada. Con Bitcoin, las personas pueden enviarse dinero digital de forma segura y directa a través de Internet.",
      imagen: bitcoin,
      glosariourl: "bitcoin",
    },
    {
      titulo: "¿Qué es Ethereum?",
      descripcion:
        "Ethereum es la segunda criptomoneda más grande por capitalización de mercado después de Bitcoin. También es una plataforma informática descentralizada que puede ejecutar una gran variedad de aplicaciones",
      imagen: ethereum2,
      glosariourl: "ethereum",
    },
    {
      titulo: "¿Qué es la criptografía?",
      descripcion:
        "La criptografía es el estudio y la práctica del envío de mensajes seguros y cifrados entre dos o más partes",
      imagen: digitalLock,
    },
    {
      titulo: "¿Qué es la capitalización de mercado/Market Cap?",
      descripcion:
        "En el caso de una criptomoneda como Bitcoin, la capitalización del mercado (o market cap) es el valor total de todas las monedas que se han minado.",
      imagen: marketCap,
    },
  ];
  return (
    <Container className="my-4">
      <h1 className="d-flex my-5 justify-content-center">
        Términos básicos de Crypto
      </h1>
      <Container className="px-3">
        <Row md={2} lg={2} xs={1} className="g-4">
          {glosaryList.map((element, index) => (
            <Col className="p-4">
              <Card border="light">
                <Card.Img
                  variant="top"
                  src={element.imagen}
                  width="286px"
                  height="216px"
                />
                <Card.Body>
                  <Card.Title>
                    <Link
                      to={
                        element.glosariourl ? element.glosariourl : "/glosario"
                      }
                      className="plain-text"
                    >
                      <h2>{element.titulo}</h2>
                    </Link>{" "}
                  </Card.Title>
                  <Card.Text>{element.descripcion}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Glosary;
