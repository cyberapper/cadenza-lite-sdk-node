// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as EventAPI from './event';
import * as DropCopyAPI from './drop-copy';
import * as MarketDataAPI from './market-data';
import * as TaskAPI from './task';

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
    | 'cadenza.task.quote'
    | 'cadenza.dropCopy.quoteRequestAck'
    | 'cadenza.dropCopy.placeOrderRequestAck'
    | 'cadenza.dropCopy.cancelOrderRequestAck'
    | 'cadenza.dropCopy.quote'
    | 'cadenza.dropCopy.order'
    | 'cadenza.dropCopy.executionReport'
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
  payload?: unknown;

  /**
   * The source system or module that generated the event.
   */
  source?: string;
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
    | 'cadenza.task.quote'
    | 'cadenza.dropCopy.quoteRequestAck'
    | 'cadenza.dropCopy.placeOrderRequestAck'
    | 'cadenza.dropCopy.cancelOrderRequestAck'
    | 'cadenza.dropCopy.quote'
    | 'cadenza.dropCopy.order'
    | 'cadenza.dropCopy.executionReport'
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
  payload?: unknown;

  /**
   * The source system or module that generated the event.
   */
  source?: string;
}

export namespace EventResource {
  export import Event = EventAPI.Event;
  export import EventNewParams = EventAPI.EventNewParams;
  export import Task = TaskAPI.Task;
  export import TaskQuote = TaskAPI.TaskQuote;
  export import TaskTaskQuoteParams = TaskAPI.TaskTaskQuoteParams;
  export import DropCopy = DropCopyAPI.DropCopy;
  export import DropCopyCancelOrderRequestAck = DropCopyAPI.DropCopyCancelOrderRequestAck;
  export import DropCopyExecutionReport = DropCopyAPI.DropCopyExecutionReport;
  export import DropCopyOrder = DropCopyAPI.DropCopyOrder;
  export import DropCopyPlaceOrderRequestAck = DropCopyAPI.DropCopyPlaceOrderRequestAck;
  export import DropCopyPortfolio = DropCopyAPI.DropCopyPortfolio;
  export import DropCopyQuote = DropCopyAPI.DropCopyQuote;
  export import DropCopyRequestAck = DropCopyAPI.DropCopyRequestAck;
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
