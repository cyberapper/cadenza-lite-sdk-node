# Health

Types:

- <code><a href="./src/resources/health.ts">HealthCheckResponse</a></code>

Methods:

- <code title="get /api/v2/health">client.health.<a href="./src/resources/health.ts">check</a>() -> string</code>

# Account

## Client

Types:

- <code><a href="./src/resources/account/client.ts">ClientRetrieveInfoResponse</a></code>

Methods:

- <code title="get /api/v2/client/getInfo">client.account.client.<a href="./src/resources/account/client.ts">retrieveInfo</a>() -> ClientRetrieveInfoResponse</code>

# ExchangeAccounts

Types:

- <code><a href="./src/resources/exchange-accounts.ts">ExchangeAccountCreateResponse</a></code>
- <code><a href="./src/resources/exchange-accounts.ts">ExchangeAccountUpdateResponse</a></code>
- <code><a href="./src/resources/exchange-accounts.ts">ExchangeAccountListResponse</a></code>
- <code><a href="./src/resources/exchange-accounts.ts">ExchangeAccountRemoveResponse</a></code>

Methods:

- <code title="post /api/v2/exchange/addExchangeAccount">client.exchangeAccounts.<a href="./src/resources/exchange-accounts.ts">create</a>({ ...params }) -> ExchangeAccountCreateResponse</code>
- <code title="post /api/v2/exchange/updateExchangeAccount">client.exchangeAccounts.<a href="./src/resources/exchange-accounts.ts">update</a>({ ...params }) -> ExchangeAccountUpdateResponse</code>
- <code title="get /api/v2/exchange/listExchangeAccounts">client.exchangeAccounts.<a href="./src/resources/exchange-accounts.ts">list</a>() -> ExchangeAccountListResponse</code>
- <code title="post /api/v2/exchange/removeExchangeAccount">client.exchangeAccounts.<a href="./src/resources/exchange-accounts.ts">remove</a>({ ...params }) -> ExchangeAccountRemoveResponse</code>

# MarketSymbols

Types:

- <code><a href="./src/resources/market-symbols.ts">MarketSymbolListResponse</a></code>
- <code><a href="./src/resources/market-symbols.ts">MarketSymbolKlineResponse</a></code>
- <code><a href="./src/resources/market-symbols.ts">MarketSymbolOrderbookResponse</a></code>
- <code><a href="./src/resources/market-symbols.ts">MarketSymbolTickerResponse</a></code>

Methods:

- <code title="get /api/v2/market/listSymbolInfo">client.marketSymbols.<a href="./src/resources/market-symbols.ts">list</a>({ ...params }) -> MarketSymbolListResponse</code>
- <code title="get /api/v2/market/kline">client.marketSymbols.<a href="./src/resources/market-symbols.ts">kline</a>({ ...params }) -> MarketSymbolKlineResponse</code>
- <code title="get /api/v2/market/orderbook">client.marketSymbols.<a href="./src/resources/market-symbols.ts">orderbook</a>({ ...params }) -> MarketSymbolOrderbookResponse</code>
- <code title="get /api/v2/market/ticker">client.marketSymbols.<a href="./src/resources/market-symbols.ts">ticker</a>({ ...params }) -> MarketSymbolTickerResponse</code>

# Trades

Types:

- <code><a href="./src/resources/trades.ts">TradeCancelOrderResponse</a></code>
- <code><a href="./src/resources/trades.ts">TradeFetchQuotesResponse</a></code>
- <code><a href="./src/resources/trades.ts">TradeGetQuoteExecutionReportResponse</a></code>
- <code><a href="./src/resources/trades.ts">TradeListOrdersResponse</a></code>
- <code><a href="./src/resources/trades.ts">TradePlaceOrderResponse</a></code>
- <code><a href="./src/resources/trades.ts">TradeSetExchangePriorityResponse</a></code>

Methods:

- <code title="post /api/v2/trading/cancelOrder">client.trades.<a href="./src/resources/trades.ts">cancelOrder</a>({ ...params }) -> TradeCancelOrderResponse</code>
- <code title="post /api/v2/trading/fetchQuotes">client.trades.<a href="./src/resources/trades.ts">fetchQuotes</a>({ ...params }) -> TradeFetchQuotesResponse</code>
- <code title="post /api/v2/trading/getQuoteExecutionReport">client.trades.<a href="./src/resources/trades.ts">getQuoteExecutionReport</a>({ ...params }) -> TradeGetQuoteExecutionReportResponse</code>
- <code title="get /api/v2/trading/listOrders">client.trades.<a href="./src/resources/trades.ts">listOrders</a>({ ...params }) -> TradeListOrdersResponse</code>
- <code title="post /api/v2/trading/placeOrder">client.trades.<a href="./src/resources/trades.ts">placeOrder</a>({ ...params }) -> TradePlaceOrderResponse</code>
- <code title="post /api/v2/exchange/setExchangePriority">client.trades.<a href="./src/resources/trades.ts">setExchangePriority</a>({ ...params }) -> TradeSetExchangePriorityResponse</code>

# Portfolios

Types:

- <code><a href="./src/resources/portfolios.ts">PortfolioListBalancesResponse</a></code>
- <code><a href="./src/resources/portfolios.ts">PortfolioListCreditResponse</a></code>
- <code><a href="./src/resources/portfolios.ts">PortfolioListPositionsResponse</a></code>

Methods:

- <code title="get /api/v2/portfolio/listBalances">client.portfolios.<a href="./src/resources/portfolios.ts">listBalances</a>({ ...params }) -> PortfolioListBalancesResponse</code>
- <code title="get /api/v2/portfolio/listCredit">client.portfolios.<a href="./src/resources/portfolios.ts">listCredit</a>({ ...params }) -> PortfolioListCreditResponse</code>
- <code title="get /api/v2/portfolio/listPositions">client.portfolios.<a href="./src/resources/portfolios.ts">listPositions</a>({ ...params }) -> PortfolioListPositionsResponse</code>
