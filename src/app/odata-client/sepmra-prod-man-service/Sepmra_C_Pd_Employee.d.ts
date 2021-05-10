import { Sepmra_C_Pd_EmployeeRequestBuilder } from './Sepmra_C_Pd_EmployeeRequestBuilder';
import { AllFields, CustomFieldV2, EntityBuilderType, EntityV2, Field, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SEPMRA_C_PD_Employee" of service "SEPMRA_PROD_MAN".
 */
export declare class Sepmra_C_Pd_Employee extends EntityV2 implements Sepmra_C_Pd_EmployeeType {
    /**
     * Technical entity name for Sepmra_C_Pd_Employee.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Node Key.
     */
    employeeUuid: string;
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
    static builder(): EntityBuilderType<Sepmra_C_Pd_Employee, Sepmra_C_Pd_EmployeeType>;
    /**
     * Returns a request builder to construct requests for operations on the `Sepmra_C_Pd_Employee` entity type.
     * @returns A `Sepmra_C_Pd_Employee` request builder.
     */
    static requestBuilder(): Sepmra_C_Pd_EmployeeRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepmra_C_Pd_Employee`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Sepmra_C_Pd_Employee`.
     */
    static customField(fieldName: string): CustomFieldV2<Sepmra_C_Pd_Employee>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace Sepmra_C_Pd_Employee {
    /**
     * Static representation of the [[employeeUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_UUID: StringField<Sepmra_C_Pd_Employee>;
    /**
     * Static representation of the [[genderCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENDER_CODE: StringField<Sepmra_C_Pd_Employee>;
    /**
     * Static representation of the [[employee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE: StringField<Sepmra_C_Pd_Employee>;
    /**
     * Static representation of the [[employeePictureUrl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_PICTURE_URL: StringField<Sepmra_C_Pd_Employee>;
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIRST_NAME: StringField<Sepmra_C_Pd_Employee>;
    /**
     * Static representation of the [[middleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MIDDLE_NAME: StringField<Sepmra_C_Pd_Employee>;
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_NAME: StringField<Sepmra_C_Pd_Employee>;
    /**
     * Static representation of the [[formattedName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORMATTED_NAME: StringField<Sepmra_C_Pd_Employee>;
    /**
     * Static representation of the [[phoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHONE_NUMBER: StringField<Sepmra_C_Pd_Employee>;
    /**
     * Static representation of the [[mobilePhoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MOBILE_PHONE_NUMBER: StringField<Sepmra_C_Pd_Employee>;
    /**
     * Static representation of the [[emailAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMAIL_ADDRESS: StringField<Sepmra_C_Pd_Employee>;
    /**
     * All fields of the Sepmra_C_Pd_Employee entity.
     */
    const _allFields: Array<StringField<Sepmra_C_Pd_Employee>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Sepmra_C_Pd_Employee>;
    /**
     * All key fields of the Sepmra_C_Pd_Employee entity.
     */
    const _keyFields: Array<Field<Sepmra_C_Pd_Employee>>;
    /**
     * Mapping of all key field names to the respective static field property Sepmra_C_Pd_Employee.
     */
    const _keys: {
        [keys: string]: Field<Sepmra_C_Pd_Employee>;
    };
}
//# sourceMappingURL=Sepmra_C_Pd_Employee.d.ts.map