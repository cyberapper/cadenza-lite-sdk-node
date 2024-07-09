// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as TradesAPI from './trades';
import { Offset, type OffsetParams } from '../pagination';

export class Trades extends APIResource {
  /**
   * Cancel order. If the order is already filled, it will return an error.
   */
  cancelOrder(
    body: TradeCancelOrderParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TradeCancelOrderResponse> {
    return this._client.post('/api/v2/trading/cancelOrder', { body, ...options });
  }

  /**
   * Quote will give the best quote from all available exchange accounts
   */
  fetchQuotes(
    body: TradeFetchQuotesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TradeFetchQuotesResponse> {
    return this._client.post('/api/v2/trading/fetchQuotes', { body, ...options });
  }

  /**
   * Quote will give the best quote from all available exchange accounts
   */
  getQuoteExecutionReport(
    body: TradeGetQuoteExecutionReportParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TradeGetQuoteExecutionReportResponse> {
    return this._client.post('/api/v2/trading/getQuoteExecutionReport', { body, ...options });
  }

  /**
   * List orders
   */
  listOrders(
    query?: TradeListOrdersParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TradeListOrdersResponsesOffset, TradeListOrdersResponse>;
  listOrders(
    options?: Core.RequestOptions,
  ): Core.PagePromise<TradeListOrdersResponsesOffset, TradeListOrdersResponse>;
  listOrders(
    query: TradeListOrdersParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<TradeListOrdersResponsesOffset, TradeListOrdersResponse> {
    if (isRequestOptions(query)) {
      return this.listOrders({}, query);
    }
    return this._client.getAPIList('/api/v2/trading/listOrders', TradeListOrdersResponsesOffset, {
      query,
      ...options,
    });
  }

  /**
   * Place order
   */
  placeOrder(
    params?: TradePlaceOrderParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TradePlaceOrderResponse>;
  placeOrder(options?: Core.RequestOptions): Core.APIPromise<TradePlaceOrderResponse>;
  placeOrder(
    params: TradePlaceOrderParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TradePlaceOrderResponse> {
    if (isRequestOptions(params)) {
      return this.placeOrder({}, params);
    }
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/api/v2/trading/placeOrder', {
      body,
      ...options,
      headers: {
        ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * Set the priority of exchanges
   */
  setExchangePriority(
    body: TradeSetExchangePriorityParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TradeSetExchangePriorityResponse> {
    return this._client.post('/api/v2/exchange/setExchangePriority', { body, ...options });
  }
}

export class TradeListOrdersResponsesOffset extends Offset<TradeListOrdersResponse> {}

export interface TradeCancelOrderResponse {
  /**
   * The total cost of this order.
   */
  cost: number;

  /**
   * Created timestamp
   */
  createdAt: number;

  /**
   * Exchange account ID
   */
  exchangeAccountId: string;

  /**
   * Exchange type
   */
  exchangeType: 'BINANCE' | 'BINANCE_MARGIN' | 'B2C2' | 'WINTERMUTE' | 'BLOCKFILLS' | 'STONEX';

  /**
   * The quantity of this order that has been filled.
   */
  filled: number;

  /**
   * Order side
   */
  orderSide: 'BUY' | 'SELL';

  /**
   * Order type
   */
  orderType:
    | 'MARKET'
    | 'LIMIT'
    | 'STOP_LOSS'
    | 'STOP_LOSS_LIMIT'
    | 'TAKE_PROFIT'
    | 'TAKE_PROFIT_LIMIT'
    | 'QUOTED';

  /**
   * Quantity
   */
  quantity: number;

  /**
   * Order status
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
   * Symbol
   */
  symbol: string;

  /**
   * Time in force
   */
  timeInForce:
    | 'DAY'
    | 'GTC'
    | 'GTX'
    | 'GTD'
    | 'OPG'
    | 'CLS'
    | 'IOC'
    | 'FOK'
    | 'GFA'
    | 'GFS'
    | 'GTM'
    | 'MOO'
    | 'MOC'
    | 'EXT';

  /**
   * Last updated timestamp
   */
  updatedAt: number;

  /**
   * Fee
   */
  fee?: number;

  /**
   * Fee currency
   */
  feeCurrency?: string;

  orderId?: string;

  /**
   * Position ID
   */
  positionId?: string;

  /**
   * Price
   */
  price?: number;

  /**
   * Quote Quantity
   */
  quoteQuantity?: number;

  /**
   * Tenant ID
   */
  tenantId?: string;

  /**
   * User ID
   */
  userId?: string;
}

export type TradeFetchQuotesResponse = Array<TradeFetchQuotesResponse.TradeFetchQuotesResponseItem>;

export namespace TradeFetchQuotesResponse {
  export interface TradeFetchQuotesResponseItem {
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

    orderCandidates?: Array<TradeFetchQuotesResponseItem.OrderCandidate>;
  }

  export namespace TradeFetchQuotesResponseItem {
    export interface OrderCandidate {
      /**
       * Exchange account ID
       */
      exchangeAccountId?: string;

      /**
       * Order side
       */
      orderSide?: 'BUY' | 'SELL';

      /**
       * Order type
       */
      orderType?:
        | 'MARKET'
        | 'LIMIT'
        | 'STOP_LOSS'
        | 'STOP_LOSS_LIMIT'
        | 'TAKE_PROFIT'
        | 'TAKE_PROFIT_LIMIT'
        | 'QUOTED';

      /**
       * Quantity
       */
      quantity?: number;

      /**
       * Quote Quantity
       */
      quoteQuantity?: number;

      /**
       * Quote request ID
       */
      quoteRequestId?: string;

      /**
       * Route policy. For PRIORITY, the order request will be routed to the exchange
       * account with the highest priority. For QUOTE, the system will execute the
       * execution plan based on the quote. Order request with route policy QUOTE will
       * only accept two parameters, quoteRequestId and priceSlippageTolerance
       */
      routePolicy?: 'PRIORITY' | 'QUOTE';

      /**
       * Symbol
       */
      symbol?: string;
    }
  }
}

export interface TradeGetQuoteExecutionReportResponse {
  /**
   * Base currency
   */
  baseCurrency: string;

  /**
   * Create time of the quote
   */
  createdAt: number;

  /**
   * Quote currency
   */
  quoteCurrency: string;

  /**
   * Quote request ID
   */
  quoteRequestId: string;

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
   * Expiration time of the quote
   */
  validUntil: number;

  /**
   * Order request ID, Client Order ID
   */
  clOrdId?: string;

  /**
   * Cost, the total cost of the quote
   */
  cost?: number;

  /**
   * List of executions to fulfill the order, the order status should only have
   * FILLED, REJECTED, or EXPIRED
   */
  executions?: Array<TradeGetQuoteExecutionReportResponse.Execution>;

  /**
   * Fees
   */
  fees?: Array<TradeGetQuoteExecutionReportResponse.Fee>;

  /**
   * Filled quantity, the quantity of the base currency executed
   */
  filled?: number;

  order?: TradeGetQuoteExecutionReportResponse.Order;

  /**
   * Route policy. For PRIORITY, the order request will be routed to the exchange
   * account with the highest priority. For QUOTE, the system will execute the
   * execution plan based on the quote. Order request with route policy QUOTE will
   * only accept two parameters, quoteRequestId and priceSlippageTolerance
   */
  routePolicy?: 'PRIORITY' | 'QUOTE';
}

export namespace TradeGetQuoteExecutionReportResponse {
  export interface Execution {
    /**
     * The total cost of this order.
     */
    cost: number;

    /**
     * Created timestamp
     */
    createdAt: number;

    /**
     * Exchange account ID
     */
    exchangeAccountId: string;

    /**
     * Exchange type
     */
    exchangeType: 'BINANCE' | 'BINANCE_MARGIN' | 'B2C2' | 'WINTERMUTE' | 'BLOCKFILLS' | 'STONEX';

    /**
     * The quantity of this order that has been filled.
     */
    filled: number;

    /**
     * Order side
     */
    orderSide: 'BUY' | 'SELL';

    /**
     * Order type
     */
    orderType:
      | 'MARKET'
      | 'LIMIT'
      | 'STOP_LOSS'
      | 'STOP_LOSS_LIMIT'
      | 'TAKE_PROFIT'
      | 'TAKE_PROFIT_LIMIT'
      | 'QUOTED';

    /**
     * Quantity
     */
    quantity: number;

    /**
     * Order status
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
     * Symbol
     */
    symbol: string;

    /**
     * Time in force
     */
    timeInForce:
      | 'DAY'
      | 'GTC'
      | 'GTX'
      | 'GTD'
      | 'OPG'
      | 'CLS'
      | 'IOC'
      | 'FOK'
      | 'GFA'
      | 'GFS'
      | 'GTM'
      | 'MOO'
      | 'MOC'
      | 'EXT';

    /**
     * Last updated timestamp
     */
    updatedAt: number;

    /**
     * Fee
     */
    fee?: number;

    /**
     * Fee currency
     */
    feeCurrency?: string;

    orderId?: string;

    /**
     * Position ID
     */
    positionId?: string;

    /**
     * Price
     */
    price?: number;

    /**
     * Quote Quantity
     */
    quoteQuantity?: number;

    /**
     * Tenant ID
     */
    tenantId?: string;

    /**
     * User ID
     */
    userId?: string;
  }

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

  export interface Order {
    /**
     * The total cost of this order.
     */
    cost: number;

    /**
     * Created timestamp
     */
    createdAt: number;

    /**
     * Exchange account ID
     */
    exchangeAccountId: string;

    /**
     * Exchange type
     */
    exchangeType: 'BINANCE' | 'BINANCE_MARGIN' | 'B2C2' | 'WINTERMUTE' | 'BLOCKFILLS' | 'STONEX';

    /**
     * The quantity of this order that has been filled.
     */
    filled: number;

    /**
     * Order side
     */
    orderSide: 'BUY' | 'SELL';

    /**
     * Order type
     */
    orderType:
      | 'MARKET'
      | 'LIMIT'
      | 'STOP_LOSS'
      | 'STOP_LOSS_LIMIT'
      | 'TAKE_PROFIT'
      | 'TAKE_PROFIT_LIMIT'
      | 'QUOTED';

    /**
     * Quantity
     */
    quantity: number;

    /**
     * Order status
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
     * Symbol
     */
    symbol: string;

    /**
     * Time in force
     */
    timeInForce:
      | 'DAY'
      | 'GTC'
      | 'GTX'
      | 'GTD'
      | 'OPG'
      | 'CLS'
      | 'IOC'
      | 'FOK'
      | 'GFA'
      | 'GFS'
      | 'GTM'
      | 'MOO'
      | 'MOC'
      | 'EXT';

    /**
     * Last updated timestamp
     */
    updatedAt: number;

    /**
     * Fee
     */
    fee?: number;

    /**
     * Fee currency
     */
    feeCurrency?: string;

    orderId?: string;

    /**
     * Position ID
     */
    positionId?: string;

    /**
     * Price
     */
    price?: number;

    /**
     * Quote Quantity
     */
    quoteQuantity?: number;

    /**
     * Tenant ID
     */
    tenantId?: string;

    /**
     * User ID
     */
    userId?: string;
  }
}

export interface TradeListOrdersResponse {
  /**
   * The total cost of this order.
   */
  cost: number;

  /**
   * Created timestamp
   */
  createdAt: number;

  /**
   * Exchange account ID
   */
  exchangeAccountId: string;

  /**
   * Exchange type
   */
  exchangeType: 'BINANCE' | 'BINANCE_MARGIN' | 'B2C2' | 'WINTERMUTE' | 'BLOCKFILLS' | 'STONEX';

  /**
   * The quantity of this order that has been filled.
   */
  filled: number;

  /**
   * Order side
   */
  orderSide: 'BUY' | 'SELL';

  /**
   * Order type
   */
  orderType:
    | 'MARKET'
    | 'LIMIT'
    | 'STOP_LOSS'
    | 'STOP_LOSS_LIMIT'
    | 'TAKE_PROFIT'
    | 'TAKE_PROFIT_LIMIT'
    | 'QUOTED';

  /**
   * Quantity
   */
  quantity: number;

  /**
   * Order status
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
   * Symbol
   */
  symbol: string;

  /**
   * Time in force
   */
  timeInForce:
    | 'DAY'
    | 'GTC'
    | 'GTX'
    | 'GTD'
    | 'OPG'
    | 'CLS'
    | 'IOC'
    | 'FOK'
    | 'GFA'
    | 'GFS'
    | 'GTM'
    | 'MOO'
    | 'MOC'
    | 'EXT';

  /**
   * Last updated timestamp
   */
  updatedAt: number;

  /**
   * Fee
   */
  fee?: number;

  /**
   * Fee currency
   */
  feeCurrency?: string;

  orderId?: string;

  /**
   * Position ID
   */
  positionId?: string;

  /**
   * Price
   */
  price?: number;

  /**
   * Quote Quantity
   */
  quoteQuantity?: number;

  /**
   * Tenant ID
   */
  tenantId?: string;

  /**
   * User ID
   */
  userId?: string;
}

export type TradePlaceOrderResponse = Array<TradePlaceOrderResponse.TradePlaceOrderResponseItem>;

export namespace TradePlaceOrderResponse {
  export interface TradePlaceOrderResponseItem {
    /**
     * The total cost of this order.
     */
    cost: number;

    /**
     * Created timestamp
     */
    createdAt: number;

    /**
     * Exchange account ID
     */
    exchangeAccountId: string;

    /**
     * Exchange type
     */
    exchangeType: 'BINANCE' | 'BINANCE_MARGIN' | 'B2C2' | 'WINTERMUTE' | 'BLOCKFILLS' | 'STONEX';

    /**
     * The quantity of this order that has been filled.
     */
    filled: number;

    /**
     * Order side
     */
    orderSide: 'BUY' | 'SELL';

    /**
     * Order type
     */
    orderType:
      | 'MARKET'
      | 'LIMIT'
      | 'STOP_LOSS'
      | 'STOP_LOSS_LIMIT'
      | 'TAKE_PROFIT'
      | 'TAKE_PROFIT_LIMIT'
      | 'QUOTED';

    /**
     * Quantity
     */
    quantity: number;

    /**
     * Order status
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
     * Symbol
     */
    symbol: string;

    /**
     * Time in force
     */
    timeInForce:
      | 'DAY'
      | 'GTC'
      | 'GTX'
      | 'GTD'
      | 'OPG'
      | 'CLS'
      | 'IOC'
      | 'FOK'
      | 'GFA'
      | 'GFS'
      | 'GTM'
      | 'MOO'
      | 'MOC'
      | 'EXT';

    /**
     * Last updated timestamp
     */
    updatedAt: number;

    /**
     * Fee
     */
    fee?: number;

    /**
     * Fee currency
     */
    feeCurrency?: string;

    orderId?: string;

    /**
     * Position ID
     */
    positionId?: string;

    /**
     * Price
     */
    price?: number;

    /**
     * Quote Quantity
     */
    quoteQuantity?: number;

    /**
     * Tenant ID
     */
    tenantId?: string;

    /**
     * User ID
     */
    userId?: string;
  }
}

export interface TradeSetExchangePriorityResponse {
  data?: string;
}

export interface TradeCancelOrderParams {
  /**
   * Order ID
   */
  orderId: string;
}

export interface TradeFetchQuotesParams {
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

export interface TradeGetQuoteExecutionReportParams {
  /**
   * Quote request ID
   */
  quoteRequestId: string;
}

export interface TradeListOrdersParams extends OffsetParams {
  /**
   * End time (in unix milliseconds)
   */
  endTime?: number;

  /**
   * Exchange account ID
   */
  exchangeAccountId?: string;

  /**
   * Order ID
   */
  orderId?: string;

  /**
   * Order status
   */
  orderStatus?:
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
   * Start time (in unix milliseconds)
   */
  startTime?: number;

  /**
   * Symbol
   */
  symbol?: string;

  /**
   * Tenant ID
   */
  tenantId?: string;
}

export interface TradePlaceOrderParams {
  /**
   * Body param: Exchange account ID
   */
  exchangeAccountId?: string;

  /**
   * Body param: Levarage
   */
  leverage?: number;

  /**
   * Body param: Order side
   */
  orderSide?: 'BUY' | 'SELL';

  /**
   * Body param: Order type
   */
  orderType?:
    | 'MARKET'
    | 'LIMIT'
    | 'STOP_LOSS'
    | 'STOP_LOSS_LIMIT'
    | 'TAKE_PROFIT'
    | 'TAKE_PROFIT_LIMIT'
    | 'QUOTED';

  /**
   * Body param: Position ID for closing position in margin trading
   */
  positionId?: string;

  /**
   * Body param: Price
   */
  price?: number;

  /**
   * Body param: Price slippage tolerance, range: [0, 0.1] with 2 decimal places
   */
  priceSlippageTolerance?: number;

  /**
   * Body param: Priority list of exchange account ID in descending order
   */
  priority?: Array<string>;

  /**
   * Body param: Quantity. One of quantity or quoteQuantity must be provided. If both
   * is provided, only quantity will be used.
   */
  quantity?: number;

  /**
   * Body param: Quote ID used by exchange for RFQ, e.g. WINTERMUTE need this field
   * to execute QUOTED order
   */
  quoteId?: string;

  /**
   * Body param: Quote Quantity
   */
  quoteQuantity?: number;

  /**
   * Body param: Quote request ID
   */
  quoteRequestId?: string;

  /**
   * Body param: Route policy. For PRIORITY, the order request will be routed to the
   * exchange account with the highest priority. For QUOTE, the system will execute
   * the execution plan based on the quote. Order request with route policy QUOTE
   * will only accept two parameters, quoteRequestId and priceSlippageTolerance
   */
  routePolicy?: 'PRIORITY' | 'QUOTE';

  /**
   * Body param: Symbol
   */
  symbol?: string;

  /**
   * Body param: Tenant ID
   */
  tenantId?: string;

  /**
   * Body param: Time in force
   */
  timeInForce?:
    | 'DAY'
    | 'GTC'
    | 'GTX'
    | 'GTD'
    | 'OPG'
    | 'CLS'
    | 'IOC'
    | 'FOK'
    | 'GFA'
    | 'GFS'
    | 'GTM'
    | 'MOO'
    | 'MOC'
    | 'EXT';

  /**
   * Header param: Idempotency key is used to ensure that the same request is not
   * processed more than once. If the same request is received again, the server will
   * return the same response as the first time.
   */
  'Idempotency-Key'?: string;
}

export interface TradeSetExchangePriorityParams {
  /**
   * Priority list of exchanges in descending order
   */
  priority: Array<string>;
}

export namespace Trades {
  export import TradeCancelOrderResponse = TradesAPI.TradeCancelOrderResponse;
  export import TradeFetchQuotesResponse = TradesAPI.TradeFetchQuotesResponse;
  export import TradeGetQuoteExecutionReportResponse = TradesAPI.TradeGetQuoteExecutionReportResponse;
  export import TradeListOrdersResponse = TradesAPI.TradeListOrdersResponse;
  export import TradePlaceOrderResponse = TradesAPI.TradePlaceOrderResponse;
  export import TradeSetExchangePriorityResponse = TradesAPI.TradeSetExchangePriorityResponse;
  export import TradeListOrdersResponsesOffset = TradesAPI.TradeListOrdersResponsesOffset;
  export import TradeCancelOrderParams = TradesAPI.TradeCancelOrderParams;
  export import TradeFetchQuotesParams = TradesAPI.TradeFetchQuotesParams;
  export import TradeGetQuoteExecutionReportParams = TradesAPI.TradeGetQuoteExecutionReportParams;
  export import TradeListOrdersParams = TradesAPI.TradeListOrdersParams;
  export import TradePlaceOrderParams = TradesAPI.TradePlaceOrderParams;
  export import TradeSetExchangePriorityParams = TradesAPI.TradeSetExchangePriorityParams;
}
