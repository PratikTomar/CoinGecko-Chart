import React from 'react'
import { MdTrendingDown, MdTrendingUp } from 'react-icons/md'

const CoinData = ({ selectedCoin }) => {
    return (
        <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-2xl font-bold mb-4">Price Overview</h3>
            <div className="flex flex-col space-y-4">
                <div className="flex justify-between items-center">
                    <span className="text-lg text-[#6F7177]">Current Price:</span>
                    <span className="text-2xl font-bold text-gray-900">
                        ${selectedCoin.current_price.toFixed(2)}
                    </span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-lg text-[#6F7177]">Price Change:</span>
                    <span
                        className={`flex items-center text-lg font-bold ${selectedCoin.price_change_24h >= 0
                            ? "text-[#67BF6B]"
                            : "text-red-500"
                            }`}
                    >
                        {selectedCoin.price_change_24h >= 0 ? (
                            <MdTrendingUp className="mr-2" />
                        ) : (
                            <MdTrendingDown className="mr-2" />
                        )}
                        ${selectedCoin.price_change_24h.toFixed(2)} (
                        {selectedCoin.price_change_percentage_24h.toFixed(2)}%)
                    </span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-lg text-[#6F7177]">Highest Price (In last 24h):</span>
                    <span className="text-lg font-bold text-gray-900">
                        ${selectedCoin.high_24h}
                    </span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-lg text-[#6F7177]">Lowest Price (In last 24h):</span>
                    <span className="text-lg font-bold text-gray-900">
                        ${selectedCoin.low_24h}
                    </span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-lg text-[#6F7177]">Market Cap:</span>
                    <span className="text-lg font-bold text-gray-900">
                        ${selectedCoin.market_cap}
                    </span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-lg text-[#6F7177]">24h Volume:</span>
                    <span className="text-lg font-bold text-gray-900">
                        ${selectedCoin.total_volume}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CoinData