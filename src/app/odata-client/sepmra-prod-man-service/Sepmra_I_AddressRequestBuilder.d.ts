import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { Sepmra_I_Address } from './Sepmra_I_Address';
/**
 * Request builder class for operations supported on the [[Sepmra_I_Address]] entity.
 */
export declare class Sepmra_I_AddressRequestBuilder extends RequestBuilder<Sepmra_I_Address> {
    /**
     * Returns a request builder for retrieving one `Sepmra_I_Address` entity based on its keys.
     * @param addressUuid Key property. See [[Sepmra_I_Address.addressUuid]].
     * @returns A request builder for creating requests to retrieve one `Sepmra_I_Address` entity based on its keys.
     */
    getByKey(addressUuid: string): GetByKeyRequestBuilderV2<Sepmra_I_Address>;
    /**
     * Returns a request builder for querying all `Sepmra_I_Address` entities.
     * @returns A request builder for creating requests to retrieve all `Sepmra_I_Address` entities.
     */
    getAll(): GetAllRequestBuilderV2<Sepmra_I_Address>;
}
//# sourceMappingURL=Sepmra_I_AddressRequestBuilder.d.ts.map