// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as EventAPI from './event';
import * as PortfolioAPI from './portfolio';
import * as KlineAPI from './market/kline';
import * as OrderbookAPI from './market/orderbook';
import * as ExecutionReportAPI from './trading/execution-report';
import * as OrderAPI from './trading/order';
import * as QuoteAPI from './trading/quote';
import * as WebhookAPI from './webhook/webhook';

export class Event extends APIResource {
  /**
   * PubSub event handler placeholder for order event
   */
  dropCopyOrder(
    body: EventDropCopyOrderParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DropCopyOrder> {
    return this._client.post('/api/v2/webhook/pubsub/dropCopy/order', { body, ...options });
  }

  /**
   * PubSub event handler placeholder for portfolio event
   */
  dropCopyPortfolio(
    body: EventDropCopyPortfolioParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DropCopyPortfolio> {
    return this._client.post('/api/v2/webhook/pubsub/dropCopy/portfolio', { body, ...options });
  }

  /**
   * PubSub event handler placeholder for quote event
   */
  dropCopyQuote(
    body: EventDropCopyQuoteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DropCopyQuote> {
    return this._client.post('/api/v2/webhook/pubsub/dropCopy/quote', { body, ...options });
  }

  /**
   * PubSub event handler placeholder for kline event
   */
  marketDataKline(
    body: EventMarketDataKlineParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MarketDataKline> {
    return this._client.post('/api/v2/webhook/pubsub/marketData/kline', { body, ...options });
  }

  /**
   * PubSub event handler placeholder for order book event
   */
  marketDataOrderBook(
    body: EventMarketDataOrderBookParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MarketDataOrderBook> {
    return this._client.post('/api/v2/webhook/pubsub/marketData/orderBook', { body, ...options });
  }
}

export interface DropCopyExecutionReport extends WebhookAPI.Event {
  eventType?: 'cadenza.dropCopy.executionReport';

  payload?: ExecutionReportAPI.ExecutionReport;
}

export interface DropCopyOrder extends WebhookAPI.Event {
  eventType?: 'cadenza.dropCopy.order';

  payload?: OrderAPI.Order;
}

export interface DropCopyPortfolio extends WebhookAPI.Event {
  eventType?: 'cadenza.dropCopy.portfolio';

  payload?: PortfolioAPI.ExchangeAccountPortfolio;
}

export interface DropCopyQuote extends WebhookAPI.Event {
  eventType?: 'cadenza.dropCopy.quote';

  payload?: QuoteAPI.Quote;
}

export interface MarketDataKline extends WebhookAPI.Event {
  eventType?: 'cadenza.marketData.kline';

  payload?: MarketDataKline.Payload;
}

export namespace MarketDataKline {
  export interface Payload {
    candles?: Array<KlineAPI.Ohlcv>;

    /**
     * The unique identifier for the account.
     */
    exchangeAccountId?: string;

    /**
     * Exchange type
     */
    exchangeType?: 'BINANCE' | 'BINANCE_MARGIN' | 'B2C2' | 'WINTERMUTE' | 'BLOCKFILLS' | 'STONEX';

    interval?: '1s' | '1m' | '5m' | '15m' | '30m' | '1h' | '2h' | '1d' | '1w';

    symbol?: string;
  }
}

export interface MarketDataOrderBook extends WebhookAPI.Event {
  eventType?: 'cadenza.marketData.orderBook';

  payload?: OrderbookAPI.Orderbook;
}

export interface TaskCancelOrderRequestAck extends WebhookAPI.Event {
  eventType?: 'cadenza.task.cancelOrderRequestAck';

  payload?: OrderAPI.CancelOrderRequest;
}

export interface TaskPlaceOrderRequestAck extends WebhookAPI.Event {
  eventType?: 'cadenza.task.placeOrderRequestAck';

  payload?: OrderAPI.PlaceOrderRequest;
}

export interface TaskQuoteRequestAck extends WebhookAPI.Event {
  eventType?: 'cadenza.task.placeOrderRequestAck';

  payload?: QuoteAPI.QuoteRequest;
}

export interface EventDropCopyOrderParams {
  /**
   * A unique identifier for the event.
   */
  eventId: string;

  eventType:
    | 'cadenza.dropCopy.order'
    | 'cadenza.task.placeOrderRequestAck'
    | 'cadenza.task.cancelOrderRequestAck'
    | 'cadenza.dropCopy.quote'
    | 'cadenza.dropCopy.portfolio'
    | 'cadenza.marketData.orderBook'
    | 'cadenza.marketData.kline';

  /**
   * Unix timestamp in milliseconds when the event was generated.
   */
  timestamp: number;

  payload?: OrderAPI.Order;

  /**
   * The source system or module that generated the event.
   */
  source?: string;
}

export interface EventDropCopyPortfolioParams {
  /**
   * A unique identifier for the event.
   */
  eventId: string;

  eventType:
    | 'cadenza.dropCopy.portfolio'
    | 'cadenza.task.placeOrderRequestAck'
    | 'cadenza.task.cancelOrderRequestAck'
    | 'cadenza.dropCopy.quote'
    | 'cadenza.dropCopy.order'
    | 'cadenza.marketData.orderBook'
    | 'cadenza.marketData.kline';

  /**
   * Unix timestamp in milliseconds when the event was generated.
   */
  timestamp: number;

  payload?: PortfolioAPI.ExchangeAccountPortfolio;

  /**
   * The source system or module that generated the event.
   */
  source?: string;
}

export interface EventDropCopyQuoteParams {
  /**
   * A unique identifier for the event.
   */
  eventId: string;

  eventType:
    | 'cadenza.dropCopy.quote'
    | 'cadenza.task.placeOrderRequestAck'
    | 'cadenza.task.cancelOrderRequestAck'
    | 'cadenza.dropCopy.order'
    | 'cadenza.dropCopy.portfolio'
    | 'cadenza.marketData.orderBook'
    | 'cadenza.marketData.kline';

  /**
   * Unix timestamp in milliseconds when the event was generated.
   */
  timestamp: number;

  payload?: QuoteAPI.Quote;

  /**
   * The source system or module that generated the event.
   */
  source?: string;
}

export interface EventMarketDataKlineParams {
  /**
   * A unique identifier for the event.
   */
  eventId: string;

  eventType:
    | 'cadenza.marketData.kline'
    | 'cadenza.task.placeOrderRequestAck'
    | 'cadenza.task.cancelOrderRequestAck'
    | 'cadenza.dropCopy.quote'
    | 'cadenza.dropCopy.order'
    | 'cadenza.dropCopy.portfolio'
    | 'cadenza.marketData.orderBook';

  /**
   * Unix timestamp in milliseconds when the event was generated.
   */
  timestamp: number;

  payload?:
    | QuoteAPI.QuoteRequest
    | OrderAPI.PlaceOrderRequest
    | OrderAPI.CancelOrderRequest
    | QuoteAPI.Quote
    | OrderAPI.Order
    | ExecutionReportAPI.ExecutionReport
    | PortfolioAPI.ExchangeAccountPortfolio
    | OrderbookAPI.Orderbook
    | EventMarketDataKlineParams.Kline
    | EventMarketDataKlineParams.Kline;

  /**
   * The source system or module that generated the event.
   */
  source?: string;
}

export namespace EventMarketDataKlineParams {
  export interface Kline {
    candles?: Array<KlineAPI.Ohlcv>;

    /**
     * The unique identifier for the account.
     */
    exchangeAccountId?: string;

    /**
     * Exchange type
     */
    exchangeType?: 'BINANCE' | 'BINANCE_MARGIN' | 'B2C2' | 'WINTERMUTE' | 'BLOCKFILLS' | 'STONEX';

    interval?: '1s' | '1m' | '5m' | '15m' | '30m' | '1h' | '2h' | '1d' | '1w';

    symbol?: string;
  }

  export interface Kline {
    candles?: Array<KlineAPI.Ohlcv>;

    /**
     * The unique identifier for the account.
     */
    exchangeAccountId?: string;

    /**
     * Exchange type
     */
    exchangeType?: 'BINANCE' | 'BINANCE_MARGIN' | 'B2C2' | 'WINTERMUTE' | 'BLOCKFILLS' | 'STONEX';

    interval?: '1s' | '1m' | '5m' | '15m' | '30m' | '1h' | '2h' | '1d' | '1w';

    symbol?: string;
  }
}

export interface EventMarketDataOrderBookParams {
  /**
   * A unique identifier for the event.
   */
  eventId: string;

  eventType:
    | 'cadenza.marketData.orderBook'
    | 'cadenza.task.placeOrderRequestAck'
    | 'cadenza.task.cancelOrderRequestAck'
    | 'cadenza.dropCopy.quote'
    | 'cadenza.dropCopy.order'
    | 'cadenza.dropCopy.portfolio'
    | 'cadenza.marketData.kline';

  /**
   * Unix timestamp in milliseconds when the event was generated.
   */
  timestamp: number;

  payload?: OrderbookAPI.Orderbook;

  /**
   * The source system or module that generated the event.
   */
  source?: string;
}

export namespace Event {
  export import DropCopyExecutionReport = EventAPI.DropCopyExecutionReport;
  export import DropCopyOrder = EventAPI.DropCopyOrder;
  export import DropCopyPortfolio = EventAPI.DropCopyPortfolio;
  export import DropCopyQuote = EventAPI.DropCopyQuote;
  export import MarketDataKline = EventAPI.MarketDataKline;
  export import MarketDataOrderBook = EventAPI.MarketDataOrderBook;
  export import TaskCancelOrderRequestAck = EventAPI.TaskCancelOrderRequestAck;
  export import TaskPlaceOrderRequestAck = EventAPI.TaskPlaceOrderRequestAck;
  export import TaskQuoteRequestAck = EventAPI.TaskQuoteRequestAck;
  export import EventDropCopyOrderParams = EventAPI.EventDropCopyOrderParams;
  export import EventDropCopyPortfolioParams = EventAPI.EventDropCopyPortfolioParams;
  export import EventDropCopyQuoteParams = EventAPI.EventDropCopyQuoteParams;
  export import EventMarketDataKlineParams = EventAPI.EventMarketDataKlineParams;
  export import EventMarketDataOrderBookParams = EventAPI.EventMarketDataOrderBookParams;
}
