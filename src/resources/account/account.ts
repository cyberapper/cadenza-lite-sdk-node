// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ClientAPI from './client';

export class Account extends APIResource {
  client: ClientAPI.Client = new ClientAPI.Client(this._client);
}

export namespace Account {
  export import Client = ClientAPI.Client;
  export import ClientRetrieveInfoResponse = ClientAPI.ClientRetrieveInfoResponse;
}
