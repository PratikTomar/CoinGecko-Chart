import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { CiCirclePlus } from "react-icons/ci";
import { MdCloseFullscreen } from "react-icons/md";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import useLoading from '../../hooks/useLoading';
import { COIN_GECKO_BASE } from '../../utils/constants';
import Loader from '../shared/Loader';

const timeRanges = [
  { label: '1d', days: 1 },
  { label: '3d', days: 3 },
  { label: '1w', days: 7 },
  { label: '1m', days: 30 },
  { label: '6m', days: 180 },
  { label: '1y', days: 365 },
  { label: 'max', days: 'max' },
];

const Chart = ({ setCurrentPrice, setPriceChange, setPriceChangePercentage, isDark }) => {
  const [data, setData] = useState([]);
  const [selectedRange, setSelectedRange] = useState(timeRanges[2]);
  const containerRef = useRef(null);
  const { loadingHandler, isLoading } = useLoading();

  useEffect(() => {
    const fetchData = async () => {
      try {
        loadingHandler()
        const response = await axios.get(
          `${COIN_GECKO_BASE}/coins/bitcoin/market_chart?vs_currency=usd&days=${selectedRange.days}`
        );
        const formattedData = response.data.prices.map(([timestamp, price]) => ({
          timestamp,
          price,
        }));

        setData(formattedData);

        const latestPrice = formattedData[formattedData.length - 1].price;
        const earliestPrice = formattedData[0].price;
        const change = latestPrice - earliestPrice;
        const changePercentage = (change / earliestPrice) * 100;

        setCurrentPrice(latestPrice);
        setPriceChange(change);
        setPriceChangePercentage(changePercentage);
        loadingHandler()
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedRange]);


  const formatTooltipValue = (value) => {
    return `$${value.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  const formatXAxis = (timestamp) => {
    const date = new Date(timestamp);
    if (selectedRange.days === 1) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  return (
    <>
      <div ref={containerRef} className={`mb-6 mt-6 flex justify-between items-center space-x-1`}>
        <div className="flex items-center space-x-4">
          <button
            className="flex items-center space-x-1 text-[#6F7177] hover:text-gray-800 transition"
            onClick={toggleFullscreen}
          >
            <span className="material-icons"><MdCloseFullscreen size={20} /></span>
            <span className="text-lg pl-2">Fullscreen</span>
          </button>
          <button
            className="flex items-center space-x-1 text-[#6F7177] hover:text-gray-800 transition"
            title="Compare"
          >
            <span className="material-icons"><CiCirclePlus size={20} /></span>
            <span className="text-lg pl-2">Compare</span>
          </button>
        </div>
        <div className='flex items-center flex-wrap'>
          {timeRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => setSelectedRange(range)}
              className={`px-4 py-1 rounded-md text-lg transition-colors ${selectedRange.label === range.label
                ? 'bg-[#4B40EE] text-white'
                : 'text-[#6F7177] hover:bg-gray-100'
                }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      <div className={`h-[400px] ${isDark ? "dark" : ""}`}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="timestamp"
              tickFormatter={formatXAxis}
              type="number"
              domain={['dataMin', 'dataMax']}
              tickLine={false}
              axisLine={false}
              style={{ fontSize: '12px' }}
            />
            <YAxis
              domain={['dataMin', 'dataMax']}
              tickFormatter={formatTooltipValue}
              axisLine={false}
              tickLine={false}
              style={{ fontSize: '12px' }}
            />
            <Tooltip
              formatter={formatTooltipValue}
              labelFormatter={(label) => formatXAxis(label)}
              contentStyle={{
                backgroundColor: 'white',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              }}
            />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#4B40EE"
              fillOpacity={1}
              fill="url(#colorPrice)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      {isLoading && <Loader />}
    </>
  );
};

export default Chart;