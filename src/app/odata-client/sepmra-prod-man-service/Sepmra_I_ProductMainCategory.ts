/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Sepmra_I_ProductMainCategoryRequestBuilder } from './Sepmra_I_ProductMainCategoryRequestBuilder';
import { AllFields, CustomFieldV2, EntityBuilderType, EntityV2, Field, Link, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SEPMRA_I_ProductMainCategory" of service "SEPMRA_PROD_MAN".
 */
export class Sepmra_I_ProductMainCategory extends EntityV2 implements Sepmra_I_ProductMainCategoryType {
  /**
   * Technical entity name for Sepmra_I_ProductMainCategory.
   */
  static _entityName = 'SEPMRA_I_ProductMainCategory';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/SEPMRA_PROD_MAN';
  /**
   * Main Category.
   * Maximum length: 40.
   */
  mainProductCategory!: string;
  /**
   * One-to-many navigation property to the [[Sepmra_I_ProductCategory]] entity.
   */
  toCategory!: Sepmra_I_ProductCategory[];

  /**
   * Returns an entity builder to construct instances of `Sepmra_I_ProductMainCategory`.
   * @returns A builder that constructs instances of entity type `Sepmra_I_ProductMainCategory`.
   */
  static builder(): EntityBuilderType<Sepmra_I_ProductMainCategory, Sepmra_I_ProductMainCategoryType> {
    return EntityV2.entityBuilder(Sepmra_I_ProductMainCategory);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Sepmra_I_ProductMainCategory` entity type.
   * @returns A `Sepmra_I_ProductMainCategory` request builder.
   */
  static requestBuilder(): Sepmra_I_ProductMainCategoryRequestBuilder {
    return new Sepmra_I_ProductMainCategoryRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepmra_I_ProductMainCategory`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Sepmra_I_ProductMainCategory`.
   */
  static customField(fieldName: string): CustomFieldV2<Sepmra_I_ProductMainCategory> {
    return EntityV2.customFieldSelector(fieldName, Sepmra_I_ProductMainCategory);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Sepmra_I_ProductCategory, Sepmra_I_ProductCategoryType } from './Sepmra_I_ProductCategory';

export interface Sepmra_I_ProductMainCategoryType {
  mainProductCategory: string;
  toCategory: Sepmra_I_ProductCategoryType[];
}

export namespace Sepmra_I_ProductMainCategory {
  /**
   * Static representation of the [[mainProductCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAIN_PRODUCT_CATEGORY: StringField<Sepmra_I_ProductMainCategory> = new StringField('MainProductCategory', Sepmra_I_ProductMainCategory, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[toCategory]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_CATEGORY: Link<Sepmra_I_ProductMainCategory, Sepmra_I_ProductCategory> = new Link('to_Category', Sepmra_I_ProductMainCategory, Sepmra_I_ProductCategory);
  /**
   * All fields of the Sepmra_I_ProductMainCategory entity.
   */
  export const _allFields: Array<StringField<Sepmra_I_ProductMainCategory> | Link<Sepmra_I_ProductMainCategory, Sepmra_I_ProductCategory>> = [
    Sepmra_I_ProductMainCategory.MAIN_PRODUCT_CATEGORY,
    Sepmra_I_ProductMainCategory.TO_CATEGORY
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Sepmra_I_ProductMainCategory> = new AllFields('*', Sepmra_I_ProductMainCategory);
  /**
   * All key fields of the Sepmra_I_ProductMainCategory entity.
   */
  export const _keyFields: Array<Field<Sepmra_I_ProductMainCategory>> = [Sepmra_I_ProductMainCategory.MAIN_PRODUCT_CATEGORY];
  /**
   * Mapping of all key field names to the respective static field property Sepmra_I_ProductMainCategory.
   */
  export const _keys: { [keys: string]: Field<Sepmra_I_ProductMainCategory> } = Sepmra_I_ProductMainCategory._keyFields.reduce((acc: { [keys: string]: Field<Sepmra_I_ProductMainCategory> }, field: Field<Sepmra_I_ProductMainCategory>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
