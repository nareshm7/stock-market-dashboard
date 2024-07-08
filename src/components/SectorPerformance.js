import React from 'react';

const sectors = [
  { name: 'Industrials', change: 1.2 },
  { name: 'Technology', change: -0.5 },
  { name: 'Healthcare', change: 0.8 },
];

const SectorPerformance = () => {
  return (
    <section className="sector-performance">
      <h2>Sector Performance</h2>
      <ul>
        {sectors.map((sector, index) => (
          <li key={index} className={sector.change >= 0 ? 'positive' : 'negative'}>
            {sector.name}: {sector.change}%
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SectorPerformance;
