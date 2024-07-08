import React from 'react';

const markets = [
  { name: 'S&P 500', value: 3900, change: -5, percentChange: -0.13 },
  { name: 'Nasdaq', value: 11000, change: 25, percentChange: 0.23 },
  { name: 'Dow Jones', value: 33000, change: -75, percentChange: -0.22 },
  { name: 'Crude Oil', value: 70, change: 0.5, percentChange: 0.71 },
  { name: 'Gold', value: 1800, change: -10, percentChange: -0.55 },
  { name: 'Silver', value: 25, change: 0.2, percentChange: 0.81 },
  { name: 'Bitcoin', value: 45000, change: -1000, percentChange: -2.17 },
];

const MarketsOverview = () => {
  return (
    <section className="markets-overview">
      <h2>Markets Overview</h2>
      <ul>
        {markets.map((market, index) => (
          <li key={index}>
            {market.name}: {market.value} ({market.change} / {market.percentChange}%)
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MarketsOverview;
