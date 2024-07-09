// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as MarketSymbolsAPI from './market-symbols';

export class MarketSymbols extends APIResource {
  /**
   * List available exchange symbols
   */
  list(
    query?: MarketSymbolListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MarketSymbolListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<MarketSymbolListResponse>;
  list(
    query: MarketSymbolListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MarketSymbolListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/v2/market/listSymbolInfo', { query, ...options });
  }

  /**
   * Get historical kline data
   */
  kline(
    query: MarketSymbolKlineParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MarketSymbolKlineResponse> {
    return this._client.get('/api/v2/market/kline', { query, ...options });
  }

  /**
   * Get order book
   */
  orderbook(
    query: MarketSymbolOrderbookParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MarketSymbolOrderbookResponse> {
    return this._client.get('/api/v2/market/orderbook', { query, ...options });
  }

  /**
   * Symbol price
   */
  ticker(
    query: MarketSymbolTickerParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MarketSymbolTickerResponse> {
    return this._client.get('/api/v2/market/ticker', { query, ...options });
  }
}

export type MarketSymbolListResponse = Array<MarketSymbolListResponse.MarketSymbolListResponseItem>;

export namespace MarketSymbolListResponse {
  /**
   * Trading Instrument
   */
  export interface MarketSymbolListResponseItem {
    /**
     * Exchange type
     */
    exchangeType: 'BINANCE' | 'BINANCE_MARGIN' | 'B2C2' | 'WINTERMUTE' | 'BLOCKFILLS' | 'STONEX';

    /**
     * Symbol name
     */
    symbol: string;

    /**
     * Base currency
     */
    baseSymbol?: string;

    /**
     * Symbol description
     */
    description?: string;

    /**
     * Margin rate
     */
    marginRate?: number;

    /**
     * Max quantity
     */
    maxQuantity?: number;

    /**
     * Min quantity
     */
    minQuantity?: number;

    /**
     * Min tick, Price Tick
     */
    minTick?: number;

    /**
     * Supported order types
     */
    orderTypes?: Array<
      'MARKET' | 'LIMIT' | 'STOP_LOSS' | 'STOP_LOSS_LIMIT' | 'TAKE_PROFIT' | 'TAKE_PROFIT_LIMIT' | 'QUOTED'
    >;

    /**
     * Pip size
     */
    pipSize?: number;

    /**
     * Pip value
     */
    pipValue?: number;

    /**
     * Price precision
     */
    pricePrecision?: number;

    /**
     * Quantity precision
     */
    quantityPrecision?: number;

    /**
     * Quantity step, round lot
     */
    quantityStep?: number;

    /**
     * Quoted currency
     */
    quoteSymbol?: string;

    /**
     * Security type
     */
    securityType?:
      | 'SPOT'
      | 'CASH'
      | 'STOCK'
      | 'CRYPTO'
      | 'DERIVATIVE'
      | 'OPTION'
      | 'FUTURE'
      | 'FOREX'
      | 'COMMODITY';

    /**
     * Supported time in force
     */
    timeInForce?: Array<
      | 'DAY'
      | 'GTC'
      | 'GTX'
      | 'GTD'
      | 'OPG'
      | 'CLS'
      | 'IOC'
      | 'FOK'
      | 'GFA'
      | 'GFS'
      | 'GTM'
      | 'MOO'
      | 'MOC'
      | 'EXT'
    >;
  }
}

export type MarketSymbolKlineResponse = Array<MarketSymbolKlineResponse.MarketSymbolKlineResponseItem>;

export namespace MarketSymbolKlineResponse {
  export interface MarketSymbolKlineResponseItem {
    /**
     * Close price
     */
    c?: number;

    /**
     * High price
     */
    h?: number;

    /**
     * Low price
     */
    l?: number;

    /**
     * Open price
     */
    o?: number;

    /**
     * Start time (in unix milliseconds)
     */
    t?: number;

    /**
     * Volume
     */
    v?: number;
  }
}

export type MarketSymbolOrderbookResponse =
  Array<MarketSymbolOrderbookResponse.MarketSymbolOrderbookResponseItem>;

export namespace MarketSymbolOrderbookResponse {
  export interface MarketSymbolOrderbookResponseItem {
    asks?: Array<Array<number>>;

    bids?: Array<Array<number>>;

    exchangeType?: string;

    /**
     * Order book level
     */
    level?: number;

    symbol?: string;
  }
}

export type MarketSymbolTickerResponse = Array<MarketSymbolTickerResponse.MarketSymbolTickerResponseItem>;

export namespace MarketSymbolTickerResponse {
  export interface MarketSymbolTickerResponseItem {
    /**
     * Exchange type
     */
    exchangeType: 'BINANCE' | 'BINANCE_MARGIN' | 'B2C2' | 'WINTERMUTE' | 'BLOCKFILLS' | 'STONEX';

    /**
     * Symbol
     */
    symbol: string;

    /**
     * Unix timestamp in milliseconds
     */
    timestamp: number;

    /**
     * Ask price
     */
    askPrice?: number;

    /**
     * Ask quantity
     */
    askQuantity?: number;

    /**
     * Bid price
     */
    bidPrice?: number;

    /**
     * Bid quantity
     */
    bidQuantity?: number;

    /**
     * Last price
     */
    lastPrice?: number;

    /**
     * Last quantity
     */
    lastQuantity?: number;
  }
}

export interface MarketSymbolListParams {
  /**
   * Whether to return detailed information
   */
  detail?: boolean;

  /**
   * Exchange type
   */
  exchangeType?: 'BINANCE' | 'BINANCE_MARGIN' | 'B2C2' | 'WINTERMUTE' | 'BLOCKFILLS' | 'STONEX';

  /**
   * Symbol
   */
  symbol?: string;
}

export interface MarketSymbolKlineParams {
  /**
   * Exchange type
   */
  exchangeType: 'BINANCE' | 'BINANCE_MARGIN' | 'B2C2' | 'WINTERMUTE' | 'BLOCKFILLS' | 'STONEX';

  /**
   * Kline interval
   */
  interval: '1s' | '1m' | '5m' | '15m' | '30m' | '1h' | '2h' | '1d' | '1w';

  /**
   * Symbol
   */
  symbol: string;

  /**
   * End time (in unix milliseconds)
   */
  endTime?: number;

  /**
   * Limit the number of returned results.
   */
  limit?: number;

  /**
   * Start time (in unix milliseconds)
   */
  startTime?: number;
}

export interface MarketSymbolOrderbookParams {
  /**
   * Exchange type
   */
  exchangeType: 'BINANCE' | 'BINANCE_MARGIN' | 'B2C2' | 'WINTERMUTE' | 'BLOCKFILLS' | 'STONEX';

  /**
   * Symbol
   */
  symbol: string;

  /**
   * Limit the number of returned results.
   */
  limit?: number;
}

export interface MarketSymbolTickerParams {
  /**
   * Symbol
   */
  symbol: string;

  /**
   * Exchange type
   */
  exchangeType?: 'BINANCE' | 'BINANCE_MARGIN' | 'B2C2' | 'WINTERMUTE' | 'BLOCKFILLS' | 'STONEX';
}

export namespace MarketSymbols {
  export import MarketSymbolListResponse = MarketSymbolsAPI.MarketSymbolListResponse;
  export import MarketSymbolKlineResponse = MarketSymbolsAPI.MarketSymbolKlineResponse;
  export import MarketSymbolOrderbookResponse = MarketSymbolsAPI.MarketSymbolOrderbookResponse;
  export import MarketSymbolTickerResponse = MarketSymbolsAPI.MarketSymbolTickerResponse;
  export import MarketSymbolListParams = MarketSymbolsAPI.MarketSymbolListParams;
  export import MarketSymbolKlineParams = MarketSymbolsAPI.MarketSymbolKlineParams;
  export import MarketSymbolOrderbookParams = MarketSymbolsAPI.MarketSymbolOrderbookParams;
  export import MarketSymbolTickerParams = MarketSymbolsAPI.MarketSymbolTickerParams;
}
