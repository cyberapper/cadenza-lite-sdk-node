// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as WebhookAPI from './webhook';
import * as PortfolioAPI from './portfolio';
import * as KlineAPI from './market/kline';
import * as OrderbookAPI from './market/orderbook';
import * as ExecutionReportAPI from './trading/execution-report';
import * as OrderAPI from './trading/order';
import * as QuoteAPI from './trading/quote';

export class Webhook extends APIResource {
  /**
   * PubSub Event Handler
   */
  pubsub(body: WebhookPubsubParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/api/v2/webhook/pubsub', { body, ...options });
  }
}

export interface DropCopyExecutionReport extends Event {
  payload?: ExecutionReportAPI.ExecutionReport;
}

export interface DropCopyOrder extends Event {
  payload?: OrderAPI.Order;
}

export interface DropCopyPortfolio extends Event {
  payload?: DropCopyPortfolio.Payload;
}

export namespace DropCopyPortfolio {
  export interface Payload {
    payload?: Payload.Payload;
  }

  export namespace Payload {
    export interface Payload {
      balances: Array<Payload.Balance>;

      /**
       * Exchange Account Credit Info
       */
      credit: PortfolioAPI.ExchangeAccountCredit;

      /**
       * The unique identifier for the account.
       */
      exchangeAccountId: string;

      /**
       * Exchange type
       */
      exchangeType: 'BINANCE' | 'BINANCE_MARGIN' | 'B2C2' | 'WINTERMUTE' | 'BLOCKFILLS' | 'STONEX';

      positions: Array<Payload.Position>;

      /**
       * The timestamp when the portfolio information was updated.
       */
      updatedAt: number;
    }

    export namespace Payload {
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
}

export interface Event {
  /**
   * A unique identifier for the event.
   */
  eventId: string;

  /**
   * The type of the event (e.g., order, executionReport, portfolio, orderBook).
   */
  eventType: string;

  /**
   * The actual data of the event, which varies based on the event type.
   */
  payload:
    | Event.QuoteRequest
    | Event.PlaceOrderRequest
    | Event.CancelOrderRequest
    | QuoteAPI.QuoteWithOrderCandidates
    | OrderAPI.Order
    | ExecutionReportAPI.ExecutionReport
    | Event.ExchangeAccountPortfolio
    | OrderbookAPI.Orderbook
    | Event.Kline;

  /**
   * Unix timestamp in milliseconds when the event was generated.
   */
  timestamp: number;

  /**
   * The source system or module that generated the event.
   */
  source?: string;
}

export namespace Event {
  export interface QuoteRequest {
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

  export interface PlaceOrderRequest {
    /**
     * Exchange account ID
     */
    exchangeAccountId?: string;

    /**
     * Levarage
     */
    leverage?: number;

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
     * Position ID for closing position in margin trading
     */
    positionId?: string;

    /**
     * Price
     */
    price?: number;

    /**
     * Price slippage tolerance, range: [0, 0.1] with 2 decimal places
     */
    priceSlippageTolerance?: number;

    /**
     * Priority list of exchange account ID in descending order
     */
    priority?: Array<string>;

    /**
     * Quantity. One of quantity or quoteQuantity must be provided. If both is
     * provided, only quantity will be used.
     */
    quantity?: number;

    /**
     * Quote ID used by exchange for RFQ, e.g. WINTERMUTE need this field to execute
     * QUOTED order
     */
    quoteId?: string;

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

    /**
     * Tenant ID
     */
    tenantId?: string;

    /**
     * Time in force
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
  }

  export interface CancelOrderRequest {
    /**
     * Order ID
     */
    orderId: string;
  }

  export interface ExchangeAccountPortfolio {
    payload?: ExchangeAccountPortfolio.Payload;
  }

  export namespace ExchangeAccountPortfolio {
    export interface Payload {
      balances: Array<Payload.Balance>;

      /**
       * Exchange Account Credit Info
       */
      credit: PortfolioAPI.ExchangeAccountCredit;

      /**
       * The unique identifier for the account.
       */
      exchangeAccountId: string;

      /**
       * Exchange type
       */
      exchangeType: 'BINANCE' | 'BINANCE_MARGIN' | 'B2C2' | 'WINTERMUTE' | 'BLOCKFILLS' | 'STONEX';

      positions: Array<Payload.Position>;

      /**
       * The timestamp when the portfolio information was updated.
       */
      updatedAt: number;
    }

    export namespace Payload {
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

  export interface Kline {
    candles?: Array<KlineAPI.Ohlcv>;

    /**
     * The unique identifier for the account.
     */
    exchangeAccountId?: string;

    /**
     * Exchange type
     */
    exchangeType?: 'BINANCE' | 'BINANCE_MARGIN' | 'B2C2' | 'WINTERMUTE' | 'BLOCKFILLS' | 'STONEX';

    interval?: '1s' | '1m' | '5m' | '15m' | '30m' | '1h' | '2h' | '1d' | '1w';

