import { useEffect, useState } from "react";
import { Table, Image, Container } from "react-bootstrap";
import RowsTable from "./RowsTable";
import { genericGetCoinApi, listCoins, dataCoins } from "../../api/axiosBase";
import { formatCurrency } from "../../utils/utils";
import './TableCoins.scss'
const TableCoins = (props) => {
  const paramsGet = new URLSearchParams();
  paramsGet.append("vs_currency", "usd");

  let per_page = 5;
  let page = 0; //initial page
  const coinsParams = [];
  //coinsParams.push(per_page)
  //coinsParams.push(page);
  const [post, setPost] = useState(null);

  useEffect(() => {
    genericGetCoinApi(dataCoins, paramsGet).then((res) => {
      console.log(res);
      setPost(res.data);
    });
  }, [listCoins]);
  const tableHeaders = [
    "#",
    "Nombre",
    "Precio",
    "Mayor 24h",
    "Menor 24h",
    "Volumen 24h",
    "Volumen Total",
  ];
  return (
      <Table hover  responsive>
        <thead>
          <tr>
            {tableHeaders.map((header, index) => (
              <th key={index}> {header}</th>
            ))}
          </tr>
        </thead>
        <tbody> 
          {post &&
            post.map((coin, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <th>
                  <Container fluid className="d-flex">
                    <div className="me-2">
                      <Image src={coin.image} fluid width={20} height={20} />
                    </div>
                    <div>{coin.id}</div>
                  </Container>
                </th>
                <th>{formatCurrency(coin.current_price)}</th>
                <th>{formatCurrency(coin.high_24h)}</th>
                <th>{formatCurrency(coin.low_24h)}</th>
                <th>{formatCurrency(coin.total_volume)}</th>
                <th>{formatCurrency(coin.market_cap)  }</th>
              </tr>
            ))}
        </tbody>
      </Table>

      
  );
};

TableCoins.propTypes = {};

export default TableCoins;
