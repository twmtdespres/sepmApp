import { Sepmra_I_ContactPersonRequestBuilder } from './Sepmra_I_ContactPersonRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomFieldV2, DateField, EntityBuilderType, EntityV2, Field, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SEPMRA_I_ContactPerson" of service "SEPMRA_PROD_MAN".
 */
export declare class Sepmra_I_ContactPerson extends EntityV2 implements Sepmra_I_ContactPersonType {
    /**
     * Technical entity name for Sepmra_I_ContactPerson.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Node Key.
     */
    contactPersonUuid: string;
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
    static builder(): EntityBuilderType<Sepmra_I_ContactPerson, Sepmra_I_ContactPersonType>;
    /**
     * Returns a request builder to construct requests for operations on the `Sepmra_I_ContactPerson` entity type.
     * @returns A `Sepmra_I_ContactPerson` request builder.
     */
    static requestBuilder(): Sepmra_I_ContactPersonRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepmra_I_ContactPerson`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Sepmra_I_ContactPerson`.
     */
    static customField(fieldName: string): CustomFieldV2<Sepmra_I_ContactPerson>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace Sepmra_I_ContactPerson {
    /**
     * Static representation of the [[contactPersonUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTACT_PERSON_UUID: StringField<Sepmra_I_ContactPerson>;
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIRST_NAME: StringField<Sepmra_I_ContactPerson>;
    /**
     * Static representation of the [[middleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MIDDLE_NAME: StringField<Sepmra_I_ContactPerson>;
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_NAME: StringField<Sepmra_I_ContactPerson>;
    /**
     * Static representation of the [[systemUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SYSTEM_USER: StringField<Sepmra_I_ContactPerson>;
    /**
     * Static representation of the [[initials]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INITIALS: StringField<Sepmra_I_ContactPerson>;
    /**
     * Static representation of the [[genderCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENDER_CODE: StringField<Sepmra_I_ContactPerson>;
    /**
     * Static representation of the [[phoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHONE_NUMBER: StringField<Sepmra_I_ContactPerson>;
    /**
     * Static representation of the [[faxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FAX_NUMBER: StringField<Sepmra_I_ContactPerson>;
    /**
     * Static representation of the [[mobilePhoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MOBILE_PHONE_NUMBER: StringField<Sepmra_I_ContactPerson>;
    /**
     * Static representation of the [[emailAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMAIL_ADDRESS: StringField<Sepmra_I_ContactPerson>;
    /**
     * Static representation of the [[preferredLanguage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PREFERRED_LANGUAGE: StringField<Sepmra_I_ContactPerson>;
    /**
     * Static representation of the [[birthDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BIRTH_DATE: DateField<Sepmra_I_ContactPerson>;
    /**
     * Static representation of the [[formattedContactName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORMATTED_CONTACT_NAME: StringField<Sepmra_I_ContactPerson>;
    /**
     * Static representation of the one-to-one navigation property [[toAddress]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_ADDRESS: OneToOneLink<Sepmra_I_ContactPerson, Sepmra_I_Address>;
    /**
     * Static representation of the one-to-one navigation property [[toPreferredLanguage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_PREFERRED_LANGUAGE: OneToOneLink<Sepmra_I_ContactPerson, I_Language>;
    /**
     * All fields of the Sepmra_I_ContactPerson entity.
     */
    const _allFields: Array<StringField<Sepmra_I_ContactPerson> | DateField<Sepmra_I_ContactPerson> | OneToOneLink<Sepmra_I_ContactPerson, Sepmra_I_Address> | OneToOneLink<Sepmra_I_ContactPerson, I_Language>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Sepmra_I_ContactPerson>;
    /**
     * All key fields of the Sepmra_I_ContactPerson entity.
     */
    const _keyFields: Array<Field<Sepmra_I_ContactPerson>>;
    /**
     * Mapping of all key field names to the respective static field property Sepmra_I_ContactPerson.
     */
    const _keys: {
        [keys: string]: Field<Sepmra_I_ContactPerson>;
    };
}
//# sourceMappingURL=Sepmra_I_ContactPerson.d.ts.map