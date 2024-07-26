// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cadenza from 'cadenza-sdk';
import { Response } from 'node-fetch';

const cadenza = new Cadenza({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource dropCopy', () => {
  test('dropCopyExecutionReport: only required params', async () => {
    const responsePromise = cadenza.event.dropCopy.dropCopyExecutionReport({
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

  test('dropCopyExecutionReport: required and optional params', async () => {
    const response = await cadenza.event.dropCopy.dropCopyExecutionReport({
      eventId: 'eventId',
      eventType: 'cadenza.task.quoteRequestAck',
      timestamp: 1632933600000,
      payload: {
        clOrdId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        baseCurrency: 'BTC',
        quoteCurrency: 'USDT',
        routePolicy: 'PRIORITY',
        order: {
          cost: 0,
          createdAt: 1703052635110,
          exchangeType: 'BINANCE',
          exchangeAccountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          filled: 0,
          orderId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          orderSide: 'BUY',
          orderType: 'MARKET',
          positionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          price: 0,
          quantity: 0,
          quoteQuantity: 0,
          status: 'SUBMITTED',
          symbol: 'BTC/USDT',
          timeInForce: 'DAY',
          updatedAt: 1703052635111,
          userId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          fee: 0,
          feeCurrency: 'USDT',
          tenantId: 'tenantId',
        },
        filled: 1,
        cost: 42859.99,
        fees: [
          { asset: 'asset', quantity: 0 },
          { asset: 'asset', quantity: 0 },
          { asset: 'asset', quantity: 0 },
        ],
        status: 'SUBMITTED',
        createdAt: 1632933600000,
        updatedAt: 1632933600000,
        executions: [
          {
            cost: 0,
            createdAt: 1703052635110,
            exchangeType: 'BINANCE',
            exchangeAccountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            filled: 0,
            orderId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            orderSide: 'BUY',
            orderType: 'MARKET',
            positionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            price: 0,
            quantity: 0,
            quoteQuantity: 0,
            status: 'SUBMITTED',
            symbol: 'BTC/USDT',
            timeInForce: 'DAY',
            updatedAt: 1703052635111,
            userId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            fee: 0,
            feeCurrency: 'USDT',
            tenantId: 'tenantId',
          },
          {
            cost: 0,
            createdAt: 1703052635110,
            exchangeType: 'BINANCE',
            exchangeAccountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            filled: 0,
            orderId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            orderSide: 'BUY',
            orderType: 'MARKET',
            positionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            price: 0,
            quantity: 0,
            quoteQuantity: 0,
            status: 'SUBMITTED',
            symbol: 'BTC/USDT',
            timeInForce: 'DAY',
            updatedAt: 1703052635111,
            userId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            fee: 0,
            feeCurrency: 'USDT',
            tenantId: 'tenantId',
          },
          {
            cost: 0,
            createdAt: 1703052635110,
            exchangeType: 'BINANCE',
            exchangeAccountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            filled: 0,
            orderId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            orderSide: 'BUY',
            orderType: 'MARKET',
            positionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            price: 0,
            quantity: 0,
            quoteQuantity: 0,
            status: 'SUBMITTED',
            symbol: 'BTC/USDT',
            timeInForce: 'DAY',
            updatedAt: 1703052635111,
            userId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            fee: 0,
            feeCurrency: 'USDT',
            tenantId: 'tenantId',
          },
        ],
      },
      source: 'source',
    });
  });

  test('dropCopyOrder: only required params', async () => {
    const responsePromise = cadenza.event.dropCopy.dropCopyOrder({
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

  test('dropCopyOrder: required and optional params', async () => {
    const response = await cadenza.event.dropCopy.dropCopyOrder({
      eventId: 'eventId',
      eventType: 'cadenza.task.quoteRequestAck',
      timestamp: 1632933600000,
      payload: {
        cost: 0,
        createdAt: 1703052635110,
        exchangeType: 'BINANCE',
        exchangeAccountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        filled: 0,
        orderId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        orderSide: 'BUY',
        orderType: 'MARKET',
        positionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        price: 0,
        quantity: 0,
        quoteQuantity: 0,
        status: 'SUBMITTED',
        symbol: 'BTC/USDT',
        timeInForce: 'DAY',
        updatedAt: 1703052635111,
        userId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        fee: 0,
        feeCurrency: 'USDT',
        tenantId: 'tenantId',
      },
      source: 'source',
    });
  });

  test('dropCopyPortfolio: only required params', async () => {
    const responsePromise = cadenza.event.dropCopy.dropCopyPortfolio({
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

  test('dropCopyPortfolio: required and optional params', async () => {
    const response = await cadenza.event.dropCopy.dropCopyPortfolio({
      eventId: 'eventId',
      eventType: 'cadenza.task.quoteRequestAck',
      timestamp: 1632933600000,
      payload: {
        exchangeAccountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        exchangeType: 'BINANCE',
        balances: [
          { asset: 'BTC', free: 1, locked: 0, borrowed: 3, net: -2, total: 1 },
          { asset: 'BTC', free: 1, locked: 0, borrowed: 3, net: -2, total: 1 },
          { asset: 'BTC', free: 1, locked: 0, borrowed: 3, net: -2, total: 1 },
        ],
        positions: [
          { amount: 0, cost: 0, entryPrice: 0, positionSide: 'LONG', status: 'OPEN', symbol: 'BTC/USDT' },
          { amount: 0, cost: 0, entryPrice: 0, positionSide: 'LONG', status: 'OPEN', symbol: 'BTC/USDT' },
          { amount: 0, cost: 0, entryPrice: 0, positionSide: 'LONG', status: 'OPEN', symbol: 'BTC/USDT' },
        ],
        credit: {
          exchangeAccountId: '018e41a1-cebc-7b49-a729-ae2c1c41e297',
          exchangeType: 'BINANCE',
          accountType: 'SPOT',
          currency: 'USDT',
          leverage: 1,
          credit: 10000,
          margin: 5000,
          marginLoan: 3000,
          marginRequirement: 1500,
          marginUsage: 0.5,
          marginLevel: 0.89,
          riskExposure: 5677517.76,
          maxRiskExposure: 5000000,
          riskExposureRate: 0.89,
        },
        updatedAt: 1632933600000,
      },
      source: 'source',
    });
  });

  test('dropCopyQuote: only required params', async () => {
    const responsePromise = cadenza.event.dropCopy.dropCopyQuote({
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

  test('dropCopyQuote: required and optional params', async () => {
    const response = await cadenza.event.dropCopy.dropCopyQuote({
      eventId: 'eventId',
      eventType: 'cadenza.task.quoteRequestAck',
      timestamp: 1632933600000,
      payload: {
        quoteRequestId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        baseCurrency: 'BTC',
        quoteCurrency: 'USDT',
        askPrice: 42859.99,
        askQuantity: 1,
        bidPrice: 42859.71,
        bidQuantity: 1,
        timestamp: 1632933600000,
        createdAt: 1632933600000,
        validUntil: 1632933600000,
        expiredAt: 1632933600000,
        exchangeAccountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        exchangeType: 'BINANCE',
      },
      source: 'source',
    });
  });
});
