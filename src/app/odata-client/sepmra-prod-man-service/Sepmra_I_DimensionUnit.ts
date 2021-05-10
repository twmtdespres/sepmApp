/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Sepmra_I_DimensionUnitRequestBuilder } from './Sepmra_I_DimensionUnitRequestBuilder';
import { AllFields, CustomFieldV2, EntityBuilderType, EntityV2, Field, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SEPMRA_I_DimensionUnit" of service "SEPMRA_PROD_MAN".
 */
export class Sepmra_I_DimensionUnit extends EntityV2 implements Sepmra_I_DimensionUnitType {
  /**
   * Technical entity name for Sepmra_I_DimensionUnit.
   */
  static _entityName = 'SEPMRA_I_DimensionUnit';
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
   * Returns an entity builder to construct instances of `Sepmra_I_DimensionUnit`.
   * @returns A builder that constructs instances of entity type `Sepmra_I_DimensionUnit`.
   */
  static builder(): EntityBuilderType<Sepmra_I_DimensionUnit, Sepmra_I_DimensionUnitType> {
    return EntityV2.entityBuilder(Sepmra_I_DimensionUnit);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Sepmra_I_DimensionUnit` entity type.
   * @returns A `Sepmra_I_DimensionUnit` request builder.
   */
  static requestBuilder(): Sepmra_I_DimensionUnitRequestBuilder {
    return new Sepmra_I_DimensionUnitRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepmra_I_DimensionUnit`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Sepmra_I_DimensionUnit`.
   */
  static customField(fieldName: string): CustomFieldV2<Sepmra_I_DimensionUnit> {
    return EntityV2.customFieldSelector(fieldName, Sepmra_I_DimensionUnit);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface Sepmra_I_DimensionUnitType {
  unitOfMeasure: string;
  unitOfMeasureText?: string | null;
  unitOfMeasureIsoCode?: string | null;
}

export namespace Sepmra_I_DimensionUnit {
  /**
   * Static representation of the [[unitOfMeasure]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNIT_OF_MEASURE: StringField<Sepmra_I_DimensionUnit> = new StringField('UnitOfMeasure', Sepmra_I_DimensionUnit, 'Edm.String');
  /**
   * Static representation of the [[unitOfMeasureText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNIT_OF_MEASURE_TEXT: StringField<Sepmra_I_DimensionUnit> = new StringField('UnitOfMeasure_Text', Sepmra_I_DimensionUnit, 'Edm.String');
  /**
   * Static representation of the [[unitOfMeasureIsoCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UNIT_OF_MEASURE_ISO_CODE: StringField<Sepmra_I_DimensionUnit> = new StringField('UnitOfMeasureISOCode', Sepmra_I_DimensionUnit, 'Edm.String');
  /**
   * All fields of the Sepmra_I_DimensionUnit entity.
   */
  export const _allFields: Array<StringField<Sepmra_I_DimensionUnit>> = [
    Sepmra_I_DimensionUnit.UNIT_OF_MEASURE,
    Sepmra_I_DimensionUnit.UNIT_OF_MEASURE_TEXT,
    Sepmra_I_DimensionUnit.UNIT_OF_MEASURE_ISO_CODE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Sepmra_I_DimensionUnit> = new AllFields('*', Sepmra_I_DimensionUnit);
  /**
   * All key fields of the Sepmra_I_DimensionUnit entity.
   */
  export const _keyFields: Array<Field<Sepmra_I_DimensionUnit>> = [Sepmra_I_DimensionUnit.UNIT_OF_MEASURE];
  /**
   * Mapping of all key field names to the respective static field property Sepmra_I_DimensionUnit.
   */
  export const _keys: { [keys: string]: Field<Sepmra_I_DimensionUnit> } = Sepmra_I_DimensionUnit._keyFields.reduce((acc: { [keys: string]: Field<Sepmra_I_DimensionUnit> }, field: Field<Sepmra_I_DimensionUnit>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
