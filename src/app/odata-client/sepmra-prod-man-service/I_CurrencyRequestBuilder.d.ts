import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { I_Currency } from './I_Currency';
/**
 * Request builder class for operations supported on the [[I_Currency]] entity.
 */
export declare class I_CurrencyRequestBuilder extends RequestBuilder<I_Currency> {
    /**
     * Returns a request builder for retrieving one `I_Currency` entity based on its keys.
     * @param currency Key property. See [[I_Currency.currency]].
     * @returns A request builder for creating requests to retrieve one `I_Currency` entity based on its keys.
     */
    getByKey(currency: string): GetByKeyRequestBuilderV2<I_Currency>;
    /**
     * Returns a request builder for querying all `I_Currency` entities.
     * @returns A request builder for creating requests to retrieve all `I_Currency` entities.
     */
    getAll(): GetAllRequestBuilderV2<I_Currency>;
}
//# sourceMappingURL=I_CurrencyRequestBuilder.d.ts.map