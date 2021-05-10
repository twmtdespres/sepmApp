import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2, CreateRequestBuilderV2, UpdateRequestBuilderV2, DeleteRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { Sepmra_C_Pd_ProductText } from './Sepmra_C_Pd_ProductText';
/**
 * Request builder class for operations supported on the [[Sepmra_C_Pd_ProductText]] entity.
 */
export declare class Sepmra_C_Pd_ProductTextRequestBuilder extends RequestBuilder<Sepmra_C_Pd_ProductText> {
    /**
     * Returns a request builder for retrieving one `Sepmra_C_Pd_ProductText` entity based on its keys.
     * @param productTextDraftUuid Key property. See [[Sepmra_C_Pd_ProductText.productTextDraftUuid]].
     * @param activeProduct Key property. See [[Sepmra_C_Pd_ProductText.activeProduct]].
     * @param activeLanguage Key property. See [[Sepmra_C_Pd_ProductText.activeLanguage]].
     * @returns A request builder for creating requests to retrieve one `Sepmra_C_Pd_ProductText` entity based on its keys.
     */
    getByKey(productTextDraftUuid: string, activeProduct: string, activeLanguage: string): GetByKeyRequestBuilderV2<Sepmra_C_Pd_ProductText>;
    /**
     * Returns a request builder for querying all `Sepmra_C_Pd_ProductText` entities.
     * @returns A request builder for creating requests to retrieve all `Sepmra_C_Pd_ProductText` entities.
     */
    getAll(): GetAllRequestBuilderV2<Sepmra_C_Pd_ProductText>;
    /**
     * Returns a request builder for creating a `Sepmra_C_Pd_ProductText` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Sepmra_C_Pd_ProductText`.
     */
    create(entity: Sepmra_C_Pd_ProductText): CreateRequestBuilderV2<Sepmra_C_Pd_ProductText>;
    /**
     * Returns a request builder for updating an entity of type `Sepmra_C_Pd_ProductText`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Sepmra_C_Pd_ProductText`.
     */
    update(entity: Sepmra_C_Pd_ProductText): UpdateRequestBuilderV2<Sepmra_C_Pd_ProductText>;
    /**
     * Returns a request builder for deleting an entity of type `Sepmra_C_Pd_ProductText`.
     * @param productTextDraftUuid Key property. See [[Sepmra_C_Pd_ProductText.productTextDraftUuid]].
     * @param activeProduct Key property. See [[Sepmra_C_Pd_ProductText.activeProduct]].
     * @param activeLanguage Key property. See [[Sepmra_C_Pd_ProductText.activeLanguage]].
     * @returns A request builder for creating requests that delete an entity of type `Sepmra_C_Pd_ProductText`.
     */
    delete(productTextDraftUuid: string, activeProduct: string, activeLanguage: string): DeleteRequestBuilderV2<Sepmra_C_Pd_ProductText>;
    /**
     * Returns a request builder for deleting an entity of type `Sepmra_C_Pd_ProductText`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Sepmra_C_Pd_ProductText` by taking the entity as a parameter.
     */
    delete(entity: Sepmra_C_Pd_ProductText): DeleteRequestBuilderV2<Sepmra_C_Pd_ProductText>;
}
//# sourceMappingURL=Sepmra_C_Pd_ProductTextRequestBuilder.d.ts.map