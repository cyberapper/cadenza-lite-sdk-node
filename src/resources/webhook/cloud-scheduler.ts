// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as CloudSchedulerAPI from './cloud-scheduler';

export class CloudScheduler extends APIResource {
  /**
   * Cloud scheduler update portfolio routine task
   */
  updatePortfolioRoutine(
    options?: Core.RequestOptions,
  ): Core.APIPromise<CloudSchedulerUpdatePortfolioRoutineResponse> {
    return this._client.post('/api/v2/webhook/cloudScheduler/updatePortfolioRoutine', options);
  }
}

export interface CloudSchedulerUpdatePortfolioRoutineResponse {
  data?: string;
}

export namespace CloudScheduler {
  export import CloudSchedulerUpdatePortfolioRoutineResponse = CloudSchedulerAPI.CloudSchedulerUpdatePortfolioRoutineResponse;
}
