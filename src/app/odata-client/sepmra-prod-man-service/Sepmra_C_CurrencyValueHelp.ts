/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Sepmra_C_CurrencyValueHelpRequestBuilder } from './Sepmra_C_CurrencyValueHelpRequestBuilder';
import { AllFields, CustomFieldV2, EntityBuilderType, EntityV2, Field, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SEPMRA_C_CurrencyValueHelp" of service "SEPMRA_PROD_MAN".
 */
export class Sepmra_C_CurrencyValueHelp extends EntityV2 implements Sepmra_C_CurrencyValueHelpType {
  /**
   * Technical entity name for Sepmra_C_CurrencyValueHelp.
   */
  static _entityName = 'SEPMRA_C_CurrencyValueHelp';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/SEPMRA_PROD_MAN';
  /**
   * Devise.
   * Maximum length: 5.
   */
  currency!: string;
  /**
   * Currency.
   * Maximum length: 15.
   * @nullable
   */
  currencyName?: string;

  /**
   * Returns an entity builder to construct instances of `Sepmra_C_CurrencyValueHelp`.
   * @returns A builder that constructs instances of entity type `Sepmra_C_CurrencyValueHelp`.
   */
  static builder(): EntityBuilderType<Sepmra_C_CurrencyValueHelp, Sepmra_C_CurrencyValueHelpType> {
    return EntityV2.entityBuilder(Sepmra_C_CurrencyValueHelp);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Sepmra_C_CurrencyValueHelp` entity type.
   * @returns A `Sepmra_C_CurrencyValueHelp` request builder.
   */
  static requestBuilder(): Sepmra_C_CurrencyValueHelpRequestBuilder {
    return new Sepmra_C_CurrencyValueHelpRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepmra_C_CurrencyValueHelp`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Sepmra_C_CurrencyValueHelp`.
   */
  static customField(fieldName: string): CustomFieldV2<Sepmra_C_CurrencyValueHelp> {
    return EntityV2.customFieldSelector(fieldName, Sepmra_C_CurrencyValueHelp);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface Sepmra_C_CurrencyValueHelpType {
  currency: string;
  currencyName?: string | null;
}

export namespace Sepmra_C_CurrencyValueHelp {
  /**
   * Static representation of the [[currency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: StringField<Sepmra_C_CurrencyValueHelp> = new StringField('Currency', Sepmra_C_CurrencyValueHelp, 'Edm.String');
  /**
   * Static representation of the [[currencyName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_NAME: StringField<Sepmra_C_CurrencyValueHelp> = new StringField('CurrencyName', Sepmra_C_CurrencyValueHelp, 'Edm.String');
  /**
   * All fields of the Sepmra_C_CurrencyValueHelp entity.
   */
  export const _allFields: Array<StringField<Sepmra_C_CurrencyValueHelp>> = [
    Sepmra_C_CurrencyValueHelp.CURRENCY,
    Sepmra_C_CurrencyValueHelp.CURRENCY_NAME
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Sepmra_C_CurrencyValueHelp> = new AllFields('*', Sepmra_C_CurrencyValueHelp);
  /**
   * All key fields of the Sepmra_C_CurrencyValueHelp entity.
   */
  export const _keyFields: Array<Field<Sepmra_C_CurrencyValueHelp>> = [Sepmra_C_CurrencyValueHelp.CURRENCY];
  /**
   * Mapping of all key field names to the respective static field property Sepmra_C_CurrencyValueHelp.
   */
  export const _keys: { [keys: string]: Field<Sepmra_C_CurrencyValueHelp> } = Sepmra_C_CurrencyValueHelp._keyFields.reduce((acc: { [keys: string]: Field<Sepmra_C_CurrencyValueHelp> }, field: Field<Sepmra_C_CurrencyValueHelp>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
