import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { Sepmra_I_ProductCategory } from './Sepmra_I_ProductCategory';
/**
 * Request builder class for operations supported on the [[Sepmra_I_ProductCategory]] entity.
 */
export declare class Sepmra_I_ProductCategoryRequestBuilder extends RequestBuilder<Sepmra_I_ProductCategory> {
    /**
     * Returns a request builder for retrieving one `Sepmra_I_ProductCategory` entity based on its keys.
     * @param productCategory Key property. See [[Sepmra_I_ProductCategory.productCategory]].
     * @returns A request builder for creating requests to retrieve one `Sepmra_I_ProductCategory` entity based on its keys.
     */
    getByKey(productCategory: string): GetByKeyRequestBuilderV2<Sepmra_I_ProductCategory>;
    /**
     * Returns a request builder for querying all `Sepmra_I_ProductCategory` entities.
     * @returns A request builder for creating requests to retrieve all `Sepmra_I_ProductCategory` entities.
     */
    getAll(): GetAllRequestBuilderV2<Sepmra_I_ProductCategory>;
}
//# sourceMappingURL=Sepmra_I_ProductCategoryRequestBuilder.d.ts.map