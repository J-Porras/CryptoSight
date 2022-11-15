import { useState } from "react";
import { useEffect } from "react";
import { Container, Table, Form, Button } from "react-bootstrap";
import { auth, db, tables, updateCoinsValues } from "../../api/firebase";

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
      }
    });
    unsubscribe();
  }, []);

  const updateCoinValues = () => {
    likedCoins.forEach(async (coin) => {
      await updateCoinsValues(coin);
    });
  };

  const updateQuantity = (coinName, quantity) => {
    try {
      const quantityParsed = parseFloat(quantity);
      if (isNaN(quantityParsed)) {
        return;
      }
      const coinToChange = likedCoins.find((coin) => coin.coinid === coinName);
      if (coinToChange !== null && coinToChange !== undefined) {
        coinToChange.quantity = quantityParsed;
      }
    } catch (error) {}
  };

  return (
    <Container className="mt-4">
      <div className="d-flex justify-content-between">
        <h1>Mis Monedas</h1>
        <Button onClick={updateCoinValues}>Guardar Cambios</Button>
      </div>
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
              <tr key={index}>
                <td>{coin.coinid}</td>
                <td>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label hidden>Email address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={coin.quantity}
                      onChange={(e) =>
                        updateQuantity(coin.coinid, e.target.value)
                      }
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
