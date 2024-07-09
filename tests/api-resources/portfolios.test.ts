// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import CadenzaLite from 'cadenza-lite';
import { Response } from 'node-fetch';

const cadenzaLite = new CadenzaLite({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource portfolios', () => {
  test('listBalances', async () => {
    const responsePromise = cadenzaLite.portfolios.listBalances();
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
    await expect(cadenzaLite.portfolios.listBalances({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      CadenzaLite.NotFoundError,
    );
  });

  test('listBalances: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cadenzaLite.portfolios.listBalances(
        { exchangeAccountId: 'string', hideEmptyValue: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(CadenzaLite.NotFoundError);
  });

  test('listCredit', async () => {
    const responsePromise = cadenzaLite.portfolios.listCredit();
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
    await expect(cadenzaLite.portfolios.listCredit({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      CadenzaLite.NotFoundError,
    );
  });

  test('listCredit: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cadenzaLite.portfolios.listCredit(
        { exchangeAccountId: 'string', hideEmptyValue: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(CadenzaLite.NotFoundError);
  });

  test('listPositions', async () => {
    const responsePromise = cadenzaLite.portfolios.listPositions();
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
    await expect(cadenzaLite.portfolios.listPositions({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      CadenzaLite.NotFoundError,
    );
  });

  test('listPositions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cadenzaLite.portfolios.listPositions(
        { exchangeAccountId: 'string', hideEmptyValue: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(CadenzaLite.NotFoundError);
  });
});
