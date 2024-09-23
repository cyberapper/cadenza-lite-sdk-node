// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cadenza from 'cadenza-sdk';
import { Response } from 'node-fetch';

const client = new Cadenza({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource executionReport', () => {
  test('list', async () => {
    const responsePromise = client.trading.executionReport.list();
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
    await expect(client.trading.executionReport.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Cadenza.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.trading.executionReport.list(
        {
          endTime: 1632933600000,
          limit: 100,
          offset: 0,
          quoteRequestId: 'quoteRequestId',
          startTime: 1622505600000,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cadenza.NotFoundError);
  });

  test('getQuoteExecutionReport', async () => {
    const responsePromise = client.trading.executionReport.getQuoteExecutionReport();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getQuoteExecutionReport: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.trading.executionReport.getQuoteExecutionReport({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cadenza.NotFoundError);
  });

  test('getQuoteExecutionReport: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.trading.executionReport.getQuoteExecutionReport(
        { quoteRequestId: 'quoteRequestId' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cadenza.NotFoundError);
  });
});
