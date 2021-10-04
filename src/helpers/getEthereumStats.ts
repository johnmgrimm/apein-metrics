import { fetchGraphQL } from './fetchGraphQL';
import { apiFetch } from './apiFetch';

const sushiQuery = `
query {
  token(id: "0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698") {
    id
    symbol
    name
    totalSupply
    dayData {
      date
      priceUSD
    }
  }
}`;

const apikey = process.env.REACT_APP_COVALENT_API_KEY;

export async function getEthereumStats() {
  const ethData = await apiFetch(
    `https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698`,
  );
  // source: https://thegraph.com/legacy-explorer/subgraph/sushiswap/exchange
  const sushiData = await fetchGraphQL(
    'https://api.thegraph.com/subgraphs/name/sushiswap/exchange',
    sushiQuery,
  );

  const priceHistory = sushiData.data.token.dayData;
  const price = parseFloat(priceHistory[priceHistory.length - 1].priceUSD);
  // There is probably some other way of calculating the totalsupply
  // const totalSupply = sushiData.data.token.totalSupply;
  const supply = parseInt(ethData.result) / 1e18;

  // TBD
  const burned = 30200;

  const marketCap = supply * price;
  return {
    price,
    supply,
    marketCap,
    burned,
  };
}

// const [state, doFetch] = useAsyncFn(async () => {
//   const totalSupply = await apiFetch(
//     `https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698`,
//   );
//   console.log(totalSupply.data);
//   // {"status":"1","message":"OK-Missing/Invalid API Key, rate limit of 1/5sec applied","result":"220897848000000000000000"}
//   // return getTokenStatsFromCoinGeckoApi(response.data);
//  // source: https://thegraph.com/legacy-explorer/subgraph/sushiswap/exchange
//   const response = await fetchGraphQL(
//     'https://api.thegraph.com/subgraphs/name/sushiswap/exchange',
//     sushiQuery,
//   );
//   console.log(response.data);
//     // {"data":{"token":{"dayData":[{"date":1628985600,"priceUSD":"14.75296046357589169756107956183043"},{"date":1629072000,"priceUSD":"13.64942801144816875015932881131023"},{"date":1629158400,"priceUSD":"10.45125099889220422084691907827478"},{"date":1629244800,"priceUSD":"8.693754768107446631764463505356215"},{"date":1629331200,"priceUSD":"8.763552962729168737717030585179521"},{"date":1629417600,"priceUSD":"8.974948258823165018694627392661971"},{"date":1629504000,"priceUSD":"9.330807803174492797926323153243589"},{"date":1629590400,"priceUSD":"10.56509082294702610454297236015718"},{"date":1629676800,"priceUSD":"10.90118280020933956289238915317133"},{"date":1629763200,"priceUSD":"7.917362380302480566934039080729655"},{"date":1629849600,"priceUSD":"7.697757176971724648621694734227027"},{"date":1629936000,"priceUSD":"6.613494234884650117790026887487018"},{"date":1630022400,"priceUSD":"7.908728985834196316942408350637716"},{"date":1630108800,"priceUSD":"7.191577896131991373327271497366488"},{"date":1630195200,"priceUSD":"6.555765062492242316284930806972418"},{"date":1630281600,"priceUSD":"6.471791074800587229565186377347215"},{"date":1630368000,"priceUSD":"6.212608051886613098091864812818192"},{"date":1630454400,"priceUSD":"5.989629682250010007774149383107604"},{"date":1630540800,"priceUSD":"5.817818704904465118317594002040932"},{"date":1630627200,"priceUSD":"4.676534691239976291717169052005633"},{"date":1630713600,"priceUSD":"4.675809312007223928208884262062024"},{"date":1630800000,"priceUSD":"4.286220000704921713137722747810659"},{"date":1630886400,"priceUSD":"7.054003736747349241682133596497457"},{"date":1630972800,"priceUSD":"4.798789070509623766538555897601939"},{"date":1631059200,"priceUSD":"3.630125408857249135086619016255422"},{"date":1631145600,"priceUSD":"3.618832026802626529793710163146365"},{"date":1631232000,"priceUSD":"5.728260846810965285863769336956008"},{"date":1631318400,"priceUSD":"5.655682875743070215293853533348466"},{"date":1631404800,"priceUSD":"5.551538129782699027895874041861391"},{"date":1631491200,"priceUSD":"5.930769797958830765860063236218407"},{"date":1631577600,"priceUSD":"8.455530078520042990375634123825108"},{"date":1631664000,"priceUSD":"8.796934141040310415788279311589982"},{"date":1631750400,"priceUSD":"7.294889028797549542342450952790318"},{"date":1631836800,"priceUSD":"6.629679192908231881861225107821943"},{"date":1631923200,"priceUSD":"7.037855912778141280643748147889751"},{"date":1632009600,"priceUSD":"6.388468685719833190200332168447706"},{"date":1632096000,"priceUSD":"5.76086163231350357895276424829381"},{"date":1632182400,"priceUSD":"5.485008421707442671723797470258043"},{"date":1632268800,"priceUSD":"5.646717159673784752246158295244002"},{"date":1632355200,"priceUSD":"5.796504003469623824300759861135116"},{"date":1632441600,"priceUSD":"5.084834869053935374683435574712906"},{"date":1632528000,"priceUSD":"4.740832940851041850090701058459752"},{"date":1632614400,"priceUSD":"4.963651693387387086069336058353166"},{"date":1632700800,"priceUSD":"4.515799252879671888152484235869542"},{"date":1632787200,"priceUSD":"4.059363443494256067533854885953238"},{"date":1632873600,"priceUSD":"3.624644447131530047690991873784088"},{"date":1632960000,"priceUSD":"5.233833417897836236341204158220608"},{"date":1633046400,"priceUSD":"5.478826448346548325211601741446131"},{"date":1633132800,"priceUSD":"5.534199927328206181699494168661019"},{"date":1633219200,"priceUSD":"5.555213557797880516097675304941859"}],"id":"0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698","name":"Ape In","symbol":"APEIN","totalSupply":"17720"}}}
//   const burned = await apiFetch(
//     `https://api.covalenthq.com/v1/43114/address/0xC0Bb9Ee4D0691d3733B3fcD01728e571FE9e8B27/balances_v2/?&key=${apikey}`,
//   );
//   console.log(burned.data);
//  // {"data":{"address":"0xc0bb9ee4d0691d3733b3fcd01728e571fe9e8b27","updated_at":"2021-10-03T20:33:01.344457858Z","next_update_at":"2021-10-03T20:38:01.344458298Z","quote_currency":"USD","chain_id":43114,"items":[{"contract_decimals":18,"contract_name":"Ape In","contract_ticker_symbol":"APEIN","contract_address":"0x938fe3788222a74924e062120e7bfac829c719fb","supports_erc":["erc20"],"logo_url":"https://logos.covalenthq.com/tokens/43114/0x938fe3788222a74924e062120e7bfac829c719fb.png","last_transferred_at":"2021-10-03T18:45:20Z","type":"cryptocurrency","balance":"186000000000000000000","balance_24h":null,"quote_rate":103.921265,"quote_rate_24h":97.49046,"quote":19329.355,"quote_24h":null,"nft_data":null},{"contract_decimals":18,"contract_name":"Avalanche Coin","contract_ticker_symbol":"AVAX","contract_address":"0x9debca6ea3af87bf422cea9ac955618ceb56efb4","supports_erc":null,"logo_url":"https://logos.covalenthq.com/tokens/43114/0x9debca6ea3af87bf422cea9ac955618ceb56efb4.png","last_transferred_at":null,"type":"cryptocurrency","balance":"6848873338392889533","balance_24h":null,"quote_rate":70.930145,"quote_rate_24h":72.71661,"quote":485.7916,"quote_24h":null,"nft_data":null},{"contract_decimals":18,"contract_name":"Wrapped Ether","contract_ticker_symbol":"WETH.e","contract_address":"0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab","supports_erc":["erc20"],"logo_url":"https://logos.covalenthq.com/tokens/43114/0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab.png","last_transferred_at":"2021-09-30T18:15:41Z","type":"dust","balance":"0","balance_24h":null,"quote_rate":3325.6997,"quote_rate_24h":3238.861,"quote":0.0,"quote_24h":null,"nft_data":null}],"pagination":null},"error":false,"error_message":null,"error_code":null}
// });

