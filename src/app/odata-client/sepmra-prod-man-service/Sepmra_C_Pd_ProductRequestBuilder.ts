/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { Sepmra_C_Pd_Product } from './Sepmra_C_Pd_Product';

/**
 * Request builder class for operations supported on the [[Sepmra_C_Pd_Product]] entity.
 */
export class Sepmra_C_Pd_ProductRequestBuilder extends RequestBuilder<Sepmra_C_Pd_Product> {
  /**
   * Returns a request builder for retrieving one `Sepmra_C_Pd_Product` entity based on its keys.
   * @param productDraftUuid Key property. See [[Sepmra_C_Pd_Product.productDraftUuid]].
   * @param activeProduct Key property. See [[Sepmra_C_Pd_Product.activeProduct]].
   * @returns A request builder for creating requests to retrieve one `Sepmra_C_Pd_Product` entity based on its keys.
   */
  getByKey(productDraftUuid: string, activeProduct: string): GetByKeyRequestBuilderV2<Sepmra_C_Pd_Product> {
    return new GetByKeyRequestBuilderV2(Sepmra_C_Pd_Product, {
      ProductDraftUUID: productDraftUuid,
      ActiveProduct: activeProduct
    });
  }

  /**
   * Returns a request builder for querying all `Sepmra_C_Pd_Product` entities.
   * @returns A request builder for creating requests to retrieve all `Sepmra_C_Pd_Product` entities.
   */
  getAll(): GetAllRequestBuilderV2<Sepmra_C_Pd_Product> {
    return new GetAllRequestBuilderV2(Sepmra_C_Pd_Product);
  }

  /**
   * Returns a request builder for creating a `Sepmra_C_Pd_Product` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Sepmra_C_Pd_Product`.
   */
  create(entity: Sepmra_C_Pd_Product): CreateRequestBuilderV2<Sepmra_C_Pd_Product> {
    return new CreateRequestBuilderV2(Sepmra_C_Pd_Product, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Sepmra_C_Pd_Product`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Sepmra_C_Pd_Product`.
   */
  update(entity: Sepmra_C_Pd_Product): UpdateRequestBuilderV2<Sepmra_C_Pd_Product> {
    return new UpdateRequestBuilderV2(Sepmra_C_Pd_Product, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Sepmra_C_Pd_Product`.
   * @param productDraftUuid Key property. See [[Sepmra_C_Pd_Product.productDraftUuid]].
   * @param activeProduct Key property. See [[Sepmra_C_Pd_Product.activeProduct]].
   * @returns A request builder for creating requests that delete an entity of type `Sepmra_C_Pd_Product`.
   */
  delete(productDraftUuid: string, activeProduct: string): DeleteRequestBuilderV2<Sepmra_C_Pd_Product>;
  /**
   * Returns a request builder for deleting an entity of type `Sepmra_C_Pd_Product`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Sepmra_C_Pd_Product` by taking the entity as a parameter.
   */
  delete(entity: Sepmra_C_Pd_Product): DeleteRequestBuilderV2<Sepmra_C_Pd_Product>;
  delete(productDraftUuidOrEntity: any, activeProduct?: string): DeleteRequestBuilderV2<Sepmra_C_Pd_Product> {
    return new DeleteRequestBuilderV2(Sepmra_C_Pd_Product, productDraftUuidOrEntity instanceof Sepmra_C_Pd_Product ? productDraftUuidOrEntity : {
      ProductDraftUUID: productDraftUuidOrEntity!,
      ActiveProduct: activeProduct!
    });
  }
}
