// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as PortfolioAPI from './portfolio';

export class Portfolio extends APIResource {
  /**
   * List Portfolio Summary
   */
  list(query?: PortfolioListParams, options?: Core.RequestOptions): Core.APIPromise<PortfolioListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<PortfolioListResponse>;
  list(
    query: PortfolioListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PortfolioListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/v2/portfolio/listSummaries', { query, ...options });
  }

  /**
   * List balances
   */
  listBalances(
    query?: PortfolioListBalancesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PortfolioListBalancesResponse>;
  listBalances(options?: Core.RequestOptions): Core.APIPromise<PortfolioListBalancesResponse>;
  listBalances(
    query: PortfolioListBalancesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PortfolioListBalancesResponse> {
    if (isRequestOptions(query)) {
      return this.listBalances({}, query);
    }
    return this._client.get('/api/v2/portfolio/listBalances', { query, ...options });
  }

  /**
   * List credit
   */
  listCredit(
    query?: PortfolioListCreditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PortfolioListCreditResponse>;
  listCredit(options?: Core.RequestOptions): Core.APIPromise<PortfolioListCreditResponse>;
  listCredit(
    query: PortfolioListCreditParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PortfolioListCreditResponse> {
    if (isRequestOptions(query)) {
      return this.listCredit({}, query);
    }
    return this._client.get('/api/v2/portfolio/listCredit', { query, ...options });
  }

  /**
   * List positions
   */
  listPositions(
    query?: PortfolioListPositionsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PortfolioListPositionsResponse>;
  listPositions(options?: Core.RequestOptions): Core.APIPromise<PortfolioListPositionsResponse>;
  listPositions(
    query: PortfolioListPositionsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PortfolioListPositionsResponse> {
    if (isRequestOptions(query)) {
      return this.listPositions({}, query);
    }
    return this._client.get('/api/v2/portfolio/listPositions', { query, ...options });
  }
}

export interface ExchangeAccountBalance {
  /**
   * List of balances
   */
  balances: Array<ExchangeAccountBalance.Balance>;

  /**
   * Exchange account ID
   */
  exchangeAccountId: string;
}

export namespace ExchangeAccountBalance {
  export interface Balance {
    /**
     * Asset
     */
    asset: string;

    /**
     * Borrowed balance from exchange
     */
    borrowed?: number;

    /**
     * Free balance
     */
    free?: number;

    /**
     * Locked balance
     */
    locked?: number;

    /**
     * Net Balance, net = total - borrowed
     */
    net?: number;

    /**
     * Total available balance
     */
    total?: number;
  }
}

/**
 * Exchange Account Credit Info
 */
export interface ExchangeAccountCredit {
  /**
   * Type of account (SPOT, MARGIN)
   */
  accountType?: 'SPOT' | 'MARGIN';

  /**
   * The amount of credit available to the account from the broker or exchange
   */
  credit?: number;

  currency?: string;

  exchangeAccountId?: string;

  /**
   * Exchange type
   */
  exchangeType?: 'BINANCE' | 'BINANCE_MARGIN' | 'B2C2' | 'WINTERMUTE' | 'BLOCKFILLS' | 'STONEX';

  /**
   * The maximum leverage the account have
   */
  leverage?: number;

  /**
   * The amount of collateral that the investor has deposited in the account to cover
   * potential losses
   */
  margin?: number;

  /**
   * The rate between equity and margin requirement
   */
  marginLevel?: number;

  /**
   * The amount of money borrowed from the broker to purchase securities
   */
  marginLoan?: number;

  /**
   * The amount of collateral required to maintain the current positions
   */
  marginRequirement?: number;

  /**
   * The rate to which the available margin is being utilized
   */
  marginUsage?: number;

  /**
   * The maximum value of risk exposure that the account can handle, set to manage
   * risk and avoid excessive exposure to market volatility
   */
  maxRiskExposure?: number;

  /**
   * The total value of positions held in the account, indicating the level of market
   * exposure
   */
  riskExposure?: number;

  /**
   * The rate between risk exposure and max risk exposure
   */
  riskExposureRate?: number;
}

export interface ExchangeAccountPortfolio {
  /**
   * Exchange Account Credit Info
   */
  credit: ExchangeAccountCredit;

  /**
   * The unique identifier for the account.
   */
  exchangeAccountId: string;

  /**
   * Exchange type
   */
  exchangeType: 'BINANCE' | 'BINANCE_MARGIN' | 'B2C2' | 'WINTERMUTE' | 'BLOCKFILLS' | 'STONEX';

  /**
   * The timestamp when the portfolio information was updated.
   */
  updatedAt: number;

  balances?: Array<ExchangeAccountPortfolio.Balance>;

  positions?: Array<ExchangeAccountPortfolio.Position>;
}

export namespace ExchangeAccountPortfolio {
  export interface Balance {
    /**
     * Asset
     */
    asset: string;

    /**
     * Borrowed balance from exchange
     */
    borrowed?: number;

    /**
     * Free balance
     */
    free?: number;

    /**
     * Locked balance
     */
    locked?: number;

    /**
     * Net Balance, net = total - borrowed
     */
    net?: number;

    /**
     * Total available balance
     */
    total?: number;
  }

  export interface Position {
    /**
     * Amount
     */
    amount: number;

    /**
     * Position side
     */
    positionSide: 'LONG' | 'SHORT';

    /**
     * Status
     */
    status: 'OPEN';

    /**
     * Symbol
     */
    symbol: string;

    /**
     * Cost
     */
    cost?: number;

    /**
     * Entry price
     */
    entryPrice?: number;
  }
}

export interface ExchangeAccountPosition {
  /**
   * Exchange account ID
   */
  exchangeAccountId?: string;

  /**
   * List of positions
   */
  positions?: Array<ExchangeAccountPosition.Position>;
}

export namespace ExchangeAccountPosition {
  /**
   * List of positions
   */
  export interface Position {
    /**
     * Amount
     */
    amount: number;

    /**
     * Position side
     */
    positionSide: 'LONG' | 'SHORT';

    /**
     * Status
     */
    status: 'OPEN';

    /**
     * Symbol
     */
    symbol: string;

    /**
     * Cost
     */
    cost?: number;

    /**
     * Entry price
     */
    entryPrice?: number;
  }
}

/**
 * List of account portfolio summaries
 */
export type PortfolioListResponse = Array<ExchangeAccountPortfolio>;

export type PortfolioListBalancesResponse = Array<ExchangeAccountBalance>;

/**
 * List of account credit info
 */
export type PortfolioListCreditResponse = Array<ExchangeAccountCredit>;

export type PortfolioListPositionsResponse = Array<ExchangeAccountPosition>;

export interface PortfolioListParams {
  /**
   * Exchange account ID
   */
  exchangeAccountId?: string;

  /**
   * Hide small account
   */
  hideEmptyValue?: boolean;
}

export interface PortfolioListBalancesParams {
  /**
   * Exchange account ID
   */
  exchangeAccountId?: string;

  /**
   * Hide small account
   */
  hideEmptyValue?: boolean;
}

export interface PortfolioListCreditParams {
  /**
   * Exchange account ID
   */
  exchangeAccountId?: string;

  /**
   * Hide small account
   */
  hideEmptyValue?: boolean;
}

export interface PortfolioListPositionsParams {
  /**
   * Exchange account ID
   */
  exchangeAccountId?: string;

  /**
   * Hide small account
   */
  hideEmptyValue?: boolean;
}

export namespace Portfolio {
  export import ExchangeAccountBalance = PortfolioAPI.ExchangeAccountBalance;
  export import ExchangeAccountCredit = PortfolioAPI.ExchangeAccountCredit;
  export import ExchangeAccountPortfolio = PortfolioAPI.ExchangeAccountPortfolio;
  export import ExchangeAccountPosition = PortfolioAPI.ExchangeAccountPosition;
  export import PortfolioListResponse = PortfolioAPI.PortfolioListResponse;
  export import PortfolioListBalancesResponse = PortfolioAPI.PortfolioListBalancesResponse;
  export import PortfolioListCreditResponse = PortfolioAPI.PortfolioListCreditResponse;
  export import PortfolioListPositionsResponse = PortfolioAPI.PortfolioListPositionsResponse;
  export import PortfolioListParams = PortfolioAPI.PortfolioListParams;
  export import PortfolioListBalancesParams = PortfolioAPI.PortfolioListBalancesParams;
  export import PortfolioListCreditParams = PortfolioAPI.PortfolioListCreditParams;
  export import PortfolioListPositionsParams = PortfolioAPI.PortfolioListPositionsParams;
}
