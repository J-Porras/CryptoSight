import { useEffect, useState } from "react";
import { Table, Image, Container } from "react-bootstrap";
import RowsTable from "./RowsTable";
import { genericGetCoinApi, listCoins, dataCoins } from "../../api/axiosBase";
import { formatCurrency } from "../../utils/utils";
import "./TableCoins.scss";
const TableCoins = (props) => {
  const paramsGet = new URLSearchParams();
  paramsGet.append("vs_currency", "usd");

  let per_page = 5;
  let page = 0; //initial page
  const coinsParams = [];
  //coinsParams.push(per_page)
  //coinsParams.push(page);
  const [coinData, setPost] = useState(null);

  useEffect(() => {
    genericGetCoinApi(dataCoins, paramsGet).then((res) => {
      setPost(res.data);
    });
  }, [listCoins]);
  const tableHeaders = [
    "#",
    "Nombre",
    "Precio",
    "24h%",
    "Volumen 24h",
    "Volumen Total",
  ];
  return (
    <Container>
      <h1 className="my-5 d-flex justify-content-center">Monedas</h1>
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
