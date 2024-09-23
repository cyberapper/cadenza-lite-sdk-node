// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cadenza from 'cadenza-sdk';
import { Response } from 'node-fetch';

const client = new Cadenza({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource dropCopy', () => {
  test('dropCopyCancelOrderRequestAck: only required params', async () => {
    const responsePromise = client.event.dropCopy.dropCopyCancelOrderRequestAck({
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

  test('dropCopyCancelOrderRequestAck: required and optional params', async () => {
    const response = await client.event.dropCopy.dropCopyCancelOrderRequestAck({
      eventId: 'eventId',
      eventType: 'cadenza.task.quote',
      timestamp: 1632933600000,
      payload: { orderId: 'orderId' },
      source: 'source',
    });
  });

  test('dropCopyExecutionReport: only required params', async () => {
    const responsePromise = client.event.dropCopy.dropCopyExecutionReport({
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

  test('dropCopyExecutionReport: required and optional params', async () => {
    const response = await client.event.dropCopy.dropCopyExecutionReport({
      eventId: 'eventId',
      eventType: 'cadenza.task.quote',
      timestamp: 1632933600000,
      payload: {
        baseCurrency: 'BTC',
        cost: 42859.99,
        createdAt: 1632933600000,
        filled: 1,
        quoteCurrency: 'USDT',
        routePolicy: 'PRIORITY',
        status: 'SUBMITTED',
        updatedAt: 1632933600000,
        id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        executions: [
          {
            cost: 0,
            createdAt: 1703052635110,
            exchangeAccountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            exchangeType: 'BINANCE',
            filled: 0,
            orderSide: 'BUY',
            orderType: 'MARKET',
            quantity: 0,
            status: 'SUBMITTED',
            symbol: 'BTC/USDT',
            timeInForce: 'DAY',
            updatedAt: 1703052635111,
            baseCurrency: 'BTC',
            fee: 0,
            feeCurrency: 'USDT',
            orderId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            positionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            price: 0,
            quoteCurrency: 'USDT',
            quoteQuantity: 0,
            tenantId: 'tenantId',
            userId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          },
          {
            cost: 0,
            createdAt: 1703052635110,
            exchangeAccountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            exchangeType: 'BINANCE',
            filled: 0,
            orderSide: 'BUY',
            orderType: 'MARKET',
            quantity: 0,
            status: 'SUBMITTED',
            symbol: 'BTC/USDT',
            timeInForce: 'DAY',
            updatedAt: 1703052635111,
            baseCurrency: 'BTC',
            fee: 0,
            feeCurrency: 'USDT',
            orderId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            positionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            price: 0,
            quoteCurrency: 'USDT',
            quoteQuantity: 0,
            tenantId: 'tenantId',
            userId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          },
          {
            cost: 0,
            createdAt: 1703052635110,
            exchangeAccountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            exchangeType: 'BINANCE',
            filled: 0,
            orderSide: 'BUY',
            orderType: 'MARKET',
            quantity: 0,
            status: 'SUBMITTED',
            symbol: 'BTC/USDT',
            timeInForce: 'DAY',
            updatedAt: 1703052635111,
            baseCurrency: 'BTC',
            fee: 0,
            feeCurrency: 'USDT',
            orderId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            positionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            price: 0,
            quoteCurrency: 'USDT',
            quoteQuantity: 0,
            tenantId: 'tenantId',
            userId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          },
        ],
        fees: [
          { asset: 'asset', quantity: 0 },
          { asset: 'asset', quantity: 0 },
          { asset: 'asset', quantity: 0 },
        ],
        order: {
          cost: 0,
          createdAt: 1703052635110,
          exchangeAccountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          exchangeType: 'BINANCE',
          filled: 0,
          orderSide: 'BUY',
          orderType: 'MARKET',
          quantity: 0,
          status: 'SUBMITTED',
          symbol: 'BTC/USDT',
          timeInForce: 'DAY',
          updatedAt: 1703052635111,
          baseCurrency: 'BTC',
          fee: 0,
          feeCurrency: 'USDT',
          orderId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          positionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          price: 0,
          quoteCurrency: 'USDT',
          quoteQuantity: 0,
          tenantId: 'tenantId',
          userId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
      },
      source: 'source',
    });
  });

  test('dropCopyOrder: only required params', async () => {
    const responsePromise = client.event.dropCopy.dropCopyOrder({
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

  test('dropCopyOrder: required and optional params', async () => {
    const response = await client.event.dropCopy.dropCopyOrder({
      eventId: 'eventId',
      eventType: 'cadenza.task.quote',
      timestamp: 1632933600000,
      payload: {
        cost: 0,
        createdAt: 1703052635110,
        exchangeAccountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        exchangeType: 'BINANCE',
        filled: 0,
        orderSide: 'BUY',
        orderType: 'MARKET',
        quantity: 0,
        status: 'SUBMITTED',
        symbol: 'BTC/USDT',
        timeInForce: 'DAY',
        updatedAt: 1703052635111,
        baseCurrency: 'BTC',
        fee: 0,
        feeCurrency: 'USDT',
        orderId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        positionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        price: 0,
        quoteCurrency: 'USDT',
        quoteQuantity: 0,
        tenantId: 'tenantId',
        userId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      },
      source: 'source',
    });
  });

  test('dropCopyPlaceOrderRequestAck: only required params', async () => {
    const responsePromise = client.event.dropCopy.dropCopyPlaceOrderRequestAck({
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

  test('dropCopyPlaceOrderRequestAck: required and optional params', async () => {
    const response = await client.event.dropCopy.dropCopyPlaceOrderRequestAck({
      eventId: 'eventId',
      eventType: 'cadenza.task.quote',
      timestamp: 1632933600000,
      payload: {
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
      },
      source: 'source',
    });
  });

  test('dropCopyPortfolio: only required params', async () => {
    const responsePromise = client.event.dropCopy.dropCopyPortfolio({
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

  test('dropCopyPortfolio: required and optional params', async () => {
    const response = await client.event.dropCopy.dropCopyPortfolio({
      eventId: 'eventId',
      eventType: 'cadenza.task.quote',
      timestamp: 1632933600000,
      payload: {
        credit: {
          accountType: 'SPOT',
          credit: 10000,
          currency: 'USDT',
          exchangeAccountId: '018e41a1-cebc-7b49-a729-ae2c1c41e297',
          exchangeType: 'BINANCE',
          leverage: 1,
          margin: 5000,
          marginLevel: 0.89,
          marginLoan: 3000,
          marginRequirement: 1500,
          marginUsage: 0.5,
          maxRiskExposure: 5000000,
          riskExposure: 5677517.76,
          riskExposureRate: 0.89,
        },
        exchangeAccountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        exchangeType: 'BINANCE',
        updatedAt: 1632933600000,
        balances: [
          { asset: 'BTC', borrowed: 3, free: 1, locked: 0, net: -2, total: 1 },
          { asset: 'BTC', borrowed: 3, free: 1, locked: 0, net: -2, total: 1 },
          { asset: 'BTC', borrowed: 3, free: 1, locked: 0, net: -2, total: 1 },
        ],
        positions: [
          { amount: 0, positionSide: 'LONG', status: 'OPEN', symbol: 'BTC/USDT', cost: 0, entryPrice: 0 },
          { amount: 0, positionSide: 'LONG', status: 'OPEN', symbol: 'BTC/USDT', cost: 0, entryPrice: 0 },
          { amount: 0, positionSide: 'LONG', status: 'OPEN', symbol: 'BTC/USDT', cost: 0, entryPrice: 0 },
        ],
      },
      source: 'source',
    });
  });

  test('dropCopyQuote: only required params', async () => {
    const responsePromise = client.event.dropCopy.dropCopyQuote({
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

  test('dropCopyQuote: required and optional params', async () => {
    const response = await client.event.dropCopy.dropCopyQuote({
      eventId: 'eventId',
      eventType: 'cadenza.task.quote',
      timestamp: 1632933600000,
      payload: {
        baseCurrency: 'BTC',
        quoteCurrency: 'USDT',
        quoteRequestId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        timestamp: 1632933600000,
        validUntil: 1632933600000,
        askPrice: 42859.99,
        askQuantity: 1,
        bidPrice: 42859.71,
        bidQuantity: 1,
        createdAt: 1632933600000,
        exchangeAccountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        exchangeType: 'BINANCE',
        expiredAt: 1632933600000,
      },
      source: 'source',
    });
  });

  test('dropCopyQuoteRequestAck: only required params', async () => {
    const responsePromise = client.event.dropCopy.dropCopyQuoteRequestAck({
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

  test('dropCopyQuoteRequestAck: required and optional params', async () => {
    const response = await client.event.dropCopy.dropCopyQuoteRequestAck({
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
