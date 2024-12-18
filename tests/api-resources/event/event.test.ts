// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cadenza from 'cadenza-sdk';
import { Response } from 'node-fetch';

const client = new Cadenza({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource event', () => {
  test('new: only required params', async () => {
    const responsePromise = client.event.new({
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

  test('new: required and optional params', async () => {
    const response = await client.event.new({
      eventId: 'eventId',
      eventType: 'cadenza.task.quote',
      timestamp: 1632933600000,
      payload: {},
      source: 'source',
    });
  });
});