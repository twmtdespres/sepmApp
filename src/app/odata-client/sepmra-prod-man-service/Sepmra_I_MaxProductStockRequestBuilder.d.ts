import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { Sepmra_I_MaxProductStock } from './Sepmra_I_MaxProductStock';
/**
 * Request builder class for operations supported on the [[Sepmra_I_MaxProductStock]] entity.
 */
export declare class Sepmra_I_MaxProductStockRequestBuilder extends RequestBuilder<Sepmra_I_MaxProductStock> {
    /**
     * Returns a request builder for retrieving one `Sepmra_I_MaxProductStock` entity based on its keys.
     * @param product Key property. See [[Sepmra_I_MaxProductStock.product]].
     * @returns A request builder for creating requests to retrieve one `Sepmra_I_MaxProductStock` entity based on its keys.
     */
    getByKey(product: string): GetByKeyRequestBuilderV2<Sepmra_I_MaxProductStock>;
    /**
     * Returns a request builder for querying all `Sepmra_I_MaxProductStock` entities.
     * @returns A request builder for creating requests to retrieve all `Sepmra_I_MaxProductStock` entities.
     */
    getAll(): GetAllRequestBuilderV2<Sepmra_I_MaxProductStock>;
}
//# sourceMappingURL=Sepmra_I_MaxProductStockRequestBuilder.d.ts.map