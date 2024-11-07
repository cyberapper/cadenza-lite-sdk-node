// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as OrderAPI from './order';
import { Offset, type OffsetParams } from '../../pagination';

export class ExecutionReport extends APIResource {
  /**
   * Quote will give the best quote from all available exchange accounts
   */
  list(
    query?: ExecutionReportListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ExecutionReportsOffset, ExecutionReport>;
  list(options?: Core.RequestOptions): Core.PagePromise<ExecutionReportsOffset, ExecutionReport>;
  list(
    query: ExecutionReportListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ExecutionReportsOffset, ExecutionReport> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/api/v2/trading/listExecutionReports', ExecutionReportsOffset, {
      query,
      ...options,
    });
  }

  /**
   * Quote will give the best quote from all available exchange accounts
   */
  getQuoteExecutionReport(
    query?: ExecutionReportGetQuoteExecutionReportParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExecutionReport>;
  getQuoteExecutionReport(options?: Core.RequestOptions): Core.APIPromise<ExecutionReport>;
  getQuoteExecutionReport(
    query: ExecutionReportGetQuoteExecutionReportParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExecutionReport> {
    if (isRequestOptions(query)) {
      return this.getQuoteExecutionReport({}, query);
    }
    return this._client.get('/api/v2/trading/getQuoteExecutionReport', { query, ...options });
  }
}

export class ExecutionReportsOffset extends Offset<ExecutionReport> {}

export interface ExecutionReport {
  /**
   * Base currency
   */
  baseCurrency: string;

  /**
   * Cost, the total cost of the quote
   */
  cost: number;

  /**
   * Create time of the quote
   */
  createdAt: number;

  /**
   * Filled quantity, the quantity of the base currency executed
   */
  filled: number;

  /**
   * Quote currency
   */
  quoteCurrency: string;

  /**
   * Route policy. For PRIORITY, the order request will be routed to the exchange
   * account with the highest priority. For QUOTE, the system will execute the
   * execution plan based on the quote. Order request with route policy QUOTE will
   * only accept two parameters, quoteRequestId and priceSlippageTolerance
   */
  routePolicy: 'PRIORITY' | 'QUOTE';

  /**
   * Status of the quote execution, should only have SUBMITTED, ACCEPTED,
   * PARTIALLY_FILLED, FILLED, EXPIRED. the final status of the quote execution
   * should be either FILLED or EXPIRED
   */
  status:
    | 'SUBMITTED'
    | 'ACCEPTED'
    | 'OPEN'
    | 'PARTIALLY_FILLED'
    | 'FILLED'
    | 'CANCELED'
    | 'PENDING_CANCEL'
    | 'REJECTED'
    | 'EXPIRED'
    | 'REVOKED';

  /**
   * Last updated time of the quote execution
   */
  updatedAt: number;

  /**
   * Execution Report ID
   */
  id?: string;

  /**
   * List of executions to fulfill the order, the order status should only have
   * FILLED, REJECTED, or EXPIRED
   */
  executions?: Array<OrderAPI.Order>;

  /**
   * Fees
   */
  fees?: Array<ExecutionReport.Fee>;

  order?: OrderAPI.Order;
}

export namespace ExecutionReport {
  export interface Fee {
    /**
     * Asset
     */
    asset?: string;

    /**
     * Quantity
     */
    quantity?: number;
  }
}

export interface QuoteExecutionReport extends ExecutionReport {
  /**
   * Quote request ID
   */
  quoteRequestId: string;

  /**
   * Expiration time of the quote
   */
  validUntil: number;
}

export interface ExecutionReportListParams extends OffsetParams {
  /**
   * Return records in ascending order
   */
  ascending?: boolean;

  /**
   * End time (in unix milliseconds)
   */
  endTime?: number;

  /**
   * Quote Request ID
   */
  quoteRequestId?: string;

  /**
   * Start time (in unix milliseconds)
   */
  startTime?: number;
}

export interface ExecutionReportGetQuoteExecutionReportParams {
  /**
   * Quote Request ID
   */
  quoteRequestId?: string;
}

ExecutionReport.ExecutionReportsOffset = ExecutionReportsOffset;

export declare namespace ExecutionReport {
  export {
    type ExecutionReport as ExecutionReport,
    type QuoteExecutionReport as QuoteExecutionReport,
    ExecutionReportsOffset as ExecutionReportsOffset,
    type ExecutionReportListParams as ExecutionReportListParams,
    type ExecutionReportGetQuoteExecutionReportParams as ExecutionReportGetQuoteExecutionReportParams,
  };
}
