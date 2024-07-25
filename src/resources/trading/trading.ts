// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ExecutionReportAPI from './execution-report';
import * as OrderAPI from './order';
import * as QuoteAPI from './quote';

export class Trading extends APIResource {
  order: OrderAPI.OrderResource = new OrderAPI.OrderResource(this._client);
  quote: QuoteAPI.QuoteResource = new QuoteAPI.QuoteResource(this._client);
  executionReport: ExecutionReportAPI.ExecutionReport = new ExecutionReportAPI.ExecutionReport(this._client);
}

export namespace Trading {
  export import OrderResource = OrderAPI.OrderResource;
  export import Order = OrderAPI.Order;
  export import OrderCreateResponse = OrderAPI.OrderCreateResponse;
  export import OrdersOffset = OrderAPI.OrdersOffset;
  export import OrderCreateParams = OrderAPI.OrderCreateParams;
  export import OrderListParams = OrderAPI.OrderListParams;
  export import OrderCancelParams = OrderAPI.OrderCancelParams;
  export import QuoteResource = QuoteAPI.QuoteResource;
  export import Quote = QuoteAPI.Quote;
  export import QuoteRequestForQuoteResponse = QuoteAPI.QuoteRequestForQuoteResponse;
  export import QuoteRequestForQuoteParams = QuoteAPI.QuoteRequestForQuoteParams;
  export import ExecutionReport = ExecutionReportAPI.ExecutionReport;
  export import QuoteExecutionReport = ExecutionReportAPI.QuoteExecutionReport;
  export import ExecutionReportListParams = ExecutionReportAPI.ExecutionReportListParams;
  export import ExecutionReportGetQuoteExecutionReportParams = ExecutionReportAPI.ExecutionReportGetQuoteExecutionReportParams;
}
