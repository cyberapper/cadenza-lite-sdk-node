// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as EventAPI from './event';
import * as PortfolioAPI from '../portfolio';
import * as DropCopyAPI from './drop-copy';
import * as MarketDataAPI from './market-data';
import * as TaskAPI from './task';
import * as KlineAPI from '../market/kline';
import * as OrderbookAPI from '../market/orderbook';
import * as ExecutionReportAPI from '../trading/execution-report';
import * as OrderAPI from '../trading/order';
import * as QuoteAPI from '../trading/quote';

export class EventResource extends APIResource {
  task: TaskAPI.Task = new TaskAPI.Task(this._client);
  dropCopy: DropCopyAPI.DropCopy = new DropCopyAPI.DropCopy(this._client);
  marketData: MarketDataAPI.MarketData = new MarketDataAPI.MarketData(this._client);

  /**
   * PubSub event handler placeholder
   */
  new(body: EventNewParams, options?: Core.RequestOptions): Core.APIPromise<Event> {
    return this._client.post('/api/v2/webhook/pubsub/event', { body, ...options });
  }
}

export interface Event {
  /**
   * A unique identifier for the event.
   */
  eventId: string;

  /**
   * Event Type
   */
  eventType:
    | 'cadenza.task.quoteRequestAck'
    | 'cadenza.task.placeOrderRequestAck'
    | 'cadenza.task.cancelOrderRequestAck'
    | 'cadenza.dropCopy.quote'
    | 'cadenza.dropCopy.order'
    | 'cadenza.dropCopy.portfolio'
    | 'cadenza.marketData.orderBook'
    | 'cadenza.marketData.kline';

  /**
   * Unix timestamp in milliseconds when the event was generated.
   */
  timestamp: number;

  /**
   * The actual data of the event, which varies based on the event type.
   */
  payload?:
    | QuoteAPI.QuoteRequest
    | OrderAPI.PlaceOrderRequest
    | OrderAPI.CancelOrderRequest
    | QuoteAPI.Quote
    | OrderAPI.Order
    | ExecutionReportAPI.ExecutionReport
    | PortfolioAPI.ExchangeAccountPortfolio
    | OrderbookAPI.Orderbook
    | Event.Kline;

  /**
   * The source system or module that generated the event.
   */
  source?: string;
}

export namespace Event {
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

export interface EventNewParams {
  /**
   * A unique identifier for the event.
   */
  eventId: string;

  /**
   * Event Type
   */
  eventType:
    | 'cadenza.task.quoteRequestAck'
    | 'cadenza.task.placeOrderRequestAck'
    | 'cadenza.task.cancelOrderRequestAck'
    | 'cadenza.dropCopy.quote'
    | 'cadenza.dropCopy.order'
    | 'cadenza.dropCopy.portfolio'
    | 'cadenza.marketData.orderBook'
    | 'cadenza.marketData.kline';

  /**
   * Unix timestamp in milliseconds when the event was generated.
   */
  timestamp: number;

  /**
   * The actual data of the event, which varies based on the event type.
   */
  payload?:
    | QuoteAPI.QuoteRequest
    | OrderAPI.PlaceOrderRequest
    | OrderAPI.CancelOrderRequest
    | QuoteAPI.Quote
    | OrderAPI.Order
    | ExecutionReportAPI.ExecutionReport
    | PortfolioAPI.ExchangeAccountPortfolio
    | OrderbookAPI.Orderbook
    | EventNewParams.Kline;

  /**
   * The source system or module that generated the event.
   */
  source?: string;
}

export namespace EventNewParams {
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

export namespace EventResource {
  export import Event = EventAPI.Event;
  export import EventNewParams = EventAPI.EventNewParams;
  export import Task = TaskAPI.Task;
  export import TaskCancelOrderRequestAck = TaskAPI.TaskCancelOrderRequestAck;
  export import TaskPlaceOrderRequestAck = TaskAPI.TaskPlaceOrderRequestAck;
  export import TaskQuoteRequestAck = TaskAPI.TaskQuoteRequestAck;
  export import TaskTaskCancelOrderRequestAckParams = TaskAPI.TaskTaskCancelOrderRequestAckParams;
  export import TaskTaskPlaceOrderRequestAckParams = TaskAPI.TaskTaskPlaceOrderRequestAckParams;
  export import TaskTaskQuoteRequestAckParams = TaskAPI.TaskTaskQuoteRequestAckParams;
  export import DropCopy = DropCopyAPI.DropCopy;
  export import DropCopyExecutionReport = DropCopyAPI.DropCopyExecutionReport;
  export import DropCopyOrder = DropCopyAPI.DropCopyOrder;
  export import DropCopyPortfolio = DropCopyAPI.DropCopyPortfolio;
  export import DropCopyQuote = DropCopyAPI.DropCopyQuote;
  export import DropCopyDropCopyExecutionReportParams = DropCopyAPI.DropCopyDropCopyExecutionReportParams;
  export import DropCopyDropCopyOrderParams = DropCopyAPI.DropCopyDropCopyOrderParams;
  export import DropCopyDropCopyPortfolioParams = DropCopyAPI.DropCopyDropCopyPortfolioParams;
  export import DropCopyDropCopyQuoteParams = DropCopyAPI.DropCopyDropCopyQuoteParams;
  export import MarketData = MarketDataAPI.MarketData;
  export import MarketDataKline = MarketDataAPI.MarketDataKline;
  export import MarketDataOrderBook = MarketDataAPI.MarketDataOrderBook;
  export import MarketDataMarketDataKlineParams = MarketDataAPI.MarketDataMarketDataKlineParams;
  export import MarketDataMarketDataOrderBookParams = MarketDataAPI.MarketDataMarketDataOrderBookParams;
}
