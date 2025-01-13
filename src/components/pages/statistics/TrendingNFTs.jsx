import React from 'react'

const TrendingNFTs = ({ NFT }) => {
    return (
        <div className="bg-gray-50 rounded-lg p-4 ">
            <div className="space-y-4 flex items-center justify-between">
                <div className="flex items-start justify-between">
                    <div className="flex items-center justify-between">
                        <div className="p-2 bg-blue-100 rounded-lg">
                            {NFT.name}
                        </div>

                        <div className='ml-6' >
                            <div>
                                <h1 className="text-lg text-bold">Currency Symbol</h1>
                                <p className="text-lg font-semibold text-gray-900">{NFT.native_currency_symbol}</p>
                            </div>
                            <div className="flex items-center text-sm text-[#6F7177]">
                                <h2 className="text-lg text-[#6F7177]">Floor Price:</h2>
                                <p className="text-lg text-gray-900 ml-2">{NFT.data.floor_price}</p>

                            </div>
                        </div>
                    </div>
                    <div
                        className="flex items-center justify-between ml-10 pt-4  ">
                        <span className='mr-8'><img src={NFT.thumb}></img></span>
                        <span><img src={NFT.data.sparkline}></img></span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrendingNFTs