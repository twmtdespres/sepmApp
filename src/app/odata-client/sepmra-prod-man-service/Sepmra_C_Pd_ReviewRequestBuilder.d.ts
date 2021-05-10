import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { Sepmra_C_Pd_Review } from './Sepmra_C_Pd_Review';
/**
 * Request builder class for operations supported on the [[Sepmra_C_Pd_Review]] entity.
 */
export declare class Sepmra_C_Pd_ReviewRequestBuilder extends RequestBuilder<Sepmra_C_Pd_Review> {
    /**
     * Returns a request builder for retrieving one `Sepmra_C_Pd_Review` entity based on its keys.
     * @param productReviewPostUuid Key property. See [[Sepmra_C_Pd_Review.productReviewPostUuid]].
     * @returns A request builder for creating requests to retrieve one `Sepmra_C_Pd_Review` entity based on its keys.
     */
    getByKey(productReviewPostUuid: string): GetByKeyRequestBuilderV2<Sepmra_C_Pd_Review>;
    /**
     * Returns a request builder for querying all `Sepmra_C_Pd_Review` entities.
     * @returns A request builder for creating requests to retrieve all `Sepmra_C_Pd_Review` entities.
     */
    getAll(): GetAllRequestBuilderV2<Sepmra_C_Pd_Review>;
}
//# sourceMappingURL=Sepmra_C_Pd_ReviewRequestBuilder.d.ts.map