import React from 'react';

const CoinSelect = ({ list, setSelectedCoin }) => {

    const handleSelectChange = (e) => {
        const coin = list.find((item) => item.name === e.target.value);
        setSelectedCoin(coin);
    };
    return (
        <select onChange={handleSelectChange} className="p-2 border-2 rounded-md w-full ">
            {list.map((coin) => (
                <option key={coin.id} value={coin.name}>
                    {coin.name}
                </option>
            ))}
        </select>
    )
}

export default CoinSelect