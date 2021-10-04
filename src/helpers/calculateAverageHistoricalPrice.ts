type PriceHistoryPoint = {
  date: number;
  priceUSD: string;
};

export type PriceHistory = PriceHistoryPoint[];

export function calculateAverageHistoricalPrice(
  historicalPrices: PriceHistory[],
): PriceHistory {
  let [merged, ...analyzed] = historicalPrices;

  // TODO
  // for (const history of analyzed) {
  //   for(const dataPoint of history) {
  //     merged.find(point => point.date === dataPoint.date)
  //   }
  // }
  return merged;
}
