import { Sepmra_C_CurrencyValueHelpRequestBuilder } from './Sepmra_C_CurrencyValueHelpRequestBuilder';
import { AllFields, CustomFieldV2, EntityBuilderType, EntityV2, Field, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SEPMRA_C_CurrencyValueHelp" of service "SEPMRA_PROD_MAN".
 */
export declare class Sepmra_C_CurrencyValueHelp extends EntityV2 implements Sepmra_C_CurrencyValueHelpType {
    /**
     * Technical entity name for Sepmra_C_CurrencyValueHelp.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Devise.
     * Maximum length: 5.
     */
    currency: string;
    /**
     * Currency.
     * Maximum length: 15.
     * @nullable
     */
    currencyName?: string;
    /**
     * Returns an entity builder to construct instances of `Sepmra_C_CurrencyValueHelp`.
     * @returns A builder that constructs instances of entity type `Sepmra_C_CurrencyValueHelp`.
     */
    static builder(): EntityBuilderType<Sepmra_C_CurrencyValueHelp, Sepmra_C_CurrencyValueHelpType>;
    /**
     * Returns a request builder to construct requests for operations on the `Sepmra_C_CurrencyValueHelp` entity type.
     * @returns A `Sepmra_C_CurrencyValueHelp` request builder.
     */
    static requestBuilder(): Sepmra_C_CurrencyValueHelpRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepmra_C_CurrencyValueHelp`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Sepmra_C_CurrencyValueHelp`.
     */
    static customField(fieldName: string): CustomFieldV2<Sepmra_C_CurrencyValueHelp>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface Sepmra_C_CurrencyValueHelpType {
    currency: string;
    currencyName?: string | null;
}
export declare namespace Sepmra_C_CurrencyValueHelp {
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY: StringField<Sepmra_C_CurrencyValueHelp>;
    /**
     * Static representation of the [[currencyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY_NAME: StringField<Sepmra_C_CurrencyValueHelp>;
    /**
     * All fields of the Sepmra_C_CurrencyValueHelp entity.
     */
    const _allFields: Array<StringField<Sepmra_C_CurrencyValueHelp>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Sepmra_C_CurrencyValueHelp>;
    /**
     * All key fields of the Sepmra_C_CurrencyValueHelp entity.
     */
    const _keyFields: Array<Field<Sepmra_C_CurrencyValueHelp>>;
    /**
     * Mapping of all key field names to the respective static field property Sepmra_C_CurrencyValueHelp.
     */
    const _keys: {
        [keys: string]: Field<Sepmra_C_CurrencyValueHelp>;
    };
}
//# sourceMappingURL=Sepmra_C_CurrencyValueHelp.d.ts.map