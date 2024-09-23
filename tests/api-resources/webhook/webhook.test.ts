// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cadenza from 'cadenza-sdk';
import { Response } from 'node-fetch';

const client = new Cadenza({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource webhook', () => {
  test('pubsub: only required params', async () => {
    const responsePromise = client.webhook.pubsub({ message: { id: 'id' }, subscription: 'subscription' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('pubsub: required and optional params', async () => {
    const response = await client.webhook.pubsub({
      message: { id: 'id', data: 'U3RhaW5sZXNzIHJvY2tz' },
      subscription: 'subscription',
    });
  });
});
