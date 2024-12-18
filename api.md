# Utility

Types:

- <code><a href="./src/resources/utility.ts">UtilityHealthResponse</a></code>

Methods:

- <code title="get /api/v2/health">client.utility.<a href="./src/resources/utility.ts">health</a>() -> string</code>

# ExchangeAccount

Types:

- <code><a href="./src/resources/exchange-account.ts">ExchangeAccount</a></code>
- <code><a href="./src/resources/exchange-account.ts">ExchangeAccountCreateResponse</a></code>
- <code><a href="./src/resources/exchange-account.ts">ExchangeAccountUpdateResponse</a></code>
- <code><a href="./src/resources/exchange-account.ts">ExchangeAccountListResponse</a></code>
- <code><a href="./src/resources/exchange-account.ts">ExchangeAccountRemoveResponse</a></code>
- <code><a href="./src/resources/exchange-account.ts">ExchangeAccountSetExchangePriorityResponse</a></code>

Methods:

- <code title="post /api/v2/exchange/addExchangeAccount">client.exchangeAccount.<a href="./src/resources/exchange-account.ts">create</a>({ ...params }) -> ExchangeAccountCreateResponse</code>
- <code title="post /api/v2/exchange/updateExchangeAccount">client.exchangeAccount.<a href="./src/resources/exchange-account.ts">update</a>({ ...params }) -> ExchangeAccountUpdateResponse</code>
- <code title="get /api/v2/exchange/listExchangeAccounts">client.exchangeAccount.<a href="./src/resources/exchange-account.ts">list</a>() -> ExchangeAccountListResponse</code>
- <code title="post /api/v2/exchange/removeExchangeAccount">client.exchangeAccount.<a href="./src/resources/exchange-account.ts">remove</a>({ ...params }) -> ExchangeAccountRemoveResponse</code>
- <code title="post /api/v2/exchange/setExchangePriority">client.exchangeAccount.<a href="./src/resources/exchange-account.ts">setExchangePriority</a>({ ...params }) -> ExchangeAccountSetExchangePriorityResponse</code>

# Market

## Instrument

Types:

- <code><a href="./src/resources/market/instrument.ts">Instrument</a></code>
- <code><a href="./src/resources/market/instrument.ts">InstrumentListResponse</a></code>

Methods:

- <code title="get /api/v2/market/listSymbolInfo">client.market.instrument.<a href="./src/resources/market/instrument.ts">list</a>({ ...params }) -> InstrumentListResponse</code>

## Ticker

Types:

- <code><a href="./src/resources/market/ticker.ts">Ticker</a></code>
- <code><a href="./src/resources/market/ticker.ts">TickerGetResponse</a></code>

Methods:

- <code title="get /api/v2/market/ticker">client.market.ticker.<a href="./src/resources/market/ticker.ts">get</a>({ ...params }) -> TickerGetResponse</code>

## Orderbook

Types:

- <code><a href="./src/resources/market/orderbook.ts">Orderbook</a></code>
- <code><a href="./src/resources/market/orderbook.ts">OrderbookGetResponse</a></code>

Methods:

- <code title="get /api/v2/market/orderbook">client.market.orderbook.<a href="./src/resources/market/orderbook.ts">get</a>({ ...params }) -> OrderbookGetResponse</code>

## Kline

Types:

- <code><a href="./src/resources/market/kline.ts">Candles</a></code>
- <code><a href="./src/resources/market/kline.ts">Kline</a></code>

Methods:

- <code title="get /api/v2/market/kline">client.market.kline.<a href="./src/resources/market/kline.ts">get</a>({ ...params }) -> Kline</code>

# Trading

## Order

Types:

- <code><a href="./src/resources/trading/order.ts">CancelOrderRequest</a></code>
- <code><a href="./src/resources/trading/order.ts">Order</a></code>
- <code><a href="./src/resources/trading/order.ts">PlaceOrderRequest</a></code>
- <code><a href="./src/resources/trading/order.ts">OrderCreateResponse</a></code>

Methods:

