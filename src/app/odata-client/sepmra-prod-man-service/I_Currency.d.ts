import { I_CurrencyRequestBuilder } from './I_CurrencyRequestBuilder';
import { AllFields, BooleanField, CustomFieldV2, EntityBuilderType, EntityV2, Field, NumberField, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "I_Currency" of service "SEPMRA_PROD_MAN".
 */
export declare class I_Currency extends EntityV2 implements I_CurrencyType {
    /**
     * Technical entity name for I_Currency.
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
     * Texte descriptif.
     * Maximum length: 40.
     * @nullable
     */
    currencyText?: string;
    /**
     * Décimales.
     * @nullable
     */
    decimals?: number;
    /**
     * Code ISO.
     * Maximum length: 3.
     * @nullable
     */
    currencyIsoCode?: string;
    /**
     * Clé alternative.
     * Maximum length: 3.
     * @nullable
     */
    alternativeCurrencyKey?: string;
    /**
     * Primaire.
     * @nullable
     */
    isPrimaryCurrencyForIsoCrcy?: boolean;
    /**
     * Returns an entity builder to construct instances of `I_Currency`.
     * @returns A builder that constructs instances of entity type `I_Currency`.
     */
    static builder(): EntityBuilderType<I_Currency, I_CurrencyType>;
    /**
     * Returns a request builder to construct requests for operations on the `I_Currency` entity type.
     * @returns A `I_Currency` request builder.
     */
    static requestBuilder(): I_CurrencyRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `I_Currency`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `I_Currency`.
     */
    static customField(fieldName: string): CustomFieldV2<I_Currency>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface I_CurrencyType {
    currency: string;
    currencyText?: string | null;
    decimals?: number | null;
    currencyIsoCode?: string | null;
    alternativeCurrencyKey?: string | null;
    isPrimaryCurrencyForIsoCrcy?: boolean | null;
}
export declare namespace I_Currency {
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY: StringField<I_Currency>;
    /**
     * Static representation of the [[currencyText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY_TEXT: StringField<I_Currency>;
    /**
     * Static representation of the [[decimals]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DECIMALS: NumberField<I_Currency>;
    /**
     * Static representation of the [[currencyIsoCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY_ISO_CODE: StringField<I_Currency>;
    /**
     * Static representation of the [[alternativeCurrencyKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALTERNATIVE_CURRENCY_KEY: StringField<I_Currency>;
    /**
     * Static representation of the [[isPrimaryCurrencyForIsoCrcy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_PRIMARY_CURRENCY_FOR_ISO_CRCY: BooleanField<I_Currency>;
    /**
     * All fields of the I_Currency entity.
     */
    const _allFields: Array<StringField<I_Currency> | NumberField<I_Currency> | BooleanField<I_Currency>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<I_Currency>;
    /**
     * All key fields of the I_Currency entity.
     */
    const _keyFields: Array<Field<I_Currency>>;
    /**
     * Mapping of all key field names to the respective static field property I_Currency.
     */
    const _keys: {
        [keys: string]: Field<I_Currency>;
    };
}
//# sourceMappingURL=I_Currency.d.ts.map