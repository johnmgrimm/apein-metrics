type CoinGeckoApiResponse = {
  last_updated: string;
  market_data: {
    current_price: { usd: number };
    total_supply: number;
    market_cap: { usd: number };
  };
};

// return only used data from CoinGecko API response object
export function getTokenStatsFromCoinGeckoApi(
  apiResponse: CoinGeckoApiResponse,
) {
  return {
    lastUpdated: apiResponse.last_updated,
    price: apiResponse.market_data.current_price.usd,
    supply: apiResponse.market_data.total_supply,
    marketCap: apiResponse.market_data.market_cap.usd,
    burned: 0,
  };
}
