import { blackHoleAddress } from './consts';
import {
  getLatestBurnTransfers,
  getLatestMintTransfers,
} from './getLatestTransfers';

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
export type ItemInflation = {
  date: number;
  value: number;
};

function convertIdToTimestamp(id: ItemId) {
  return new Date(`${id.year}-${id.month}-${id.day}`).getTime();
}

export async function getInflationHistory(chainId: number, contractId: string) {
  const burnHistory = await getLatestBurnTransfers(
    chainId,
    contractId,
    blackHoleAddress,
    21,
  );
  const mintHistory = await getLatestMintTransfers(
    chainId,
    contractId,
    blackHoleAddress,
    21,
  );

  const burnHistoryDates = burnHistory.map((item: ItemBurn) => ({
    date: convertIdToTimestamp(item.id),
    value: -item.dailySubtotal / 1e18,
  }));

  const mintHistoryDates = mintHistory.map((item: ItemMint) => ({
    date: convertIdToTimestamp(item.id),
    value: (item.dailySubtotal1 + item.dailySubtotal2) / 1e18,
  }));

  // console.log(burnHistoryDates, mintHistoryDates, 'burn-mint');

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
      existingDate.value = existingDate.value + item.value;
      return all;
    }, []);

  return aggregated.sort((a, b) => a.date - b.date);
}
