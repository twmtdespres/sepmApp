/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { Sepmra_I_DimensionUnit } from './Sepmra_I_DimensionUnit';

/**
 * Request builder class for operations supported on the [[Sepmra_I_DimensionUnit]] entity.
 */
export class Sepmra_I_DimensionUnitRequestBuilder extends RequestBuilder<Sepmra_I_DimensionUnit> {
  /**
   * Returns a request builder for retrieving one `Sepmra_I_DimensionUnit` entity based on its keys.
   * @param unitOfMeasure Key property. See [[Sepmra_I_DimensionUnit.unitOfMeasure]].
   * @returns A request builder for creating requests to retrieve one `Sepmra_I_DimensionUnit` entity based on its keys.
   */
  getByKey(unitOfMeasure: string): GetByKeyRequestBuilderV2<Sepmra_I_DimensionUnit> {
    return new GetByKeyRequestBuilderV2(Sepmra_I_DimensionUnit, { UnitOfMeasure: unitOfMeasure });
  }

  /**
   * Returns a request builder for querying all `Sepmra_I_DimensionUnit` entities.
   * @returns A request builder for creating requests to retrieve all `Sepmra_I_DimensionUnit` entities.
   */
  getAll(): GetAllRequestBuilderV2<Sepmra_I_DimensionUnit> {
    return new GetAllRequestBuilderV2(Sepmra_I_DimensionUnit);
  }
}