// Avalanche
//   const [state, doFetch] = useAsyncFn(async () => {
//     const pangolin = await fetchGraphQL(
//       'https://api.thegraph.com/subgraphs/name/dasconnor/pangolin-dex',
//       pangolinQuery,
//     );
//     console.log(pangolin.data);
//     // {"data":{"token":{"id":"0x938fe3788222a74924e062120e7bfac829c719fb","name":"Ape In","symbol":"APEIN","tokenDayData":[{"date":1631577600,"priceUSD":"63.31661843184992402693263676808807"},{"date":1631664000,"priceUSD":"67.61851737706873985878758564982193"},{"date":1631750400,"priceUSD":"75.15545769669092207142141422842135"},{"date":1631836800,"priceUSD":"81.39411833119283118117410458402591"},{"date":1631923200,"priceUSD":"84.08873809545557871703728003564161"},{"date":1632009600,"priceUSD":"83.04706768375987742050527943661506"},{"date":1632096000,"priceUSD":"84.96062240480637487042780181162426"},{"date":1632182400,"priceUSD":"87.70077192564928001615135875448062"},{"date":1632268800,"priceUSD":"101.9969402709724511655781689213311"},{"date":1632355200,"priceUSD":"108.7556750158184179634911560222825"},{"date":1632441600,"priceUSD":"105.2952366475148259170997710946183"},{"date":1632528000,"priceUSD":"99.14112475267501984870893831183244"},{"date":1632614400,"priceUSD":"97.05312241933835298487469976823135"},{"date":1632700800,"priceUSD":"94.6237011094274812424520101914443"},{"date":1632787200,"priceUSD":"89.65996290336779095046266416940079"},{"date":1632873600,"priceUSD":"90.02426620234541099723903053035517"},{"date":1632960000,"priceUSD":"94.80633871734663200269860575560014"},{"date":1633046400,"priceUSD":"96.3457559694651112728450701624268"},{"date":1633132800,"priceUSD":"101.3530276996756249559813324180895"},{"date":1633219200,"priceUSD":"123.070672567465015218077857615884"}],"totalSupply":"14208"}}}

