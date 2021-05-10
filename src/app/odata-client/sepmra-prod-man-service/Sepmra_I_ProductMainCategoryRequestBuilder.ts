/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { Sepmra_I_ProductMainCategory } from './Sepmra_I_ProductMainCategory';

/**
 * Request builder class for operations supported on the [[Sepmra_I_ProductMainCategory]] entity.
 */
export class Sepmra_I_ProductMainCategoryRequestBuilder extends RequestBuilder<Sepmra_I_ProductMainCategory> {
  /**
   * Returns a request builder for retrieving one `Sepmra_I_ProductMainCategory` entity based on its keys.
   * @param mainProductCategory Key property. See [[Sepmra_I_ProductMainCategory.mainProductCategory]].
   * @returns A request builder for creating requests to retrieve one `Sepmra_I_ProductMainCategory` entity based on its keys.
   */
  getByKey(mainProductCategory: string): GetByKeyRequestBuilderV2<Sepmra_I_ProductMainCategory> {
    return new GetByKeyRequestBuilderV2(Sepmra_I_ProductMainCategory, { MainProductCategory: mainProductCategory });
  }

  /**
   * Returns a request builder for querying all `Sepmra_I_ProductMainCategory` entities.
   * @returns A request builder for creating requests to retrieve all `Sepmra_I_ProductMainCategory` entities.
   */
  getAll(): GetAllRequestBuilderV2<Sepmra_I_ProductMainCategory> {
    return new GetAllRequestBuilderV2(Sepmra_I_ProductMainCategory);
  }
}
