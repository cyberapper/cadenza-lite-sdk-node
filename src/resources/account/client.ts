// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ClientAPI from './client';

export class Client extends APIResource {
  /**
   * Check available exchange types in user information
   */
  retrieveInfo(options?: Core.RequestOptions): Core.APIPromise<ClientRetrieveInfoResponse> {
    return this._client.get('/api/v2/client/getInfo', options);
  }
}

export interface ClientRetrieveInfoResponse {
  /**
   * Available exchange types
   */
  exchangeTypes?: Array<'BINANCE' | 'BINANCE_MARGIN' | 'B2C2' | 'WINTERMUTE' | 'BLOCKFILLS' | 'STONEX'>;
}

export namespace Client {
  export import ClientRetrieveInfoResponse = ClientAPI.ClientRetrieveInfoResponse;
}
