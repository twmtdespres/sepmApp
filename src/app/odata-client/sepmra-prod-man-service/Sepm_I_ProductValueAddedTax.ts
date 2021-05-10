/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Sepm_I_ProductValueAddedTaxRequestBuilder } from './Sepm_I_ProductValueAddedTaxRequestBuilder';
import { AllFields, CustomFieldV2, EntityBuilderType, EntityV2, Field, NumberField, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SEPM_I_ProductValueAddedTax" of service "SEPMRA_PROD_MAN".
 */
export class Sepm_I_ProductValueAddedTax extends EntityV2 implements Sepm_I_ProductValueAddedTaxType {
  /**
   * Technical entity name for Sepm_I_ProductValueAddedTax.
   */
  static _entityName = 'SEPM_I_ProductValueAddedTax';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/SEPMRA_PROD_MAN';
  /**
   * Tax Tariff Code.
   */
  productValueAddedTax!: number;
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
  static builder(): EntityBuilderType<Sepm_I_ProductValueAddedTax, Sepm_I_ProductValueAddedTaxType> {
    return EntityV2.entityBuilder(Sepm_I_ProductValueAddedTax);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Sepm_I_ProductValueAddedTax` entity type.
   * @returns A `Sepm_I_ProductValueAddedTax` request builder.
   */
  static requestBuilder(): Sepm_I_ProductValueAddedTaxRequestBuilder {
    return new Sepm_I_ProductValueAddedTaxRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepm_I_ProductValueAddedTax`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Sepm_I_ProductValueAddedTax`.
   */
  static customField(fieldName: string): CustomFieldV2<Sepm_I_ProductValueAddedTax> {
    return EntityV2.customFieldSelector(fieldName, Sepm_I_ProductValueAddedTax);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface Sepm_I_ProductValueAddedTaxType {
  productValueAddedTax: number;
  productValueAddedTaxText?: string | null;
}

export namespace Sepm_I_ProductValueAddedTax {
  /**
   * Static representation of the [[productValueAddedTax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT_VALUE_ADDED_TAX: NumberField<Sepm_I_ProductValueAddedTax> = new NumberField('ProductValueAddedTax', Sepm_I_ProductValueAddedTax, 'Edm.Byte');
  /**
   * Static representation of the [[productValueAddedTaxText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT_VALUE_ADDED_TAX_TEXT: StringField<Sepm_I_ProductValueAddedTax> = new StringField('ProductValueAddedTax_Text', Sepm_I_ProductValueAddedTax, 'Edm.String');
  /**
   * All fields of the Sepm_I_ProductValueAddedTax entity.
   */
  export const _allFields: Array<NumberField<Sepm_I_ProductValueAddedTax> | StringField<Sepm_I_ProductValueAddedTax>> = [
    Sepm_I_ProductValueAddedTax.PRODUCT_VALUE_ADDED_TAX,
    Sepm_I_ProductValueAddedTax.PRODUCT_VALUE_ADDED_TAX_TEXT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Sepm_I_ProductValueAddedTax> = new AllFields('*', Sepm_I_ProductValueAddedTax);
  /**
   * All key fields of the Sepm_I_ProductValueAddedTax entity.
   */
  export const _keyFields: Array<Field<Sepm_I_ProductValueAddedTax>> = [Sepm_I_ProductValueAddedTax.PRODUCT_VALUE_ADDED_TAX];
  /**
   * Mapping of all key field names to the respective static field property Sepm_I_ProductValueAddedTax.
   */
  export const _keys: { [keys: string]: Field<Sepm_I_ProductValueAddedTax> } = Sepm_I_ProductValueAddedTax._keyFields.reduce((acc: { [keys: string]: Field<Sepm_I_ProductValueAddedTax> }, field: Field<Sepm_I_ProductValueAddedTax>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
