/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { Sepm_I_ProductValueAddedTax } from './Sepm_I_ProductValueAddedTax';

/**
 * Request builder class for operations supported on the [[Sepm_I_ProductValueAddedTax]] entity.
 */
export class Sepm_I_ProductValueAddedTaxRequestBuilder extends RequestBuilder<Sepm_I_ProductValueAddedTax> {
  /**
   * Returns a request builder for retrieving one `Sepm_I_ProductValueAddedTax` entity based on its keys.
   * @param productValueAddedTax Key property. See [[Sepm_I_ProductValueAddedTax.productValueAddedTax]].
   * @returns A request builder for creating requests to retrieve one `Sepm_I_ProductValueAddedTax` entity based on its keys.
   */
  getByKey(productValueAddedTax: number): GetByKeyRequestBuilderV2<Sepm_I_ProductValueAddedTax> {
    return new GetByKeyRequestBuilderV2(Sepm_I_ProductValueAddedTax, { ProductValueAddedTax: productValueAddedTax });
  }

  /**
   * Returns a request builder for querying all `Sepm_I_ProductValueAddedTax` entities.
   * @returns A request builder for creating requests to retrieve all `Sepm_I_ProductValueAddedTax` entities.
   */
  getAll(): GetAllRequestBuilderV2<Sepm_I_ProductValueAddedTax> {
    return new GetAllRequestBuilderV2(Sepm_I_ProductValueAddedTax);
  }
}
