import React from 'react';

const MarketSummary = () => {
  const headline = 'Market is bullish today';
  const sentiment = 'The markets are bullish';

  return (
    <section className="market-summary">
      <h2>Market Summary</h2>
      <p>{headline}</p>
      <p>{sentiment}</p>
    </section>
  );
};

export default MarketSummary;
