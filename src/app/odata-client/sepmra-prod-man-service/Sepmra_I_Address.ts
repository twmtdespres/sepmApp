/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Sepmra_I_AddressRequestBuilder } from './Sepmra_I_AddressRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomFieldV2, DateField, EntityBuilderType, EntityV2, Field, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SEPMRA_I_Address" of service "SEPMRA_PROD_MAN".
 */
export class Sepmra_I_Address extends EntityV2 implements Sepmra_I_AddressType {
  /**
   * Technical entity name for Sepmra_I_Address.
   */
  static _entityName = 'SEPMRA_I_Address';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/SEPMRA_PROD_MAN';
  /**
   * Address UUID.
   */
  addressUuid!: string;
  /**
   * City.
   * Maximum length: 40.
   * @nullable
   */
  cityName?: string;
  /**
   * Postal Code.
   * Maximum length: 10.
   * @nullable
   */
  postalCode?: string;
  /**
   * Street.
   * Maximum length: 60.
   * @nullable
   */
  streetName?: string;
  /**
   * Building.
   * Maximum length: 10.
   * @nullable
   */
  houseNumber?: string;
  /**
   * Country.
   * Maximum length: 3.
   * @nullable
   */
  country?: string;
  /**
   * Valid From.
   * @nullable
   */
  addressValidityStartDate?: Moment;
  /**
   * Valid Until.
   * @nullable
   */
  addressValidityEndDate?: Moment;
  /**
   * Latitude.
   * @nullable
   */
  latitude?: BigNumber;
  /**
   * Longitude.
   * @nullable
   */
  longitude?: BigNumber;
  /**
   * Address.
   * Maximum length: 129.
   * @nullable
   */
  formattedAddress?: string;
  /**
   * Address Type.
   * Maximum length: 2.
   * @nullable
   */
  addressType?: string;

  /**
   * Returns an entity builder to construct instances of `Sepmra_I_Address`.
   * @returns A builder that constructs instances of entity type `Sepmra_I_Address`.
   */
  static builder(): EntityBuilderType<Sepmra_I_Address, Sepmra_I_AddressType> {
    return EntityV2.entityBuilder(Sepmra_I_Address);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Sepmra_I_Address` entity type.
   * @returns A `Sepmra_I_Address` request builder.
   */
  static requestBuilder(): Sepmra_I_AddressRequestBuilder {
    return new Sepmra_I_AddressRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepmra_I_Address`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Sepmra_I_Address`.
   */
  static customField(fieldName: string): CustomFieldV2<Sepmra_I_Address> {
    return EntityV2.customFieldSelector(fieldName, Sepmra_I_Address);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface Sepmra_I_AddressType {
  addressUuid: string;
  cityName?: string | null;
  postalCode?: string | null;
  streetName?: string | null;
  houseNumber?: string | null;
  country?: string | null;
  addressValidityStartDate?: Moment | null;
  addressValidityEndDate?: Moment | null;
  latitude?: BigNumber | null;
  longitude?: BigNumber | null;
  formattedAddress?: string | null;
  addressType?: string | null;
}

export namespace Sepmra_I_Address {
  /**
   * Static representation of the [[addressUuid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_UUID: StringField<Sepmra_I_Address> = new StringField('AddressUUID', Sepmra_I_Address, 'Edm.Guid');
  /**
   * Static representation of the [[cityName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CITY_NAME: StringField<Sepmra_I_Address> = new StringField('CityName', Sepmra_I_Address, 'Edm.String');
  /**
   * Static representation of the [[postalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSTAL_CODE: StringField<Sepmra_I_Address> = new StringField('PostalCode', Sepmra_I_Address, 'Edm.String');
  /**
   * Static representation of the [[streetName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STREET_NAME: StringField<Sepmra_I_Address> = new StringField('StreetName', Sepmra_I_Address, 'Edm.String');
  /**
   * Static representation of the [[houseNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOUSE_NUMBER: StringField<Sepmra_I_Address> = new StringField('HouseNumber', Sepmra_I_Address, 'Edm.String');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<Sepmra_I_Address> = new StringField('Country', Sepmra_I_Address, 'Edm.String');
  /**
   * Static representation of the [[addressValidityStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_VALIDITY_START_DATE: DateField<Sepmra_I_Address> = new DateField('AddressValidityStartDate', Sepmra_I_Address, 'Edm.DateTime');
  /**
   * Static representation of the [[addressValidityEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_VALIDITY_END_DATE: DateField<Sepmra_I_Address> = new DateField('AddressValidityEndDate', Sepmra_I_Address, 'Edm.DateTime');
  /**
   * Static representation of the [[latitude]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LATITUDE: BigNumberField<Sepmra_I_Address> = new BigNumberField('Latitude', Sepmra_I_Address, 'Edm.Decimal');
  /**
   * Static representation of the [[longitude]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LONGITUDE: BigNumberField<Sepmra_I_Address> = new BigNumberField('Longitude', Sepmra_I_Address, 'Edm.Decimal');
  /**
   * Static representation of the [[formattedAddress]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORMATTED_ADDRESS: StringField<Sepmra_I_Address> = new StringField('FormattedAddress', Sepmra_I_Address, 'Edm.String');
  /**
   * Static representation of the [[addressType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_TYPE: StringField<Sepmra_I_Address> = new StringField('AddressType', Sepmra_I_Address, 'Edm.String');
  /**
   * All fields of the Sepmra_I_Address entity.
   */
  export const _allFields: Array<StringField<Sepmra_I_Address> | DateField<Sepmra_I_Address> | BigNumberField<Sepmra_I_Address>> = [
    Sepmra_I_Address.ADDRESS_UUID,
    Sepmra_I_Address.CITY_NAME,
    Sepmra_I_Address.POSTAL_CODE,
    Sepmra_I_Address.STREET_NAME,
    Sepmra_I_Address.HOUSE_NUMBER,
    Sepmra_I_Address.COUNTRY,
    Sepmra_I_Address.ADDRESS_VALIDITY_START_DATE,
    Sepmra_I_Address.ADDRESS_VALIDITY_END_DATE,
    Sepmra_I_Address.LATITUDE,
    Sepmra_I_Address.LONGITUDE,
    Sepmra_I_Address.FORMATTED_ADDRESS,
    Sepmra_I_Address.ADDRESS_TYPE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Sepmra_I_Address> = new AllFields('*', Sepmra_I_Address);
  /**
   * All key fields of the Sepmra_I_Address entity.
   */
  export const _keyFields: Array<Field<Sepmra_I_Address>> = [Sepmra_I_Address.ADDRESS_UUID];
  /**
   * Mapping of all key field names to the respective static field property Sepmra_I_Address.
   */
  export const _keys: { [keys: string]: Field<Sepmra_I_Address> } = Sepmra_I_Address._keyFields.reduce((acc: { [keys: string]: Field<Sepmra_I_Address> }, field: Field<Sepmra_I_Address>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
