import React from 'react';
import { FaMinus } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";

const Header = ({ currentPrice, priceChange, priceChangePercentage }) => {
  return (
    <div className={`mb-6 `}>
      <div>
        <div className="flex items-start justify-start" >
          <h2 className="text-5xl font-bold text-gray-900 ">
            {currentPrice.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </h2>
          <p className='text-2xl text-[#BDBEBF] m-2'>USD</p>
        </div>

        <div className="mt-3 space-x-2">
          <span
            className={`flex items-center text-lg ${priceChange >= 0 ? 'text-[#67BF6B]' : 'text-red-500'
              }`}
          >
            {priceChange >= 0 ? <FiPlus /> : <FaMinus />}

            {Math.abs(priceChange).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
            ({priceChangePercentage.toFixed(2)}%)
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
