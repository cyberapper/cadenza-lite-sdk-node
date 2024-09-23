// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cadenza from 'cadenza-sdk';
import { Response } from 'node-fetch';

const client = new Cadenza({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource quote', () => {
  test('post: only required params', async () => {
    const responsePromise = client.trading.quote.post({
      baseCurrency: 'baseCurrency',
      orderSide: 'orderSide',
      quoteCurrency: 'quoteCurrency',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('post: required and optional params', async () => {
    const response = await client.trading.quote.post({
      baseCurrency: 'baseCurrency',
      orderSide: 'orderSide',
      quoteCurrency: 'quoteCurrency',
      exchangeAccountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      quantity: 0,
      quoteQuantity: 0,
    });
  });

  test('requestForQuote: only required params', async () => {
    const responsePromise = client.trading.quote.requestForQuote({
      baseCurrency: 'baseCurrency',
      orderSide: 'orderSide',
      quoteCurrency: 'quoteCurrency',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('requestForQuote: required and optional params', async () => {
    const response = await client.trading.quote.requestForQuote({
      baseCurrency: 'baseCurrency',
      orderSide: 'orderSide',
      quoteCurrency: 'quoteCurrency',
      exchangeAccountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      quantity: 0,
      quoteQuantity: 0,
    });
  });
});
