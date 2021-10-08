import { apiFetch, CovalentApiResponse } from './apiFetch';
import { covalentApiKey } from './consts';

function getMatch(date: string, direction: 'IN' | 'OUT') {
  return JSON.stringify({
    block_signed_at: { $gt: date },
    'transfers.0.transfer_type': direction,
  });
}
const burnGroup = JSON.stringify({
  _id: {
    year: { $year: 'block_signed_at' },
    month: { $month: 'block_signed_at' },
    day: { $dayOfMonth: 'block_signed_at' },
  },
  dailySubtotal: { $sum: 'transfers.0.delta' },
});

export async function getLatestBurnTransfers(
  chainId: number,
  contractId: string,
  address: string,
  numberOfDaysBack: number,
) {
  const now = new Date();
  now.setDate(now.getDate() - numberOfDaysBack);
  const dateString = now.toISOString().split('T')[0];
  console.log(dateString);
  const match = getMatch(dateString, 'IN');
  const response = await apiFetch<CovalentApiResponse>(
    `https://api.covalenthq.com/v1/${chainId}/address/${address}/transfers_v2/?contract-address=${contractId}&key=${covalentApiKey}&match=${match}&group=${burnGroup}`,
  );

  return response.data.data.items;
}

const mintGroup = JSON.stringify({
  _id: {
    year: { $year: 'block_signed_at' },
    month: { $month: 'block_signed_at' },
    day: { $dayOfMonth: 'block_signed_at' },
  },
  dailySubtotal1: { $sum: 'transfers.0.delta' },
  dailySubtotal2: { $sum: 'transfers.1.delta' },
});
export async function getLatestMintTransfers(
  chainId: number,
  contractId: string,
  address: string,
  numberOfDaysBack: number,
) {
  const now = new Date();
  now.setDate(now.getDate() - numberOfDaysBack);
  const dateString = now.toISOString().split('T')[0];
  console.log(dateString);
  const match = getMatch(dateString, 'OUT');
  const response = await apiFetch<CovalentApiResponse>(
    `https://api.covalenthq.com/v1/${chainId}/address/${address}/transfers_v2/?contract-address=${contractId}&key=${covalentApiKey}&match=${match}&group=${mintGroup}`,
  );

  return response.data.data.items;
}
