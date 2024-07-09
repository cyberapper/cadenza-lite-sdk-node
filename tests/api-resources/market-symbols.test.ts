// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import CadenzaLite from 'cadenza-lite';
import { Response } from 'node-fetch';

const cadenzaLite = new CadenzaLite({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource marketSymbols', () => {
  test('list', async () => {
    const responsePromise = cadenzaLite.marketSymbols.list();
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
    await expect(cadenzaLite.marketSymbols.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      CadenzaLite.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cadenzaLite.marketSymbols.list(
        { detail: false, exchangeType: 'BINANCE', symbol: 'string' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(CadenzaLite.NotFoundError);
  });

  test('kline: only required params', async () => {
    const responsePromise = cadenzaLite.marketSymbols.kline({
      exchangeType: 'BINANCE',
      interval: '1s',
      symbol: 'BTC/USDT',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('kline: required and optional params', async () => {
    const response = await cadenzaLite.marketSymbols.kline({
      exchangeType: 'BINANCE',
      interval: '1s',
      symbol: 'BTC/USDT',
      endTime: 1632933600000,
      limit: 100,
      startTime: 1622505600000,
    });
  });

  test('orderbook: only required params', async () => {
    const responsePromise = cadenzaLite.marketSymbols.orderbook({
      exchangeType: 'BINANCE',
      symbol: 'BTC/USDT',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('orderbook: required and optional params', async () => {
    const response = await cadenzaLite.marketSymbols.orderbook({
      exchangeType: 'BINANCE',
      symbol: 'BTC/USDT',
      limit: 100,
    });
  });

  test('ticker: only required params', async () => {
    const responsePromise = cadenzaLite.marketSymbols.ticker({ symbol: 'BTC/USDT' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('ticker: required and optional params', async () => {
    const response = await cadenzaLite.marketSymbols.ticker({ symbol: 'BTC/USDT', exchangeType: 'BINANCE' });
  });
});
