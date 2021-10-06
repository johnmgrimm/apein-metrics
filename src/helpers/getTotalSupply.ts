import { apiFetch, CovalentApiResponse } from './apiFetch';
import { covalentApiKey } from './consts';

// Returns token total supply (total_supply = minted - burned)
export async function getTotalSupply(chainId: number, contractId: string) {
  const response = await apiFetch<CovalentApiResponse>(
    `https://api.covalenthq.com/v1/${chainId}/tokens/${contractId}/token_holders/?page-size=10&key=${covalentApiKey}`,
  );
  const holdersList = response.data.data.items;

  if (holdersList.length < 1) {
    throw Error('No token holders found');
  }

  // here is an assumption that there is at least one token holder
  const totalSupply = parseInt(holdersList[0].total_supply) / 1e18;

  return totalSupply;
}
