import React from "react";
import CoinData from "../shared/CoinData";
import CoinSelect from "../shared/CoinSelect";

const Summary = ({ list, selectedCoin, setSelectedCoin }) => {
  return (
    <div className={`space-y-6`}>
      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="text-2xl font-bold mb-2">
          About Bitcoin
        </h3>
        <p className="text-[#6F7177]text-lg leading-relaxed">
          Bitcoin is the first decentralized cryptocurrency. Based on a free-market ideology, Bitcoin was invented in 2008 by Satoshi Nakamoto, an unknown person. Use of Bitcoin as a currency began in 2009, with the release of its open-source implementation. In 2021, El Salvador adopted it as legal tender.
        </p>
      </div>

      <CoinSelect list={list} setSelectedCoin={setSelectedCoin} />

      {selectedCoin && (
        <CoinData selectedCoin = {selectedCoin} />
      )}

      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="text-2xl font-bold mb-2">Learn More</h3>
        <p className="text-[#6F7177]text-lg leading-relaxed mb-4">
          Explore more about
          cryptocurrency"s history, technology, and
          impact on the global economy.
        </p>
        <a
          href={"https://bitcoin.org"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-[#4B40EE] hover:bg-blue-800 transition px-4 py-2 rounded-md"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Summary;
