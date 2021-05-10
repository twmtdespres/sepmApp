import { Sepmra_I_MaxProductStockRequestBuilder } from './Sepmra_I_MaxProductStockRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomFieldV2, EntityBuilderType, EntityV2, Field, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SEPMRA_I_MaxProductStock" of service "SEPMRA_PROD_MAN".
 */
export declare class Sepmra_I_MaxProductStock extends EntityV2 implements Sepmra_I_MaxProductStockType {
    /**
     * Technical entity name for Sepmra_I_MaxProductStock.
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
     * One-to-one navigation property to the [[Sepmra_I_QuantityUnit]] entity.
     */
    toQuantityUnit?: Sepmra_I_QuantityUnit | null;
    /**
     * Returns an entity builder to construct instances of `Sepmra_I_MaxProductStock`.
     * @returns A builder that constructs instances of entity type `Sepmra_I_MaxProductStock`.
     */
    static builder(): EntityBuilderType<Sepmra_I_MaxProductStock, Sepmra_I_MaxProductStockType>;
    /**
     * Returns a request builder to construct requests for operations on the `Sepmra_I_MaxProductStock` entity type.
     * @returns A `Sepmra_I_MaxProductStock` request builder.
     */
    static requestBuilder(): Sepmra_I_MaxProductStockRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepmra_I_MaxProductStock`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Sepmra_I_MaxProductStock`.
     */
    static customField(fieldName: string): CustomFieldV2<Sepmra_I_MaxProductStock>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Sepmra_I_QuantityUnit, Sepmra_I_QuantityUnitType } from './Sepmra_I_QuantityUnit';
export interface Sepmra_I_MaxProductStockType {
    product: string;
    quantity?: BigNumber | null;
    quantityUnit?: string | null;
    toQuantityUnit?: Sepmra_I_QuantityUnitType | null;
}
export declare namespace Sepmra_I_MaxProductStock {
    /**
     * Static representation of the [[product]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCT: StringField<Sepmra_I_MaxProductStock>;
    /**
     * Static representation of the [[quantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUANTITY: BigNumberField<Sepmra_I_MaxProductStock>;
    /**
     * Static representation of the [[quantityUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUANTITY_UNIT: StringField<Sepmra_I_MaxProductStock>;
    /**
     * Static representation of the one-to-one navigation property [[toQuantityUnit]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_QUANTITY_UNIT: OneToOneLink<Sepmra_I_MaxProductStock, Sepmra_I_QuantityUnit>;
    /**
     * All fields of the Sepmra_I_MaxProductStock entity.
     */
    const _allFields: Array<StringField<Sepmra_I_MaxProductStock> | BigNumberField<Sepmra_I_MaxProductStock> | OneToOneLink<Sepmra_I_MaxProductStock, Sepmra_I_QuantityUnit>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Sepmra_I_MaxProductStock>;
    /**
     * All key fields of the Sepmra_I_MaxProductStock entity.
     */
    const _keyFields: Array<Field<Sepmra_I_MaxProductStock>>;
    /**
     * Mapping of all key field names to the respective static field property Sepmra_I_MaxProductStock.
     */
    const _keys: {
        [keys: string]: Field<Sepmra_I_MaxProductStock>;
    };
}
//# sourceMappingURL=Sepmra_I_MaxProductStock.d.ts.map