// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cadenza from 'cadenza-sdk';
import { Response } from 'node-fetch';

const cadenza = new Cadenza({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource event', () => {
  test('new: only required params', async () => {
    const responsePromise = cadenza.event.new({
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

  test('new: required and optional params', async () => {
    const response = await cadenza.event.new({
      eventId: 'eventId',
      eventType: 'cadenza.task.quoteRequestAck',
      timestamp: 1632933600000,
      payload: {
        quoteRequestId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        exchangeAccountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        leverage: 0,
        orderSide: 'BUY',
        orderType: 'MARKET',
        positionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        price: 0,
        priceSlippageTolerance: 0,
        quantity: 0,
        quoteQuantity: 0,
        symbol: 'BTC/USDT',
        timeInForce: 'DAY',
        routePolicy: 'PRIORITY',
        priority: ['exchange_account_id_1', 'exchange_account_id_2', 'exchange_account_id_3'],
        quoteId: 'quoteId',
        tenantId: 'tenantId',
      },
      source: 'source',
    });
  });
});
