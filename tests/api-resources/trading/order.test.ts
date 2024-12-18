// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cadenza from 'cadenza-sdk';
import { Response } from 'node-fetch';

const client = new Cadenza({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource order', () => {
  test('create: only required params', async () => {
    const responsePromise = client.trading.order.create({ routePolicy: 'PRIORITY' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.trading.order.create({
      routePolicy: 'PRIORITY',
      exchangeAccountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      leverage: 0,
      orderSide: 'BUY',
      orderType: 'MARKET',
      positionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      price: 0,
      priceSlippageTolerance: 0,
      priority: ['exchange_account_id_1', 'exchange_account_id_2', 'exchange_account_id_3'],
      quantity: 0,
      quoteId: 'quoteId',
      quoteQuantity: 0,
      quoteRequestId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      symbol: 'BTC/USDT',
      tenantId: 'tenantId',
      timeInForce: 'DAY',
      'Idempotency-Key': 'my_idempotency_key',
    });
  });

  test('list', async () => {
    const responsePromise = client.trading.order.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.trading.order.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Cadenza.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.trading.order.list(
        {
          ascending: true,
          endTime: 1632933600000,
          exchangeAccountId: 'exchangeAccountId',
          limit: 100,
          offset: 0,
          orderId: 'orderId',
          orderStatus: 'SUBMITTED',
          startTime: 1622505600000,
          symbol: 'symbol',
          tenantId: 'tenantId',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cadenza.NotFoundError);
  });

  test('cancel: only required params', async () => {
    const responsePromise = client.trading.order.cancel({ orderId: 'orderId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('cancel: required and optional params', async () => {
    const response = await client.trading.order.cancel({ orderId: 'orderId' });
  });
});
