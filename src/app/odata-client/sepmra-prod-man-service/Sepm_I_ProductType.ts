/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Sepm_I_ProductTypeRequestBuilder } from './Sepm_I_ProductTypeRequestBuilder';
import { AllFields, CustomFieldV2, EntityBuilderType, EntityV2, Field, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SEPM_I_ProductType" of service "SEPMRA_PROD_MAN".
 */
export class Sepm_I_ProductType extends EntityV2 implements Sepm_I_ProductTypeType {
  /**
   * Technical entity name for Sepm_I_ProductType.
   */
  static _entityName = 'SEPM_I_ProductType';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/SEPMRA_PROD_MAN';
  /**
   * Type Code.
   * Maximum length: 2.
   */
  productType!: string;
  /**
   * Descript. synth.
   * Maximum length: 60.
   * @nullable
   */
  productTypeText?: string;

  /**
   * Returns an entity builder to construct instances of `Sepm_I_ProductType`.
   * @returns A builder that constructs instances of entity type `Sepm_I_ProductType`.
   */
  static builder(): EntityBuilderType<Sepm_I_ProductType, Sepm_I_ProductTypeType> {
    return EntityV2.entityBuilder(Sepm_I_ProductType);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Sepm_I_ProductType` entity type.
   * @returns A `Sepm_I_ProductType` request builder.
   */
  static requestBuilder(): Sepm_I_ProductTypeRequestBuilder {
    return new Sepm_I_ProductTypeRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepm_I_ProductType`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Sepm_I_ProductType`.
   */
  static customField(fieldName: string): CustomFieldV2<Sepm_I_ProductType> {
    return EntityV2.customFieldSelector(fieldName, Sepm_I_ProductType);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface Sepm_I_ProductTypeType {
  productType: string;
  productTypeText?: string | null;
}

export namespace Sepm_I_ProductType {
  /**
   * Static representation of the [[productType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT_TYPE: StringField<Sepm_I_ProductType> = new StringField('ProductType', Sepm_I_ProductType, 'Edm.String');
  /**
   * Static representation of the [[productTypeText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRODUCT_TYPE_TEXT: StringField<Sepm_I_ProductType> = new StringField('ProductType_Text', Sepm_I_ProductType, 'Edm.String');
  /**
   * All fields of the Sepm_I_ProductType entity.
   */
  export const _allFields: Array<StringField<Sepm_I_ProductType>> = [
    Sepm_I_ProductType.PRODUCT_TYPE,
    Sepm_I_ProductType.PRODUCT_TYPE_TEXT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Sepm_I_ProductType> = new AllFields('*', Sepm_I_ProductType);
  /**
   * All key fields of the Sepm_I_ProductType entity.
   */
  export const _keyFields: Array<Field<Sepm_I_ProductType>> = [Sepm_I_ProductType.PRODUCT_TYPE];
  /**
   * Mapping of all key field names to the respective static field property Sepm_I_ProductType.
   */
  export const _keys: { [keys: string]: Field<Sepm_I_ProductType> } = Sepm_I_ProductType._keyFields.reduce((acc: { [keys: string]: Field<Sepm_I_ProductType> }, field: Field<Sepm_I_ProductType>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
