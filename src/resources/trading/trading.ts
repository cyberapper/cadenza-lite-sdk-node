// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ExecutionReportAPI from './execution-report';
import {
  ExecutionReport,
  ExecutionReportGetQuoteExecutionReportParams,
  ExecutionReportListParams,
  ExecutionReportsOffset,
  QuoteExecutionReport,
} from './execution-report';
import * as OrderAPI from './order';
import {
  CancelOrderRequest,
  Order,
  OrderCancelParams,
  OrderCreateParams,
  OrderCreateResponse,
  OrderListParams,
  OrderResource,
  OrdersOffset,
  PlaceOrderRequest,
} from './order';
import * as QuoteAPI from './quote';
import {
  Quote,
  QuotePostParams,
  QuotePostResponse,
  QuoteRequest,
  QuoteRequestForQuoteParams,
  QuoteRequestForQuoteResponse,
  QuoteResource,
} from './quote';

export class Trading extends APIResource {
  order: OrderAPI.OrderResource = new OrderAPI.OrderResource(this._client);
  quote: QuoteAPI.QuoteResource = new QuoteAPI.QuoteResource(this._client);
  executionReport: ExecutionReportAPI.ExecutionReport = new ExecutionReportAPI.ExecutionReport(this._client);
}

Trading.OrderResource = OrderResource;
Trading.OrdersOffset = OrdersOffset;
Trading.QuoteResource = QuoteResource;
Trading.ExecutionReportsOffset = ExecutionReportsOffset;

export declare namespace Trading {
  export {
    OrderResource as OrderResource,
    type CancelOrderRequest as CancelOrderRequest,
    type Order as Order,
    type PlaceOrderRequest as PlaceOrderRequest,
    type OrderCreateResponse as OrderCreateResponse,
    OrdersOffset as OrdersOffset,
    type OrderCreateParams as OrderCreateParams,
    type OrderListParams as OrderListParams,
    type OrderCancelParams as OrderCancelParams,
  };

  export {
    QuoteResource as QuoteResource,
    type Quote as Quote,
    type QuoteRequest as QuoteRequest,
    type QuotePostResponse as QuotePostResponse,
    type QuoteRequestForQuoteResponse as QuoteRequestForQuoteResponse,
    type QuotePostParams as QuotePostParams,
    type QuoteRequestForQuoteParams as QuoteRequestForQuoteParams,
  };

  export {
    type ExecutionReport as ExecutionReport,
    type QuoteExecutionReport as QuoteExecutionReport,
    ExecutionReportsOffset as ExecutionReportsOffset,
    type ExecutionReportListParams as ExecutionReportListParams,
    type ExecutionReportGetQuoteExecutionReportParams as ExecutionReportGetQuoteExecutionReportParams,
  };
}
