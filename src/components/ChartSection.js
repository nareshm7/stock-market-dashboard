import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const ChartSection = () => {
  const [data, setData] = useState([]);
  const [timeRange, setTimeRange] = useState('1D');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&month=2009-01&outputsize=full&apikey=X0KTADD2857QJ3MV&timeRange=${timeRange}`);
      setData(response.data);
    };
    fetchData();
  }, [timeRange]);

  return (
    <section className="chart-section">
      <h2>Market Chart</h2>
      <div className="time-range">
        {['1D', '1W', '1M', '3M', '1Y', 'All'].map((range) => (
          <button key={range} onClick={() => setTimeRange(range)}>
            {range}
          </button>
        ))}
      </div>
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="value" stroke="#ff7300" yAxisId={0} />
      </LineChart>
    </section>
  );
};

export default ChartSection;
