import { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Col, Table, Form } from "react-bootstrap";
import { auth, db, tables } from "../../api/firebase";

import { onAuthStateChanged } from "firebase/auth";
import { doc, query, collection, where, getDocs } from "firebase/firestore";

const Portafolio = () => {
  const [likedCoins, setLikedCoins] = useState();

  useEffect(() => {
    const coinList = [];

    let unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDocRef = doc(db, tables.usersTable, user.uid);
        const q = query(
          collection(db, tables.walletTable),
          where("userid", "==", userDocRef)
        );

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          coinList.push(doc.data());
        });
        setLikedCoins(coinList);
        console.log(coinList);
      }
    });
    unsubscribe();
  }, []);
  <Container>
    <h1> Mis Monedas</h1>
    {likedCoins &&
      likedCoins.map((coin, index) => (
        <Row key={index} className="strip">
          <Col>{coin.coinid}</Col>
          <Col>{coin.quantity}</Col>
        </Row>
      ))}
  </Container>;
  return (
    <Container>
      <h1>Mis Monedas</h1>
      <Table hover responsive>
        <thead>
          <tr>
            <th>Moneda</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {likedCoins &&
            likedCoins.map((coin, index) => (
              <tr>
                <td>{coin.coinid}</td>
                <td>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label hidden>Email address</Form.Label>
                    <Form.Control
                      disabled
                      type="email"
                      placeholder={coin.quantity}
                    />
                  </Form.Group>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Portafolio;
