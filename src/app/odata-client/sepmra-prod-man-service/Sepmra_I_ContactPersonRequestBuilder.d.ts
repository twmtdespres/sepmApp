import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { Sepmra_I_ContactPerson } from './Sepmra_I_ContactPerson';
/**
 * Request builder class for operations supported on the [[Sepmra_I_ContactPerson]] entity.
 */
export declare class Sepmra_I_ContactPersonRequestBuilder extends RequestBuilder<Sepmra_I_ContactPerson> {
    /**
     * Returns a request builder for retrieving one `Sepmra_I_ContactPerson` entity based on its keys.
     * @param contactPersonUuid Key property. See [[Sepmra_I_ContactPerson.contactPersonUuid]].
     * @returns A request builder for creating requests to retrieve one `Sepmra_I_ContactPerson` entity based on its keys.
     */
    getByKey(contactPersonUuid: string): GetByKeyRequestBuilderV2<Sepmra_I_ContactPerson>;
    /**
     * Returns a request builder for querying all `Sepmra_I_ContactPerson` entities.
     * @returns A request builder for creating requests to retrieve all `Sepmra_I_ContactPerson` entities.
     */
    getAll(): GetAllRequestBuilderV2<Sepmra_I_ContactPerson>;
}
//# sourceMappingURL=Sepmra_I_ContactPersonRequestBuilder.d.ts.map