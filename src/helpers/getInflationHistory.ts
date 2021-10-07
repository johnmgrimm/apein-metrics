import { blackHoleAddress } from './consts';
import { getLatestTransfers } from './getLatestTransfers';

type ItemId = { year: number; month: number; day: number };
type ItemBurn = {
  id: ItemId;
  dailySubtotal: number;
};
type ItemMint = {
  id: ItemId;
  dailySubtotal1: number;
  dailySubtotal2: number;
};
type ItemInflation = {
  date: number;
  dailySubtotal: number;
};
function convertIdToTimestamp(id: ItemId) {
  return new Date(`${id.year}-${id.month}-${id.day}`).getTime();
}

export async function getInflationHistory(chainId: number, contractId: string) {
  const burnHistory = await getLatestTransfers(
    chainId,
    contractId,
    blackHoleAddress,
    'IN',
    21,
  );
  const mintHistory = await getLatestTransfers(
    chainId,
    contractId,
    blackHoleAddress,
    'OUT',
    21,
  );

  const burnHistoryDates = burnHistory.map((item: ItemBurn) => ({
    date: convertIdToTimestamp(item.id),
    dailySubtotal: -item.dailySubtotal / 1e18,
  }));

  const mintHistoryDates = mintHistory.map((item: ItemMint) => ({
    date: convertIdToTimestamp(item.id),
    dailySubtotal: (item.dailySubtotal1 + item.dailySubtotal2) / 1e18,
  }));

  const aggregated = burnHistoryDates
    .concat(mintHistoryDates)
    .reduce((all: ItemInflation[], item: ItemInflation, index: number) => {
      if (index === 0) {
        return [item];
      }
      const existingDate = all.find(
        (existingItem) => existingItem.date === item.date,
      );
      if (!existingDate) {
        return [...all, item];
      }
      existingDate.dailySubtotal =
        existingDate.dailySubtotal + item.dailySubtotal;
      return all;
    }, []);

  return aggregated;
}
