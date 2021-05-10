/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Sepmra_I_ContactPersonRequestBuilder } from './Sepmra_I_ContactPersonRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomFieldV2, DateField, EntityBuilderType, EntityV2, Field, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SEPMRA_I_ContactPerson" of service "SEPMRA_PROD_MAN".
 */
export class Sepmra_I_ContactPerson extends EntityV2 implements Sepmra_I_ContactPersonType {
  /**
   * Technical entity name for Sepmra_I_ContactPerson.
   */
  static _entityName = 'SEPMRA_I_ContactPerson';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/SEPMRA_PROD_MAN';
  /**
   * Node Key.
   */
  contactPersonUuid!: string;
  /**
   * First Name.
   * Maximum length: 40.
   * @nullable
   */
  firstName?: string;
  /**
   * Middle Name.
   * Maximum length: 40.
   * @nullable
   */
  middleName?: string;
  /**
   * Last Name.
   * Maximum length: 40.
   * @nullable
   */
  lastName?: string;
  /**
   * Utilisateur.
   * Maximum length: 12.
   * @nullable
   */
  systemUser?: string;
  /**
   * Initials.
   * Maximum length: 10.
   * @nullable
   */
  initials?: string;
  /**
   * Gender.
   * Maximum length: 1.
   * @nullable
   */
  genderCode?: string;
  /**
   * Phone.
   * Maximum length: 30.
   * @nullable
   */
  phoneNumber?: string;
  /**
   * Fax.
   * Maximum length: 30.
   * @nullable
   */
  faxNumber?: string;
  /**
   * Mobile.
   * Maximum length: 30.
   * @nullable
   */
  mobilePhoneNumber?: string;
  /**
   * E-Mail.
   * Maximum length: 255.
   * @nullable
   */
  emailAddress?: string;
  /**
   * Code langue.
   * Maximum length: 2.
   * @nullable
   */
  preferredLanguage?: string;
  /**
   * Date of Birth.
   * @nullable
   */
  birthDate?: Moment;
  /**
   * Name.
   * Maximum length: 81.
   * @nullable
   */
  formattedContactName?: string;
  /**
   * One-to-one navigation property to the [[Sepmra_I_Address]] entity.
   */
  toAddress?: Sepmra_I_Address | null;
  /**
   * One-to-one navigation property to the [[I_Language]] entity.
   */
  toPreferredLanguage?: I_Language | null;

