// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as WebhookAPI from './webhook';
import * as CloudSchedulerAPI from './cloud-scheduler';

export class Webhook extends APIResource {
  cloudScheduler: CloudSchedulerAPI.CloudScheduler = new CloudSchedulerAPI.CloudScheduler(this._client);

  /**
   * PubSub Event Handler
   */
  pubsub(body: WebhookPubsubParams, options?: Core.RequestOptions): Core.APIPromise<WebhookPubsubResponse> {
    return this._client.post('/api/v2/webhook/pubsub', { body, ...options });
  }
}

export interface WebhookPubsubResponse {
  data?: string;
}

export interface WebhookPubsubParams {
  message: WebhookPubsubParams.Message;

  /**
   * The subscription name.
   */
  subscription: string;
}

export namespace WebhookPubsubParams {
  export interface Message {
    /**
     * The unique identifier for the message.
     */
    id: string;

    /**
     * The base64-encoded data.
     */
    data?: string;
  }
}

export namespace Webhook {
  export import WebhookPubsubResponse = WebhookAPI.WebhookPubsubResponse;
  export import WebhookPubsubParams = WebhookAPI.WebhookPubsubParams;
  export import CloudScheduler = CloudSchedulerAPI.CloudScheduler;
  export import CloudSchedulerUpdatePortfolioRoutineResponse = CloudSchedulerAPI.CloudSchedulerUpdatePortfolioRoutineResponse;
}
