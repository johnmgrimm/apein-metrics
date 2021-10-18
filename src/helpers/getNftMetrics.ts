import { apiFetch, CovalentApiResponse } from './apiFetch';
import {
  avalancheChainId,
  contractIdNftAvalanche3,
  contractIdNftEthereum1,
  contractIdNftEthereum2,
  contractIdNftEthereum3,
  contractIdNftEthereumO,
  covalentApiKey,
  ethereumChainId,
} from './consts';

export async function getNftMetrics() {
  const [nftData1, nftData2, nftData3, nftDataO, avaApe1] = await Promise.all([
    apiFetch<CovalentApiResponse>(
      `https://api.covalenthq.com/v1/${ethereumChainId}/tokens/${contractIdNftEthereum1}/nft_token_ids/?&key=${covalentApiKey}&page-size=10`,
    ),
    apiFetch<CovalentApiResponse>(
      `https://api.covalenthq.com/v1/${ethereumChainId}/tokens/${contractIdNftEthereum2}/nft_token_ids/?&key=${covalentApiKey}&page-size=10`,
    ),
    apiFetch<CovalentApiResponse>(
      `https://api.covalenthq.com/v1/${ethereumChainId}/tokens/${contractIdNftEthereum3}/nft_token_ids/?&key=${covalentApiKey}&page-size=10`,
    ),
    apiFetch<CovalentApiResponse>(
      `https://api.covalenthq.com/v1/${ethereumChainId}/tokens/${contractIdNftEthereumO}/nft_token_ids/?&key=${covalentApiKey}&page-size=10`,
    ),
    apiFetch<CovalentApiResponse>(
      `https://api.covalenthq.com/v1/${avalancheChainId}/tokens/${contractIdNftAvalanche3}/nft_token_ids/?&key=${covalentApiKey}&page-size=10`,
    ),
  ]);

  const result = {
    eth_ape_1: parseInt(nftData1.data.data.pagination.total_count),
    eth_ape_2: parseInt(nftData2.data.data.pagination.total_count),
    eth_ape_3: parseInt(nftData3.data.data.pagination.total_count),
    eth_ape_o: parseInt(nftDataO.data.data.pagination.total_count),
    ava_ape_3: parseInt(avaApe1.data.data.pagination.total_count),
  };
  return result;
}
