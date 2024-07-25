// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cadenza from 'cadenza-sdk';
import { Response } from 'node-fetch';

const cadenza = new Cadenza({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource event', () => {
  test('dropCopyOrder: only required params', async () => {
    const responsePromise = cadenza.event.dropCopyOrder({
      eventId: 'eventId',
      eventType: 'cadenza.dropCopy.order',
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

  test('dropCopyOrder: required and optional params', async () => {
    const response = await cadenza.event.dropCopyOrder({
      eventId: 'eventId',
      eventType: 'cadenza.dropCopy.order',
      timestamp: 1632933600000,
      payload: {
        baseCurrency: 'baseCurrency',
        quoteCurrency: 'quoteCurrency',
        orderSide: 'orderSide',
        quantity: 0,
        quoteQuantity: 0,
        exchangeAccountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      },
      source: 'source',
    });
  });

  test('dropCopyPortfolio: only required params', async () => {
    const responsePromise = cadenza.event.dropCopyPortfolio({
      eventId: 'eventId',
      eventType: 'cadenza.dropCopy.portfolio',
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

  test('dropCopyPortfolio: required and optional params', async () => {
    const response = await cadenza.event.dropCopyPortfolio({
      eventId: 'eventId',
      eventType: 'cadenza.dropCopy.portfolio',
      timestamp: 1632933600000,
      payload: {
        baseCurrency: 'baseCurrency',
        quoteCurrency: 'quoteCurrency',
        orderSide: 'orderSide',
        quantity: 0,
        quoteQuantity: 0,
        exchangeAccountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      },
      source: 'source',
    });
  });

  test('dropCopyQuote: only required params', async () => {
    const responsePromise = cadenza.event.dropCopyQuote({
      eventId: 'eventId',
      eventType: 'cadenza.dropCopy.quote',
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

  test('dropCopyQuote: required and optional params', async () => {
    const response = await cadenza.event.dropCopyQuote({
      eventId: 'eventId',
      eventType: 'cadenza.dropCopy.quote',
      timestamp: 1632933600000,
      payload: {
        baseCurrency: 'baseCurrency',
        quoteCurrency: 'quoteCurrency',
        orderSide: 'orderSide',
        quantity: 0,
        quoteQuantity: 0,
        exchangeAccountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      },
      source: 'source',
    });
  });

  test('marketDataKline: only required params', async () => {
    const responsePromise = cadenza.event.marketDataKline({
      eventId: 'eventId',
      eventType: 'cadenza.marketData.kline',
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
    const response = await cadenza.event.marketDataKline({
      eventId: 'eventId',
      eventType: 'cadenza.marketData.kline',
      timestamp: 1632933600000,
      payload: {
        baseCurrency: 'baseCurrency',
        quoteCurrency: 'quoteCurrency',
        orderSide: 'orderSide',
        quantity: 0,
        quoteQuantity: 0,
        exchangeAccountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      },
      source: 'source',
    });
  });

  test('marketDataOrderBook: only required params', async () => {
    const responsePromise = cadenza.event.marketDataOrderBook({
      eventId: 'eventId',
      eventType: 'cadenza.marketData.orderBook',
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
    const response = await cadenza.event.marketDataOrderBook({
      eventId: 'eventId',
      eventType: 'cadenza.marketData.orderBook',
      timestamp: 1632933600000,
      payload: {
        baseCurrency: 'baseCurrency',
        quoteCurrency: 'quoteCurrency',
        orderSide: 'orderSide',
        quantity: 0,
        quoteQuantity: 0,
        exchangeAccountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      },
      source: 'source',
    });
  });
});
