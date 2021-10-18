# Ape In Metrics Dashboard

The Ape In metrics dashboard provides and at-a-glance view of the Ape Island metaverse tokens. The dashboard displays a variety of metrics that help users understand the state of the Ape Island tokeneconomy.

View the [working mockup](https://apeisland.webflow.io/ape-in-dashboard-mockup) of the dashboard.

## How to build production release

0. Set your Covalent API key in `.env` file, you can get it for free after signup on https://www.covalenthq.com/platform/#/auth/register/
1. Adjust "homepage" in `./package.json` file.
2. Execute `yarn build`.

3. Upload content of the `./build` directory to your server. Files on the server should be accessible using the URL specified as "homepage" in the `./package.json` file (in the 1. step)

OR

Use Github Pages and Github Actions defined in `./github/workflows/pipeline.yml` file.
Then you will also have to adjust "homepage" address inside the `./package.json` file
but deployments should be automatic whenever you push new changes to the repo.

## Dev Notes

- The prices for tokens should be obtained from exchange data where possible.
- The charts are placeholders for the historical data and will need to plugin into a JS based charting library via JSON data input.

## Metrics and Data Requirements

### Ethereum Token Metrics

| Metric Name      | Description                     | Data Source                                                                                                 |
| ---------------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Price            | Price of APEIN                  | [Sushi Analtyics](https://analytics.sushi.com/tokens/0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698)            |
| Historical Price | 30 day price history of APEIN   | [Sushi Analtyics](https://analytics.sushi.com/tokens/0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698)            |
| Supply           | Max Total Supply - To Be Burned | [Etherscan](https://etherscan.io/token/0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698)                          |
| Market Cap       | Calculated                      | Price \* Supply                                                                                             |
| To Be Burned     | Token balance pending burn      | Token balance of 0xC0Bb9Ee4D0691d3733B3fcD01728e571FE9e8B27 (filtered on To = Black Hole and Token = APEIN) |

### Avalanche Token Metrics

| Metric Name      | Description                   | Data Source                                                                                                                                                                                                                                                                                                                         |
| ---------------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Price            | Price of APEIN                | [Trader Joe Analytics](https://analytics.traderjoexyz.com/tokens/0x938fe3788222a74924e062120e7bfac829c719fb) and [Pangolin Analtyics](https://info.pangolin.exchange/#/token/0x938fe3788222a74924e062120e7bfac829c719fb) and [Kyber DMM Analytics](https://avax-info.dmm.exchange/token/0x938fe3788222a74924e062120e7bfac829c719fb) |
| Historical Price | 30 day price history of APEIN | [Trader Joe Analytics](https://analytics.traderjoexyz.com/tokens/0x938fe3788222a74924e062120e7bfac829c719fb) and [Pangolin Analtyics](https://info.pangolin.exchange/#/token/0x938fe3788222a74924e062120e7bfac829c719fb) and [Kyber DMM Analytics](https://avax-info.dmm.exchange/token/0x938fe3788222a74924e062120e7bfac829c719fb) |
| Supply           | Static value                  | 37,500                                                                                                                                                                                                                                                                                                                              |
| Market Cap       | Calculated                    | Price \* Supply                                                                                                                                                                                                                                                                                                                     |
| Burned           | TBD                           | TBD                                                                                                                                                                                                                                                                                                                                 |

### NFT Metrics

| Metric Name           | Description      | Data Source                                                                        |
| --------------------- | ---------------- | ---------------------------------------------------------------------------------- |
| Season 1 Total        | Calculated       | Season 1 (Ethereum)                                                                |
| Season 2 Total        | Calculated       | Season 2 (Ethereum)                                                                |
| Season 3 Total        | Calculated       | Season 3 (Ethereum) + Season 3 (Avalanche)                                         |
| Offspring Total       | Calculated       | Offspring (Ethereum) + Offspring (Avalanche)                                       |
| Season 1 (Ethereum)   | Total Max Supply | [Etherscan](https://etherscan.io/token/0x09b9905a472aa1d387c9c1d8d956aff5463837e8) |
| Season 2 (Ethereum)   | Total Max Supply | [Etherscan](https://etherscan.io/token/0x5033973ea65c66a8745acdb4f8ecb326365de2be) |
| Season 3 (Ethereum)   | Total Max Supply | TBD                                                                                |
| Offspring (Ethereum)  | Total Max Supply | [Etherscan](https://etherscan.io/token/0xcdece16fb4ef3c171e163b7c72023fff4d3e2bd9) |
| Season 1 (Avalanche)  | Total Max Supply | N/A                                                                                |
| Season 2 (Avalanche)  | Total Max Supply | N/A                                                                                |
| Season 3 (Avalanche)  | Total Max Supply | TBD                                                                                |
| Offspring (Avalanche) | Total Max Supply | TBD                                                                                |

## Token Addresses and Data Sources

The dashboard displays information about several ERC20 and ERC721 tokens.

### ERC20 Tokens

| Token Symbol      | Contract Address                                                                                                                                                 |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| APEIN - Ethereum  | [0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698](https://etherscan.io/token/0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698?a=0xb53d3ac5a88798cc58a9d363bc64fa28f68c7c7f) |
| APEIN - Avalanche | [0x938FE3788222A74924E062120E7BFac829c719Fb](https://cchain.explorer.avax.network/address/0x938FE3788222A74924E062120E7BFac829c719Fb/transactions)               |

### ERC721 Tokens

| Token Symbol    | Contract Address                                                                                                      |
| --------------- | --------------------------------------------------------------------------------------------------------------------- |
| APE1 - Ethereum | [0x09b9905a472aa1d387c9c1d8d956aff5463837e8](https://etherscan.io/address/0x09b9905a472aa1d387c9c1d8d956aff5463837e8) |
| APE2 - Ethereum | [0x5033973ea65c66a8745acdb4f8ecb326365de2be](https://etherscan.io/address/0x5033973ea65c66a8745acdb4f8ecb326365de2be) |
| APEO - Ethereum | [0xcdece16fb4ef3c171e163b7c72023fff4d3e2bd9](https://etherscan.io/address/0xcdece16fb4ef3c171e163b7c72023fff4d3e2bd9) |

# Questions

- favicon - Do you have any image for that purpose?
- how about the background image - Should it cover the entire page? I guess that was the intention.
- how about background color - It is yellow now, as it was in the mockup.

# API suggestions

## Ethereum

0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698

Sushiswap: https://api.thegraph.com/subgraphs/name/sushiswap/exchange

```graphql
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
}
```

```json
{
  "data": {
    "token": {
      "dayData": [
        {
          "date": 1628985600,
          "priceUSD": "14.75296046357589169756107956183043"
        },
        {
          "date": 1629072000,
          "priceUSD": "13.64942801144816875015932881131023"
        },
        {
          "date": 1629158400,
          "priceUSD": "10.45125099889220422084691907827478"
        },
        {
          "date": 1629244800,
          "priceUSD": "8.693754768107446631764463505356215"
        },
        {
          "date": 1629331200,
          "priceUSD": "8.763552962729168737717030585179521"
        },
        {
          "date": 1629417600,
          "priceUSD": "8.974948258823165018694627392661971"
        },
        {
          "date": 1629504000,
          "priceUSD": "9.330807803174492797926323153243589"
        },
        {
          "date": 1629590400,
          "priceUSD": "10.56509082294702610454297236015718"
        },
        {
          "date": 1629676800,
          "priceUSD": "10.90118280020933956289238915317133"
        },
        {
          "date": 1629763200,
          "priceUSD": "7.917362380302480566934039080729655"
        },
        {
          "date": 1629849600,
          "priceUSD": "7.697757176971724648621694734227027"
        },
        {
          "date": 1629936000,
          "priceUSD": "6.613494234884650117790026887487018"
        },
        {
          "date": 1630022400,
          "priceUSD": "7.908728985834196316942408350637716"
        },
        {
          "date": 1630108800,
          "priceUSD": "7.191577896131991373327271497366488"
        },
        {
          "date": 1630195200,
          "priceUSD": "6.555765062492242316284930806972418"
        },
        {
          "date": 1630281600,
          "priceUSD": "6.471791074800587229565186377347215"
        },
        {
          "date": 1630368000,
          "priceUSD": "6.212608051886613098091864812818192"
        },
        {
          "date": 1630454400,
          "priceUSD": "5.989629682250010007774149383107604"
        },
        {
          "date": 1630540800,
          "priceUSD": "5.817818704904465118317594002040932"
        },
        {
          "date": 1630627200,
          "priceUSD": "4.676534691239976291717169052005633"
        },
        {
          "date": 1630713600,
          "priceUSD": "4.675809312007223928208884262062024"
        },
        {
          "date": 1630800000,
          "priceUSD": "4.286220000704921713137722747810659"
        },
        {
          "date": 1630886400,
          "priceUSD": "7.054003736747349241682133596497457"
        },
        {
          "date": 1630972800,
          "priceUSD": "4.798789070509623766538555897601939"
        },
        {
          "date": 1631059200,
          "priceUSD": "3.630125408857249135086619016255422"
        },
        {
          "date": 1631145600,
          "priceUSD": "3.618832026802626529793710163146365"
        },
        {
          "date": 1631232000,
          "priceUSD": "5.728260846810965285863769336956008"
        },
        {
          "date": 1631318400,
          "priceUSD": "5.655682875743070215293853533348466"
        },
        {
          "date": 1631404800,
          "priceUSD": "5.551538129782699027895874041861391"
        },
        {
          "date": 1631491200,
          "priceUSD": "5.930769797958830765860063236218407"
        },
        {
          "date": 1631577600,
          "priceUSD": "8.455530078520042990375634123825108"
        },
        {
          "date": 1631664000,
          "priceUSD": "8.796934141040310415788279311589982"
        },
        {
          "date": 1631750400,
          "priceUSD": "7.294889028797549542342450952790318"
        },
        {
          "date": 1631836800,
          "priceUSD": "6.629679192908231881861225107821943"
        },
        {
          "date": 1631923200,
          "priceUSD": "7.037855912778141280643748147889751"
        },
        {
          "date": 1632009600,
          "priceUSD": "6.388468685719833190200332168447706"
        },
        {
          "date": 1632096000,
          "priceUSD": "5.76086163231350357895276424829381"
        },
        {
          "date": 1632182400,
          "priceUSD": "5.485008421707442671723797470258043"
        },
        {
          "date": 1632268800,
          "priceUSD": "5.646717159673784752246158295244002"
        },
        {
          "date": 1632355200,
          "priceUSD": "5.796504003469623824300759861135116"
        },
        {
          "date": 1632441600,
          "priceUSD": "5.084834869053935374683435574712906"
        },
        {
          "date": 1632528000,
          "priceUSD": "4.740832940851041850090701058459752"
        },
        {
          "date": 1632614400,
          "priceUSD": "4.963651693387387086069336058353166"
        },
        {
          "date": 1632700800,
          "priceUSD": "4.515799252879671888152484235869542"
        },
        {
          "date": 1632787200,
          "priceUSD": "4.059363443494256067533854885953238"
        },
        {
          "date": 1632873600,
          "priceUSD": "3.624644447131530047690991873784088"
        },
        {
          "date": 1632960000,
          "priceUSD": "5.233833417897836236341204158220608"
        },
        {
          "date": 1633046400,
          "priceUSD": "5.478826448346548325211601741446131"
        },
        {
          "date": 1633132800,
          "priceUSD": "5.534199927328206181699494168661019"
        },
        {
          "date": 1633219200,
          "priceUSD": "5.625082830216057474080971984603979"
        }
      ],
      "id": "0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698",
      "name": "Ape In",
      "symbol": "APEIN",
      "totalSupply": "17720"
    }
  }
}
```

That gives: **price** and **historical price** data

**Total supply** from Etherscan API https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698

**Market Cap** calculated from price and supply.

**Burned** from Etherscan API https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698&address=0xC0Bb9Ee4D0691d3733B3fcD01728e571FE9e8B27&tag=latest
or

```sh
curl -X GET "https://api.covalenthq.com/v1/43114/address/0xC0Bb9Ee4D0691d3733B3fcD01728e571FE9e8B27/balances_v2/?&key=***" \
 -H "Accept: application/json"
```

## Avalanche

0x938fe3788222a74924e062120e7bfac829c719fb

### Pangolin

https://api.thegraph.com/subgraphs/name/dasconnor/pangolin-dex

```graphql
query {
  token(id: "0x938fe3788222a74924e062120e7bfac829c719fb") {
    id
    symbol
    name
    totalSupply
    tokenDayData {
      date
      priceUSD
    }
  }
}
```

```json
{
  "data": {
    "token": {
      "id": "0x938fe3788222a74924e062120e7bfac829c719fb",
      "name": "Ape In",
      "symbol": "APEIN",
      "tokenDayData": [
        {
          "date": 1631577600,
          "priceUSD": "63.31661843184992402693263676808807"
        },
        {
          "date": 1631664000,
          "priceUSD": "67.61851737706873985878758564982193"
        },
        {
          "date": 1631750400,
          "priceUSD": "75.15545769669092207142141422842135"
        },
        {
          "date": 1631836800,
          "priceUSD": "81.39411833119283118117410458402591"
        },
        {
          "date": 1631923200,
          "priceUSD": "84.08873809545557871703728003564161"
        },
        {
          "date": 1632009600,
          "priceUSD": "83.04706768375987742050527943661506"
        },
        {
          "date": 1632096000,
          "priceUSD": "84.96062240480637487042780181162426"
        },
        {
          "date": 1632182400,
          "priceUSD": "87.70077192564928001615135875448062"
        },
        {
          "date": 1632268800,
          "priceUSD": "101.9969402709724511655781689213311"
        },
        {
          "date": 1632355200,
          "priceUSD": "108.7556750158184179634911560222825"
        },
        {
          "date": 1632441600,
          "priceUSD": "105.2952366475148259170997710946183"
        },
        {
          "date": 1632528000,
          "priceUSD": "99.14112475267501984870893831183244"
        },
        {
          "date": 1632614400,
          "priceUSD": "97.05312241933835298487469976823135"
        },
        {
          "date": 1632700800,
          "priceUSD": "94.6237011094274812424520101914443"
        },
        {
          "date": 1632787200,
          "priceUSD": "89.65996290336779095046266416940079"
        },
        {
          "date": 1632873600,
          "priceUSD": "90.02426620234541099723903053035517"
        },
        {
          "date": 1632960000,
          "priceUSD": "94.80633871734663200269860575560014"
        },
        {
          "date": 1633046400,
          "priceUSD": "96.3457559694651112728450701624268"
        },
        {
          "date": 1633132800,
          "priceUSD": "101.3530276996756249559813324180895"
        },
        {
          "date": 1633219200,
          "priceUSD": "122.4128539223370902014081355916533"
        }
      ],
      "totalSupply": "14208"
    }
  }
}
```

### DMM

https://avax-subgraph.dmm.exchange/subgraphs/name/dynamic-amm/dmm-exchange-avax/graphql

```graphql
query {
  token(id: "0x938fe3788222a74924e062120e7bfac829c719fb") {
    id
    symbol
    name
    totalSupply
    tokenDayData {
      date
      priceUSD
    }
  }
}
```

```json
{
  "data": {
    "token": {
      "id": "0x938fe3788222a74924e062120e7bfac829c719fb",
      "name": "Ape In",
      "symbol": "APEIN",
      "tokenDayData": [
        {
          "date": 1632096000,
          "priceUSD": "83.16172842518431667975816007738979"
        },
        {
          "date": 1632182400,
          "priceUSD": "83.90615456749739095962579236282512"
        },
        {
          "date": 1632268800,
          "priceUSD": "101.3764506296190029422883833884589"
        },
        {
          "date": 1632355200,
          "priceUSD": "108.0778883556988480188095137809301"
        },
        {
          "date": 1632441600,
          "priceUSD": "108.0106889132488569932235184117018"
        },
        {
          "date": 1632528000,
          "priceUSD": "100.2367645868921935954153852747319"
        },
        {
          "date": 1632614400,
          "priceUSD": "97.60641333734636545576751219927992"
        },
        {
          "date": 1632700800,
          "priceUSD": "95.13701620530653010765637032869798"
        },
        {
          "date": 1632787200,
          "priceUSD": "87.92669651844107270458491727824121"
        },
        {
          "date": 1632873600,
          "priceUSD": "90.20660942922130764987738789121531"
        },
        {
          "date": 1632960000,
          "priceUSD": "93.89271172064004490980807397896129"
        },
        {
          "date": 1633046400,
          "priceUSD": "97.73767235087227067175187379432025"
        },
        {
          "date": 1633132800,
          "priceUSD": "99.61347860245722040162754754024819"
        },
        {
          "date": 1633219200,
          "priceUSD": "123.1959874526515156506763818715515"
        }
      ],
      "totalSupply": "20568"
    }
  }
}
```

### JoeTrader

https://api.thegraph.com/subgraphs/name/traderjoe-xyz/exchange

```graphql
query {
  token(id: "0x938fe3788222a74924e062120e7bfac829c719fb") {
    id
    symbol
    name
    totalSupply
    dayData {
      date
      priceUSD
    }
  }
}
```

```json
{
  "data": {
    "token": {
      "dayData": [
        {
          "date": 1630886400,
          "priceUSD": "17.19690474350542080541767651883189"
        },
        {
          "date": 1630972800,
          "priceUSD": "14.25627387345345912676056054111648"
        },
        {
          "date": 1631059200,
          "priceUSD": "16.50110814278685677543866087045557"
        },
        {
          "date": 1631145600,
          "priceUSD": "18.39728021072277018900204777658932"
        },
        {
          "date": 1631232000,
          "priceUSD": "36.91719994077143940415112468318128"
        },
        {
          "date": 1631318400,
          "priceUSD": "49.48949046895145346263206316938179"
        },
        {
          "date": 1631404800,
          "priceUSD": "55.27780381810995092421889448118605"
        },
        {
          "date": 1631491200,
          "priceUSD": "64.11231498801201024681107984505209"
        },
        {
          "date": 1631577600,
          "priceUSD": "64.16714744245785420368328963861419"
        },
        {
          "date": 1631664000,
          "priceUSD": "67.33817809275442502377444795645695"
        },
        {
          "date": 1631750400,
          "priceUSD": "73.28105550632200900873571490037242"
        },
        {
          "date": 1631836800,
          "priceUSD": "81.09648037107117413486224911272783"
        },
        {
          "date": 1631923200,
          "priceUSD": "82.47809080009617884167626066367805"
        },
        {
          "date": 1632009600,
          "priceUSD": "82.55488136420571381097637693528566"
        },
        {
          "date": 1632096000,
          "priceUSD": "84.69212897479749983428232637615806"
        },
        {
          "date": 1632182400,
          "priceUSD": "82.66661009480181983550594546382153"
        },
        {
          "date": 1632268800,
          "priceUSD": "104.5229721525529917215065605179273"
        },
        {
          "date": 1632355200,
          "priceUSD": "110.2233759038891633195865874670481"
        },
        {
          "date": 1632441600,
          "priceUSD": "107.6818980940238700949494977598472"
        },
        {
          "date": 1632528000,
          "priceUSD": "100.3146954030560288769645950336185"
        },
        {
          "date": 1632614400,
          "priceUSD": "97.29891890298266658091575268031047"
        },
        {
          "date": 1632700800,
          "priceUSD": "94.27051468313436247972106092396355"
        },
        {
          "date": 1632787200,
          "priceUSD": "89.74526029085322145122973732771585"
        },
        {
          "date": 1632873600,
          "priceUSD": "90.51157895183394208482925531923874"
        },
        {
          "date": 1632960000,
          "priceUSD": "94.78328365734403496732225110714906"
        },
        {
          "date": 1633046400,
          "priceUSD": "97.4133048193121478997025795491457"
        },
        {
          "date": 1633132800,
          "priceUSD": "100.1644322519081026694090941638459"
        },
        {
          "date": 1633219200,
          "priceUSD": "122.4181569897365016237908173298943"
        }
      ],
      "id": "0x938fe3788222a74924e062120e7bfac829c719fb",
      "name": "Ape In",
      "symbol": "APEIN",
      "totalSupply": "16440"
    }
  }
}
```

Average of all **prices** and **historical prices** gives data for **price** and **historical price** for Avalanche based contract.

**Supply** static 37,500
**Market Cap** calculated
**Burned** N/A

# Other analyzed APIs - for reference

## Ethereum

0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698

### Sushiswap

https://thegraph.com/explorer/subgraph?id=0x4bb4c1b0745ef7b4642feeccd0740dec417ca0a0-0&view=Playground

### Price

Get pair info from sushiswap

https://api2.sushipro.io/?action=get_pair&pair=0xa47bb4f34298052048c4d7319686e23064eb22d9

```json
[
  {
    "Token_1_contract": "0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698",
    "Token_1_symbol": "APEIN",
    "Token_1_name": "Ape In",
    "Token_1_reserve": 36915.14832399387,
    "Token_1_price": 598.1427408049906,
    "Token_1_decimals": 18,
    "Token_1_derivedETH": 0.0016718417390708163,
    "Token_2_contract": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    "Token_2_symbol": "WETH",
    "Token_2_name": "Wrapped Ether",
    "Token_2_reserve": 61.716285772043044,
    "Token_2_price": 0.0016718417390708163,
    "Token_2_decimals": 18,
    "Token_2_derivedETH": 1
  }
]
```

### Historical price

Get latest 100 transactions from sushiswap

https://api2.sushipro.io/?action=get_transactions_by_pair&pair=0xa47bb4f34298052048c4d7319686e23064eb22d9

```json
[{"action":"get_transactions_by_pair","chain":"Ethereum","number_of_results":100,"pair":"0xa47bb4f34298052048c4d7319686e23064eb22d9"},[{"timestamp":1633233053,"side":"SELL","priceBase":0.0016572715982024,"priceUSD":5.6212422251709,"volumeUSD":883.8938978038096,"txHash":"0xefc69a847140f3592c7a996e300cda8d8e97fdf6b1ad9966da2d165d19a50f7f","receiver":"0xfcadf926669e7cad0e50287ea7d563020289ed2c","maker":"0xfcadf926669e7cad0e50287ea7d563020289ed2c","amountBase":157.24173810655014,"amountQuote":0.2605922666159615,"tokenBase":"0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698","tokenQuote":"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"},{"timestamp":1633183151,"side":"SELL","priceBase":0.0016655666778233,"priceUSD":5.5217824041932,"volumeUSD":154.6099073174102,"txHash":"0x4ddfe4d1c58429df5ad8193a5f5f96231e94b90e18e0259bdd9b84caaa0aac46","receiver":"0xd9e1ce17f2641f24ae83637ab66a2cca9c378b9f","maker":"0xd9e1ce17f2641f24ae83637ab66a2cca9c378b9f","amountBase":28,"amountQuote":0.04663586697905237,"tokenBase":"0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698","tokenQuote":"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"},
...
]
```

### total supply

https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698

```json
{
  "status": "1",
  "message": "OK-Missing/Invalid API Key, rate limit of 1/5sec applied",
  "result": "220897848000000000000000"
}
```

### market cap

price \* supply

### burned

Balance of 0xC0Bb9Ee4D0691d3733B3fcD01728e571FE9e8B27

https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698&address=0xC0Bb9Ee4D0691d3733B3fcD01728e571FE9e8B27&tag=latest

## Avalanche

0x938fe3788222a74924e062120e7bfac829c719fb

### Pangolin

https://api.thegraph.com/subgraphs/name/dasconnor/pangolin-dex

```
query {
  token(id: "0x938fe3788222a74924e062120e7bfac829c719fb") {
    id
    symbol
    name
    totalSupply
    tokenDayData {
      date
      priceUSD
    }
  }
}
```

```
{
  "data": {
    "token": {
      "id": "0x938fe3788222a74924e062120e7bfac829c719fb",
      "name": "Ape In",
      "symbol": "APEIN",
      "tokenDayData": [
        {
          "date": 1631577600,
          "priceUSD": "63.31661843184992402693263676808807"
        },
        {
          "date": 1631664000,
          "priceUSD": "67.61851737706873985878758564982193"
        },
        {
          "date": 1631750400,
          "priceUSD": "75.15545769669092207142141422842135"
        },
        {
          "date": 1631836800,
          "priceUSD": "81.39411833119283118117410458402591"
        },
        {
          "date": 1631923200,
          "priceUSD": "84.08873809545557871703728003564161"
        },
        {
          "date": 1632009600,
          "priceUSD": "83.04706768375987742050527943661506"
        },
        {
          "date": 1632096000,
          "priceUSD": "84.96062240480637487042780181162426"
        },
        {
          "date": 1632182400,
          "priceUSD": "87.70077192564928001615135875448062"
        },
        {
          "date": 1632268800,
          "priceUSD": "101.9969402709724511655781689213311"
        },
        {
          "date": 1632355200,
          "priceUSD": "108.7556750158184179634911560222825"
        },
        {
          "date": 1632441600,
          "priceUSD": "105.2952366475148259170997710946183"
        },
        {
          "date": 1632528000,
          "priceUSD": "99.14112475267501984870893831183244"
        },
        {
          "date": 1632614400,
          "priceUSD": "97.05312241933835298487469976823135"
        },
        {
          "date": 1632700800,
          "priceUSD": "94.6237011094274812424520101914443"
        },
        {
          "date": 1632787200,
          "priceUSD": "89.65996290336779095046266416940079"
        },
        {
          "date": 1632873600,
          "priceUSD": "90.02426620234541099723903053035517"
        },
        {
          "date": 1632960000,
          "priceUSD": "94.80633871734663200269860575560014"
        },
        {
          "date": 1633046400,
          "priceUSD": "96.3457559694651112728450701624268"
        },
        {
          "date": 1633132800,
          "priceUSD": "101.3530276996756249559813324180895"
        },
        {
          "date": 1633219200,
          "priceUSD": "122.4128539223370902014081355916533"
        }
      ],
      "totalSupply": "14208"
    }
  }
}
```

### DMM

https://avax-subgraph.dmm.exchange/subgraphs/name/dynamic-amm/dmm-exchange-avax/graphql

```
query {
  token(id: "0x938fe3788222a74924e062120e7bfac829c719fb") {
    id
    symbol
    name
    totalSupply
    tokenDayData {
      date
      priceUSD
    }
  }
}
```

```
{
  "data": {
    "token": {
      "id": "0x938fe3788222a74924e062120e7bfac829c719fb",
      "name": "Ape In",
      "symbol": "APEIN",
      "tokenDayData": [
        {
          "date": 1632096000,
          "priceUSD": "83.16172842518431667975816007738979"
        },
        {
          "date": 1632182400,
          "priceUSD": "83.90615456749739095962579236282512"
        },
        {
          "date": 1632268800,
          "priceUSD": "101.3764506296190029422883833884589"
        },
        {
          "date": 1632355200,
          "priceUSD": "108.0778883556988480188095137809301"
        },
        {
          "date": 1632441600,
          "priceUSD": "108.0106889132488569932235184117018"
        },
        {
          "date": 1632528000,
          "priceUSD": "100.2367645868921935954153852747319"
        },
        {
          "date": 1632614400,
          "priceUSD": "97.60641333734636545576751219927992"
        },
        {
          "date": 1632700800,
          "priceUSD": "95.13701620530653010765637032869798"
        },
        {
          "date": 1632787200,
          "priceUSD": "87.92669651844107270458491727824121"
        },
        {
          "date": 1632873600,
          "priceUSD": "90.20660942922130764987738789121531"
        },
        {
          "date": 1632960000,
          "priceUSD": "93.89271172064004490980807397896129"
        },
        {
          "date": 1633046400,
          "priceUSD": "97.73767235087227067175187379432025"
        },
        {
          "date": 1633132800,
          "priceUSD": "99.61347860245722040162754754024819"
        },
        {
          "date": 1633219200,
          "priceUSD": "123.1959874526515156506763818715515"
        }
      ],
      "totalSupply": "20568"
    }
  }
}
```

### JoeTrader

https://api.thegraph.com/subgraphs/name/traderjoe-xyz/exchange

```
query {
  token(id: "0x938fe3788222a74924e062120e7bfac829c719fb") {
    id
    symbol
    name
    totalSupply
    dayData {
      date
      priceUSD
    }
  }
}
```

```
{
  "data": {
    "token": {
      "dayData": [
        {
          "date": 1630886400,
          "priceUSD": "17.19690474350542080541767651883189"
        },
        {
          "date": 1630972800,
          "priceUSD": "14.25627387345345912676056054111648"
        },
        {
          "date": 1631059200,
          "priceUSD": "16.50110814278685677543866087045557"
        },
        {
          "date": 1631145600,
          "priceUSD": "18.39728021072277018900204777658932"
        },
        {
          "date": 1631232000,
          "priceUSD": "36.91719994077143940415112468318128"
        },
        {
          "date": 1631318400,
          "priceUSD": "49.48949046895145346263206316938179"
        },
        {
          "date": 1631404800,
          "priceUSD": "55.27780381810995092421889448118605"
        },
        {
          "date": 1631491200,
          "priceUSD": "64.11231498801201024681107984505209"
        },
        {
          "date": 1631577600,
          "priceUSD": "64.16714744245785420368328963861419"
        },
        {
          "date": 1631664000,
          "priceUSD": "67.33817809275442502377444795645695"
        },
        {
          "date": 1631750400,
          "priceUSD": "73.28105550632200900873571490037242"
        },
        {
          "date": 1631836800,
          "priceUSD": "81.09648037107117413486224911272783"
        },
        {
          "date": 1631923200,
          "priceUSD": "82.47809080009617884167626066367805"
        },
        {
          "date": 1632009600,
          "priceUSD": "82.55488136420571381097637693528566"
        },
        {
          "date": 1632096000,
          "priceUSD": "84.69212897479749983428232637615806"
        },
        {
          "date": 1632182400,
          "priceUSD": "82.66661009480181983550594546382153"
        },
        {
          "date": 1632268800,
          "priceUSD": "104.5229721525529917215065605179273"
        },
        {
          "date": 1632355200,
          "priceUSD": "110.2233759038891633195865874670481"
        },
        {
          "date": 1632441600,
          "priceUSD": "107.6818980940238700949494977598472"
        },
        {
          "date": 1632528000,
          "priceUSD": "100.3146954030560288769645950336185"
        },
        {
          "date": 1632614400,
          "priceUSD": "97.29891890298266658091575268031047"
        },
        {
          "date": 1632700800,
          "priceUSD": "94.27051468313436247972106092396355"
        },
        {
          "date": 1632787200,
          "priceUSD": "89.74526029085322145122973732771585"
        },
        {
          "date": 1632873600,
          "priceUSD": "90.51157895183394208482925531923874"
        },
        {
          "date": 1632960000,
          "priceUSD": "94.78328365734403496732225110714906"
        },
        {
          "date": 1633046400,
          "priceUSD": "97.4133048193121478997025795491457"
        },
        {
          "date": 1633132800,
          "priceUSD": "100.1644322519081026694090941638459"
        },
        {
          "date": 1633219200,
          "priceUSD": "122.4181569897365016237908173298943"
        }
      ],
      "id": "0x938fe3788222a74924e062120e7bfac829c719fb",
      "name": "Ape In",
      "symbol": "APEIN",
      "totalSupply": "16440"
    }
  }
}
```

## Assumptions

Minting (Unstake, Unstake All, StakeAll, Stake) - transfers from 0x0000000000000000000000000000000000000000 to any other address

Burning (Burn) - transfers from any address to 0x0000000000000000000000000000000000000000

NOTE: Initially it was stated that only transfers from 0xC0Bb9Ee4D0691d3733B3fcD01728e571FE9e8B27 to 0x0000000000000000000000000000000000000000 means burning ? e.g. https://etherscan.io/tx/0xf74aa8ca639e1c33d4506191fe8185edf81f56948b2470471b4eb9bac4e5947b (labeled "Burn")

What is 0x9ab983a45b5688039b3ed08bec6fea19a3340c0a address that gets ~3% on each mint on ETH?

Visible metrics:

- Supply (Total Supply) - https://coinmarketcap.com/alexandria/glossary/total-supply - total_supply = minted - burned
- Market Cap (Market Capitalization) - https://coinmarketcap.com/alexandria/glossary/market-capitalization-market-cap-mcap - market_cap = total_supply \* current_price
- Price (Current Price) - Average transaction price from the last day on DEXes. In case of multiple DEXes the average is calculated.
- Burned - https://coinmarketcap.com/alexandria/glossary/burned - Coins send to The Black Hole address 0x0...0
