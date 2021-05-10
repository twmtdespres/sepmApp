/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { I_CurrencyRequestBuilder } from './I_CurrencyRequestBuilder';
import { AllFields, BooleanField, CustomFieldV2, EntityBuilderType, EntityV2, Field, NumberField, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "I_Currency" of service "SEPMRA_PROD_MAN".
 */
export class I_Currency extends EntityV2 implements I_CurrencyType {
  /**
   * Technical entity name for I_Currency.
   */
  static _entityName = 'I_Currency';
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
   * Texte descriptif.
   * Maximum length: 40.
   * @nullable
   */
  currencyText?: string;
  /**
   * Décimales.
   * @nullable
   */
  decimals?: number;
  /**
   * Code ISO.
   * Maximum length: 3.
   * @nullable
   */
  currencyIsoCode?: string;
  /**
   * Clé alternative.
   * Maximum length: 3.
   * @nullable
   */
  alternativeCurrencyKey?: string;
  /**
   * Primaire.
   * @nullable
   */
  isPrimaryCurrencyForIsoCrcy?: boolean;

  /**
   * Returns an entity builder to construct instances of `I_Currency`.
   * @returns A builder that constructs instances of entity type `I_Currency`.
   */
  static builder(): EntityBuilderType<I_Currency, I_CurrencyType> {
    return EntityV2.entityBuilder(I_Currency);
  }

  /**
   * Returns a request builder to construct requests for operations on the `I_Currency` entity type.
   * @returns A `I_Currency` request builder.
   */
  static requestBuilder(): I_CurrencyRequestBuilder {
    return new I_CurrencyRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `I_Currency`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `I_Currency`.
   */
  static customField(fieldName: string): CustomFieldV2<I_Currency> {
    return EntityV2.customFieldSelector(fieldName, I_Currency);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface I_CurrencyType {
  currency: string;
  currencyText?: string | null;
  decimals?: number | null;
  currencyIsoCode?: string | null;
  alternativeCurrencyKey?: string | null;
  isPrimaryCurrencyForIsoCrcy?: boolean | null;
}

export namespace I_Currency {
  /**
   * Static representation of the [[currency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: StringField<I_Currency> = new StringField('Currency', I_Currency, 'Edm.String');
  /**
   * Static representation of the [[currencyText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_TEXT: StringField<I_Currency> = new StringField('Currency_Text', I_Currency, 'Edm.String');
  /**
   * Static representation of the [[decimals]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DECIMALS: NumberField<I_Currency> = new NumberField('Decimals', I_Currency, 'Edm.Byte');
  /**
   * Static representation of the [[currencyIsoCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_ISO_CODE: StringField<I_Currency> = new StringField('CurrencyISOCode', I_Currency, 'Edm.String');
  /**
   * Static representation of the [[alternativeCurrencyKey]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALTERNATIVE_CURRENCY_KEY: StringField<I_Currency> = new StringField('AlternativeCurrencyKey', I_Currency, 'Edm.String');
  /**
   * Static representation of the [[isPrimaryCurrencyForIsoCrcy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_PRIMARY_CURRENCY_FOR_ISO_CRCY: BooleanField<I_Currency> = new BooleanField('IsPrimaryCurrencyForISOCrcy', I_Currency, 'Edm.Boolean');
  /**
   * All fields of the I_Currency entity.
   */
  export const _allFields: Array<StringField<I_Currency> | NumberField<I_Currency> | BooleanField<I_Currency>> = [
    I_Currency.CURRENCY,
    I_Currency.CURRENCY_TEXT,
    I_Currency.DECIMALS,
    I_Currency.CURRENCY_ISO_CODE,
    I_Currency.ALTERNATIVE_CURRENCY_KEY,
    I_Currency.IS_PRIMARY_CURRENCY_FOR_ISO_CRCY
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<I_Currency> = new AllFields('*', I_Currency);
  /**
   * All key fields of the I_Currency entity.
   */
  export const _keyFields: Array<Field<I_Currency>> = [I_Currency.CURRENCY];
  /**
   * Mapping of all key field names to the respective static field property I_Currency.
   */
  export const _keys: { [keys: string]: Field<I_Currency> } = I_Currency._keyFields.reduce((acc: { [keys: string]: Field<I_Currency> }, field: Field<I_Currency>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
