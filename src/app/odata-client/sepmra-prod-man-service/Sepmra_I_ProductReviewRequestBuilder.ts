/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { Sepmra_I_ProductReview } from './Sepmra_I_ProductReview';

/**
 * Request builder class for operations supported on the [[Sepmra_I_ProductReview]] entity.
 */
export class Sepmra_I_ProductReviewRequestBuilder extends RequestBuilder<Sepmra_I_ProductReview> {
  /**
   * Returns a request builder for retrieving one `Sepmra_I_ProductReview` entity based on its keys.
   * @param id Key property. See [[Sepmra_I_ProductReview.id]].
   * @returns A request builder for creating requests to retrieve one `Sepmra_I_ProductReview` entity based on its keys.
   */
  getByKey(id: string): GetByKeyRequestBuilderV2<Sepmra_I_ProductReview> {
    return new GetByKeyRequestBuilderV2(Sepmra_I_ProductReview, { ID: id });
  }

  /**
   * Returns a request builder for querying all `Sepmra_I_ProductReview` entities.
   * @returns A request builder for creating requests to retrieve all `Sepmra_I_ProductReview` entities.
   */
  getAll(): GetAllRequestBuilderV2<Sepmra_I_ProductReview> {
    return new GetAllRequestBuilderV2(Sepmra_I_ProductReview);
  }
}
