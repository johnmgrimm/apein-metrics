export type PriceHistoryPoint = {
  date: number;
  value: number;
  values?: number[];
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
        return [{ ...singlePoint, values: [singlePoint.value] }];
      }
      const existingPoint = all.find(
        (point) => point.date === singlePoint.date,
      );
      if (!existingPoint) {
        return [...all, { ...singlePoint, values: [singlePoint.value] }];
      }
      if (!existingPoint.values) {
        // this is highly improbable case (should never happen)
        existingPoint.values = [existingPoint.value];
      }
      existingPoint.values = [...existingPoint.values, singlePoint.value];
      return all;
    },
    [],
  );

  const flattened = aggregated.map((point) => {
    return {
      value: point.values
        ? point.values.reduce((sum, value) => sum + value, 0) /
          point.values.length
        : point.value,
      date: point.date,
    };
  });

  flattened.sort((a, b) => a.date - b.date);

  return flattened;
}
