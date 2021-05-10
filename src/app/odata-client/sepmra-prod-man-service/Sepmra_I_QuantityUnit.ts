/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Sepmra_I_QuantityUnitRequestBuilder } from './Sepmra_I_QuantityUnitRequestBuilder';
import { AllFields, CustomFieldV2, EntityBuilderType, EntityV2, Field, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SEPMRA_I_QuantityUnit" of service "SEPMRA_PROD_MAN".
 */
export class Sepmra_I_QuantityUnit extends EntityV2 implements Sepmra_I_QuantityUnitType {
  /**
   * Technical entity name for Sepmra_I_QuantityUnit.
   */
  static _entityName = 'SEPMRA_I_QuantityUnit';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/SEPMRA_PROD_MAN';
  /**
   * Unité mesure interne.
   * Maximum length: 3.
   */
  unitOfMeasure!: string;
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
   * Returns an entity builder to construct instances of `Sepmra_I_QuantityUnit`.
   * @returns A builder that constructs instances of entity type `Sepmra_I_QuantityUnit`.
   */
  static builder(): EntityBuilderType<Sepmra_I_QuantityUnit, Sepmra_I_QuantityUnitType> {
    return EntityV2.entityBuilder(Sepmra_I_QuantityUnit);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Sepmra_I_QuantityUnit` entity type.
   * @returns A `Sepmra_I_QuantityUnit` request builder.
   */
  static requestBuilder(): Sepmra_I_QuantityUnitRequestBuilder {
    return new Sepmra_I_QuantityUnitRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepmra_I_QuantityUnit`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Sepmra_I_QuantityUnit`.
   */
  static customField(fieldName: string): CustomFieldV2<Sepmra_I_QuantityUnit> {
    return EntityV2.customFieldSelector(fieldName, Sepmra_I_QuantityUnit);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface Sepmra_I_QuantityUnitType {
  unitOfMeasure: string;
  unitOfMeasureText?: string | null;
  unitOfMeasureIsoCode?: string | null;
}

export namespace Sepmra_I_QuantityUnit {
  /**
   * Static representation of the [[unitOfMeasure]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNIT_OF_MEASURE: StringField<Sepmra_I_QuantityUnit> = new StringField('UnitOfMeasure', Sepmra_I_QuantityUnit, 'Edm.String');
  /**
   * Static representation of the [[unitOfMeasureText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNIT_OF_MEASURE_TEXT: StringField<Sepmra_I_QuantityUnit> = new StringField('UnitOfMeasure_Text', Sepmra_I_QuantityUnit, 'Edm.String');
  /**
   * Static representation of the [[unitOfMeasureIsoCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNIT_OF_MEASURE_ISO_CODE: StringField<Sepmra_I_QuantityUnit> = new StringField('UnitOfMeasureISOCode', Sepmra_I_QuantityUnit, 'Edm.String');
  /**
   * All fields of the Sepmra_I_QuantityUnit entity.
   */
  export const _allFields: Array<StringField<Sepmra_I_QuantityUnit>> = [
    Sepmra_I_QuantityUnit.UNIT_OF_MEASURE,
    Sepmra_I_QuantityUnit.UNIT_OF_MEASURE_TEXT,
    Sepmra_I_QuantityUnit.UNIT_OF_MEASURE_ISO_CODE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Sepmra_I_QuantityUnit> = new AllFields('*', Sepmra_I_QuantityUnit);
  /**
   * All key fields of the Sepmra_I_QuantityUnit entity.
   */
  export const _keyFields: Array<Field<Sepmra_I_QuantityUnit>> = [Sepmra_I_QuantityUnit.UNIT_OF_MEASURE];
  /**
   * Mapping of all key field names to the respective static field property Sepmra_I_QuantityUnit.
   */
  export const _keys: { [keys: string]: Field<Sepmra_I_QuantityUnit> } = Sepmra_I_QuantityUnit._keyFields.reduce((acc: { [keys: string]: Field<Sepmra_I_QuantityUnit> }, field: Field<Sepmra_I_QuantityUnit>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
