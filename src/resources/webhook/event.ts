// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as EventAPI from './event';
import * as QuoteAPI from '../trading/quote';
import * as WebhookAPI from './webhook';

export class Event extends APIResource {
  /**
   * PubSub event handler placeholder for quote event
   */
  dropCopyQuote(
    body: EventDropCopyQuoteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DropCopyQuote> {
    return this._client.post('/api/v2/webhook/pubsub/dropCopy/quote', { body, ...options });
  }
}

export interface DropCopyQuote extends WebhookAPI.Event {
  payload?: QuoteAPI.Quote;
}

export interface EventDropCopyQuoteParams {
  /**
   * A unique identifier for the event.
   */
  eventId: string;

  /**
   * The type of the event (e.g., order, executionReport, portfolio, orderBook).
   */
  eventType: string;

  /**
   * Unix timestamp in milliseconds when the event was generated.
   */
  timestamp: number;

  payload?: QuoteAPI.Quote;

  /**
   * The source system or module that generated the event.
   */
  source?: string;
}

export namespace Event {
  export import DropCopyQuote = EventAPI.DropCopyQuote;
  export import EventDropCopyQuoteParams = EventAPI.EventDropCopyQuoteParams;
}
