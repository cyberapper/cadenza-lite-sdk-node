// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as DropCopyAPI from './drop-copy';
import {
  DropCopy,
  DropCopyCancelOrderRequestAck,
  DropCopyDropCopyCancelOrderRequestAckParams,
  DropCopyDropCopyExecutionReportParams,
  DropCopyDropCopyOrderParams,
  DropCopyDropCopyPlaceOrderRequestAckParams,
  DropCopyDropCopyPortfolioParams,
  DropCopyDropCopyQuoteParams,
  DropCopyDropCopyQuoteRequestAckParams,
  DropCopyExecutionReport,
  DropCopyOrder,
  DropCopyPlaceOrderRequestAck,
  DropCopyPortfolio,
  DropCopyQuote,
  DropCopyRequestAck,
} from './drop-copy';
import * as MarketDataAPI from './market-data';
import {
  MarketData,
  MarketDataKline,
  MarketDataMarketDataKlineParams,
  MarketDataMarketDataOrderBookParams,
  MarketDataOrderBook,
} from './market-data';
import * as TaskAPI from './task';
import { Task, TaskQuote, TaskTaskQuoteParams } from './task';

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

EventResource.Task = Task;
EventResource.DropCopy = DropCopy;
EventResource.MarketData = MarketData;

export declare namespace EventResource {
  export { type Event as Event, type EventNewParams as EventNewParams };

  export { Task as Task, type TaskQuote as TaskQuote, type TaskTaskQuoteParams as TaskTaskQuoteParams };

  export {
    DropCopy as DropCopy,
    type DropCopyCancelOrderRequestAck as DropCopyCancelOrderRequestAck,
    type DropCopyExecutionReport as DropCopyExecutionReport,
    type DropCopyOrder as DropCopyOrder,
    type DropCopyPlaceOrderRequestAck as DropCopyPlaceOrderRequestAck,
    type DropCopyPortfolio as DropCopyPortfolio,
    type DropCopyQuote as DropCopyQuote,
    type DropCopyRequestAck as DropCopyRequestAck,
    type DropCopyDropCopyCancelOrderRequestAckParams as DropCopyDropCopyCancelOrderRequestAckParams,
    type DropCopyDropCopyExecutionReportParams as DropCopyDropCopyExecutionReportParams,
    type DropCopyDropCopyOrderParams as DropCopyDropCopyOrderParams,
    type DropCopyDropCopyPlaceOrderRequestAckParams as DropCopyDropCopyPlaceOrderRequestAckParams,
    type DropCopyDropCopyPortfolioParams as DropCopyDropCopyPortfolioParams,
    type DropCopyDropCopyQuoteParams as DropCopyDropCopyQuoteParams,
    type DropCopyDropCopyQuoteRequestAckParams as DropCopyDropCopyQuoteRequestAckParams,
  };

  export {
    MarketData as MarketData,
    type MarketDataKline as MarketDataKline,
    type MarketDataOrderBook as MarketDataOrderBook,
    type MarketDataMarketDataKlineParams as MarketDataMarketDataKlineParams,
    type MarketDataMarketDataOrderBookParams as MarketDataMarketDataOrderBookParams,
  };
}
