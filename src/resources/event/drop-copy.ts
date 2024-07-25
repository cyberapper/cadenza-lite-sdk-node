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

  payload?: OrderAPI.Order;

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

  payload?: QuoteAPI.Quote;

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

  payload?: OrderAPI.Order;

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

  payload?: QuoteAPI.Quote;

  /**
   * The source system or module that generated the event.
   */
  source?: string;
}

export namespace DropCopy {
  export import DropCopyExecutionReport = DropCopyAPI.DropCopyExecutionReport;
  export import DropCopyOrder = DropCopyAPI.DropCopyOrder;
  export import DropCopyPortfolio = DropCopyAPI.DropCopyPortfolio;
  export import DropCopyQuote = DropCopyAPI.DropCopyQuote;
  export import DropCopyDropCopyExecutionReportParams = DropCopyAPI.DropCopyDropCopyExecutionReportParams;
  export import DropCopyDropCopyOrderParams = DropCopyAPI.DropCopyDropCopyOrderParams;
  export import DropCopyDropCopyPortfolioParams = DropCopyAPI.DropCopyDropCopyPortfolioParams;
  export import DropCopyDropCopyQuoteParams = DropCopyAPI.DropCopyDropCopyQuoteParams;
}
