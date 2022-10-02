import React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";

const RowsTable = (coinsData) => {

  return (
    <>
      {coinsData.map((coin, index) => (
        <tr key={index}>
          <th>{coin.id}</th>
          <th>{coin.id}</th>
          <th>{coin.id}</th>
          <th>{coin.id}</th>
          <th>{coin.id}</th>
          <th>{coin.id}</th>
          <th>{coin.id}</th>
          
        </tr>
      ))}
    </>
  );
};

RowsTable.propTypes = {};

export default RowsTable;
