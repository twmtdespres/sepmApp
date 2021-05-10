import { Sepmra_I_DimensionUnitRequestBuilder } from './Sepmra_I_DimensionUnitRequestBuilder';
import { AllFields, CustomFieldV2, EntityBuilderType, EntityV2, Field, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SEPMRA_I_DimensionUnit" of service "SEPMRA_PROD_MAN".
 */
export declare class Sepmra_I_DimensionUnit extends EntityV2 implements Sepmra_I_DimensionUnitType {
    /**
     * Technical entity name for Sepmra_I_DimensionUnit.
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
     * Returns an entity builder to construct instances of `Sepmra_I_DimensionUnit`.
     * @returns A builder that constructs instances of entity type `Sepmra_I_DimensionUnit`.
     */
    static builder(): EntityBuilderType<Sepmra_I_DimensionUnit, Sepmra_I_DimensionUnitType>;
    /**
     * Returns a request builder to construct requests for operations on the `Sepmra_I_DimensionUnit` entity type.
     * @returns A `Sepmra_I_DimensionUnit` request builder.
     */
    static requestBuilder(): Sepmra_I_DimensionUnitRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepmra_I_DimensionUnit`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Sepmra_I_DimensionUnit`.
     */
    static customField(fieldName: string): CustomFieldV2<Sepmra_I_DimensionUnit>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface Sepmra_I_DimensionUnitType {
    unitOfMeasure: string;
    unitOfMeasureText?: string | null;
    unitOfMeasureIsoCode?: string | null;
}
export declare namespace Sepmra_I_DimensionUnit {
    /**
     * Static representation of the [[unitOfMeasure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNIT_OF_MEASURE: StringField<Sepmra_I_DimensionUnit>;
    /**
     * Static representation of the [[unitOfMeasureText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNIT_OF_MEASURE_TEXT: StringField<Sepmra_I_DimensionUnit>;
    /**
     * Static representation of the [[unitOfMeasureIsoCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNIT_OF_MEASURE_ISO_CODE: StringField<Sepmra_I_DimensionUnit>;
    /**
     * All fields of the Sepmra_I_DimensionUnit entity.
     */
    const _allFields: Array<StringField<Sepmra_I_DimensionUnit>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Sepmra_I_DimensionUnit>;
    /**
     * All key fields of the Sepmra_I_DimensionUnit entity.
     */
    const _keyFields: Array<Field<Sepmra_I_DimensionUnit>>;
    /**
     * Mapping of all key field names to the respective static field property Sepmra_I_DimensionUnit.
     */
    const _keys: {
        [keys: string]: Field<Sepmra_I_DimensionUnit>;
    };
}
//# sourceMappingURL=Sepmra_I_DimensionUnit.d.ts.map