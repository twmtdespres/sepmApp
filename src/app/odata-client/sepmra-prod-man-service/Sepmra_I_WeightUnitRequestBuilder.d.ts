import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { Sepmra_I_WeightUnit } from './Sepmra_I_WeightUnit';
/**
 * Request builder class for operations supported on the [[Sepmra_I_WeightUnit]] entity.
 */
export declare class Sepmra_I_WeightUnitRequestBuilder extends RequestBuilder<Sepmra_I_WeightUnit> {
    /**
     * Returns a request builder for retrieving one `Sepmra_I_WeightUnit` entity based on its keys.
     * @param unitOfMeasure Key property. See [[Sepmra_I_WeightUnit.unitOfMeasure]].
     * @returns A request builder for creating requests to retrieve one `Sepmra_I_WeightUnit` entity based on its keys.
     */
    getByKey(unitOfMeasure: string): GetByKeyRequestBuilderV2<Sepmra_I_WeightUnit>;
    /**
     * Returns a request builder for querying all `Sepmra_I_WeightUnit` entities.
     * @returns A request builder for creating requests to retrieve all `Sepmra_I_WeightUnit` entities.
     */
    getAll(): GetAllRequestBuilderV2<Sepmra_I_WeightUnit>;
}
//# sourceMappingURL=Sepmra_I_WeightUnitRequestBuilder.d.ts.map