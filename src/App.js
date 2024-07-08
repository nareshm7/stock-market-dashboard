import React from 'react';
import Header from './components/Header';
import MarketSummary from './components/MarketSummary';
import SectorPerformance from './components/SectorPerformance';
import MarketsOverview from './components/MarketsOverview';
import ChartSection from './components/ChartSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MarketSummary />
      <SectorPerformance />
      <MarketsOverview />
      <ChartSection />
    </div>
  );
}

export default App;
