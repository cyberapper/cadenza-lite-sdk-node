// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Errors from './error';
import * as Uploads from './uploads';
import { type Agent } from './_shims/index';
import * as Core from './core';
import * as API from './resources/index';

const environments = {
  production: 'https://cadenza-lite.algo724.com',
  environment_1: 'https://cadenza-lite.uat.algo724.com',
};
type Environment = keyof typeof environments;

export interface ClientOptions {
  /**
   * Specifies the environment to use for the API.
   *
   * Each environment maps to a different base URL:
   * - `production` corresponds to `https://cadenza-lite.algo724.com`
   * - `environment_1` corresponds to `https://cadenza-lite.uat.algo724.com`
   */
  environment?: Environment;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['CADENZA_CLIENT_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Cadenza Client API.
 */
export class CadenzaClient extends Core.APIClient {
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Cadenza Client API.
   *
   * @param {Environment} [opts.environment=production] - Specifies the environment URL to use for the API.
   * @param {string} [opts.baseURL=process.env['CADENZA_CLIENT_BASE_URL'] ?? https://cadenza-lite.algo724.com] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({ baseURL = Core.readEnv('CADENZA_CLIENT_BASE_URL'), ...opts }: ClientOptions = {}) {
    const options: ClientOptions = {
      ...opts,
      baseURL,
      environment: opts.environment ?? 'production',
    };

    if (baseURL && opts.environment) {
      throw new Errors.CadenzaClientError(
        'Ambiguous URL; The `baseURL` option (or CADENZA_CLIENT_BASE_URL env var) and the `environment` option are given. If you want to use the environment you must pass baseURL: null',
      );
    }

    super({
      baseURL: options.baseURL || environments[options.environment || 'production'],
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;
  }

  health: API.Health = new API.Health(this);
  account: API.Account = new API.Account(this);
  exchangeAccounts: API.ExchangeAccounts = new API.ExchangeAccounts(this);
  marketSymbols: API.MarketSymbols = new API.MarketSymbols(this);
  trades: API.Trades = new API.Trades(this);
  portfolios: API.Portfolios = new API.Portfolios(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  static CadenzaClient = this;

  static CadenzaClientError = Errors.CadenzaClientError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

export const {
  CadenzaClientError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace CadenzaClient {
  export import RequestOptions = Core.RequestOptions;

  export import Health = API.Health;
  export import HealthCheckResponse = API.HealthCheckResponse;

  export import Account = API.Account;

  export import ExchangeAccounts = API.ExchangeAccounts;
  export import ExchangeAccountCreateResponse = API.ExchangeAccountCreateResponse;
  export import ExchangeAccountUpdateResponse = API.ExchangeAccountUpdateResponse;
  export import ExchangeAccountListResponse = API.ExchangeAccountListResponse;
  export import ExchangeAccountRemoveResponse = API.ExchangeAccountRemoveResponse;
  export import ExchangeAccountCreateParams = API.ExchangeAccountCreateParams;
  export import ExchangeAccountUpdateParams = API.ExchangeAccountUpdateParams;
  export import ExchangeAccountRemoveParams = API.ExchangeAccountRemoveParams;

  export import MarketSymbols = API.MarketSymbols;
  export import MarketSymbolListResponse = API.MarketSymbolListResponse;
  export import MarketSymbolKlineResponse = API.MarketSymbolKlineResponse;
  export import MarketSymbolOrderbookResponse = API.MarketSymbolOrderbookResponse;
  export import MarketSymbolTickerResponse = API.MarketSymbolTickerResponse;
  export import MarketSymbolListParams = API.MarketSymbolListParams;
  export import MarketSymbolKlineParams = API.MarketSymbolKlineParams;
  export import MarketSymbolOrderbookParams = API.MarketSymbolOrderbookParams;
  export import MarketSymbolTickerParams = API.MarketSymbolTickerParams;

  export import Trades = API.Trades;
  export import TradeCancelOrderResponse = API.TradeCancelOrderResponse;
  export import TradeFetchQuotesResponse = API.TradeFetchQuotesResponse;
  export import TradeGetQuoteExecutionReportResponse = API.TradeGetQuoteExecutionReportResponse;
  export import TradeListOrdersResponse = API.TradeListOrdersResponse;
  export import TradePlaceOrderResponse = API.TradePlaceOrderResponse;
  export import TradeSetExchangePriorityResponse = API.TradeSetExchangePriorityResponse;
  export import TradeCancelOrderParams = API.TradeCancelOrderParams;
  export import TradeFetchQuotesParams = API.TradeFetchQuotesParams;
  export import TradeGetQuoteExecutionReportParams = API.TradeGetQuoteExecutionReportParams;
  export import TradeListOrdersParams = API.TradeListOrdersParams;
  export import TradePlaceOrderParams = API.TradePlaceOrderParams;
  export import TradeSetExchangePriorityParams = API.TradeSetExchangePriorityParams;

  export import Portfolios = API.Portfolios;
  export import PortfolioListBalancesResponse = API.PortfolioListBalancesResponse;
  export import PortfolioListCreditResponse = API.PortfolioListCreditResponse;
  export import PortfolioListPositionsResponse = API.PortfolioListPositionsResponse;
  export import PortfolioListBalancesParams = API.PortfolioListBalancesParams;
  export import PortfolioListCreditParams = API.PortfolioListCreditParams;
  export import PortfolioListPositionsParams = API.PortfolioListPositionsParams;
}

export default CadenzaClient;
