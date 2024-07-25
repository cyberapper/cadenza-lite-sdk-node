// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as TaskAPI from './task';
import * as OrderAPI from '../trading/order';
import * as QuoteAPI from '../trading/quote';

export class Task extends APIResource {
  /**
   * PubSub event handler placeholder for cancel order request acknowledgment event
   */
  taskCancelOrderRequestAck(
    body: TaskTaskCancelOrderRequestAckParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TaskCancelOrderRequestAck> {
    return this._client.post('/api/v2/webhook/pubsub/task/cancelOrderRequestAck', { body, ...options });
  }

  /**
   * PubSub event handler placeholder for place order request acknowledgment event
   */
  taskPlaceOrderRequestAck(
    body: TaskTaskPlaceOrderRequestAckParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TaskPlaceOrderRequestAck> {
    return this._client.post('/api/v2/webhook/pubsub/task/placeOrderRequestAck', { body, ...options });
  }

  /**
   * PubSub event handler placeholder for quote request acknowledgment event
   */
  taskQuoteRequestAck(
    body: TaskTaskQuoteRequestAckParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TaskQuoteRequestAck> {
    return this._client.post('/api/v2/webhook/pubsub/task/quoteRequestAck', { body, ...options });
  }
}

export interface TaskCancelOrderRequestAck {
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

  payload?: OrderAPI.CancelOrderRequest;

  /**
   * The source system or module that generated the event.
   */
  source?: string;
}

export interface TaskPlaceOrderRequestAck {
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

  payload?: OrderAPI.PlaceOrderRequest;

  /**
   * The source system or module that generated the event.
   */
  source?: string;
}

export interface TaskQuoteRequestAck {
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

  payload?: QuoteAPI.QuoteRequest;

  /**
   * The source system or module that generated the event.
   */
  source?: string;
}

export interface TaskTaskCancelOrderRequestAckParams {
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

  payload?: OrderAPI.CancelOrderRequest;

  /**
   * The source system or module that generated the event.
   */
  source?: string;
}

export interface TaskTaskPlaceOrderRequestAckParams {
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

  payload?: OrderAPI.PlaceOrderRequest;

  /**
   * The source system or module that generated the event.
   */
  source?: string;
}

export interface TaskTaskQuoteRequestAckParams {
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

  payload?: QuoteAPI.QuoteRequest;

  /**
   * The source system or module that generated the event.
   */
  source?: string;
}

export namespace Task {
  export import TaskCancelOrderRequestAck = TaskAPI.TaskCancelOrderRequestAck;
  export import TaskPlaceOrderRequestAck = TaskAPI.TaskPlaceOrderRequestAck;
  export import TaskQuoteRequestAck = TaskAPI.TaskQuoteRequestAck;
  export import TaskTaskCancelOrderRequestAckParams = TaskAPI.TaskTaskCancelOrderRequestAckParams;
  export import TaskTaskPlaceOrderRequestAckParams = TaskAPI.TaskTaskPlaceOrderRequestAckParams;
  export import TaskTaskQuoteRequestAckParams = TaskAPI.TaskTaskQuoteRequestAckParams;
}
