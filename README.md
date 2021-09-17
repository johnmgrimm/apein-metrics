# Ape In Metrics Dashboard
The Ape In metrics dashboard provides and at-a-glance view of the Ape Island metaverse tokens. The dashboard displays a variety of metrics that help users understand the state of the Ape Island tokeneconomy. 

View the [working mockup](https://apeisland.webflow.io/ape-in-dashboard-mockup) of the dashboard.

## Dev Notes
- The prices for tokens should be obtained from exchange data where possible.
- The charts are placeholders for the historical data and will need to plugin into a JS based charting library via JSON data input. 
- We are primarily interested in the data retrieval but please specify if you can provide the data in a React based page.

## Metrics and Data Requirements

### Ethereum Token Metrics
Metric Name | Description | Data Source
----------- | ----------- | -----------
Price | Price of APEIN | [Sushi Analtyics](https://analytics.sushi.com/tokens/0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698)
Historical Price | 30 day price history of APEIN | [Sushi Analtyics](https://analytics.sushi.com/tokens/0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698)
Supply | Max Total Supply | [Etherscan](https://etherscan.io/token/0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698)
Market Cap | Calculated | Price * Supply
Burned | TBD | TBD


### Avalanche Token Metrics
Metric Name | Description | Data Source
----------- | ----------- | -----------
Price | Price of APEIN | [Trader Joe Analytics](https://analytics.traderjoexyz.com/tokens/0x938fe3788222a74924e062120e7bfac829c719fb) or [Pangolin Analtyics](https://info.pangolin.exchange/#/token/0x938fe3788222a74924e062120e7bfac829c719fb)
Historical Price | 30 day price history of APEIN | [Trader Joe Analytics](https://analytics.traderjoexyz.com/tokens/0x938fe3788222a74924e062120e7bfac829c719fb) or [Pangolin Analtyics](https://info.pangolin.exchange/#/token/0x938fe3788222a74924e062120e7bfac829c719fb)
Supply | TBD | TBD
Market Cap | Calculated | Price * Supply
Burned | TBD | TBD


### NFT Metrics
Metric Name | Description | Data Source
----------- | ----------- | -----------
Season 1 Total | Calculated | Season 1 (Ethereum) 
Season 2 Total | Calculated | Season 2 (Ethereum) 
Season 3 Total | Calculated | Season 3 (Ethereum) + Season 3 (Avalanche)
Offspring Total | Calculated | Offspring (Ethereum) + Offspring (Avalanche)
Season 1 (Ethereum) | Total Max Supply | [Etherscan](https://etherscan.io/token/0x09b9905a472aa1d387c9c1d8d956aff5463837e8)
Season 2 (Ethereum) | Total Max Supply | [Etherscan](https://etherscan.io/token/0x5033973ea65c66a8745acdb4f8ecb326365de2be)
Season 3 (Ethereum) | Total Max Supply | TBD
Offspring (Ethereum) | Total Max Supply | [Etherscan](https://etherscan.io/token/0xcdece16fb4ef3c171e163b7c72023fff4d3e2bd9)
Season 1 (Avalanche) | Total Max Supply | N/A
Season 2 (Avalanche) | Total Max Supply | N/A
Season 3 (Avalanche) | Total Max Supply | TBD
Offspring (Avalanche) | Total Max Supply | TBD




## Token Addresses and Data Sources
The dashboard displays information about several ERC20 and ERC721 tokens.
### ERC20 Tokens
Token Symbol | Contract Address 
------------ | ----------------
APEIN - Ethereum | [0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698](https://etherscan.io/token/0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698?a=0xb53d3ac5a88798cc58a9d363bc64fa28f68c7c7f)
APEIN - Avalanche | [0x938FE3788222A74924E062120E7BFac829c719Fb](https://cchain.explorer.avax.network/address/0x938FE3788222A74924E062120E7BFac829c719Fb/transactions)

### ERC721 Tokens
Token Symbol | Contract Address 
------------ | ----------------
APE1 - Ethereum | [0x09b9905a472aa1d387c9c1d8d956aff5463837e8](https://etherscan.io/address/0x09b9905a472aa1d387c9c1d8d956aff5463837e8)
APE2 - Ethereum | [0x5033973ea65c66a8745acdb4f8ecb326365de2be](https://etherscan.io/address/0x5033973ea65c66a8745acdb4f8ecb326365de2be)
APEO - Ethereum | [0xcdece16fb4ef3c171e163b7c72023fff4d3e2bd9](https://etherscan.io/address/0xcdece16fb4ef3c171e163b7c72023fff4d3e2bd9)




