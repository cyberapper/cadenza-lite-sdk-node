// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cadenza from 'cadenza-sdk';
import { Response } from 'node-fetch';

const client = new Cadenza({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource marketData', () => {
  test('marketDataKline: only required params', async () => {
    const responsePromise = client.event.marketData.marketDataKline({
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

  test('marketDataKline: required and optional params', async () => {
    const response = await client.event.marketData.marketDataKline({
      eventId: 'eventId',
      eventType: 'cadenza.task.quote',
      timestamp: 1632933600000,
      payload: {
        candles: [{ asset: 'BTC', borrowed: 3, free: 1, locked: 0, net: -2, total: 1 }],
        exchangeAccountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        exchangeType: 'BINANCE',
        interval: '1s',
        symbol: 'symbol',
      },
      source: 'source',
    });
  });

  test('marketDataOrderBook: only required params', async () => {
    const responsePromise = client.event.marketData.marketDataOrderBook({
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

  test('marketDataOrderBook: required and optional params', async () => {
    const response = await client.event.marketData.marketDataOrderBook({
      eventId: 'eventId',
      eventType: 'cadenza.task.quote',
      timestamp: 1632933600000,
      payload: {
        asks: [[0, 0]],
        bids: [[0, 0]],
        exchangeAccountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        exchangeType: 'exchangeType',
        level: 0,
        symbol: 'symbol',
      },
      source: 'source',
    });
  });
});
