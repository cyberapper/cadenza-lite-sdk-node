// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import CadenzaLite from 'cadenza-lite';
import { Response } from 'node-fetch';

const cadenzaLite = new CadenzaLite({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource client', () => {
  test('retrieveInfo', async () => {
    const responsePromise = cadenzaLite.account.client.retrieveInfo();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveInfo: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cadenzaLite.account.client.retrieveInfo({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(CadenzaLite.NotFoundError);
  });
});
