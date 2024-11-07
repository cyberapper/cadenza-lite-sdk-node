// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as KlineAPI from '../market/kline';
import * as OrderbookAPI from '../market/orderbook';

export class MarketData extends APIResource {
  /**
   * PubSub event handler placeholder for kline event
   */
  marketDataKline(
    body: MarketDataMarketDataKlineParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MarketDataKline> {
    return this._client.post('/api/v2/webhook/pubsub/marketData/kline', { body, ...options });
  }

  /**
   * PubSub event handler placeholder for order book event
   */
  marketDataOrderBook(
    body: MarketDataMarketDataOrderBookParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MarketDataOrderBook> {
    return this._client.post('/api/v2/webhook/pubsub/marketData/orderBook', { body, ...options });
  }
}

export interface MarketDataKline {
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

  payload?: KlineAPI.Kline;

  /**
   * The source system or module that generated the event.
   */
  source?: string;
}

export interface MarketDataOrderBook {
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

  payload?: OrderbookAPI.Orderbook;

  /**
   * The source system or module that generated the event.
   */
  source?: string;
}

export interface MarketDataMarketDataKlineParams {
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

  payload?: KlineAPI.Kline;

  /**
   * The source system or module that generated the event.
   */
  source?: string;
}

export interface MarketDataMarketDataOrderBookParams {
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

  payload?: OrderbookAPI.Orderbook;

  /**
   * The source system or module that generated the event.
   */
  source?: string;
}

export declare namespace MarketData {
  export {
    type MarketDataKline as MarketDataKline,
    type MarketDataOrderBook as MarketDataOrderBook,
    type MarketDataMarketDataKlineParams as MarketDataMarketDataKlineParams,
    type MarketDataMarketDataOrderBookParams as MarketDataMarketDataOrderBookParams,
  };
}
