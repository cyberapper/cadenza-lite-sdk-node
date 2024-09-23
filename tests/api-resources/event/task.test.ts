// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cadenza from 'cadenza-sdk';
import { Response } from 'node-fetch';

const client = new Cadenza({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource task', () => {
  test('taskQuote: only required params', async () => {
    const responsePromise = client.event.task.taskQuote({
      eventId: 'eventId',
      eventType: 'cadenza.task.quote',
      timestamp: 1632933600000,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('taskQuote: required and optional params', async () => {
    const response = await client.event.task.taskQuote({
      eventId: 'eventId',
      eventType: 'cadenza.task.quote',
      timestamp: 1632933600000,
      payload: {
        baseCurrency: 'baseCurrency',
        orderSide: 'orderSide',
        quoteCurrency: 'quoteCurrency',
        exchangeAccountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        quantity: 0,
        quoteQuantity: 0,
      },
      source: 'source',
    });
  });
});
