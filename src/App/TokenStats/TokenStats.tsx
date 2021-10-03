import React, { useEffect } from 'react';
import { useAsyncFn } from 'react-use';
import { apiFetch } from '../../helpers/apiFetch';
import { getTokenStatsFromCoinGeckoApi } from '../../helpers/getTokenStatsFromCoinGeckoApi';
// import styles from './TokenStats.module.scss';

type Props = {
  chain: string;
  contract: string;
};
export function TokenStats({ chain, contract }: Props) {
  const [state, doFetch] = useAsyncFn(async () => {
    const response = await apiFetch(
      `https://api.coingecko.com/api/v3/coins/${chain}/contract/${contract}`,
    );
    console.log(response);
    return getTokenStatsFromCoinGeckoApi(response.data);
  });

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  return (
    <div className="w-layout-grid grid-13">
      <h4
        id="w-node-_8f0eaf22-a83d-f6fc-a7e8-620735c64873-68d99d19"
        className="metric-subheading"
      >
        {chain}
      </h4>
      <div className="w-layout-grid grid---5-up">
        <div
          id="w-node-_4453e7ca-408d-1980-9e95-24a861d3705c-61d3705c"
          className="metric-block"
        >
          <a
            href="https://www.coingecko.com/en/coins/ape-in"
            target="_blank"
            rel="noreferrer"
            className="link-block-3 w-inline-block"
          >
            <div className="metric">
              $
              {state.loading || !state.value
                ? '-.--'
                : state.value.price.toFixed(2)}
            </div>
          </a>
          <div className="metric-label-sm">price</div>
        </div>
        <div
          id="w-node-_4453e7ca-408d-1980-9e95-24a861d3705c-61d3705c"
          className="metric-block"
        >
          <a
            href="https://etherscan.io/token/0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698"
            target="_blank"
            rel="noreferrer"
            className="link-block-3 w-inline-block"
          >
            <div className="metric">
              {state.loading || !state.value
                ? '---,---'
                : state.value.supply.toLocaleString('en-US')}
            </div>
          </a>
          <div className="metric-label-sm">Supply</div>
        </div>
        <div
          id="w-node-_6e457b3f-db38-f798-7bd7-9c6797e6e67b-97e6e67b"
          className="metric-block"
        >
          <div
            id="w-node-_6e457b3f-db38-f798-7bd7-9c6797e6e67c-97e6e67b"
            className="metric"
          >
            $
            {state.loading || !state.value
              ? '---,---'
              : state.value.marketCap.toLocaleString('en-US')}
          </div>
          <div
            id="w-node-_6e457b3f-db38-f798-7bd7-9c6797e6e67e-97e6e67b"
            className="metric-label-sm"
          >
            Market cap
          </div>
        </div>
        <div
          id="w-node-_6e457b3f-db38-f798-7bd7-9c6797e6e67b-97e6e67b"
          className="metric-block"
        >
          <div
            id="w-node-_6e457b3f-db38-f798-7bd7-9c6797e6e67c-97e6e67b"
            className="metric"
          >
            30,200
          </div>
          <div
            id="w-node-_6e457b3f-db38-f798-7bd7-9c6797e6e67e-97e6e67b"
            className="metric-label-sm"
          >
            burned
          </div>
        </div>
      </div>
    </div>
  );
}
