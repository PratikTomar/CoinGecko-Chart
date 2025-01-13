import React from 'react';
import CoinData from '../shared/CoinData';
import CoinSelect from '../shared/CoinSelect';
import Loader from '../shared/Loader';

const Analysis = ({ list, selectedCoin, setSelectedCoin, isLoading }) => {

  const getAnalysis = () => {
    if (selectedCoin.price_change_percentage_24h > 5) {
      return 'The coin is a strong performer with significant growth in the past 24 hours.';
    } else if (selectedCoin.price_change_percentage_24h > 0) {
      return 'The coin is a moderate performer with some growth in the past 24 hours.';
    } else if (selectedCoin.price_change_percentage_24h > -5) {
      return 'The coin is a weak performer, experiencing minor losses in the past 24 hours.';
    } else {
      return 'The coin is a poor performer, facing significant losses in the past 24 hours.';
    }
  };

  return (
    <div className={`space-y-6`}>
      <CoinSelect list={list} setSelectedCoin={setSelectedCoin} />
      {selectedCoin && <CoinData selectedCoin={selectedCoin} />}
      {selectedCoin && (
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-2xl font-bold mb-4">Analysis</h3>
          <p className="text-lg text-[#6F7177] mb-4">
            The selected coin <strong>{selectedCoin.name}</strong> has a price change of
            <span
              className={`font-bold mx-2 ${
                selectedCoin.price_change_24h >= 0 ? 'text-[#67BF6B]' : 'text-red-500'
              }`}
            >
              ${selectedCoin.price_change_24h.toFixed(2)} 
            </span>
            and a percentage change of
            <span
              className={`font-bold mx-2 ${
                selectedCoin.price_change_percentage_24h >= 0
                  ? 'text-[#67BF6B]'
                  : 'text-red-500'
              }`}
            >
              {selectedCoin.price_change_percentage_24h.toFixed(2)}%.
            </span>
          </p>
          <p className="text-lg text-gray-700">
            <strong>Performance Analysis:</strong> {getAnalysis()}
          </p>
        </div>
      )}
        {isLoading && <Loader/>}
    </div>
  
  );
};

export default Analysis;
