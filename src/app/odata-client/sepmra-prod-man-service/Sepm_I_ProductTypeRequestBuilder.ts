/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { Sepm_I_ProductType } from './Sepm_I_ProductType';

/**
 * Request builder class for operations supported on the [[Sepm_I_ProductType]] entity.
 */
export class Sepm_I_ProductTypeRequestBuilder extends RequestBuilder<Sepm_I_ProductType> {
  /**
   * Returns a request builder for retrieving one `Sepm_I_ProductType` entity based on its keys.
   * @param productType Key property. See [[Sepm_I_ProductType.productType]].
   * @returns A request builder for creating requests to retrieve one `Sepm_I_ProductType` entity based on its keys.
   */
  getByKey(productType: string): GetByKeyRequestBuilderV2<Sepm_I_ProductType> {
    return new GetByKeyRequestBuilderV2(Sepm_I_ProductType, { ProductType: productType });
  }

  /**
   * Returns a request builder for querying all `Sepm_I_ProductType` entities.
   * @returns A request builder for creating requests to retrieve all `Sepm_I_ProductType` entities.
   */
  getAll(): GetAllRequestBuilderV2<Sepm_I_ProductType> {
    return new GetAllRequestBuilderV2(Sepm_I_ProductType);
  }
}