//     const joe = await fetchGraphQL(
//       'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/exchange',
//       joeQuery,
//     );
//     console.log(joe.data);
//     // {"data":{"token":{"dayData":[{"date":1630886400,"priceUSD":"17.19690474350542080541767651883189"},{"date":1630972800,"priceUSD":"14.25627387345345912676056054111648"},{"date":1631059200,"priceUSD":"16.50110814278685677543866087045557"},{"date":1631145600,"priceUSD":"18.39728021072277018900204777658932"},{"date":1631232000,"priceUSD":"36.91719994077143940415112468318128"},{"date":1631318400,"priceUSD":"49.48949046895145346263206316938179"},{"date":1631404800,"priceUSD":"55.27780381810995092421889448118605"},{"date":1631491200,"priceUSD":"64.11231498801201024681107984505209"},{"date":1631577600,"priceUSD":"64.16714744245785420368328963861419"},{"date":1631664000,"priceUSD":"67.33817809275442502377444795645695"},{"date":1631750400,"priceUSD":"73.28105550632200900873571490037242"},{"date":1631836800,"priceUSD":"81.09648037107117413486224911272783"},{"date":1631923200,"priceUSD":"82.47809080009617884167626066367805"},{"date":1632009600,"priceUSD":"82.55488136420571381097637693528566"},{"date":1632096000,"priceUSD":"84.69212897479749983428232637615806"},{"date":1632182400,"priceUSD":"82.66661009480181983550594546382153"},{"date":1632268800,"priceUSD":"104.5229721525529917215065605179273"},{"date":1632355200,"priceUSD":"110.2233759038891633195865874670481"},{"date":1632441600,"priceUSD":"107.6818980940238700949494977598472"},{"date":1632528000,"priceUSD":"100.3146954030560288769645950336185"},{"date":1632614400,"priceUSD":"97.29891890298266658091575268031047"},{"date":1632700800,"priceUSD":"94.27051468313436247972106092396355"},{"date":1632787200,"priceUSD":"89.74526029085322145122973732771585"},{"date":1632873600,"priceUSD":"90.51157895183394208482925531923874"},{"date":1632960000,"priceUSD":"94.78328365734403496732225110714906"},{"date":1633046400,"priceUSD":"97.4133048193121478997025795491457"},{"date":1633132800,"priceUSD":"100.1644322519081026694090941638459"},{"date":1633219200,"priceUSD":"123.477415356524361106186271406922"}],"id":"0x938fe3788222a74924e062120e7bfac829c719fb","name":"Ape In","symbol":"APEIN","totalSupply":"16440"}}}

//     // source: https://thegraph.com/legacy-explorer/subgraph/dynamic-amm/dmm-exchange-avax
//     const ddm = await fetchGraphQL(
//       'https://api.thegraph.com/subgraphs/name/dynamic-amm/dmm-exchange-avax',
//       ddmQuery,
//     );
//     console.log(ddm.data);
//     // TODO find endpoint in the graph and test it locally https://docs.dmm.exchange/reference/subgraph-API/overview - maybe just test this code as it is right now
//   });

//   useEffect(() => {
//     doFetch();
//   }, [doFetch]);

//   return <div>Loading</div>;
// }
