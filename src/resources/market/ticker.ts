// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class TickerResource extends APIResource {
  /**
   * Symbol price
   */
  get(query: TickerGetParams, options?: Core.RequestOptions): Core.APIPromise<TickerGetResponse> {
    return this._client.get('/api/v2/market/ticker', { query, ...options });
  }
}

export interface Ticker {
  /**
   * Exchange type
   */
  exchangeType: 'BINANCE' | 'BINANCE_MARGIN' | 'B2C2' | 'WINTERMUTE' | 'BLOCKFILLS' | 'STONEX' | 'CUMBERLAND';

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

export type TickerGetResponse = Array<Ticker>;

export interface TickerGetParams {
  /**
   * Symbol
   */
  symbol: string;

  /**
   * Exchange type
   */
  exchangeType?:
    | 'BINANCE'
    | 'BINANCE_MARGIN'
    | 'B2C2'
    | 'WINTERMUTE'
    | 'BLOCKFILLS'
    | 'STONEX'
    | 'CUMBERLAND';
}

export declare namespace TickerResource {
  export {
    type Ticker as Ticker,
    type TickerGetResponse as TickerGetResponse,
    type TickerGetParams as TickerGetParams,
  };
}
