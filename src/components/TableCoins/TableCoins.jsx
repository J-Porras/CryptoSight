import { useEffect, useState } from "react";
import { Table, Image, Container, Button } from "react-bootstrap";
import { genericGetCoinApi, listCoins, dataCoins } from "../../api/axiosBase";
import { formatCurrency } from "../../utils/utils";
import { BsStarFill, BsStar } from "react-icons/bs";
import "./TableCoins.scss";
import { addCoinToFavs } from "../../api/firebase";
import { auth, db, tables } from "../../api/firebase";

import { onAuthStateChanged } from "firebase/auth";
import { doc, query, collection, where, getDocs } from "firebase/firestore";
const TableCoins = (props) => {
  const paramsGet = new URLSearchParams();
  paramsGet.append("vs_currency", "usd");

  const [coinData, setPost] = useState(null);
  const [likedCoins, setLikedCoins] = useState();

  useEffect(() => {
    getFavsCoins();
  }, [listCoins]);

  const getFavsCoins = () => {
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
        genericGetCoinApi(dataCoins, paramsGet).then((res) => {
          setPost(res.data);
        });
        setLikedCoins(coinList);
      }
    });
    unsubscribe();
  };

  const tableHeaders = [
    "#",
    <Button variant="light" className="table-head">
      <BsStarFill />
    </Button>,
    "Nombre",
    "Precio",
    "24h%",
    "Volumen 24h",
    "Volumen Total",
  ];

  function isFavCoin(coinName) {
    return likedCoins.some((coin) => coin.coinid === coinName);
  }

  function handleAddCoin(coinName) {
    addCoinToFavs(coinName).then(() => {
      getFavsCoins();
    });
  }

  function foo() {
    //
  }

  return (
    <Container>
      <h1 className="my-5 d-flex justify-content-center">CryptoMonedas</h1>
      <Table hover responsive>
        <thead>
          <tr>
            {tableHeaders.map((header, index) => (
              <th key={index}> {header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {coinData &&
            coinData.map((coin, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <th>
                  <Button
                    variant="light"
                    className={
                      isFavCoin(coin.id.toUpperCase()) ? "coin--liked" : ""
                    }
                    onClick={
                      !isFavCoin(coin.id.toUpperCase())
                        ? () => handleAddCoin(coin.id.toUpperCase())
                        : () => foo()
                    }
                  >
                    {isFavCoin(coin.id.toUpperCase()) ? (
                      <BsStarFill />
                    ) : (
                      <BsStar />
                    )}
                  </Button>
                </th>
                <th>
                  <Container fluid className="d-flex">
                    <div className="me-2">
                      <Image src={coin.image} fluid width={20} height={20} />
                    </div>
                    <div>{coin.id.toUpperCase()}</div>
                  </Container>
                </th>

                <th>{formatCurrency(coin.current_price)}</th>
                <th>{formatCurrency(coin.price_change_percentage_24h)}</th>

                <th>{formatCurrency(coin.total_volume)}</th>
                <th>{formatCurrency(coin.market_cap)}</th>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

TableCoins.propTypes = {};

export default TableCoins;
