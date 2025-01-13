import axios from "axios";
import React, { useEffect, useState } from "react";
import { lazy, Suspense } from "react";
import './App.css';
import Loader from "./components/shared/Loader";
import useDarkMode from "./hooks/useDarkMode";
import useLoading from "./hooks/useLoading";
import { COIN_GECKO_BASE } from "./utils/constants";

const Analysis = lazy(() => import("./components/pages/Analysis"));
const Chart = lazy(() => import("./components/pages/Chart"));
const Settings = lazy(() => import("./components/pages/Settings"));
const Statistics = lazy(() => import("./components/pages/statistics/Statistics"));
const Summary = lazy(() => import("./components/pages/Summary"));
const Header = lazy(() => import("./components/shared/Header"))
const Tabs = lazy(() => import("./components/Tabs"))

const App = () => {

  const [activeTab, setActiveTab] = useState('Chart');
  const [currentPrice, setCurrentPrice] = useState(0);
  const [priceChange, setPriceChange] = useState(0);
  const [priceChangePercentage, setPriceChangePercentage] = useState(0);
  const [list, setList] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(null);
  const { loadingHandler, isLoading } = useLoading();
  const { darkModeHandler, isDark, setIsDark } = useDarkMode()

  useEffect(() => {
    const fetchData = async () => {
      try {
        loadingHandler()
        const response = await axios.get(
          `${COIN_GECKO_BASE}/coins/markets?vs_currency=usd`
        );
        setList(response.data);
        setSelectedCoin(response.data[0]);
        loadingHandler();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <div className={`min-h-screen bg-gray-100 flex items-center justify-center p-4 `}>
        <div className={`w-full max-w-4xl p-6 bg-white rounded-xl shadow-lg`}>
          <Header currentPrice={currentPrice} priceChange={priceChange} priceChangePercentage={priceChangePercentage} isDark={isDark} />
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} isDark ={isDark} />
          {activeTab === 'Chart' && <Chart setCurrentPrice={setCurrentPrice} setPriceChange={setPriceChange} setPriceChangePercentage={setPriceChangePercentage}  isDark={isDark}/>}
          {activeTab === 'Summary' && <Summary list={list} selectedCoin={selectedCoin} setSelectedCoin={setSelectedCoin} isLoading={isLoading}  />}
          {activeTab === 'Settings' && <Settings darkModeHandler={darkModeHandler} isDark={isDark} setIsDark={setIsDark} />}
          {activeTab === 'Statistics' && <Statistics  />}
          {activeTab === 'Analysis' && <Analysis list={list} selectedCoin={selectedCoin} setSelectedCoin={setSelectedCoin} isLoading={isLoading} />}
        </div>
      </div>
    </Suspense>
  );
};

export default App;