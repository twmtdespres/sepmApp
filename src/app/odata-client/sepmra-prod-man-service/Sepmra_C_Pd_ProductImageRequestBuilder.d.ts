import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { Sepmra_C_Pd_ProductImage } from './Sepmra_C_Pd_ProductImage';
/**
 * Request builder class for operations supported on the [[Sepmra_C_Pd_ProductImage]] entity.
 */
export declare class Sepmra_C_Pd_ProductImageRequestBuilder extends RequestBuilder<Sepmra_C_Pd_ProductImage> {
    /**
     * Returns a request builder for retrieving one `Sepmra_C_Pd_ProductImage` entity based on its keys.
     * @param productImageDraftUuid Key property. See [[Sepmra_C_Pd_ProductImage.productImageDraftUuid]].
     * @param activeProduct Key property. See [[Sepmra_C_Pd_ProductImage.activeProduct]].
     * @param activeProductImage Key property. See [[Sepmra_C_Pd_ProductImage.activeProductImage]].
     * @returns A request builder for creating requests to retrieve one `Sepmra_C_Pd_ProductImage` entity based on its keys.
     */
    getByKey(productImageDraftUuid: string, activeProduct: string, activeProductImage: string): GetByKeyRequestBuilderV2<Sepmra_C_Pd_ProductImage>;
    /**
     * Returns a request builder for querying all `Sepmra_C_Pd_ProductImage` entities.
     * @returns A request builder for creating requests to retrieve all `Sepmra_C_Pd_ProductImage` entities.
     */
    getAll(): GetAllRequestBuilderV2<Sepmra_C_Pd_ProductImage>;
}
//# sourceMappingURL=Sepmra_C_Pd_ProductImageRequestBuilder.d.ts.map