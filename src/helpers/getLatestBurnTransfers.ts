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

const burnGroup = encodeURI(
  JSON.stringify({
    _id: {
      year: { $year: 'block_signed_at' },
      month: { $month: 'block_signed_at' },
      day: { $dayOfMonth: 'block_signed_at' },
    },
    dailySubtotal: { $sum: 'transfers.0.delta' },
  }),
);

export async function getLatestBurnTransfersAggregated(
  chainId: number,
  contractId: string,
  address: string,
  numberOfDaysBack: number,
) {
  const now = new Date();
  now.setDate(now.getDate() - numberOfDaysBack);
  const dateString = now.toISOString().split('T')[0];
  const match = getMatch(dateString, 'IN');
  const response = await apiFetch<CovalentApiResponse>(
    `https://api.covalenthq.com/v1/${chainId}/address/${address}/transfers_v2/?contract-address=${contractId}&key=${covalentApiKey}&match=${match}&group=${burnGroup}`,
  );

  return response.data.data.items;
}

export async function getLatestBurnTransfers(
  chainId: number,
  contractId: string,
  address: string,
  numberOfDaysBack: number,
) {
  const now = new Date();
  now.setDate(now.getDate() - numberOfDaysBack);
  const dateString = now.toISOString().split('T')[0];
  const match = getMatch(dateString, 'IN');
  const response = await apiFetch<CovalentApiResponse>(
    `https://api.covalenthq.com/v1/${chainId}/address/${address}/transfers_v2/?contract-address=${contractId}&key=${covalentApiKey}&match=${match}`,
  );

  const aggregated = response.data.data.items
    .map((item) => {
      return {
        date: dayjs.utc(item.block_signed_at),
        dailySubtotal: parseInt(item.transfers[0].delta),
      };
    })
    .reduce((all, item) => {
      const dateDayString = item.date.format('YYYY-MM-DD');
      if (all[dateDayString]) {
        // existing item
        all[dateDayString].dailySubtotal += item.dailySubtotal;
      } else {
        // new item
        all[dateDayString] = {
          id: {
            day: item.date.date(),
            month: item.date.get('month') + 1,
            year: item.date.get('year'),
          },
          dailySubtotal: item.dailySubtotal,
        };
      }
      return all;
    }, {} as any);

  return Object.values(aggregated) as any[];
}
