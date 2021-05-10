import { Sepmra_C_Pd_StockAvailabilityRequestBuilder } from './Sepmra_C_Pd_StockAvailabilityRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomFieldV2, EntityBuilderType, EntityV2, Field, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SEPMRA_C_PD_StockAvailability" of service "SEPMRA_PROD_MAN".
 */
export declare class Sepmra_C_Pd_StockAvailability extends EntityV2 implements Sepmra_C_Pd_StockAvailabilityType {
    /**
     * Technical entity name for Sepmra_C_Pd_StockAvailability.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Product.
     * Maximum length: 10.
     */
    product: string;
    /**
     * Quantity.
     * @nullable
     */
    quantity?: BigNumber;
    /**
     * Unit of Measure.
     * Maximum length: 3.
     * @nullable
     */
    quantityUnit?: string;
    /**
     * Availability.
     * Maximum length: 1.
     * @nullable
     */
    stockAvailability?: string;
    /**
     * Description synth.
     * Maximum length: 60.
     * @nullable
     */
    stockAvailabilityText?: string;
    /**
     * One-to-one navigation property to the [[Sepmra_I_QuantityUnit]] entity.
     */
    toQuantityUnit?: Sepmra_I_QuantityUnit | null;
    /**
     * Returns an entity builder to construct instances of `Sepmra_C_Pd_StockAvailability`.
     * @returns A builder that constructs instances of entity type `Sepmra_C_Pd_StockAvailability`.
     */
    static builder(): EntityBuilderType<Sepmra_C_Pd_StockAvailability, Sepmra_C_Pd_StockAvailabilityType>;
    /**
     * Returns a request builder to construct requests for operations on the `Sepmra_C_Pd_StockAvailability` entity type.
     * @returns A `Sepmra_C_Pd_StockAvailability` request builder.
     */
    static requestBuilder(): Sepmra_C_Pd_StockAvailabilityRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepmra_C_Pd_StockAvailability`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Sepmra_C_Pd_StockAvailability`.
     */
    static customField(fieldName: string): CustomFieldV2<Sepmra_C_Pd_StockAvailability>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Sepmra_I_QuantityUnit, Sepmra_I_QuantityUnitType } from './Sepmra_I_QuantityUnit';
export interface Sepmra_C_Pd_StockAvailabilityType {
    product: string;
    quantity?: BigNumber | null;
    quantityUnit?: string | null;
    stockAvailability?: string | null;
    stockAvailabilityText?: string | null;
    toQuantityUnit?: Sepmra_I_QuantityUnitType | null;
}
export declare namespace Sepmra_C_Pd_StockAvailability {
    /**
     * Static representation of the [[product]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCT: StringField<Sepmra_C_Pd_StockAvailability>;
    /**
     * Static representation of the [[quantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUANTITY: BigNumberField<Sepmra_C_Pd_StockAvailability>;
    /**
     * Static representation of the [[quantityUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUANTITY_UNIT: StringField<Sepmra_C_Pd_StockAvailability>;
    /**
     * Static representation of the [[stockAvailability]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STOCK_AVAILABILITY: StringField<Sepmra_C_Pd_StockAvailability>;
    /**
     * Static representation of the [[stockAvailabilityText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STOCK_AVAILABILITY_TEXT: StringField<Sepmra_C_Pd_StockAvailability>;
    /**
     * Static representation of the one-to-one navigation property [[toQuantityUnit]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_QUANTITY_UNIT: OneToOneLink<Sepmra_C_Pd_StockAvailability, Sepmra_I_QuantityUnit>;
    /**
     * All fields of the Sepmra_C_Pd_StockAvailability entity.
     */
    const _allFields: Array<StringField<Sepmra_C_Pd_StockAvailability> | BigNumberField<Sepmra_C_Pd_StockAvailability> | OneToOneLink<Sepmra_C_Pd_StockAvailability, Sepmra_I_QuantityUnit>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Sepmra_C_Pd_StockAvailability>;
    /**
     * All key fields of the Sepmra_C_Pd_StockAvailability entity.
     */
    const _keyFields: Array<Field<Sepmra_C_Pd_StockAvailability>>;
    /**
     * Mapping of all key field names to the respective static field property Sepmra_C_Pd_StockAvailability.
     */
    const _keys: {
        [keys: string]: Field<Sepmra_C_Pd_StockAvailability>;
    };
}
//# sourceMappingURL=Sepmra_C_Pd_StockAvailability.d.ts.map