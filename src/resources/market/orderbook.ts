// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class OrderbookResource extends APIResource {
  /**
   * Get order book
   */
  get(query: OrderbookGetParams, options?: Core.RequestOptions): Core.APIPromise<OrderbookGetResponse> {
    return this._client.get('/api/v2/market/orderbook', { query, ...options });
  }
}

export interface Orderbook {
  asks?: Array<Array<number>>;

  bids?: Array<Array<number>>;

  /**
   * UUID string
   */
  exchangeAccountId?: string;

  exchangeType?: string;

  /**
   * Order book level
   */
  level?: number;

  symbol?: string;
}

export type OrderbookGetResponse = Array<Orderbook>;

export interface OrderbookGetParams {
  /**
   * Exchange type
   */
  exchangeType: 'BINANCE' | 'BINANCE_MARGIN' | 'B2C2' | 'WINTERMUTE' | 'BLOCKFILLS' | 'STONEX' | 'CUMBERLAND';

  /**
   * Symbol
   */
  symbol: string;

  /**
   * Limit the number of returned results.
   */
  limit?: number;
}

export declare namespace OrderbookResource {
  export {
    type Orderbook as Orderbook,
    type OrderbookGetResponse as OrderbookGetResponse,
    type OrderbookGetParams as OrderbookGetParams,
  };
}
