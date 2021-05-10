import { RequestBuilder, GetAllRequestBuilderV2, GetByKeyRequestBuilderV2 } from '@sap-cloud-sdk/core';
import { Sepmra_C_CurrencyValueHelp } from './Sepmra_C_CurrencyValueHelp';
/**
 * Request builder class for operations supported on the [[Sepmra_C_CurrencyValueHelp]] entity.
 */
export declare class Sepmra_C_CurrencyValueHelpRequestBuilder extends RequestBuilder<Sepmra_C_CurrencyValueHelp> {
    /**
     * Returns a request builder for retrieving one `Sepmra_C_CurrencyValueHelp` entity based on its keys.
     * @param currency Key property. See [[Sepmra_C_CurrencyValueHelp.currency]].
     * @returns A request builder for creating requests to retrieve one `Sepmra_C_CurrencyValueHelp` entity based on its keys.
     */
    getByKey(currency: string): GetByKeyRequestBuilderV2<Sepmra_C_CurrencyValueHelp>;
    /**
     * Returns a request builder for querying all `Sepmra_C_CurrencyValueHelp` entities.
     * @returns A request builder for creating requests to retrieve all `Sepmra_C_CurrencyValueHelp` entities.
     */
    getAll(): GetAllRequestBuilderV2<Sepmra_C_CurrencyValueHelp>;
}
//# sourceMappingURL=Sepmra_C_CurrencyValueHelpRequestBuilder.d.ts.map