- <code title="post /api/v2/trading/placeOrder">client.trading.order.<a href="./src/resources/trading/order.ts">create</a>({ ...params }) -> OrderCreateResponse</code>
- <code title="get /api/v2/trading/listOrders">client.trading.order.<a href="./src/resources/trading/order.ts">list</a>({ ...params }) -> OrdersOffset</code>
- <code title="post /api/v2/trading/cancelOrder">client.trading.order.<a href="./src/resources/trading/order.ts">cancel</a>({ ...params }) -> Order</code>

## Quote

Types:

- <code><a href="./src/resources/trading/quote.ts">Quote</a></code>
- <code><a href="./src/resources/trading/quote.ts">QuoteRequest</a></code>
- <code><a href="./src/resources/trading/quote.ts">QuotePostResponse</a></code>
- <code><a href="./src/resources/trading/quote.ts">QuoteRequestForQuoteResponse</a></code>

Methods:

- <code title="post /api/v2/trading/fetchQuotes">client.trading.quote.<a href="./src/resources/trading/quote.ts">post</a>({ ...params }) -> QuotePostResponse</code>
- <code title="post /api/v2/trading/fetchQuotes">client.trading.quote.<a href="./src/resources/trading/quote.ts">requestForQuote</a>({ ...params }) -> QuoteRequestForQuoteResponse</code>

## ExecutionReport

Types:

- <code><a href="./src/resources/trading/execution-report.ts">ExecutionReport</a></code>
- <code><a href="./src/resources/trading/execution-report.ts">QuoteExecutionReport</a></code>

Methods:

- <code title="get /api/v2/trading/listExecutionReports">client.trading.executionReport.<a href="./src/resources/trading/execution-report.ts">list</a>({ ...params }) -> ExecutionReportsOffset</code>
- <code title="get /api/v2/trading/getQuoteExecutionReport">client.trading.executionReport.<a href="./src/resources/trading/execution-report.ts">getQuoteExecutionReport</a>({ ...params }) -> ExecutionReport</code>

# Portfolio

Types:

- <code><a href="./src/resources/portfolio.ts">BalanceEntry</a></code>
- <code><a href="./src/resources/portfolio.ts">ExchangeAccountBalance</a></code>
- <code><a href="./src/resources/portfolio.ts">ExchangeAccountCredit</a></code>
- <code><a href="./src/resources/portfolio.ts">ExchangeAccountPortfolio</a></code>
- <code><a href="./src/resources/portfolio.ts">ExchangeAccountPosition</a></code>
- <code><a href="./src/resources/portfolio.ts">PositionEntry</a></code>
- <code><a href="./src/resources/portfolio.ts">PortfolioListBalancesResponse</a></code>
- <code><a href="./src/resources/portfolio.ts">PortfolioListCreditResponse</a></code>
- <code><a href="./src/resources/portfolio.ts">PortfolioListPositionsResponse</a></code>

Methods:

- <code title="get /api/v2/portfolio/listBalances">client.portfolio.<a href="./src/resources/portfolio.ts">listBalances</a>({ ...params }) -> PortfolioListBalancesResponse</code>
- <code title="get /api/v2/portfolio/listCredit">client.portfolio.<a href="./src/resources/portfolio.ts">listCredit</a>({ ...params }) -> PortfolioListCreditResponse</code>
- <code title="get /api/v2/portfolio/listPositions">client.portfolio.<a href="./src/resources/portfolio.ts">listPositions</a>({ ...params }) -> PortfolioListPositionsResponse</code>

# Webhook

Types:

- <code><a href="./src/resources/webhook/webhook.ts">WebhookPubsubResponse</a></code>

Methods:

- <code title="post /api/v2/webhook/pubsub">client.webhook.<a href="./src/resources/webhook/webhook.ts">pubsub</a>({ ...params }) -> WebhookPubsubResponse</code>

## CloudScheduler

Types:

- <code><a href="./src/resources/webhook/cloud-scheduler.ts">CloudSchedulerUpdatePortfolioRoutineResponse</a></code>

Methods:

