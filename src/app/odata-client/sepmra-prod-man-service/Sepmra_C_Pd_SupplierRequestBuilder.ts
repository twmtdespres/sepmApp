/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { Sepmra_C_Pd_Supplier } from './Sepmra_C_Pd_Supplier';

/**
 * Request builder class for operations supported on the [[Sepmra_C_Pd_Supplier]] entity.
 */
export class Sepmra_C_Pd_SupplierRequestBuilder extends RequestBuilder<Sepmra_C_Pd_Supplier> {
  /**
   * Returns a request builder for retrieving one `Sepmra_C_Pd_Supplier` entity based on its keys.
   * @param supplier Key property. See [[Sepmra_C_Pd_Supplier.supplier]].
   * @returns A request builder for creating requests to retrieve one `Sepmra_C_Pd_Supplier` entity based on its keys.
   */
  getByKey(supplier: string): GetByKeyRequestBuilderV2<Sepmra_C_Pd_Supplier> {
    return new GetByKeyRequestBuilderV2(Sepmra_C_Pd_Supplier, { Supplier: supplier });
  }

  /**
   * Returns a request builder for querying all `Sepmra_C_Pd_Supplier` entities.
   * @returns A request builder for creating requests to retrieve all `Sepmra_C_Pd_Supplier` entities.
   */
  getAll(): GetAllRequestBuilderV2<Sepmra_C_Pd_Supplier> {
    return new GetAllRequestBuilderV2(Sepmra_C_Pd_Supplier);
  }
}
