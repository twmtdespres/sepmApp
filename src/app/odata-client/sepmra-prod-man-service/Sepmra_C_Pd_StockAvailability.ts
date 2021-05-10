/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Sepmra_C_Pd_StockAvailabilityRequestBuilder } from './Sepmra_C_Pd_StockAvailabilityRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomFieldV2, EntityBuilderType, EntityV2, Field, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SEPMRA_C_PD_StockAvailability" of service "SEPMRA_PROD_MAN".
 */
export class Sepmra_C_Pd_StockAvailability extends EntityV2 implements Sepmra_C_Pd_StockAvailabilityType {
  /**
   * Technical entity name for Sepmra_C_Pd_StockAvailability.
   */
  static _entityName = 'SEPMRA_C_PD_StockAvailability';
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
  static builder(): EntityBuilderType<Sepmra_C_Pd_StockAvailability, Sepmra_C_Pd_StockAvailabilityType> {
    return EntityV2.entityBuilder(Sepmra_C_Pd_StockAvailability);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Sepmra_C_Pd_StockAvailability` entity type.
   * @returns A `Sepmra_C_Pd_StockAvailability` request builder.
   */
  static requestBuilder(): Sepmra_C_Pd_StockAvailabilityRequestBuilder {
    return new Sepmra_C_Pd_StockAvailabilityRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepmra_C_Pd_StockAvailability`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Sepmra_C_Pd_StockAvailability`.
   */
  static customField(fieldName: string): CustomFieldV2<Sepmra_C_Pd_StockAvailability> {
    return EntityV2.customFieldSelector(fieldName, Sepmra_C_Pd_StockAvailability);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
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

export namespace Sepmra_C_Pd_StockAvailability {
  /**
   * Static representation of the [[product]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT: StringField<Sepmra_C_Pd_StockAvailability> = new StringField('Product', Sepmra_C_Pd_StockAvailability, 'Edm.String');
  /**
   * Static representation of the [[quantity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUANTITY: BigNumberField<Sepmra_C_Pd_StockAvailability> = new BigNumberField('Quantity', Sepmra_C_Pd_StockAvailability, 'Edm.Decimal');
  /**
   * Static representation of the [[quantityUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const QUANTITY_UNIT: StringField<Sepmra_C_Pd_StockAvailability> = new StringField('QuantityUnit', Sepmra_C_Pd_StockAvailability, 'Edm.String');
  /**
   * Static representation of the [[stockAvailability]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STOCK_AVAILABILITY: StringField<Sepmra_C_Pd_StockAvailability> = new StringField('StockAvailability', Sepmra_C_Pd_StockAvailability, 'Edm.String');
  /**
   * Static representation of the [[stockAvailabilityText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STOCK_AVAILABILITY_TEXT: StringField<Sepmra_C_Pd_StockAvailability> = new StringField('StockAvailability_Text', Sepmra_C_Pd_StockAvailability, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[toQuantityUnit]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_QUANTITY_UNIT: OneToOneLink<Sepmra_C_Pd_StockAvailability, Sepmra_I_QuantityUnit> = new OneToOneLink('to_QuantityUnit', Sepmra_C_Pd_StockAvailability, Sepmra_I_QuantityUnit);
  /**
   * All fields of the Sepmra_C_Pd_StockAvailability entity.
   */
  export const _allFields: Array<StringField<Sepmra_C_Pd_StockAvailability> | BigNumberField<Sepmra_C_Pd_StockAvailability> | OneToOneLink<Sepmra_C_Pd_StockAvailability, Sepmra_I_QuantityUnit>> = [
    Sepmra_C_Pd_StockAvailability.PRODUCT,
    Sepmra_C_Pd_StockAvailability.QUANTITY,
    Sepmra_C_Pd_StockAvailability.QUANTITY_UNIT,
    Sepmra_C_Pd_StockAvailability.STOCK_AVAILABILITY,
    Sepmra_C_Pd_StockAvailability.STOCK_AVAILABILITY_TEXT,
    Sepmra_C_Pd_StockAvailability.TO_QUANTITY_UNIT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Sepmra_C_Pd_StockAvailability> = new AllFields('*', Sepmra_C_Pd_StockAvailability);
  /**
   * All key fields of the Sepmra_C_Pd_StockAvailability entity.
   */
  export const _keyFields: Array<Field<Sepmra_C_Pd_StockAvailability>> = [Sepmra_C_Pd_StockAvailability.PRODUCT];
  /**
   * Mapping of all key field names to the respective static field property Sepmra_C_Pd_StockAvailability.
   */
  export const _keys: { [keys: string]: Field<Sepmra_C_Pd_StockAvailability> } = Sepmra_C_Pd_StockAvailability._keyFields.reduce((acc: { [keys: string]: Field<Sepmra_C_Pd_StockAvailability> }, field: Field<Sepmra_C_Pd_StockAvailability>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
