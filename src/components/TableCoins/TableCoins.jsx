import React from 'react'
import Table from 'react-bootstrap/Table';

const TableCoins = props => {
    const tableHeaders = [
        '#',
        'Name',
        'Price',
        '1h%',
        '24h%',
        '7d%',
        'Market Cap'
    ]
  return (
    <section className="mt-3 mx-3">
        <Table hover >
      <thead>
        <tr>
          {tableHeaders.map((header, index) => (
            <th key={index}> {header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Data</td>
          <td>Data</td>
          <td>Data</td>
          <td>Data</td>
          <td>Data</td>
          <td>Data</td>
          <td>Data</td>
        </tr>

      </tbody>
    </Table>

    </section>
    
  );
}

TableCoins.propTypes = {}

export default TableCoins