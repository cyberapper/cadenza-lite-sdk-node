// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

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

export declare namespace Utility {
  export { type UtilityHealthResponse as UtilityHealthResponse };
}
