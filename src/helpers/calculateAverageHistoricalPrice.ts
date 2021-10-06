export type PriceHistoryPoint = {
  date: number;
  priceUSD: number;
  prices?: number[];
};

export type PriceHistory = PriceHistoryPoint[];

export function calculateAverageHistoricalPrice(
  historicalPrices: PriceHistory[],
): PriceHistory {
  // merge history linearly
  const merged = historicalPrices.reduce(
    (all: PriceHistory, singleHistory: PriceHistory) => [
      ...all,
      ...singleHistory,
    ],
    [],
  );

  const aggregated = merged.reduce(
    (all: PriceHistory, singlePoint: PriceHistoryPoint, index) => {
      // first point should be just wrapped as array
      if (index === 0) {
        return [{ ...singlePoint, prices: [singlePoint.priceUSD] }];
      }
      const existingPoint = all.find(
        (point) => point.date === singlePoint.date,
      );
      if (!existingPoint) {
        return [...all, { ...singlePoint, prices: [singlePoint.priceUSD] }];
      }
      if (!existingPoint.prices) {
        // this is highly improbable case (should never happen)
        existingPoint.prices = [existingPoint.priceUSD];
      }
      existingPoint.prices = [...existingPoint.prices, singlePoint.priceUSD];
      return all;
    },
    [],
  );

  const flattened = aggregated.map((point) => {
    return {
      priceUSD: point.prices
        ? point.prices.reduce((sum, price) => sum + price, 0) /
          point.prices.length
        : point.priceUSD,
      date: point.date,
    };
  });

  flattened.sort((a, b) => a.date - b.date);

  return flattened;
}
