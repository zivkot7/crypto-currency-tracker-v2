import React from "react";

const CryptoList = ({ crypto, onClick }) => {
  //   console.log(crypto);
  const { name, image, market_data } = crypto;
  const marketData = market_data;

  return (
    <tr onClick={onClick}>
      <td className="rank">{marketData.market_cap_rank}</td>

      <td className="name">
        <img src={image.thumb} alt={name} />
        <span>{name}</span>
      </td>
      <td>${marketData.current_price.usd.toLocaleString()}</td>
      <td>{marketData.price_change_percentage_24h.toFixed(2)}%</td>
      <td>${marketData.total_volume.usd.toLocaleString()}</td>
      <td>${marketData.market_cap.usd.toLocaleString()}</td>
    </tr>
  );
};

export default CryptoList;
