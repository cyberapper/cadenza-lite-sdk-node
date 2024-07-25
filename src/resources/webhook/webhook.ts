// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as WebhookAPI from './webhook';
import * as PortfolioAPI from '../portfolio';
import * as KlineAPI from '../market/kline';
import * as OrderbookAPI from '../market/orderbook';
import * as ExecutionReportAPI from '../trading/execution-report';
import * as OrderAPI from '../trading/order';
import * as QuoteAPI from '../trading/quote';
import * as CloudSchedulerAPI from './cloud-scheduler';

export class Webhook extends APIResource {
  cloudScheduler: CloudSchedulerAPI.CloudScheduler = new CloudSchedulerAPI.CloudScheduler(this._client);

  /**
   * PubSub Event Handler
   */
  pubsub(body: WebhookPubsubParams, options?: Core.RequestOptions): Core.APIPromise<WebhookPubsubResponse> {
    return this._client.post('/api/v2/webhook/pubsub', { body, ...options });
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

export interface WebhookPubsubResponse {
  data?: string;
}

export interface WebhookPubsubParams {
  message: WebhookPubsubParams.Message;

  /**
   * The subscription name.
   */
  subscription: string;
}

export namespace WebhookPubsubParams {
  export interface Message {
    /**
     * The unique identifier for the message.
     */
    id: string;

    /**
     * The base64-encoded data.
     */
    data?: string;
  }
}

export namespace Webhook {
  export import Event = WebhookAPI.Event;
  export import WebhookPubsubResponse = WebhookAPI.WebhookPubsubResponse;
  export import WebhookPubsubParams = WebhookAPI.WebhookPubsubParams;
  export import CloudScheduler = CloudSchedulerAPI.CloudScheduler;
  export import CloudSchedulerUpdatePortfolioRoutineResponse = CloudSchedulerAPI.CloudSchedulerUpdatePortfolioRoutineResponse;
}
