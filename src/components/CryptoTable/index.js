import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CryptoList from "../CryptoList";

const CryptoTable = () => {
  const [crypto, setCrypto] = useState([]);
  const navigate = useNavigate();
  // const { id } = useParams();

  // const getData = () => {
  //   axios
  //     .get("https://api.coingecko.com/api/v3/coins/")
  //     .then((response) => {
  //       const data = response;
  //       setCrypto(data.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  async function getData() {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/`);
    const data = response.data;
    setCrypto(data);
  }

  useEffect(() => {
    getData();
  }, []);

  const handleClick = (id) => {
    console.log(id);
    navigate(`${id}`);
  };

  // console.log(crypto);

  return (
    <table className="table" cellSpacing="0" cellPadding="0">
      <thead>
        <tr>
          <th>#</th>
          <th>Coin</th>
          <th>Price</th>
          <th>24h</th>
          <th>Volume</th>
          <th>Mkt Cap</th>
        </tr>
      </thead>
      <tbody>
        {crypto.map((item) => (
          <CryptoList
            crypto={item}
            onClick={() => handleClick(item.id)}
            key={item.id}
          />
        ))}
      </tbody>
    </table>
  );
};

export default CryptoTable;