- <code title="post /api/v2/webhook/cloudScheduler/updatePortfolioRoutine">client.webhook.cloudScheduler.<a href="./src/resources/webhook/cloud-scheduler.ts">updatePortfolioRoutine</a>() -> CloudSchedulerUpdatePortfolioRoutineResponse</code>

# Event

Types:

- <code><a href="./src/resources/event/event.ts">Event</a></code>

Methods:

- <code title="post /api/v2/webhook/pubsub/event">client.event.<a href="./src/resources/event/event.ts">new</a>({ ...params }) -> Event</code>

## Task

Types:

- <code><a href="./src/resources/event/task.ts">TaskQuote</a></code>

Methods:

- <code title="post /api/v2/webhook/pubsub/task/quote">client.event.task.<a href="./src/resources/event/task.ts">taskQuote</a>({ ...params }) -> TaskQuote</code>

## DropCopy

Types:

- <code><a href="./src/resources/event/drop-copy.ts">DropCopyCancelOrderRequestAck</a></code>
- <code><a href="./src/resources/event/drop-copy.ts">DropCopyExecutionReport</a></code>
- <code><a href="./src/resources/event/drop-copy.ts">DropCopyOrder</a></code>
- <code><a href="./src/resources/event/drop-copy.ts">DropCopyPlaceOrderRequestAck</a></code>
- <code><a href="./src/resources/event/drop-copy.ts">DropCopyPortfolio</a></code>
- <code><a href="./src/resources/event/drop-copy.ts">DropCopyQuote</a></code>
- <code><a href="./src/resources/event/drop-copy.ts">DropCopyRequestAck</a></code>

Methods:

- <code title="post /api/v2/webhook/pubsub/dropCopy/cancelOrderRequestAck">client.event.dropCopy.<a href="./src/resources/event/drop-copy.ts">dropCopyCancelOrderRequestAck</a>({ ...params }) -> DropCopyCancelOrderRequestAck</code>
- <code title="post /api/v2/webhook/pubsub/dropCopy/executionReport">client.event.dropCopy.<a href="./src/resources/event/drop-copy.ts">dropCopyExecutionReport</a>({ ...params }) -> DropCopyExecutionReport</code>
- <code title="post /api/v2/webhook/pubsub/dropCopy/order">client.event.dropCopy.<a href="./src/resources/event/drop-copy.ts">dropCopyOrder</a>({ ...params }) -> DropCopyOrder</code>
- <code title="post /api/v2/webhook/pubsub/dropCopy/placeOrderRequestAck">client.event.dropCopy.<a href="./src/resources/event/drop-copy.ts">dropCopyPlaceOrderRequestAck</a>({ ...params }) -> DropCopyPlaceOrderRequestAck</code>
- <code title="post /api/v2/webhook/pubsub/dropCopy/portfolio">client.event.dropCopy.<a href="./src/resources/event/drop-copy.ts">dropCopyPortfolio</a>({ ...params }) -> DropCopyPortfolio</code>
- <code title="post /api/v2/webhook/pubsub/dropCopy/quote">client.event.dropCopy.<a href="./src/resources/event/drop-copy.ts">dropCopyQuote</a>({ ...params }) -> DropCopyQuote</code>
- <code title="post /api/v2/webhook/pubsub/dropCopy/quoteRequestAck">client.event.dropCopy.<a href="./src/resources/event/drop-copy.ts">dropCopyQuoteRequestAck</a>({ ...params }) -> DropCopyRequestAck</code>

## MarketData

Types:

- <code><a href="./src/resources/event/market-data.ts">MarketDataKline</a></code>
- <code><a href="./src/resources/event/market-data.ts">MarketDataOrderBook</a></code>

Methods:

- <code title="post /api/v2/webhook/pubsub/marketData/kline">client.event.marketData.<a href="./src/resources/event/market-data.ts">marketDataKline</a>({ ...params }) -> MarketDataKline</code>
- <code title="post /api/v2/webhook/pubsub/marketData/orderBook">client.event.marketData.<a href="./src/resources/event/market-data.ts">marketDataOrderBook</a>({ ...params }) -> MarketDataOrderBook</code>
