// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ExecutionReportAPI from './execution-report';
import * as OrderAPI from './order';

export class ExecutionReport extends APIResource {
  /**
   * Quote will give the best quote from all available exchange accounts
   */
  list(query?: ExecutionReportListParams, options?: Core.RequestOptions): Core.APIPromise<ExecutionReport>;
  list(options?: Core.RequestOptions): Core.APIPromise<ExecutionReport>;
  list(
    query: ExecutionReportListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExecutionReport> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/v2/trading/listExecutionReports', { query, ...options });
  }

  /**
   * Quote will give the best quote from all available exchange accounts
   */
  getQuoteExecutionReport(
    query?: ExecutionReportGetQuoteExecutionReportParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QuoteExecutionReport>;
  getQuoteExecutionReport(options?: Core.RequestOptions): Core.APIPromise<QuoteExecutionReport>;
  getQuoteExecutionReport(
    query: ExecutionReportGetQuoteExecutionReportParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<QuoteExecutionReport> {
    if (isRequestOptions(query)) {
      return this.getQuoteExecutionReport({}, query);
    }
    return this._client.get('/api/v2/trading/getQuoteExecutionReport', { query, ...options });
  }
}

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
   * Order request ID, Client Order ID
   */
  clOrdId?: string;

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

export interface ExecutionReportListParams {
  /**
   * End time (in unix milliseconds)
   */
  endTime?: number;

  /**
   * Limit the number of returned results.
   */
  limit?: number;

  /**
   * Offset of the returned results. Default: 0
   */
  offset?: number;

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

export namespace ExecutionReport {
  export import ExecutionReport = ExecutionReportAPI.ExecutionReport;
  export import QuoteExecutionReport = ExecutionReportAPI.QuoteExecutionReport;
  export import ExecutionReportListParams = ExecutionReportAPI.ExecutionReportListParams;
  export import ExecutionReportGetQuoteExecutionReportParams = ExecutionReportAPI.ExecutionReportGetQuoteExecutionReportParams;
}
