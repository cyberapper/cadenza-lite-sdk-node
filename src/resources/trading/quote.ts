// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class QuoteResource extends APIResource {
  /**
   * Quote will give the best quote from all available exchange accounts
   */
  post(body: QuotePostParams, options?: Core.RequestOptions): Core.APIPromise<QuotePostResponse> {
    return this._client.post('/api/v2/trading/fetchQuotes', { body, ...options });
  }

  /**
   * Quote will give the best quote from all available exchange accounts
   */
  requestForQuote(
    body: QuoteRequestForQuoteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QuoteRequestForQuoteResponse> {
    return this._client.post('/api/v2/trading/fetchQuotes', { body, ...options });
  }
}

export interface Quote {
  /**
   * Base currency
   */
  baseCurrency: string;

  /**
   * Quote currency
   */
  quoteCurrency: string;

  /**
   * Quote request ID
   */
  quoteRequestId: string;

  /**
   * deprecated, alias of createdAt, Create time of the quote
   */
  timestamp: number;

  /**
   * deprecated, alias of expiredAtExpiration time of the quote
   */
  validUntil: number;

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
   * Create time of the quote
   */
  createdAt?: number;

  /**
   * Exchange Account ID
   */
  exchangeAccountId?: string;

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

  /**
   * Expiration time of the quote
   */
  expiredAt?: number;
}

export interface QuoteRequest {
  /**
   * Base currency is the currency you want to buy or sell
   */
  baseCurrency: string;

  /**
   * Order side, BUY or SELL
   */
  orderSide: string;

  /**
   * Quote currency is the currency you want to pay or receive, and the price of the
   * base currency is quoted in the quote currency
   */
  quoteCurrency: string;

  /**
   * The identifier for the exchange account
   */
  exchangeAccountId?: string;

  /**
   * Amount of the base currency
   */
  quantity?: number;

  /**
   * Amount of the quote currency
   */
  quoteQuantity?: number;
}

export type QuotePostResponse = Array<Quote>;

export type QuoteRequestForQuoteResponse = Array<Quote>;

export interface QuotePostParams {
  /**
   * Base currency is the currency you want to buy or sell
   */
  baseCurrency: string;

  /**
   * Order side, BUY or SELL
   */
  orderSide: string;

  /**
   * Quote currency is the currency you want to pay or receive, and the price of the
   * base currency is quoted in the quote currency
   */
  quoteCurrency: string;

  /**
   * The identifier for the exchange account
   */
  exchangeAccountId?: string;

  /**
   * Amount of the base currency
   */
  quantity?: number;

  /**
   * Amount of the quote currency
   */
  quoteQuantity?: number;
}

export interface QuoteRequestForQuoteParams {
  /**
   * Base currency is the currency you want to buy or sell
   */
  baseCurrency: string;

  /**
   * Order side, BUY or SELL
   */
  orderSide: string;

  /**
   * Quote currency is the currency you want to pay or receive, and the price of the
   * base currency is quoted in the quote currency
   */
  quoteCurrency: string;

  /**
   * The identifier for the exchange account
   */
  exchangeAccountId?: string;

  /**
   * Amount of the base currency
   */
  quantity?: number;

  /**
   * Amount of the quote currency
   */
  quoteQuantity?: number;
}

export declare namespace QuoteResource {
  export {
    type Quote as Quote,
    type QuoteRequest as QuoteRequest,
    type QuotePostResponse as QuotePostResponse,
    type QuoteRequestForQuoteResponse as QuoteRequestForQuoteResponse,
    type QuotePostParams as QuotePostParams,
    type QuoteRequestForQuoteParams as QuoteRequestForQuoteParams,
  };
}
