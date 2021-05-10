import { I_LanguageRequestBuilder } from './I_LanguageRequestBuilder';
import { AllFields, CustomFieldV2, EntityBuilderType, EntityV2, Field, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "I_Language" of service "SEPMRA_PROD_MAN".
 */
export declare class I_Language extends EntityV2 implements I_LanguageType {
    /**
     * Technical entity name for I_Language.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Code langue.
     * Maximum length: 2.
     */
    language: string;
    /**
     * Langue (ISO 639).
     * Maximum length: 2.
     * @nullable
     */
    languageIsoCode?: string;
    /**
     * Returns an entity builder to construct instances of `I_Language`.
     * @returns A builder that constructs instances of entity type `I_Language`.
     */
    static builder(): EntityBuilderType<I_Language, I_LanguageType>;
    /**
     * Returns a request builder to construct requests for operations on the `I_Language` entity type.
     * @returns A `I_Language` request builder.
     */
    static requestBuilder(): I_LanguageRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `I_Language`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `I_Language`.
     */
    static customField(fieldName: string): CustomFieldV2<I_Language>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface I_LanguageType {
    language: string;
    languageIsoCode?: string | null;
}
export declare namespace I_Language {
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LANGUAGE: StringField<I_Language>;
    /**
     * Static representation of the [[languageIsoCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LANGUAGE_ISO_CODE: StringField<I_Language>;
    /**
     * All fields of the I_Language entity.
     */
    const _allFields: Array<StringField<I_Language>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<I_Language>;
    /**
     * All key fields of the I_Language entity.
     */
    const _keyFields: Array<Field<I_Language>>;
    /**
     * Mapping of all key field names to the respective static field property I_Language.
     */
    const _keys: {
        [keys: string]: Field<I_Language>;
    };
}
//# sourceMappingURL=I_Language.d.ts.map