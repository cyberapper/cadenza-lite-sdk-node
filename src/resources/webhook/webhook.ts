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

export interface Event {
  /**
   * A unique identifier for the event.
   */
  eventId: string;

  /**
   * Event Type
   */
  eventType:
    | 'cadenza.task.quoteRequestAck'
    | 'cadenza.task.placeOrderRequestAck'
    | 'cadenza.task.cancelOrderRequestAck'
    | 'cadenza.dropCopy.quote'
    | 'cadenza.dropCopy.order'
    | 'cadenza.dropCopy.portfolio'
    | 'cadenza.marketData.orderBook'
    | 'cadenza.marketData.kline';

  /**
   * Unix timestamp in milliseconds when the event was generated.
   */
  timestamp: number;

  /**
   * The source system or module that generated the event.
   */
  source?: string;
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
  export import Event = WebhookAPI.Event;
  export import WebhookPubsubResponse = WebhookAPI.WebhookPubsubResponse;
  export import WebhookPubsubParams = WebhookAPI.WebhookPubsubParams;
  export import CloudScheduler = CloudSchedulerAPI.CloudScheduler;
  export import CloudSchedulerUpdatePortfolioRoutineResponse = CloudSchedulerAPI.CloudSchedulerUpdatePortfolioRoutineResponse;
}
