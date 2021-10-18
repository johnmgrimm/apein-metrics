import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { apiFetch, CovalentApiResponse } from './apiFetch';
import { covalentApiKey } from './consts';
dayjs.extend(utc);

function getMatch(date: string, direction: 'IN' | 'OUT') {
  return encodeURI(
    JSON.stringify({
      block_signed_at: { $gt: date },
      'transfers.0.transfer_type': direction,
    }),
  );
}

const mintGroup = encodeURI(
  JSON.stringify({
    _id: {
      year: { $year: 'block_signed_at' },
      month: { $month: 'block_signed_at' },
      day: { $dayOfMonth: 'block_signed_at' },
    },
    dailySubtotal1: { $sum: 'transfers.0.delta' },
    dailySubtotal2: { $sum: 'transfers.1.delta' },
  }),
);

export async function getLatestMintTransfersAggregated(
  chainId: number,
  contractId: string,
  address: string,
  numberOfDaysBack: number,
) {
  const now = new Date();
  now.setDate(now.getDate() - numberOfDaysBack);
  const dateString = now.toISOString().split('T')[0];
  const match = getMatch(dateString, 'OUT');
  const response = await apiFetch<CovalentApiResponse>(
    `https://api.covalenthq.com/v1/${chainId}/address/${address}/transfers_v2/?contract-address=${contractId}&key=${covalentApiKey}&match=${match}&group=${mintGroup}`,
  );

  return response.data.data.items;
}

export async function getLatestMintTransfers(
  chainId: number,
  contractId: string,
  address: string,
  numberOfDaysBack: number,
) {
  const now = new Date();
  now.setDate(now.getDate() - numberOfDaysBack);
  const dateString = now.toISOString().split('T')[0];
  const match = getMatch(dateString, 'OUT');
  const response = await apiFetch<CovalentApiResponse>(
    `https://api.covalenthq.com/v1/${chainId}/address/${address}/transfers_v2/?contract-address=${contractId}&key=${covalentApiKey}&match=${match}`,
  );

  const aggregated = response.data.data.items
    .map((item) => {
      return {
        date: dayjs.utc(item.block_signed_at),
        dailySubtotal1: item.transfers[0]
          ? parseInt(item.transfers[0].delta)
          : 0,
        dailySubtotal2: item.transfers[1]
          ? parseInt(item.transfers[1].delta)
          : 0,
      };
    })
    .reduce((all, item) => {
      const dateDayString = item.date.format('YYYY-MM-DD');
      if (all[dateDayString]) {
        // existing item
        all[dateDayString].dailySubtotal1 += item.dailySubtotal1;
        all[dateDayString].dailySubtotal2 += item.dailySubtotal2;
      } else {
        // new item
        all[dateDayString] = {
          id: {
            day: item.date.date(),
            month: item.date.get('month') + 1,
            year: item.date.get('year'),
          },
          dailySubtotal1: item.dailySubtotal1,
          dailySubtotal2: item.dailySubtotal2,
        };
      }
      return all;
    }, {} as any);

  return Object.values(aggregated) as any[];
}