  /**
   * Returns an entity builder to construct instances of `Sepmra_I_ContactPerson`.
   * @returns A builder that constructs instances of entity type `Sepmra_I_ContactPerson`.
   */
  static builder(): EntityBuilderType<Sepmra_I_ContactPerson, Sepmra_I_ContactPersonType> {
    return EntityV2.entityBuilder(Sepmra_I_ContactPerson);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Sepmra_I_ContactPerson` entity type.
   * @returns A `Sepmra_I_ContactPerson` request builder.
   */
  static requestBuilder(): Sepmra_I_ContactPersonRequestBuilder {
    return new Sepmra_I_ContactPersonRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepmra_I_ContactPerson`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Sepmra_I_ContactPerson`.
   */
  static customField(fieldName: string): CustomFieldV2<Sepmra_I_ContactPerson> {
    return EntityV2.customFieldSelector(fieldName, Sepmra_I_ContactPerson);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Sepmra_I_Address, Sepmra_I_AddressType } from './Sepmra_I_Address';
import { I_Language, I_LanguageType } from './I_Language';

export interface Sepmra_I_ContactPersonType {
  contactPersonUuid: string;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  systemUser?: string | null;
  initials?: string | null;
  genderCode?: string | null;
  phoneNumber?: string | null;
  faxNumber?: string | null;
  mobilePhoneNumber?: string | null;
  emailAddress?: string | null;
  preferredLanguage?: string | null;
  birthDate?: Moment | null;
  formattedContactName?: string | null;
  toAddress?: Sepmra_I_AddressType | null;
  toPreferredLanguage?: I_LanguageType | null;
}

export namespace Sepmra_I_ContactPerson {
  /**
   * Static representation of the [[contactPersonUuid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_PERSON_UUID: StringField<Sepmra_I_ContactPerson> = new StringField('ContactPersonUUID', Sepmra_I_ContactPerson, 'Edm.Guid');
  /**
   * Static representation of the [[firstName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIRST_NAME: StringField<Sepmra_I_ContactPerson> = new StringField('FirstName', Sepmra_I_ContactPerson, 'Edm.String');
  /**
   * Static representation of the [[middleName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MIDDLE_NAME: StringField<Sepmra_I_ContactPerson> = new StringField('MiddleName', Sepmra_I_ContactPerson, 'Edm.String');
  /**
   * Static representation of the [[lastName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_NAME: StringField<Sepmra_I_ContactPerson> = new StringField('LastName', Sepmra_I_ContactPerson, 'Edm.String');
  /**
   * Static representation of the [[systemUser]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SYSTEM_USER: StringField<Sepmra_I_ContactPerson> = new StringField('SystemUser', Sepmra_I_ContactPerson, 'Edm.String');
  /**
   * Static representation of the [[initials]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INITIALS: StringField<Sepmra_I_ContactPerson> = new StringField('Initials', Sepmra_I_ContactPerson, 'Edm.String');
  /**
   * Static representation of the [[genderCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENDER_CODE: StringField<Sepmra_I_ContactPerson> = new StringField('GenderCode', Sepmra_I_ContactPerson, 'Edm.String');
  /**
   * Static representation of the [[phoneNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PHONE_NUMBER: StringField<Sepmra_I_ContactPerson> = new StringField('PhoneNumber', Sepmra_I_ContactPerson, 'Edm.String');
  /**
   * Static representation of the [[faxNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FAX_NUMBER: StringField<Sepmra_I_ContactPerson> = new StringField('FaxNumber', Sepmra_I_ContactPerson, 'Edm.String');
  /**
   * Static representation of the [[mobilePhoneNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MOBILE_PHONE_NUMBER: StringField<Sepmra_I_ContactPerson> = new StringField('MobilePhoneNumber', Sepmra_I_ContactPerson, 'Edm.String');
  /**
   * Static representation of the [[emailAddress]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMAIL_ADDRESS: StringField<Sepmra_I_ContactPerson> = new StringField('EmailAddress', Sepmra_I_ContactPerson, 'Edm.String');
  /**
   * Static representation of the [[preferredLanguage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PREFERRED_LANGUAGE: StringField<Sepmra_I_ContactPerson> = new StringField('PreferredLanguage', Sepmra_I_ContactPerson, 'Edm.String');
  /**
   * Static representation of the [[birthDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BIRTH_DATE: DateField<Sepmra_I_ContactPerson> = new DateField('BirthDate', Sepmra_I_ContactPerson, 'Edm.DateTime');
  /**
   * Static representation of the [[formattedContactName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORMATTED_CONTACT_NAME: StringField<Sepmra_I_ContactPerson> = new StringField('FormattedContactName', Sepmra_I_ContactPerson, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[toAddress]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_ADDRESS: OneToOneLink<Sepmra_I_ContactPerson, Sepmra_I_Address> = new OneToOneLink('to_Address', Sepmra_I_ContactPerson, Sepmra_I_Address);
  /**
   * Static representation of the one-to-one navigation property [[toPreferredLanguage]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TO_PREFERRED_LANGUAGE: OneToOneLink<Sepmra_I_ContactPerson, I_Language> = new OneToOneLink('to_PreferredLanguage', Sepmra_I_ContactPerson, I_Language);
  /**
   * All fields of the Sepmra_I_ContactPerson entity.
   */
  export const _allFields: Array<StringField<Sepmra_I_ContactPerson> | DateField<Sepmra_I_ContactPerson> | OneToOneLink<Sepmra_I_ContactPerson, Sepmra_I_Address> | OneToOneLink<Sepmra_I_ContactPerson, I_Language>> = [
    Sepmra_I_ContactPerson.CONTACT_PERSON_UUID,
    Sepmra_I_ContactPerson.FIRST_NAME,
    Sepmra_I_ContactPerson.MIDDLE_NAME,
    Sepmra_I_ContactPerson.LAST_NAME,
    Sepmra_I_ContactPerson.SYSTEM_USER,
    Sepmra_I_ContactPerson.INITIALS,
    Sepmra_I_ContactPerson.GENDER_CODE,
    Sepmra_I_ContactPerson.PHONE_NUMBER,
    Sepmra_I_ContactPerson.FAX_NUMBER,
    Sepmra_I_ContactPerson.MOBILE_PHONE_NUMBER,
    Sepmra_I_ContactPerson.EMAIL_ADDRESS,
    Sepmra_I_ContactPerson.PREFERRED_LANGUAGE,
    Sepmra_I_ContactPerson.BIRTH_DATE,
    Sepmra_I_ContactPerson.FORMATTED_CONTACT_NAME,
    Sepmra_I_ContactPerson.TO_ADDRESS,
    Sepmra_I_ContactPerson.TO_PREFERRED_LANGUAGE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Sepmra_I_ContactPerson> = new AllFields('*', Sepmra_I_ContactPerson);
  /**
   * All key fields of the Sepmra_I_ContactPerson entity.
   */
  export const _keyFields: Array<Field<Sepmra_I_ContactPerson>> = [Sepmra_I_ContactPerson.CONTACT_PERSON_UUID];
  /**
   * Mapping of all key field names to the respective static field property Sepmra_I_ContactPerson.
   */
  export const _keys: { [keys: string]: Field<Sepmra_I_ContactPerson> } = Sepmra_I_ContactPerson._keyFields.reduce((acc: { [keys: string]: Field<Sepmra_I_ContactPerson> }, field: Field<Sepmra_I_ContactPerson>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
