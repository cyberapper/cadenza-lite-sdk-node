// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as UtilityAPI from './utility';

export class Utility extends APIResource {
  /**
   * Health check
   */
  health(options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get('/api/v2/health', {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export type UtilityHealthResponse = string;

export namespace Utility {
  export import UtilityHealthResponse = UtilityAPI.UtilityHealthResponse;
}
