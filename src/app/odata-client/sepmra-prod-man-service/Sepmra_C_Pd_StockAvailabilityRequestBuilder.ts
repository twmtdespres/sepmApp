/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { Sepmra_C_Pd_StockAvailability } from './Sepmra_C_Pd_StockAvailability';

/**
 * Request builder class for operations supported on the [[Sepmra_C_Pd_StockAvailability]] entity.
 */
export class Sepmra_C_Pd_StockAvailabilityRequestBuilder extends RequestBuilder<Sepmra_C_Pd_StockAvailability> {
  /**
   * Returns a request builder for retrieving one `Sepmra_C_Pd_StockAvailability` entity based on its keys.
   * @param product Key property. See [[Sepmra_C_Pd_StockAvailability.product]].
   * @returns A request builder for creating requests to retrieve one `Sepmra_C_Pd_StockAvailability` entity based on its keys.
   */
  getByKey(product: string): GetByKeyRequestBuilderV2<Sepmra_C_Pd_StockAvailability> {
    return new GetByKeyRequestBuilderV2(Sepmra_C_Pd_StockAvailability, { Product: product });
  }

  /**
   * Returns a request builder for querying all `Sepmra_C_Pd_StockAvailability` entities.
   * @returns A request builder for creating requests to retrieve all `Sepmra_C_Pd_StockAvailability` entities.
   */
  getAll(): GetAllRequestBuilderV2<Sepmra_C_Pd_StockAvailability> {
    return new GetAllRequestBuilderV2(Sepmra_C_Pd_StockAvailability);
  }
}
