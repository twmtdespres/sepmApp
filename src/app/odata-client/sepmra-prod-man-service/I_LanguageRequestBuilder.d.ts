import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { I_Language } from './I_Language';
/**
 * Request builder class for operations supported on the [[I_Language]] entity.
 */
export declare class I_LanguageRequestBuilder extends RequestBuilder<I_Language> {
    /**
     * Returns a request builder for retrieving one `I_Language` entity based on its keys.
     * @param language Key property. See [[I_Language.language]].
     * @returns A request builder for creating requests to retrieve one `I_Language` entity based on its keys.
     */
    getByKey(language: string): GetByKeyRequestBuilderV2<I_Language>;
    /**
     * Returns a request builder for querying all `I_Language` entities.
     * @returns A request builder for creating requests to retrieve all `I_Language` entities.
     */
    getAll(): GetAllRequestBuilderV2<I_Language>;
}
//# sourceMappingURL=I_LanguageRequestBuilder.d.ts.map