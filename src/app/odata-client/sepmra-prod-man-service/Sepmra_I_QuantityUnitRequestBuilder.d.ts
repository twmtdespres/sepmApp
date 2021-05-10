import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { Sepmra_I_QuantityUnit } from './Sepmra_I_QuantityUnit';
/**
 * Request builder class for operations supported on the [[Sepmra_I_QuantityUnit]] entity.
 */
export declare class Sepmra_I_QuantityUnitRequestBuilder extends RequestBuilder<Sepmra_I_QuantityUnit> {
    /**
     * Returns a request builder for retrieving one `Sepmra_I_QuantityUnit` entity based on its keys.
     * @param unitOfMeasure Key property. See [[Sepmra_I_QuantityUnit.unitOfMeasure]].
     * @returns A request builder for creating requests to retrieve one `Sepmra_I_QuantityUnit` entity based on its keys.
     */
    getByKey(unitOfMeasure: string): GetByKeyRequestBuilderV2<Sepmra_I_QuantityUnit>;
    /**
     * Returns a request builder for querying all `Sepmra_I_QuantityUnit` entities.
     * @returns A request builder for creating requests to retrieve all `Sepmra_I_QuantityUnit` entities.
     */
    getAll(): GetAllRequestBuilderV2<Sepmra_I_QuantityUnit>;
}
//# sourceMappingURL=Sepmra_I_QuantityUnitRequestBuilder.d.ts.map