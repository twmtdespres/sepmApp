import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { I_DraftAdministrativeData } from './I_DraftAdministrativeData';
/**
 * Request builder class for operations supported on the [[I_DraftAdministrativeData]] entity.
 */
export declare class I_DraftAdministrativeDataRequestBuilder extends RequestBuilder<I_DraftAdministrativeData> {
    /**
     * Returns a request builder for retrieving one `I_DraftAdministrativeData` entity based on its keys.
     * @param draftUuid Key property. See [[I_DraftAdministrativeData.draftUuid]].
     * @returns A request builder for creating requests to retrieve one `I_DraftAdministrativeData` entity based on its keys.
     */
    getByKey(draftUuid: string): GetByKeyRequestBuilderV2<I_DraftAdministrativeData>;
    /**
     * Returns a request builder for querying all `I_DraftAdministrativeData` entities.
     * @returns A request builder for creating requests to retrieve all `I_DraftAdministrativeData` entities.
     */
    getAll(): GetAllRequestBuilderV2<I_DraftAdministrativeData>;
}
//# sourceMappingURL=I_DraftAdministrativeDataRequestBuilder.d.ts.map