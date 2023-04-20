import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";

const CryptoItem = () => {
  const [crypto, setCrypto] = useState(undefined);
  const { id } = useParams();
  const { name, image, market_data, symbol, market_cap_rank, description } =
    crypto ?? {};
  const marketData = market_data;

  async function getData() {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}`
    );
    const data = response.data;
    setCrypto(data);
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(crypto);

  return crypto ? (
    <>
      <Header />
      <div className="container">
        <h2 className="border">{name}</h2>
        <div className="border info">
          <p>Rank # {market_cap_rank}</p>
          <div>
            <img src={image.small} alt={name} />
            <p>{name}</p>
            <p>{symbol.toUpperCase()}/USD</p>
            <p>${market_data.current_price.usd.toLocaleString()}</p>
          </div>
        </div>
        <div className="border table-data">
          <table cellSpacing="0">
            <thead>
              <tr>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>14d</th>
                <th>30d</th>
                <th>1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {marketData.price_change_percentage_1h_in_currency.usd}%
                </td>
                <td>{marketData.price_change_percentage_24h}%</td>
                <td>{marketData.price_change_percentage_7d}%</td>
                <td>{marketData.price_change_percentage_14d}%</td>
                <td>{marketData.price_change_percentage_30d}%</td>
                <td>{marketData.price_change_percentage_1y}%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="border market-data">
          <div>
            <p>
              24 Hour Low{" "}
              <span>${marketData.low_24h.usd.toLocaleString()}</span>
            </p>
            <hr />
          </div>
          <div>
            <p>
              Market Cap{" "}
              <span>${marketData.market_cap.usd.toLocaleString()}</span>
            </p>
            <hr />
          </div>
          <div>
            <p>
              24 Hour High{" "}
              <span>${marketData.high_24h.usd.toLocaleString()}</span>
            </p>
            <hr />
          </div>
          <div>
            <p>
              Circulating Supply <span>{marketData.circulating_supply}</span>
            </p>
            <hr />
          </div>
        </div>
        <div className="border about">
          <h3>About</h3>
          <p>{description.en}</p>
        </div>
      </div>
    </>
  ) : (
    <h1>LOADING...</h1>
  );
};

export default CryptoItem;