    symbol?: string;
  }
}

export interface MarketDataKlines extends Event {
  payload?: MarketDataKlines.Payload;
}

export namespace MarketDataKlines {
  export interface Payload {
    candles?: Array<KlineAPI.Ohlcv>;

    /**
     * The unique identifier for the account.
     */
    exchangeAccountId?: string;

    /**
     * Exchange type
     */
    exchangeType?: 'BINANCE' | 'BINANCE_MARGIN' | 'B2C2' | 'WINTERMUTE' | 'BLOCKFILLS' | 'STONEX';

    interval?: '1s' | '1m' | '5m' | '15m' | '30m' | '1h' | '2h' | '1d' | '1w';

    symbol?: string;
  }
}

export interface MarketDataOrderBook extends Event {
  payload?: OrderbookAPI.Orderbook;
}

export type WebhookPubsubResponse = unknown;

export interface WebhookPubsubParams {
  /**
   * A unique identifier for the event.
   */
  eventId: string;

  /**
   * The type of the event (e.g., order, executionReport, portfolio, orderBook).
   */
  eventType: string;

  /**
   * The actual data of the event, which varies based on the event type.
   */
  payload:
    | WebhookPubsubParams.QuoteRequest
    | WebhookPubsubParams.PlaceOrderRequest
    | WebhookPubsubParams.CancelOrderRequest
    | QuoteAPI.QuoteWithOrderCandidates
    | OrderAPI.Order
    | ExecutionReportAPI.ExecutionReport
    | WebhookPubsubParams.ExchangeAccountPortfolio
    | OrderbookAPI.Orderbook
    | WebhookPubsubParams.Kline;

  /**
   * Unix timestamp in milliseconds when the event was generated.
   */
  timestamp: number;

  /**
   * The source system or module that generated the event.
   */
  source?: string;
}

export namespace WebhookPubsubParams {
  export interface QuoteRequest {
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

  export interface PlaceOrderRequest {
    /**
     * Exchange account ID
     */
    exchangeAccountId?: string;

    /**
     * Levarage
     */
    leverage?: number;

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
     * Position ID for closing position in margin trading
     */
    positionId?: string;

    /**
     * Price
     */
    price?: number;

    /**
     * Price slippage tolerance, range: [0, 0.1] with 2 decimal places
     */
    priceSlippageTolerance?: number;

    /**
     * Priority list of exchange account ID in descending order
     */
    priority?: Array<string>;

    /**
     * Quantity. One of quantity or quoteQuantity must be provided. If both is
     * provided, only quantity will be used.
     */
    quantity?: number;

    /**
     * Quote ID used by exchange for RFQ, e.g. WINTERMUTE need this field to execute
     * QUOTED order
     */
    quoteId?: string;

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

    /**
     * Tenant ID
     */
    tenantId?: string;

    /**
     * Time in force
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
  }

  export interface CancelOrderRequest {
    /**
     * Order ID
     */
    orderId: string;
  }

  export interface ExchangeAccountPortfolio {
    payload?: ExchangeAccountPortfolio.Payload;
  }

  export namespace ExchangeAccountPortfolio {
    export interface Payload {
      balances: Array<Payload.Balance>;

      /**
       * Exchange Account Credit Info
       */
      credit: PortfolioAPI.ExchangeAccountCredit;

      /**
       * The unique identifier for the account.
       */
      exchangeAccountId: string;

      /**
       * Exchange type
       */
      exchangeType: 'BINANCE' | 'BINANCE_MARGIN' | 'B2C2' | 'WINTERMUTE' | 'BLOCKFILLS' | 'STONEX';

      positions: Array<Payload.Position>;

      /**
       * The timestamp when the portfolio information was updated.
       */
      updatedAt: number;
    }

    export namespace Payload {
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

  export interface Kline {
    candles?: Array<KlineAPI.Ohlcv>;

    /**
     * The unique identifier for the account.
     */
    exchangeAccountId?: string;

    /**
     * Exchange type
     */
    exchangeType?: 'BINANCE' | 'BINANCE_MARGIN' | 'B2C2' | 'WINTERMUTE' | 'BLOCKFILLS' | 'STONEX';

    interval?: '1s' | '1m' | '5m' | '15m' | '30m' | '1h' | '2h' | '1d' | '1w';

    symbol?: string;
  }
}

export namespace Webhook {
  export import DropCopyExecutionReport = WebhookAPI.DropCopyExecutionReport;
  export import DropCopyOrder = WebhookAPI.DropCopyOrder;
  export import DropCopyPortfolio = WebhookAPI.DropCopyPortfolio;
  export import Event = WebhookAPI.Event;
  export import MarketDataKlines = WebhookAPI.MarketDataKlines;
  export import MarketDataOrderBook = WebhookAPI.MarketDataOrderBook;
  export import WebhookPubsubResponse = WebhookAPI.WebhookPubsubResponse;
  export import WebhookPubsubParams = WebhookAPI.WebhookPubsubParams;
}
