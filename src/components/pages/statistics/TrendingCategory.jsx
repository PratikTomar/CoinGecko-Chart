import React from 'react'

const TrendingCategory = ({ category }) => {
    return (
        <div className="bg-gray-50 rounded-lg p-4 ">
            <div className="space-y-4 flex items-center justify-between">
                <div className="flex items-start justify-between">
                    <div className="flex items-center justify-between">
                        <div className="p-2 bg-blue-100 rounded-lg">
                            {category.name}
                        </div>
                        <div className='ml-6' >
                            <h1 className="text-lg text-bold">Market Capital</h1>
                            <p className="text-lg font-semibold text-gray-900">{category.market_cap_1h_change}</p>

                            <div className="flex items-center text-sm text-[#6F7177]">
                                <h2 className="text-lg text-[#6F7177]">Market Capital BTC :</h2>
                                <p className="text-lg text-gray-900 ml-2">{category.data.market_cap_btc}</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex items-center w-40 ml-10 ">
                        <img src={category.data.sparkline}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrendingCategory