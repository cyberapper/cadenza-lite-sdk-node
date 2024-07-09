// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as PortfoliosAPI from './portfolios';

export class Portfolios extends APIResource {
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

export type PortfolioListBalancesResponse =
  Array<PortfolioListBalancesResponse.PortfolioListBalancesResponseItem>;

export namespace PortfolioListBalancesResponse {
  export interface PortfolioListBalancesResponseItem {
    /**
     * List of balances
     */
    balances: Array<PortfolioListBalancesResponseItem.Balance>;

    /**
     * Exchange account ID
     */
    exchangeAccountId: string;
  }

  export namespace PortfolioListBalancesResponseItem {
    export interface Balance {
      /**
       * Asset
       */
      asset: string;

      /**
       * Free balance
       */
      free: number;

      /**
       * Locked balance
       */
      locked: number;

      /**
       * Total balance
       */
      total: number;
    }
  }
}

/**
 * List of account credit info
 */
export type PortfolioListCreditResponse = Array<PortfolioListCreditResponse.PortfolioListCreditResponseItem>;

export namespace PortfolioListCreditResponse {
  /**
   * Exchange Account Credit Info
   */
  export interface PortfolioListCreditResponseItem {
    /**
     * Type of account (SPOT, MARGIN)
     */
    accountType?: 'SPOT' | 'MARGIN';

    /**
     * The amount of credit available to the account from the broker or exchange
     */
    credit?: number;

    /**
     * The percentage of the available credit that has been used
     */
    creditUtilizationPercentage?: number;

    currency?: string;

    exchangeAccountId?: string;

    /**
     * Exchange type
     */
    exchangeType?: 'BINANCE' | 'BINANCE_MARGIN' | 'B2C2' | 'WINTERMUTE' | 'BLOCKFILLS' | 'STONEX';

    /**
     * The amount of collateral that the investor has deposited in the account to cover
     * potential losses
     */
    margin?: number;

    /**
     * The amount of money borrowed from the broker to purchase securities
     */
    marginLoan?: number;

    /**
     * The amount of collateral required to maintain the current positions
     */
    marginRequirement?: number;

    /**
     * The extent to which the available margin is being utilized
     */
    marginUsage?: number;

    /**
     * The percentage of the total buying power that is being utilized
     */
    marginUtilizationPercentage?: number;

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
  }
}

export type PortfolioListPositionsResponse =
  Array<PortfolioListPositionsResponse.PortfolioListPositionsResponseItem>;

export namespace PortfolioListPositionsResponse {
  export interface PortfolioListPositionsResponseItem {
    /**
     * Exchange account ID
     */
    exchangeAccountId?: string;

    /**
     * List of positions
     */
    positions?: Array<PortfolioListPositionsResponseItem.Position>;
  }

  export namespace PortfolioListPositionsResponseItem {
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

export namespace Portfolios {
  export import PortfolioListBalancesResponse = PortfoliosAPI.PortfolioListBalancesResponse;
  export import PortfolioListCreditResponse = PortfoliosAPI.PortfolioListCreditResponse;
  export import PortfolioListPositionsResponse = PortfoliosAPI.PortfolioListPositionsResponse;
  export import PortfolioListBalancesParams = PortfoliosAPI.PortfolioListBalancesParams;
  export import PortfolioListCreditParams = PortfoliosAPI.PortfolioListCreditParams;
  export import PortfolioListPositionsParams = PortfoliosAPI.PortfolioListPositionsParams;
}
