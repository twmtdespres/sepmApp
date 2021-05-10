import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { Sepmra_I_ProductMainCategory } from './Sepmra_I_ProductMainCategory';
/**
 * Request builder class for operations supported on the [[Sepmra_I_ProductMainCategory]] entity.
 */
export declare class Sepmra_I_ProductMainCategoryRequestBuilder extends RequestBuilder<Sepmra_I_ProductMainCategory> {
    /**
     * Returns a request builder for retrieving one `Sepmra_I_ProductMainCategory` entity based on its keys.
     * @param mainProductCategory Key property. See [[Sepmra_I_ProductMainCategory.mainProductCategory]].
     * @returns A request builder for creating requests to retrieve one `Sepmra_I_ProductMainCategory` entity based on its keys.
     */
    getByKey(mainProductCategory: string): GetByKeyRequestBuilderV2<Sepmra_I_ProductMainCategory>;
    /**
     * Returns a request builder for querying all `Sepmra_I_ProductMainCategory` entities.
     * @returns A request builder for creating requests to retrieve all `Sepmra_I_ProductMainCategory` entities.
     */
    getAll(): GetAllRequestBuilderV2<Sepmra_I_ProductMainCategory>;
}
//# sourceMappingURL=Sepmra_I_ProductMainCategoryRequestBuilder.d.ts.map