// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as QuoteAPI from './quote';

export class QuoteResource extends APIResource {
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
   * Create time of the quote
   */
  timestamp: number;

  /**
   * Expiration time of the quote
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
   * Exchange Account ID
   */
  exchangeAccountId?: string;

  /**
   * Exchange type
   */
  exchangeType?: 'BINANCE' | 'BINANCE_MARGIN' | 'B2C2' | 'WINTERMUTE' | 'BLOCKFILLS' | 'STONEX';
}

export type QuoteRequestForQuoteResponse = Array<Quote>;

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

export namespace QuoteResource {
  export import Quote = QuoteAPI.Quote;
  export import QuoteRequestForQuoteResponse = QuoteAPI.QuoteRequestForQuoteResponse;
  export import QuoteRequestForQuoteParams = QuoteAPI.QuoteRequestForQuoteParams;
}
