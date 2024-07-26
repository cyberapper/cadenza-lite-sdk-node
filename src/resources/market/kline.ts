// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as KlineAPI from './kline';

export class KlineResource extends APIResource {
  /**
   * Get historical kline data
   */
  get(query: KlineGetParams, options?: Core.RequestOptions): Core.APIPromise<Kline> {
    return this._client.get('/api/v2/market/kline', { query, ...options });
  }
}

export type Candles = Array<Candles.CandleItem>;

export namespace Candles {
  export interface CandleItem {
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

export interface Kline {
  candles?: Candles;

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

export interface KlineGetParams {
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

export namespace KlineResource {
  export import Candles = KlineAPI.Candles;
  export import Kline = KlineAPI.Kline;
  export import KlineGetParams = KlineAPI.KlineGetParams;
}
