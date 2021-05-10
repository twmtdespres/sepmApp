/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Sepmra_I_ProductSalesDataRequestBuilder } from './Sepmra_I_ProductSalesDataRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomFieldV2, DateField, EntityBuilderType, EntityV2, Field, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SEPMRA_I_ProductSalesData" of service "SEPMRA_PROD_MAN".
 */
export class Sepmra_I_ProductSalesData extends EntityV2 implements Sepmra_I_ProductSalesDataType {
  /**
   * Technical entity name for Sepmra_I_ProductSalesData.
   */
  static _entityName = 'SEPMRA_I_ProductSalesData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/SEPMRA_PROD_MAN';
  /**
   * Product.
   * Maximum length: 10.
   */
  product!: string;
  /**
   * Product Name.
   * Maximum length: 255.
   * @nullable
   */
  productText?: string;
  /**
   * Delivery Time.
   */
  deliveryDateTime!: Moment;
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
  static builder(): EntityBuilderType<Sepmra_I_ProductSalesData, Sepmra_I_ProductSalesDataType> {
    return EntityV2.entityBuilder(Sepmra_I_ProductSalesData);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Sepmra_I_ProductSalesData` entity type.
   * @returns A `Sepmra_I_ProductSalesData` request builder.
   */
  static requestBuilder(): Sepmra_I_ProductSalesDataRequestBuilder {
    return new Sepmra_I_ProductSalesDataRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepmra_I_ProductSalesData`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Sepmra_I_ProductSalesData`.
   */
  static customField(fieldName: string): CustomFieldV2<Sepmra_I_ProductSalesData> {
    return EntityV2.customFieldSelector(fieldName, Sepmra_I_ProductSalesData);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
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

export namespace Sepmra_I_ProductSalesData {
  /**
   * Static representation of the [[product]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT: StringField<Sepmra_I_ProductSalesData> = new StringField('Product', Sepmra_I_ProductSalesData, 'Edm.String');
  /**
   * Static representation of the [[productText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT_TEXT: StringField<Sepmra_I_ProductSalesData> = new StringField('Product_Text', Sepmra_I_ProductSalesData, 'Edm.String');
  /**
   * Static representation of the [[deliveryDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELIVERY_DATE_TIME: DateField<Sepmra_I_ProductSalesData> = new DateField('DeliveryDateTime', Sepmra_I_ProductSalesData, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[deliveryYear]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELIVERY_YEAR: StringField<Sepmra_I_ProductSalesData> = new StringField('DeliveryYear', Sepmra_I_ProductSalesData, 'Edm.String');
  /**
   * Static representation of the [[deliveryMonth]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELIVERY_MONTH: StringField<Sepmra_I_ProductSalesData> = new StringField('DeliveryMonth', Sepmra_I_ProductSalesData, 'Edm.String');
  /**
   * Static representation of the [[deliveryMonthText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELIVERY_MONTH_TEXT: StringField<Sepmra_I_ProductSalesData> = new StringField('DeliveryMonth_Text', Sepmra_I_ProductSalesData, 'Edm.String');
  /**
   * Static representation of the [[revenue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVENUE: BigNumberField<Sepmra_I_ProductSalesData> = new BigNumberField('Revenue', Sepmra_I_ProductSalesData, 'Edm.Decimal');
  /**
   * Static representation of the [[currency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: StringField<Sepmra_I_ProductSalesData> = new StringField('Currency', Sepmra_I_ProductSalesData, 'Edm.String');
  /**
   * Static representation of the [[quantity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUANTITY: BigNumberField<Sepmra_I_ProductSalesData> = new BigNumberField('Quantity', Sepmra_I_ProductSalesData, 'Edm.Decimal');
  /**
   * Static representation of the [[productBaseUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT_BASE_UNIT: StringField<Sepmra_I_ProductSalesData> = new StringField('ProductBaseUnit', Sepmra_I_ProductSalesData, 'Edm.String');
  /**
   * Static representation of the [[price]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRICE: BigNumberField<Sepmra_I_ProductSalesData> = new BigNumberField('Price', Sepmra_I_ProductSalesData, 'Edm.Decimal');
  /**
   * Static representation of the [[supplier]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPLIER: StringField<Sepmra_I_ProductSalesData> = new StringField('Supplier', Sepmra_I_ProductSalesData, 'Edm.String');
  /**
   * All fields of the Sepmra_I_ProductSalesData entity.
   */
  export const _allFields: Array<StringField<Sepmra_I_ProductSalesData> | DateField<Sepmra_I_ProductSalesData> | BigNumberField<Sepmra_I_ProductSalesData>> = [
    Sepmra_I_ProductSalesData.PRODUCT,
    Sepmra_I_ProductSalesData.PRODUCT_TEXT,
    Sepmra_I_ProductSalesData.DELIVERY_DATE_TIME,
    Sepmra_I_ProductSalesData.DELIVERY_YEAR,
    Sepmra_I_ProductSalesData.DELIVERY_MONTH,
    Sepmra_I_ProductSalesData.DELIVERY_MONTH_TEXT,
    Sepmra_I_ProductSalesData.REVENUE,
    Sepmra_I_ProductSalesData.CURRENCY,
    Sepmra_I_ProductSalesData.QUANTITY,
    Sepmra_I_ProductSalesData.PRODUCT_BASE_UNIT,
    Sepmra_I_ProductSalesData.PRICE,
    Sepmra_I_ProductSalesData.SUPPLIER
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Sepmra_I_ProductSalesData> = new AllFields('*', Sepmra_I_ProductSalesData);
  /**
   * All key fields of the Sepmra_I_ProductSalesData entity.
   */
  export const _keyFields: Array<Field<Sepmra_I_ProductSalesData>> = [Sepmra_I_ProductSalesData.PRODUCT, Sepmra_I_ProductSalesData.DELIVERY_DATE_TIME];
  /**
   * Mapping of all key field names to the respective static field property Sepmra_I_ProductSalesData.
   */
  export const _keys: { [keys: string]: Field<Sepmra_I_ProductSalesData> } = Sepmra_I_ProductSalesData._keyFields.reduce((acc: { [keys: string]: Field<Sepmra_I_ProductSalesData> }, field: Field<Sepmra_I_ProductSalesData>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
