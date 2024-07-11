// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cadenza from 'cadenza-sdk';
import { Response } from 'node-fetch';

const cadenza = new Cadenza({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource portfolio', () => {
  test('listBalances', async () => {
    const responsePromise = cadenza.portfolio.listBalances();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listBalances: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(cadenza.portfolio.listBalances({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Cadenza.NotFoundError,
    );
  });

  test('listBalances: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cadenza.portfolio.listBalances(
        { exchangeAccountId: 'exchangeAccountId', hideEmptyValue: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cadenza.NotFoundError);
  });

  test('listCredit', async () => {
    const responsePromise = cadenza.portfolio.listCredit();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listCredit: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(cadenza.portfolio.listCredit({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Cadenza.NotFoundError,
    );
  });

  test('listCredit: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cadenza.portfolio.listCredit(
        { exchangeAccountId: 'exchangeAccountId', hideEmptyValue: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cadenza.NotFoundError);
  });

  test('listPositions', async () => {
    const responsePromise = cadenza.portfolio.listPositions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listPositions: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(cadenza.portfolio.listPositions({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Cadenza.NotFoundError,
    );
  });

  test('listPositions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cadenza.portfolio.listPositions(
        { exchangeAccountId: 'exchangeAccountId', hideEmptyValue: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cadenza.NotFoundError);
  });
});
