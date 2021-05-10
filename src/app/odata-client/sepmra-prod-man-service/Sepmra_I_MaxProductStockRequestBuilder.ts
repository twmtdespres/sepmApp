/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { Sepmra_I_MaxProductStock } from './Sepmra_I_MaxProductStock';

/**
 * Request builder class for operations supported on the [[Sepmra_I_MaxProductStock]] entity.
 */
export class Sepmra_I_MaxProductStockRequestBuilder extends RequestBuilder<Sepmra_I_MaxProductStock> {
  /**
   * Returns a request builder for retrieving one `Sepmra_I_MaxProductStock` entity based on its keys.
   * @param product Key property. See [[Sepmra_I_MaxProductStock.product]].
   * @returns A request builder for creating requests to retrieve one `Sepmra_I_MaxProductStock` entity based on its keys.
   */
  getByKey(product: string): GetByKeyRequestBuilderV2<Sepmra_I_MaxProductStock> {
    return new GetByKeyRequestBuilderV2(Sepmra_I_MaxProductStock, { Product: product });
  }

  /**
   * Returns a request builder for querying all `Sepmra_I_MaxProductStock` entities.
   * @returns A request builder for creating requests to retrieve all `Sepmra_I_MaxProductStock` entities.
   */
  getAll(): GetAllRequestBuilderV2<Sepmra_I_MaxProductStock> {
    return new GetAllRequestBuilderV2(Sepmra_I_MaxProductStock);
  }
}
