// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as TaskAPI from './task';
import * as QuoteAPI from '../trading/quote';

export class Task extends APIResource {
  /**
   * PubSub event handler placeholder for quote request acknowledgment event
   */
  taskQuote(body: TaskTaskQuoteParams, options?: Core.RequestOptions): Core.APIPromise<TaskQuote> {
    return this._client.post('/api/v2/webhook/pubsub/task/quote', { body, ...options });
  }
}

export interface TaskQuote {
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

  payload?: QuoteAPI.QuoteRequest;

  /**
   * The source system or module that generated the event.
   */
  source?: string;
}

export interface TaskTaskQuoteParams {
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

  payload?: QuoteAPI.QuoteRequest;

  /**
   * The source system or module that generated the event.
   */
  source?: string;
}

export namespace Task {
  export import TaskQuote = TaskAPI.TaskQuote;
  export import TaskTaskQuoteParams = TaskAPI.TaskTaskQuoteParams;
}
