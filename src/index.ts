// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Pagination from './pagination';
import { type OffsetParams, OffsetResponse } from './pagination';
import * as Uploads from './uploads';
import * as API from './resources/index';
import {
  ExchangeAccount,
  ExchangeAccountCreateParams,
  ExchangeAccountCreateResponse,
  ExchangeAccountListResponse,
  ExchangeAccountRemoveParams,
  ExchangeAccountRemoveResponse,
  ExchangeAccountSetExchangePriorityParams,
  ExchangeAccountSetExchangePriorityResponse,
  ExchangeAccountUpdateParams,
  ExchangeAccountUpdateResponse,
} from './resources/exchange-account';
import {
  BalanceEntry,
  ExchangeAccountBalance,
  ExchangeAccountCredit,
  ExchangeAccountPortfolio,
  ExchangeAccountPosition,
  Portfolio,
  PortfolioListBalancesParams,
  PortfolioListBalancesResponse,
  PortfolioListCreditParams,
  PortfolioListCreditResponse,
  PortfolioListPositionsParams,
  PortfolioListPositionsResponse,
  PositionEntry,
} from './resources/portfolio';
import { Utility, UtilityHealthResponse } from './resources/utility';
import { Event, EventNewParams, EventResource } from './resources/event/event';
import { Market } from './resources/market/market';
import { Trading } from './resources/trading/trading';
import { Webhook, WebhookPubsubParams, WebhookPubsubResponse } from './resources/webhook/webhook';

const environments = {
  prod: 'https://cadenza-lite.algo724.com',
  uat: 'https://cadenza-lite.uat.algo724.com',
};
type Environment = keyof typeof environments;
export interface ClientOptions {
  /**
   * Defaults to process.env['CADENZA_CLIENT_SDK_BEARER_TOKEN'].
   */
  bearerToken?: string | undefined;

  /**
   * Specifies the environment to use for the API.
   *
   * Each environment maps to a different base URL:
   * - `prod` corresponds to `https://cadenza-lite.algo724.com`
   * - `uat` corresponds to `https://cadenza-lite.uat.algo724.com`
   */
  environment?: Environment;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['CADENZA_BASE_URL'].
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
 * API Client for interfacing with the Cadenza API.
 */
export class Cadenza extends Core.APIClient {
  bearerToken: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Cadenza API.
   *
   * @param {string | undefined} [opts.bearerToken=process.env['CADENZA_CLIENT_SDK_BEARER_TOKEN'] ?? undefined]
   * @param {Environment} [opts.environment=prod] - Specifies the environment URL to use for the API.
   * @param {string} [opts.baseURL=process.env['CADENZA_BASE_URL'] ?? https://cadenza-lite.algo724.com] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('CADENZA_BASE_URL'),
    bearerToken = Core.readEnv('CADENZA_CLIENT_SDK_BEARER_TOKEN'),
    ...opts
  }: ClientOptions = {}) {
    if (bearerToken === undefined) {
      throw new Errors.CadenzaError(
        "The CADENZA_CLIENT_SDK_BEARER_TOKEN environment variable is missing or empty; either provide it, or instantiate the Cadenza client with an bearerToken option, like new Cadenza({ bearerToken: 'My Bearer Token' }).",
      );
    }

    const options: ClientOptions = {
      bearerToken,
      ...opts,
      baseURL,
      environment: opts.environment ?? 'prod',
    };

    if (baseURL && opts.environment) {
      throw new Errors.CadenzaError(
        'Ambiguous URL; The `baseURL` option (or CADENZA_BASE_URL env var) and the `environment` option are given. If you want to use the environment you must pass baseURL: null',
      );
    }

    super({
      baseURL: options.baseURL || environments[options.environment || 'prod'],
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.bearerToken = bearerToken;
  }

  utility: API.Utility = new API.Utility(this);
  exchangeAccount: API.ExchangeAccount = new API.ExchangeAccount(this);
  market: API.Market = new API.Market(this);
  trading: API.Trading = new API.Trading(this);
  portfolio: API.Portfolio = new API.Portfolio(this);
  webhook: API.Webhook = new API.Webhook(this);
  event: API.EventResource = new API.EventResource(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: `Bearer ${this.bearerToken}` };
  }

  static Cadenza = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static CadenzaError = Errors.CadenzaError;
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

Cadenza.Utility = Utility;
Cadenza.Market = Market;
Cadenza.Trading = Trading;
Cadenza.Portfolio = Portfolio;
Cadenza.Webhook = Webhook;
Cadenza.EventResource = EventResource;
export declare namespace Cadenza {
  export type RequestOptions = Core.RequestOptions;

  export import Offset = Pagination.Offset;
  export { type OffsetParams as OffsetParams, type OffsetResponse as OffsetResponse };

  export { Utility as Utility, type UtilityHealthResponse as UtilityHealthResponse };

  export {
    type ExchangeAccount as ExchangeAccount,
    type ExchangeAccountCreateResponse as ExchangeAccountCreateResponse,
    type ExchangeAccountUpdateResponse as ExchangeAccountUpdateResponse,
    type ExchangeAccountListResponse as ExchangeAccountListResponse,
    type ExchangeAccountRemoveResponse as ExchangeAccountRemoveResponse,
    type ExchangeAccountSetExchangePriorityResponse as ExchangeAccountSetExchangePriorityResponse,
    type ExchangeAccountCreateParams as ExchangeAccountCreateParams,
    type ExchangeAccountUpdateParams as ExchangeAccountUpdateParams,
    type ExchangeAccountRemoveParams as ExchangeAccountRemoveParams,
    type ExchangeAccountSetExchangePriorityParams as ExchangeAccountSetExchangePriorityParams,
  };

  export { Market as Market };

  export { Trading as Trading };

  export {
    Portfolio as Portfolio,
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

  export {
    Webhook as Webhook,
    type WebhookPubsubResponse as WebhookPubsubResponse,
    type WebhookPubsubParams as WebhookPubsubParams,
  };

  export { EventResource as EventResource, type Event as Event, type EventNewParams as EventNewParams };
}

export { toFile, fileFromPath } from './uploads';
export {
  CadenzaError,
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
} from './error';

export default Cadenza;
