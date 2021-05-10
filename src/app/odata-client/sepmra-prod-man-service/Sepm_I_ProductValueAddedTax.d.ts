import { Sepm_I_ProductValueAddedTaxRequestBuilder } from './Sepm_I_ProductValueAddedTaxRequestBuilder';
import { AllFields, CustomFieldV2, EntityBuilderType, EntityV2, Field, NumberField, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SEPM_I_ProductValueAddedTax" of service "SEPMRA_PROD_MAN".
 */
export declare class Sepm_I_ProductValueAddedTax extends EntityV2 implements Sepm_I_ProductValueAddedTaxType {
    /**
     * Technical entity name for Sepm_I_ProductValueAddedTax.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Tax Tariff Code.
     */
    productValueAddedTax: number;
    /**
     * Descript. synth.
     * Maximum length: 60.
     * @nullable
     */
    productValueAddedTaxText?: string;
    /**
     * Returns an entity builder to construct instances of `Sepm_I_ProductValueAddedTax`.
     * @returns A builder that constructs instances of entity type `Sepm_I_ProductValueAddedTax`.
     */
    static builder(): EntityBuilderType<Sepm_I_ProductValueAddedTax, Sepm_I_ProductValueAddedTaxType>;
    /**
     * Returns a request builder to construct requests for operations on the `Sepm_I_ProductValueAddedTax` entity type.
     * @returns A `Sepm_I_ProductValueAddedTax` request builder.
     */
    static requestBuilder(): Sepm_I_ProductValueAddedTaxRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepm_I_ProductValueAddedTax`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Sepm_I_ProductValueAddedTax`.
     */
    static customField(fieldName: string): CustomFieldV2<Sepm_I_ProductValueAddedTax>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface Sepm_I_ProductValueAddedTaxType {
    productValueAddedTax: number;
    productValueAddedTaxText?: string | null;
}
export declare namespace Sepm_I_ProductValueAddedTax {
    /**
     * Static representation of the [[productValueAddedTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCT_VALUE_ADDED_TAX: NumberField<Sepm_I_ProductValueAddedTax>;
    /**
     * Static representation of the [[productValueAddedTaxText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCT_VALUE_ADDED_TAX_TEXT: StringField<Sepm_I_ProductValueAddedTax>;
    /**
     * All fields of the Sepm_I_ProductValueAddedTax entity.
     */
    const _allFields: Array<NumberField<Sepm_I_ProductValueAddedTax> | StringField<Sepm_I_ProductValueAddedTax>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Sepm_I_ProductValueAddedTax>;
    /**
     * All key fields of the Sepm_I_ProductValueAddedTax entity.
     */
    const _keyFields: Array<Field<Sepm_I_ProductValueAddedTax>>;
    /**
     * Mapping of all key field names to the respective static field property Sepm_I_ProductValueAddedTax.
     */
    const _keys: {
        [keys: string]: Field<Sepm_I_ProductValueAddedTax>;
    };
}
//# sourceMappingURL=Sepm_I_ProductValueAddedTax.d.ts.map