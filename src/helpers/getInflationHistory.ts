import dayjs from 'dayjs';
import { blackHoleAddress } from './consts';
import { getInitialHistory } from './getInitialHistory';
import { getLatestMintTransfers } from './getLatestMintTransfers';
import { getLatestBurnTransfers } from './getLatestBurnTransfers';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

type ItemId = { year: number; month: number; day: number };
export type DataPoint = {
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
    // In case of minting total value has to be divided by 2
    // As there are duplicated transactions returned by the Covalent API
    // for every mint operation that send tokens to 2 addresses
    // Check the example: https://api.covalenthq.com/v1/1/address/0x0000000000000000000000000000000000000000/transfers_v2/?key=ckey_f1fbf169cdc04b9dbb6ceea07af&contract-address=0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698&match={"block_signed_at":{"$gt":"2021-09-19","$lt":"2021-09-21"},"transfers.0.transfer_type":"OUT"}
    const mintedTotal = minted
      ? (minted.dailySubtotal1 + minted.dailySubtotal2) / 1e18 / 2
      : 0;
    const burnedTotal = burned ? burned.dailySubtotal / 1e18 : 0;
    const dailyTotal = mintedTotal - burnedTotal;
    return {
      date: item.date,
      value: dailyTotal,
    };
  });

  return aggregated;
}
