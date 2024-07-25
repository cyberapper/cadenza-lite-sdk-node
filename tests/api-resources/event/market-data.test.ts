// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cadenza from 'cadenza-sdk';
import { Response } from 'node-fetch';

const cadenza = new Cadenza({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource marketData', () => {
  test('marketDataKline: only required params', async () => {
    const responsePromise = cadenza.event.marketData.marketDataKline({
      eventId: 'eventId',
      eventType: 'cadenza.task.quoteRequestAck',
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
    const response = await cadenza.event.marketData.marketDataKline({
      eventId: 'eventId',
      eventType: 'cadenza.task.quoteRequestAck',
      timestamp: 1632933600000,
      payload: {
        exchangeAccountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        exchangeType: 'BINANCE',
        symbol: 'symbol',
        interval: '1s',
        candles: [
          { c: 0, h: 0, l: 0, o: 0, t: 0, v: 0 },
          { c: 0, h: 0, l: 0, o: 0, t: 0, v: 0 },
          { c: 0, h: 0, l: 0, o: 0, t: 0, v: 0 },
        ],
      },
      source: 'source',
    });
  });

  test('marketDataOrderBook: only required params', async () => {
    const responsePromise = cadenza.event.marketData.marketDataOrderBook({
      eventId: 'eventId',
      eventType: 'cadenza.task.quoteRequestAck',
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
    const response = await cadenza.event.marketData.marketDataOrderBook({
      eventId: 'eventId',
      eventType: 'cadenza.task.quoteRequestAck',
      timestamp: 1632933600000,
      payload: {
        asks: [
          [0, 0],
          [0, 0],
          [0, 0],
        ],
        bids: [
          [0, 0],
          [0, 0],
          [0, 0],
        ],
        exchangeType: 'exchangeType',
        exchangeAccountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        symbol: 'symbol',
        level: 0,
      },
      source: 'source',
    });
  });
});
