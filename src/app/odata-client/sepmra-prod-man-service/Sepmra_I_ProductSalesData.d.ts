import { Sepmra_I_ProductSalesDataRequestBuilder } from './Sepmra_I_ProductSalesDataRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomFieldV2, DateField, EntityBuilderType, EntityV2, Field, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SEPMRA_I_ProductSalesData" of service "SEPMRA_PROD_MAN".
 */
export declare class Sepmra_I_ProductSalesData extends EntityV2 implements Sepmra_I_ProductSalesDataType {
    /**
     * Technical entity name for Sepmra_I_ProductSalesData.
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
     * Product Name.
     * Maximum length: 255.
     * @nullable
     */
    productText?: string;
    /**
     * Delivery Time.
     */
    deliveryDateTime: Moment;
    /**
     * Delivery Year.
     * Maximum length: 4.
     * @nullable
     */
    deliveryYear?: string;
    /**
     * Mois.
     * Maximum length: 2.
     * @nullable
     */
    deliveryMonth?: string;
    /**
     * Mois.
     * Maximum length: 10.
     * @nullable
     */
    deliveryMonthText?: string;
    /**
     * Revenue.
     * @nullable
     */
    revenue?: BigNumber;
    /**
     * Currency Code.
     * Maximum length: 5.
     * @nullable
     */
    currency?: string;
    /**
     * Quantity.
     * @nullable
     */
    quantity?: BigNumber;
    /**
     * Base Unit.
     * Maximum length: 3.
     * @nullable
     */
    productBaseUnit?: string;
    /**
     * Price.
     * @nullable
     */
    price?: BigNumber;
    /**
     * Supplier.
     * Maximum length: 10.
     * @nullable
     */
    supplier?: string;
    /**
     * Returns an entity builder to construct instances of `Sepmra_I_ProductSalesData`.
     * @returns A builder that constructs instances of entity type `Sepmra_I_ProductSalesData`.
     */
    static builder(): EntityBuilderType<Sepmra_I_ProductSalesData, Sepmra_I_ProductSalesDataType>;
    /**
     * Returns a request builder to construct requests for operations on the `Sepmra_I_ProductSalesData` entity type.
     * @returns A `Sepmra_I_ProductSalesData` request builder.
     */
    static requestBuilder(): Sepmra_I_ProductSalesDataRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepmra_I_ProductSalesData`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Sepmra_I_ProductSalesData`.
     */
    static customField(fieldName: string): CustomFieldV2<Sepmra_I_ProductSalesData>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface Sepmra_I_ProductSalesDataType {
    product: string;
    productText?: string | null;
    deliveryDateTime: Moment;
    deliveryYear?: string | null;
    deliveryMonth?: string | null;
    deliveryMonthText?: string | null;
    revenue?: BigNumber | null;
    currency?: string | null;
    quantity?: BigNumber | null;
    productBaseUnit?: string | null;
    price?: BigNumber | null;
    supplier?: string | null;
}
export declare namespace Sepmra_I_ProductSalesData {
    /**
     * Static representation of the [[product]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCT: StringField<Sepmra_I_ProductSalesData>;
    /**
     * Static representation of the [[productText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCT_TEXT: StringField<Sepmra_I_ProductSalesData>;
    /**
     * Static representation of the [[deliveryDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELIVERY_DATE_TIME: DateField<Sepmra_I_ProductSalesData>;
    /**
     * Static representation of the [[deliveryYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELIVERY_YEAR: StringField<Sepmra_I_ProductSalesData>;
    /**
     * Static representation of the [[deliveryMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELIVERY_MONTH: StringField<Sepmra_I_ProductSalesData>;
    /**
     * Static representation of the [[deliveryMonthText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELIVERY_MONTH_TEXT: StringField<Sepmra_I_ProductSalesData>;
    /**
     * Static representation of the [[revenue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REVENUE: BigNumberField<Sepmra_I_ProductSalesData>;
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY: StringField<Sepmra_I_ProductSalesData>;
    /**
     * Static representation of the [[quantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUANTITY: BigNumberField<Sepmra_I_ProductSalesData>;
    /**
     * Static representation of the [[productBaseUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRODUCT_BASE_UNIT: StringField<Sepmra_I_ProductSalesData>;
    /**
     * Static representation of the [[price]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRICE: BigNumberField<Sepmra_I_ProductSalesData>;
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER: StringField<Sepmra_I_ProductSalesData>;
    /**
     * All fields of the Sepmra_I_ProductSalesData entity.
     */
    const _allFields: Array<StringField<Sepmra_I_ProductSalesData> | DateField<Sepmra_I_ProductSalesData> | BigNumberField<Sepmra_I_ProductSalesData>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Sepmra_I_ProductSalesData>;
    /**
     * All key fields of the Sepmra_I_ProductSalesData entity.
     */
    const _keyFields: Array<Field<Sepmra_I_ProductSalesData>>;
    /**
     * Mapping of all key field names to the respective static field property Sepmra_I_ProductSalesData.
     */
    const _keys: {
        [keys: string]: Field<Sepmra_I_ProductSalesData>;
    };
}
//# sourceMappingURL=Sepmra_I_ProductSalesData.d.ts.map