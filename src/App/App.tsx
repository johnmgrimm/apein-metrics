import React, { useEffect } from 'react';
import { useAsyncFn } from 'react-use';
import logo from '../assets/logo.svg';
import { getAvalancheStats } from '../helpers/getAvalancheStats';
import { getEthereumStats } from '../helpers/getEthereumStats';
import './App.css';
import { TokenStats } from './TokenStats/TokenStats';

export function App() {
  const [avaData, fetchAva] = useAsyncFn(async () => {
    const result = await getAvalancheStats();
    return result;
  });
  const [ethData, fetchEth] = useAsyncFn(async () => {
    const result = await getEthereumStats();
    return result;
  });

  useEffect(() => {
    fetchAva();
    fetchEth();
  }, [fetchAva, fetchEth]);

  return (
    <div className="App">
      <div className="section-7 wf-section">
        <div className="w-container">
          <div className="div-block-11">
            <a href="https://apeisland.webflow.io/" className="w-inline-block">
              <img
                src={logo}
                loading="lazy"
                width="233"
                alt=""
                className="image-4"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="section-6 wf-section">
        <h1 className="innerpagetitle">Ape in metrics</h1>
        <div className="text-block-20">
          Stats are not realtime&nbsp;yet!&nbsp;Status are updated twice every
          24 hours.
          <a
            href="https://www.coingecko.com/en/coins/ape-in"
            rel="noreferrer"
            target="_blank"
          >
            Check CoinGecko
          </a>
          for realtime pricing.
        </div>
        <div className="container-6 w-container">
          <div className="div-block-14">
            <h3 className="heading-3-copy">Token Stats</h3>
            <div className="w-layout-grid grid-12">
              <TokenStats
                chain="ethereum"
                data={ethData.value}
                loading={ethData.loading}
              />
              <TokenStats
                chain="avalanche"
                data={avaData.value}
                loading={avaData.loading}
              />
            </div>
            <div className="w-layout-grid grid-8">
              <div
                id="w-node-_92fdbe46-5fb6-de1b-0e1e-cd2a79e492c4-68d99d19"
                className="metric-label"
              >
                Price history
              </div>
              <div
                id="w-node-_92fdbe46-5fb6-de1b-0e1e-cd2a79e492c2-68d99d19"
                className="metric-chart"
              >
                <div className="text-block-18">
                  2 series line chart to show APEIN price over time for Ethereum
                  and Avalanche
                </div>
              </div>
              <div
                id="w-node-_92fdbe46-5fb6-de1b-0e1e-cd2a79e492c6-68d99d19"
                className="metric-chart-label"
              >
                Inflation over time
              </div>
              <div
                id="w-node-_6d9d7ab5-e39f-1d6f-cf8b-be60c9eedc89-68d99d19"
                className="metric-chart"
              >
                <div className="text-block-18">
                  2 series line chart to show aggregate APEIN&nbsp;inflation
                  (mint - burn)&nbsp;for Ethereum and Avalanche
                </div>
              </div>
            </div>
          </div>
          <div className="div-block-15">
            <h3 className="heading-3">Population&nbsp;Stats</h3>
            <div className="w-layout-grid grid-11">
              <div className="w-layout-grid grid-10">
                <div
                  id="w-node-edf75fed-39a1-24d3-7726-4d932d86b733-68d99d19"
                  className="metric-label"
                >
                  Season
                </div>
                <div
                  id="w-node-edf75fed-39a1-24d3-7726-4d932d86b735-68d99d19"
                  className="metric-label"
                >
                  Total
                </div>
                <div
                  id="w-node-_2c169aa6-5707-8d43-47ea-0e83f877ea7c-68d99d19"
                  className="metric-label"
                >
                  Ethereum
                </div>
                <div
                  id="w-node-_8f7464e9-5331-1239-bc89-7eb1d0d8abb7-68d99d19"
                  className="metric-label"
                >
                  avalanche
                </div>
              </div>
              <div className="w-layout-grid grid-10">
                <div
                  id="w-node-_02998a9b-acdd-933d-40d7-84692e25c654-68d99d19"
                  className="metric-text"
                >
                  season 1
                </div>
                <div
                  id="w-node-_02998a9b-acdd-933d-40d7-84692e25c658-68d99d19"
                  className="metric-text"
                >
                  757
                </div>
                <a
                  href="https://etherscan.io/token/0x09b9905a472aa1d387c9c1d8d956aff5463837e8"
                  target="_blank"
                  rel="noreferrer"
                  className="w-inline-block"
                >
                  <div className="metric-text">757</div>
                </a>
                <div
                  id="w-node-_02998a9b-acdd-933d-40d7-84692e25c65a-68d99d19"
                  className="metric-text"
                >
                  --
                </div>
              </div>
              <div className="w-layout-grid grid-10">
                <div
                  id="w-node-_074b1195-b1e0-ed66-e2fe-b5c9544fee87-68d99d19"
                  className="metric-text"
                >
                  season 2
                </div>
                <div
                  id="w-node-_074b1195-b1e0-ed66-e2fe-b5c9544fee89-68d99d19"
                  className="metric-text"
                >
                  1122
                </div>
                <a
                  href="https://etherscan.io/token/0x5033973ea65c66a8745acdb4f8ecb326365de2be"
                  target="_blank"
                  rel="noreferrer"
                  className="w-inline-block"
                >
                  <div className="metric-text">1122</div>
                </a>
                <div
                  id="w-node-_074b1195-b1e0-ed66-e2fe-b5c9544fee8d-68d99d19"
                  className="metric-text"
                >
                  --
                </div>
              </div>
              <div className="w-layout-grid grid-10">
                <div
                  id="w-node-_502d6ad2-4129-2225-be6c-761e27cbeffd-68d99d19"
                  className="metric-text"
                >
                  season 3
                </div>
                <div
                  id="w-node-_502d6ad2-4129-2225-be6c-761e27cbefff-68d99d19"
                  className="metric-text"
                >
                  --
                </div>
                <div
                  id="w-node-_502d6ad2-4129-2225-be6c-761e27cbf001-68d99d19"
                  className="metric-text"
                >
                  --
                </div>
                <div
                  id="w-node-_502d6ad2-4129-2225-be6c-761e27cbf003-68d99d19"
                  className="metric-text"
                >
                  --
                </div>
              </div>
              <div className="w-layout-grid grid-10">
                <div
                  id="w-node-_3baf22b9-674f-1d1a-af84-0fff8135f6f9-68d99d19"
                  className="metric-text"
                >
                  Offspring
                </div>
                <div
                  id="w-node-_3baf22b9-674f-1d1a-af84-0fff8135f6fb-68d99d19"
                  className="metric-text"
                >
                  49
                </div>
                <a
                  href="https://etherscan.io/token/0xcdece16fb4ef3c171e163b7c72023fff4d3e2bd9"
                  target="_blank"
                  rel="noreferrer"
                  className="w-inline-block"
                >
                  <div className="metric-text">49</div>
                </a>
                <div
                  id="w-node-_3baf22b9-674f-1d1a-af84-0fff8135f6ff-68d99d19"
                  className="metric-text"
                >
                  --
                </div>
              </div>
            </div>
            <h3 className="heading-3">Contracts</h3>
            <div className="w-layout-grid grid-11">
              <a
                href="https://etherscan.io/token/0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698"
                target="_blank"
                rel="noreferrer"
                className="link-block-4 w-inline-block"
              >
                <div className="metric-text">APEIN&nbsp;- Ethereum</div>
              </a>
              <a
                href="https://info.pangolin.exchange/#/token/0x938fe3788222a74924e062120e7bfac829c719fb"
                target="_blank"
                rel="noreferrer"
                className="link-block-5 w-inline-block"
              >
                <div className="metric-text">APEIN&nbsp;- Avalanche</div>
              </a>
              <a
                href="https://etherscan.io/token/0x09b9905a472aa1d387c9c1d8d956aff5463837e8"
                target="_blank"
                rel="noreferrer"
                className="link-block-6 w-inline-block"
              >
                <div className="metric-text">Season 1 Apes</div>
              </a>
              <a
                href="https://etherscan.io/token/0x5033973ea65c66a8745acdb4f8ecb326365de2be"
                target="_blank"
                rel="noreferrer"
                className="link-block-7 w-inline-block"
              >
                <div className="metric-text">Season 2 Apes</div>
              </a>
              <a
                href="https://etherscan.io/token/0xcdece16fb4ef3c171e163b7c72023fff4d3e2bd9"
                target="_blank"
                rel="noreferrer"
                className="link-block-8 w-inline-block"
              >
                <div className="metric-text">Offspring Apes</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
