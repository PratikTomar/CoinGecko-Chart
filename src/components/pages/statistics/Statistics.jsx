import axios from 'axios';
import { useEffect, useState } from 'react';
import useLoading from '../../../hooks/useLoading';
import { COIN_GECKO_BASE } from '../../../utils/constants';
import Loader from '../../shared/Loader';
import TrendingCategory from './TrendingCategory';
import TrendingCoins from './TrendingCoins';
import TrendingNFTs from './TrendingNFTs';

const Statistics = () => {
    const [trendingListCategory, setTrendingListCategory] = useState([]);
    const [trendingListCoins, setTrendingListCoins] = useState([]);
    const [trendingListNFTs, setTrendingListNFTs] = useState([])
    const { loadingHandler, isLoading } = useLoading();

    useEffect(() => {
        const fetchData = async () => {
            try {
                loadingHandler()

                const response = await axios.get(
                    `${COIN_GECKO_BASE}/search/trending`
                );
                setTrendingListCategory(response.data.categories);
                setTrendingListCoins(response.data.coins)
                setTrendingListNFTs(response.data.nfts)
                loadingHandler()
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div >
            <div>
                <h1 className='text-center text-2xl m-4  text-[#6F7177]'>Trending Categories This Week</h1>
                {trendingListCategory.map((category) => {
                    return (<TrendingCategory category={category} />
                    )
                })}
                {isLoading && <Loader />}
            </div>
            <div>
                <h1 className='text-center text-2xl m-4  text-[#6F7177]'>Trending Coins This Week</h1>
                {trendingListCoins.map((coin) => {
                    return (<TrendingCoins coin={coin} />
                    )
                })}
                {isLoading && <Loader />}
            </div>
            <div>
                <h1 className='text-center text-2xl m-4  text-[#6F7177]'>Trending NFTs This Week</h1>
                {trendingListNFTs.map((NFT) => {
                    return (<TrendingNFTs NFT={NFT} />
                    )
                })}
                {isLoading && <Loader />}
            </div>

        </div>
    )
}

export default Statistics
