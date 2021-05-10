import { Sepmra_I_WeightUnitRequestBuilder } from './Sepmra_I_WeightUnitRequestBuilder';
import { AllFields, CustomFieldV2, EntityBuilderType, EntityV2, Field, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SEPMRA_I_WeightUnit" of service "SEPMRA_PROD_MAN".
 */
export declare class Sepmra_I_WeightUnit extends EntityV2 implements Sepmra_I_WeightUnitType {
    /**
     * Technical entity name for Sepmra_I_WeightUnit.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Unité mesure interne.
     * Maximum length: 3.
     */
    unitOfMeasure: string;
    /**
     * Texte unité mesure.
     * Maximum length: 10.
     * @nullable
     */
    unitOfMeasureText?: string;
    /**
     * Code ISO.
     * Maximum length: 3.
     * @nullable
     */
    unitOfMeasureIsoCode?: string;
    /**
     * Returns an entity builder to construct instances of `Sepmra_I_WeightUnit`.
     * @returns A builder that constructs instances of entity type `Sepmra_I_WeightUnit`.
     */
    static builder(): EntityBuilderType<Sepmra_I_WeightUnit, Sepmra_I_WeightUnitType>;
    /**
     * Returns a request builder to construct requests for operations on the `Sepmra_I_WeightUnit` entity type.
     * @returns A `Sepmra_I_WeightUnit` request builder.
     */
    static requestBuilder(): Sepmra_I_WeightUnitRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepmra_I_WeightUnit`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Sepmra_I_WeightUnit`.
     */
    static customField(fieldName: string): CustomFieldV2<Sepmra_I_WeightUnit>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface Sepmra_I_WeightUnitType {
    unitOfMeasure: string;
    unitOfMeasureText?: string | null;
    unitOfMeasureIsoCode?: string | null;
}
export declare namespace Sepmra_I_WeightUnit {
    /**
     * Static representation of the [[unitOfMeasure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNIT_OF_MEASURE: StringField<Sepmra_I_WeightUnit>;
    /**
     * Static representation of the [[unitOfMeasureText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNIT_OF_MEASURE_TEXT: StringField<Sepmra_I_WeightUnit>;
    /**
     * Static representation of the [[unitOfMeasureIsoCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNIT_OF_MEASURE_ISO_CODE: StringField<Sepmra_I_WeightUnit>;
    /**
     * All fields of the Sepmra_I_WeightUnit entity.
     */
    const _allFields: Array<StringField<Sepmra_I_WeightUnit>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Sepmra_I_WeightUnit>;
    /**
     * All key fields of the Sepmra_I_WeightUnit entity.
     */
    const _keyFields: Array<Field<Sepmra_I_WeightUnit>>;
    /**
     * Mapping of all key field names to the respective static field property Sepmra_I_WeightUnit.
     */
    const _keys: {
        [keys: string]: Field<Sepmra_I_WeightUnit>;
    };
}
//# sourceMappingURL=Sepmra_I_WeightUnit.d.ts.map