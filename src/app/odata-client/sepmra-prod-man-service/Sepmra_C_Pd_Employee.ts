/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Sepmra_C_Pd_EmployeeRequestBuilder } from './Sepmra_C_Pd_EmployeeRequestBuilder';
import { AllFields, CustomFieldV2, EntityBuilderType, EntityV2, Field, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SEPMRA_C_PD_Employee" of service "SEPMRA_PROD_MAN".
 */
export class Sepmra_C_Pd_Employee extends EntityV2 implements Sepmra_C_Pd_EmployeeType {
  /**
   * Technical entity name for Sepmra_C_Pd_Employee.
   */
  static _entityName = 'SEPMRA_C_PD_Employee';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/SEPMRA_PROD_MAN';
  /**
   * Node Key.
   */
  employeeUuid!: string;
  /**
   * Gender.
   * Maximum length: 1.
   * @nullable
   */
  genderCode?: string;
  /**
   * Employee ID.
   * Maximum length: 10.
   * @nullable
   */
  employee?: string;
  /**
   * Pic URI.
   * Maximum length: 255.
   * @nullable
   */
  employeePictureUrl?: string;
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
   * Full Name.
   * Maximum length: 81.
   * @nullable
   */
  formattedName?: string;
  /**
   * Phone No.
   * Maximum length: 30.
   * @nullable
   */
  phoneNumber?: string;
  /**
   * Mobile Phone Number.
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
   * Returns an entity builder to construct instances of `Sepmra_C_Pd_Employee`.
   * @returns A builder that constructs instances of entity type `Sepmra_C_Pd_Employee`.
   */
  static builder(): EntityBuilderType<Sepmra_C_Pd_Employee, Sepmra_C_Pd_EmployeeType> {
    return EntityV2.entityBuilder(Sepmra_C_Pd_Employee);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Sepmra_C_Pd_Employee` entity type.
   * @returns A `Sepmra_C_Pd_Employee` request builder.
   */
  static requestBuilder(): Sepmra_C_Pd_EmployeeRequestBuilder {
    return new Sepmra_C_Pd_EmployeeRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepmra_C_Pd_Employee`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Sepmra_C_Pd_Employee`.
   */
  static customField(fieldName: string): CustomFieldV2<Sepmra_C_Pd_Employee> {
    return EntityV2.customFieldSelector(fieldName, Sepmra_C_Pd_Employee);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface Sepmra_C_Pd_EmployeeType {
  employeeUuid: string;
  genderCode?: string | null;
  employee?: string | null;
  employeePictureUrl?: string | null;
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
  formattedName?: string | null;
  phoneNumber?: string | null;
  mobilePhoneNumber?: string | null;
  emailAddress?: string | null;
}

export namespace Sepmra_C_Pd_Employee {
  /**
   * Static representation of the [[employeeUuid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_UUID: StringField<Sepmra_C_Pd_Employee> = new StringField('EmployeeUUID', Sepmra_C_Pd_Employee, 'Edm.Guid');
  /**
   * Static representation of the [[genderCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENDER_CODE: StringField<Sepmra_C_Pd_Employee> = new StringField('GenderCode', Sepmra_C_Pd_Employee, 'Edm.String');
  /**
   * Static representation of the [[employee]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE: StringField<Sepmra_C_Pd_Employee> = new StringField('Employee', Sepmra_C_Pd_Employee, 'Edm.String');
  /**
   * Static representation of the [[employeePictureUrl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_PICTURE_URL: StringField<Sepmra_C_Pd_Employee> = new StringField('EmployeePictureURL', Sepmra_C_Pd_Employee, 'Edm.String');
  /**
   * Static representation of the [[firstName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIRST_NAME: StringField<Sepmra_C_Pd_Employee> = new StringField('FirstName', Sepmra_C_Pd_Employee, 'Edm.String');
  /**
   * Static representation of the [[middleName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MIDDLE_NAME: StringField<Sepmra_C_Pd_Employee> = new StringField('MiddleName', Sepmra_C_Pd_Employee, 'Edm.String');
  /**
   * Static representation of the [[lastName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_NAME: StringField<Sepmra_C_Pd_Employee> = new StringField('LastName', Sepmra_C_Pd_Employee, 'Edm.String');
  /**
   * Static representation of the [[formattedName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORMATTED_NAME: StringField<Sepmra_C_Pd_Employee> = new StringField('FormattedName', Sepmra_C_Pd_Employee, 'Edm.String');
  /**
   * Static representation of the [[phoneNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PHONE_NUMBER: StringField<Sepmra_C_Pd_Employee> = new StringField('PhoneNumber', Sepmra_C_Pd_Employee, 'Edm.String');
  /**
   * Static representation of the [[mobilePhoneNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MOBILE_PHONE_NUMBER: StringField<Sepmra_C_Pd_Employee> = new StringField('MobilePhoneNumber', Sepmra_C_Pd_Employee, 'Edm.String');
  /**
   * Static representation of the [[emailAddress]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMAIL_ADDRESS: StringField<Sepmra_C_Pd_Employee> = new StringField('EmailAddress', Sepmra_C_Pd_Employee, 'Edm.String');
  /**
   * All fields of the Sepmra_C_Pd_Employee entity.
   */
  export const _allFields: Array<StringField<Sepmra_C_Pd_Employee>> = [
    Sepmra_C_Pd_Employee.EMPLOYEE_UUID,
    Sepmra_C_Pd_Employee.GENDER_CODE,
    Sepmra_C_Pd_Employee.EMPLOYEE,
    Sepmra_C_Pd_Employee.EMPLOYEE_PICTURE_URL,
    Sepmra_C_Pd_Employee.FIRST_NAME,
    Sepmra_C_Pd_Employee.MIDDLE_NAME,
    Sepmra_C_Pd_Employee.LAST_NAME,
    Sepmra_C_Pd_Employee.FORMATTED_NAME,
    Sepmra_C_Pd_Employee.PHONE_NUMBER,
    Sepmra_C_Pd_Employee.MOBILE_PHONE_NUMBER,
    Sepmra_C_Pd_Employee.EMAIL_ADDRESS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Sepmra_C_Pd_Employee> = new AllFields('*', Sepmra_C_Pd_Employee);
  /**
   * All key fields of the Sepmra_C_Pd_Employee entity.
   */
  export const _keyFields: Array<Field<Sepmra_C_Pd_Employee>> = [Sepmra_C_Pd_Employee.EMPLOYEE_UUID];
  /**
   * Mapping of all key field names to the respective static field property Sepmra_C_Pd_Employee.
   */
  export const _keys: { [keys: string]: Field<Sepmra_C_Pd_Employee> } = Sepmra_C_Pd_Employee._keyFields.reduce((acc: { [keys: string]: Field<Sepmra_C_Pd_Employee> }, field: Field<Sepmra_C_Pd_Employee>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
