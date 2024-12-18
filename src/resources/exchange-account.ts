// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class ExchangeAccount extends APIResource {
  /**
   * Add exchange account
   */
  create(
    body: ExchangeAccountCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExchangeAccountCreateResponse> {
    return this._client.post('/api/v2/exchange/addExchangeAccount', { body, ...options });
  }

  /**
   * Update exchange account, now only support Binance account API key and secret
   */
  update(
    body: ExchangeAccountUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExchangeAccountUpdateResponse> {
    return this._client.post('/api/v2/exchange/updateExchangeAccount', { body, ...options });
  }

  /**
   * List exchange accounts
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ExchangeAccountListResponse> {
    return this._client.get('/api/v2/exchange/listExchangeAccounts', options);
  }

  /**
   * Remove exchange account, now only support Binance account API key and secret
   */
  remove(
    body: ExchangeAccountRemoveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExchangeAccountRemoveResponse> {
    return this._client.post('/api/v2/exchange/removeExchangeAccount', { body, ...options });
  }

  /**
   * Set the priority of exchanges
   */
  setExchangePriority(
    body: ExchangeAccountSetExchangePriorityParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExchangeAccountSetExchangePriorityResponse> {
    return this._client.post('/api/v2/exchange/setExchangePriority', { body, ...options });
  }
}

export interface ExchangeAccount {
  /**
   * Type of account (SPOT, MARGIN)
   */
  accountType: 'SPOT' | 'MARGIN';

  /**
   * Environment of the exchange account
   */
  environment: 'REAL' | 'SANDBOX' | 'PAPER';

  /**
   * Exchange account ID
   */
  exchangeAccountId: string;

  /**
   * Exchange type
   */
  exchangeType: 'BINANCE' | 'BINANCE_MARGIN' | 'B2C2' | 'WINTERMUTE' | 'BLOCKFILLS' | 'STONEX' | 'CUMBERLAND';

  /**
   * Name of the exchange account
   */
  name: string;

  /**
   * Status of the exchange account
   */
  status: 'ACTIVE' | 'API_ERROR' | 'INVALID_API' | 'API_ISSUE' | 'NOT_TRUSTED' | 'DELETED';
}

export interface ExchangeAccountCreateResponse {
  data?: string;
}

export interface ExchangeAccountUpdateResponse {
  data?: string;
}

export type ExchangeAccountListResponse = Array<ExchangeAccount>;

export interface ExchangeAccountRemoveResponse {
  data?: string;
}

export interface ExchangeAccountSetExchangePriorityResponse {
  data?: string;
}

export interface ExchangeAccountCreateParams {
  /**
   * API key
   */
  apiKey: string;

  /**
   * API secret
   */
  apiSecret: string;

  /**
   * Environment(0 - real, 1 - sandbox)
   */
  environment: 0 | 1;

  /**
   * Exchange account name, Available characters: a-z, A-Z, 0-9, \_, (space)
   */
  exchangeAccountName: string;

  /**
   * Exchange type
   */
  exchangeType: 'BINANCE' | 'BINANCE_MARGIN' | 'B2C2' | 'WINTERMUTE' | 'BLOCKFILLS' | 'STONEX' | 'CUMBERLAND';
}

export interface ExchangeAccountUpdateParams {
  /**
   * Exchange account ID
   */
  exchangeAccountId: string;

  /**
   * API key
   */
  apiKey?: string;

  /**
   * API secret
   */
  apiSecret?: string;

  /**
   * Exchange account name, Available characters: a-z, A-Z, 0-9, \_, (space)
   */
  exchangeAccountName?: string;
}

export interface ExchangeAccountRemoveParams {
  /**
   * Exchange account ID
   */
  exchangeAccountId: string;
}

export interface ExchangeAccountSetExchangePriorityParams {
  /**
   * Priority list of exchanges in descending order
   */
  priority: Array<string>;
}

export declare namespace ExchangeAccount {
  export {
    type ExchangeAccount as ExchangeAccount,
    type ExchangeAccountCreateResponse as ExchangeAccountCreateResponse,
    type ExchangeAccountUpdateResponse as ExchangeAccountUpdateResponse,
    type ExchangeAccountListResponse as ExchangeAccountListResponse,
    type ExchangeAccountRemoveResponse as ExchangeAccountRemoveResponse,
    type ExchangeAccountSetExchangePriorityResponse as ExchangeAccountSetExchangePriorityResponse,
    type ExchangeAccountCreateParams as ExchangeAccountCreateParams,
    type ExchangeAccountUpdateParams as ExchangeAccountUpdateParams,
    type ExchangeAccountRemoveParams as ExchangeAccountRemoveParams,
    type ExchangeAccountSetExchangePriorityParams as ExchangeAccountSetExchangePriorityParams,
  };
}
