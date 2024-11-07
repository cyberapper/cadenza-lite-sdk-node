// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Portfolio extends APIResource {
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

export interface BalanceEntry {
  /**
   * Asset
   */
  asset: string;

  /**
   * Borrowed balance from exchange
   */
  borrowed: number;

  /**
   * Free balance
   */
  free: number;

  /**
   * Locked balance
   */
  locked: number;

  /**
   * Net Balance, net = total - borrowed
   */
  net: number;

  /**
   * Total available balance
   */
  total: number;
}

export interface ExchangeAccountBalance {
  /**
   * List of balances
   */
  balances: Array<BalanceEntry>;

  /**
   * Exchange account ID
   */
  exchangeAccountId: string;
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

  balances?: Array<BalanceEntry>;

  positions?: Array<PositionEntry>;
}

export interface ExchangeAccountPosition {
  /**
   * Exchange account ID
   */
  exchangeAccountId?: string;

  /**
   * List of positions
   */
  positions?: Array<PositionEntry>;
}

export interface PositionEntry {
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

export type PortfolioListBalancesResponse = Array<ExchangeAccountBalance>;

/**
 * List of account credit info
 */
export type PortfolioListCreditResponse = Array<ExchangeAccountCredit>;

export type PortfolioListPositionsResponse = Array<ExchangeAccountPosition>;

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

export declare namespace Portfolio {
  export {
    type BalanceEntry as BalanceEntry,
    type ExchangeAccountBalance as ExchangeAccountBalance,
    type ExchangeAccountCredit as ExchangeAccountCredit,
    type ExchangeAccountPortfolio as ExchangeAccountPortfolio,
    type ExchangeAccountPosition as ExchangeAccountPosition,
    type PositionEntry as PositionEntry,
    type PortfolioListBalancesResponse as PortfolioListBalancesResponse,
    type PortfolioListCreditResponse as PortfolioListCreditResponse,
    type PortfolioListPositionsResponse as PortfolioListPositionsResponse,
    type PortfolioListBalancesParams as PortfolioListBalancesParams,
    type PortfolioListCreditParams as PortfolioListCreditParams,
    type PortfolioListPositionsParams as PortfolioListPositionsParams,
  };
}
