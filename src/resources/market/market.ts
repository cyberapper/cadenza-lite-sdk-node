// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as InstrumentAPI from './instrument';
import { Instrument, InstrumentListParams, InstrumentListResponse, InstrumentResource } from './instrument';
import * as KlineAPI from './kline';
import { Candles, Kline, KlineGetParams, KlineResource } from './kline';
import * as OrderbookAPI from './orderbook';
import { Orderbook, OrderbookGetParams, OrderbookGetResponse, OrderbookResource } from './orderbook';
import * as TickerAPI from './ticker';
import { Ticker, TickerGetParams, TickerGetResponse, TickerResource } from './ticker';

export class Market extends APIResource {
  instrument: InstrumentAPI.InstrumentResource = new InstrumentAPI.InstrumentResource(this._client);
  ticker: TickerAPI.TickerResource = new TickerAPI.TickerResource(this._client);
  orderbook: OrderbookAPI.OrderbookResource = new OrderbookAPI.OrderbookResource(this._client);
  kline: KlineAPI.KlineResource = new KlineAPI.KlineResource(this._client);
}

Market.InstrumentResource = InstrumentResource;
Market.TickerResource = TickerResource;
Market.OrderbookResource = OrderbookResource;
Market.KlineResource = KlineResource;

export declare namespace Market {
  export {
    InstrumentResource as InstrumentResource,
    type Instrument as Instrument,
    type InstrumentListResponse as InstrumentListResponse,
    type InstrumentListParams as InstrumentListParams,
  };

  export {
    TickerResource as TickerResource,
    type Ticker as Ticker,
    type TickerGetResponse as TickerGetResponse,
    type TickerGetParams as TickerGetParams,
  };

  export {
    OrderbookResource as OrderbookResource,
    type Orderbook as Orderbook,
    type OrderbookGetResponse as OrderbookGetResponse,
    type OrderbookGetParams as OrderbookGetParams,
  };

  export {
    KlineResource as KlineResource,
    type Candles as Candles,
    type Kline as Kline,
    type KlineGetParams as KlineGetParams,
  };
}
