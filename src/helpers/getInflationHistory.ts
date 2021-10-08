import dayjs from 'dayjs';
import { blackHoleAddress } from './consts';
import { getInitialHistory } from './getInitialHistory';
import { getLatestMintTransfers } from './getLatestMintTransfers';
import { getLatestBurnTransfers } from './getLatestBurnTransfers';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

type ItemId = { year: number; month: number; day: number };
export type ItemInflation = {
  date: number;
  value: number;
};

function convertIdToTimestamp(id: ItemId) {
  return dayjs.utc(`${id.year}-${id.month}-${id.day}`).valueOf();
}

export async function getInflationHistory(
  chainId: number,
  contractId: string,
  historyLength: number = 21,
) {
  const burnHistory = await getLatestBurnTransfers(
    chainId,
    contractId,
    blackHoleAddress,
    historyLength,
  );
  const mintHistory = await getLatestMintTransfers(
    chainId,
    contractId,
    blackHoleAddress,
    historyLength,
  );

  const initialHistory = getInitialHistory(historyLength);

  const aggregated = initialHistory.map((item) => {
    const burned = burnHistory.find(
      (burn) => convertIdToTimestamp(burn.id) === item.date,
    );
    const minted = mintHistory.find(
      (mint) => convertIdToTimestamp(mint.id) === item.date,
    );
    const dailyTotal =
      (minted ? (minted.dailySubtotal1 + minted.dailySubtotal2) / 1e18 : 0) -
      (burned ? burned.dailySubtotal / 1e18 : 0);
    return {
      date: item.date,
      value: dailyTotal,
    };
  });

  return aggregated;
}
