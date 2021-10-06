import { apiFetch, CovalentApiResponse } from './apiFetch';
import { covalentApiKey } from './consts';

const blackHoleAddress = '0x0000000000000000000000000000000000000000';

function getTransfersTotal(transfers: { delta: string }[]): number {
  return transfers.reduce(
    (sum: number, transfer: { delta: string }) =>
      sum + parseInt(transfer.delta) / 1e18,
    0,
  );
}

export async function getTotalBurned(chainId: number, contractId: string) {
  const response = await apiFetch<CovalentApiResponse>(
    `https://api.covalenthq.com/v1/${chainId}/address/${blackHoleAddress}/transfers_v2/?contract-address=${contractId}&key=${covalentApiKey}&page-size=10&match={"transfers.0.transfer_type":"IN"}`,
  );
  const burnedTotal = response.data.data.items.reduce(
    (sum: number, item: { transfers: { delta: string }[] }) =>
      sum + getTransfersTotal(item.transfers),
    0,
  );

  return burnedTotal;
}
