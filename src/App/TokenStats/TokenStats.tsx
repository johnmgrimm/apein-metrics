import React from 'react';
import { Chain, Stats } from '../../helpers/getStats';

type Props = {
  chain: Chain;
  data?: Stats;
  loading: boolean;
};
export function TokenStats({ chain, data, loading }: Props) {
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
          <div className="metric">
            <a
              href="https://www.coingecko.com/en/coins/ape-in"
              target="_blank"
              rel="noreferrer"
              className="link-block-3 w-inline-block"
            >
              ${loading || !data ? '-.--' : data.price.toFixed(2)}
            </a>
          </div>
          <div className="metric-label-sm">price</div>
        </div>
        <div
          id="w-node-_4453e7ca-408d-1980-9e95-24a861d3705c-61d3705c"
          className="metric-block"
        >
          <div className="metric">
            <a
              href="https://etherscan.io/token/0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698"
              target="_blank"
              rel="noreferrer"
              className="link-block-3 w-inline-block"
            >
              {loading || !data
                ? '---,---'
                : Math.round(data.totalSupply).toLocaleString('en-US')}
            </a>
          </div>
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
            {loading || !data
              ? '---,---'
              : Math.round(data.marketCap).toLocaleString('en-US')}
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
            {loading || !data ? '---,---' : data.burned.toLocaleString('en-US')}
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
