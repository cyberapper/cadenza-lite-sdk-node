// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as DropCopyAPI from './drop-copy';
import * as PortfolioAPI from '../portfolio';
import * as ExecutionReportAPI from '../trading/execution-report';
import * as OrderAPI from '../trading/order';
import * as QuoteAPI from '../trading/quote';

export class DropCopy extends APIResource {
  /**
   * PubSub event handler placeholder for cancel order request acknowledgment event
   */
  dropCopyCancelOrderRequestAck(
    body: DropCopyDropCopyCancelOrderRequestAckParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DropCopyCancelOrderRequestAck> {
    return this._client.post('/api/v2/webhook/pubsub/dropCopy/cancelOrderRequestAck', { body, ...options });
  }

  /**
   * PubSub event handler for execution report drop copy event
   */
  dropCopyExecutionReport(
    body: DropCopyDropCopyExecutionReportParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DropCopyExecutionReport> {
    return this._client.post('/api/v2/webhook/pubsub/dropCopy/executionReport', { body, ...options });
  }

  /**
   * PubSub event handler placeholder for order event
   */
  dropCopyOrder(
    body: DropCopyDropCopyOrderParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DropCopyOrder> {
    return this._client.post('/api/v2/webhook/pubsub/dropCopy/order', { body, ...options });
  }

  /**
   * PubSub event handler placeholder for place order request acknowledgment event
   */
  dropCopyPlaceOrderRequestAck(
    body: DropCopyDropCopyPlaceOrderRequestAckParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DropCopyPlaceOrderRequestAck> {
    return this._client.post('/api/v2/webhook/pubsub/dropCopy/placeOrderRequestAck', { body, ...options });
  }

  /**
   * PubSub event handler placeholder for portfolio event
   */
  dropCopyPortfolio(
    body: DropCopyDropCopyPortfolioParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DropCopyPortfolio> {
    return this._client.post('/api/v2/webhook/pubsub/dropCopy/portfolio', { body, ...options });
  }

  /**
   * PubSub event handler placeholder for quote event
   */
  dropCopyQuote(
    body: DropCopyDropCopyQuoteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DropCopyQuote> {
    return this._client.post('/api/v2/webhook/pubsub/dropCopy/quote', { body, ...options });
  }

  /**
   * PubSub event handler placeholder for quote request acknowledgment event
   */
  dropCopyQuoteRequestAck(
    body: DropCopyDropCopyQuoteRequestAckParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DropCopyRequestAck> {
    return this._client.post('/api/v2/webhook/pubsub/dropCopy/quoteRequestAck', { body, ...options });
  }
}

export interface DropCopyCancelOrderRequestAck {
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

  payload?: OrderAPI.CancelOrderRequest;

  /**
   * The source system or module that generated the event.
   */
  source?: string;
}

export interface DropCopyExecutionReport {
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

  payload?: ExecutionReportAPI.ExecutionReport;

  /**
   * The source system or module that generated the event.
   */
  source?: string;
}

export interface DropCopyOrder {
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

  payload?: OrderAPI.Order;

  /**
   * The source system or module that generated the event.
   */
  source?: string;
}

export interface DropCopyPlaceOrderRequestAck {
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

  payload?: OrderAPI.PlaceOrderRequest;

  /**
   * The source system or module that generated the event.
   */
  source?: string;
}

export interface DropCopyPortfolio {
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

  payload?: PortfolioAPI.ExchangeAccountPortfolio;

  /**
   * The source system or module that generated the event.
   */
  source?: string;
}

export interface DropCopyQuote {
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

  payload?: QuoteAPI.Quote;

  /**
   * The source system or module that generated the event.
   */
  source?: string;
}

export interface DropCopyRequestAck {
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

export interface DropCopyDropCopyCancelOrderRequestAckParams {
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

  payload?: OrderAPI.CancelOrderRequest;

  /**
   * The source system or module that generated the event.
   */
  source?: string;
}

export interface DropCopyDropCopyExecutionReportParams {
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

  payload?: ExecutionReportAPI.ExecutionReport;

  /**
   * The source system or module that generated the event.
   */
  source?: string;
}

export interface DropCopyDropCopyOrderParams {
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

  payload?: OrderAPI.Order;

  /**
   * The source system or module that generated the event.
   */
  source?: string;
}

export interface DropCopyDropCopyPlaceOrderRequestAckParams {
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

  payload?: OrderAPI.PlaceOrderRequest;

  /**
   * The source system or module that generated the event.
   */
  source?: string;
}

export interface DropCopyDropCopyPortfolioParams {
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

  payload?: PortfolioAPI.ExchangeAccountPortfolio;

  /**
   * The source system or module that generated the event.
   */
  source?: string;
}

export interface DropCopyDropCopyQuoteParams {
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

  payload?: QuoteAPI.Quote;

  /**
   * The source system or module that generated the event.
   */
  source?: string;
}

export interface DropCopyDropCopyQuoteRequestAckParams {
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

export namespace DropCopy {
  export import DropCopyCancelOrderRequestAck = DropCopyAPI.DropCopyCancelOrderRequestAck;
  export import DropCopyExecutionReport = DropCopyAPI.DropCopyExecutionReport;
  export import DropCopyOrder = DropCopyAPI.DropCopyOrder;
  export import DropCopyPlaceOrderRequestAck = DropCopyAPI.DropCopyPlaceOrderRequestAck;
  export import DropCopyPortfolio = DropCopyAPI.DropCopyPortfolio;
  export import DropCopyQuote = DropCopyAPI.DropCopyQuote;
  export import DropCopyRequestAck = DropCopyAPI.DropCopyRequestAck;
  export import DropCopyDropCopyCancelOrderRequestAckParams = DropCopyAPI.DropCopyDropCopyCancelOrderRequestAckParams;
  export import DropCopyDropCopyExecutionReportParams = DropCopyAPI.DropCopyDropCopyExecutionReportParams;
  export import DropCopyDropCopyOrderParams = DropCopyAPI.DropCopyDropCopyOrderParams;
  export import DropCopyDropCopyPlaceOrderRequestAckParams = DropCopyAPI.DropCopyDropCopyPlaceOrderRequestAckParams;
  export import DropCopyDropCopyPortfolioParams = DropCopyAPI.DropCopyDropCopyPortfolioParams;
  export import DropCopyDropCopyQuoteParams = DropCopyAPI.DropCopyDropCopyQuoteParams;
  export import DropCopyDropCopyQuoteRequestAckParams = DropCopyAPI.DropCopyDropCopyQuoteRequestAckParams;
}
