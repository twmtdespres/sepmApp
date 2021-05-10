import { Sepmra_C_Pd_SupplierRequestBuilder } from './Sepmra_C_Pd_SupplierRequestBuilder';
import { AllFields, CustomFieldV2, EntityBuilderType, EntityV2, Field, Link, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SEPMRA_C_PD_Supplier" of service "SEPMRA_PROD_MAN".
 */
export declare class Sepmra_C_Pd_Supplier extends EntityV2 implements Sepmra_C_Pd_SupplierType {
    /**
     * Technical entity name for Sepmra_C_Pd_Supplier.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Supplier.
     * Maximum length: 10.
     */
    supplier: string;
    /**
     * Company.
     * Maximum length: 80.
     * @nullable
     */
    companyName?: string;
    /**
     * E-Mail.
     * Maximum length: 255.
     * @nullable
     */
    emailAddress?: string;
    /**
     * Fax.
     * Maximum length: 30.
     * @nullable
     */
    faxNumber?: string;
    /**
     * Phone.
     * Maximum length: 30.
     * @nullable
     */
    phoneNumber?: string;
    /**
     * URI.
     * @nullable
     */
    url?: string;
    /**
     * One-to-one navigation property to the [[Sepmra_I_Address]] entity.
     */
    toAddress?: Sepmra_I_Address | null;
    /**
     * One-to-many navigation property to the [[Sepmra_I_ContactPerson]] entity.
     */
    toContactPerson: Sepmra_I_ContactPerson[];
    /**
     * One-to-one navigation property to the [[Sepmra_I_ContactPerson]] entity.
     */
    toPrimaryContactPerson?: Sepmra_I_ContactPerson | null;
    /**
     * Returns an entity builder to construct instances of `Sepmra_C_Pd_Supplier`.
     * @returns A builder that constructs instances of entity type `Sepmra_C_Pd_Supplier`.
     */
    static builder(): EntityBuilderType<Sepmra_C_Pd_Supplier, Sepmra_C_Pd_SupplierType>;
    /**
     * Returns a request builder to construct requests for operations on the `Sepmra_C_Pd_Supplier` entity type.
     * @returns A `Sepmra_C_Pd_Supplier` request builder.
     */
    static requestBuilder(): Sepmra_C_Pd_SupplierRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepmra_C_Pd_Supplier`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Sepmra_C_Pd_Supplier`.
     */
    static customField(fieldName: string): CustomFieldV2<Sepmra_C_Pd_Supplier>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Sepmra_I_Address, Sepmra_I_AddressType } from './Sepmra_I_Address';
import { Sepmra_I_ContactPerson, Sepmra_I_ContactPersonType } from './Sepmra_I_ContactPerson';
export interface Sepmra_C_Pd_SupplierType {
    supplier: string;
    companyName?: string | null;
    emailAddress?: string | null;
    faxNumber?: string | null;
    phoneNumber?: string | null;
    url?: string | null;
    toAddress?: Sepmra_I_AddressType | null;
    toContactPerson: Sepmra_I_ContactPersonType[];
    toPrimaryContactPerson?: Sepmra_I_ContactPersonType | null;
}
export declare namespace Sepmra_C_Pd_Supplier {
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUPPLIER: StringField<Sepmra_C_Pd_Supplier>;
    /**
     * Static representation of the [[companyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_NAME: StringField<Sepmra_C_Pd_Supplier>;
    /**
     * Static representation of the [[emailAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMAIL_ADDRESS: StringField<Sepmra_C_Pd_Supplier>;
    /**
     * Static representation of the [[faxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FAX_NUMBER: StringField<Sepmra_C_Pd_Supplier>;
    /**
     * Static representation of the [[phoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHONE_NUMBER: StringField<Sepmra_C_Pd_Supplier>;
    /**
     * Static representation of the [[url]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const URL: StringField<Sepmra_C_Pd_Supplier>;
    /**
     * Static representation of the one-to-one navigation property [[toAddress]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_ADDRESS: OneToOneLink<Sepmra_C_Pd_Supplier, Sepmra_I_Address>;
    /**
     * Static representation of the one-to-many navigation property [[toContactPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_CONTACT_PERSON: Link<Sepmra_C_Pd_Supplier, Sepmra_I_ContactPerson>;
    /**
     * Static representation of the one-to-one navigation property [[toPrimaryContactPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_PRIMARY_CONTACT_PERSON: OneToOneLink<Sepmra_C_Pd_Supplier, Sepmra_I_ContactPerson>;
    /**
     * All fields of the Sepmra_C_Pd_Supplier entity.
     */
    const _allFields: Array<StringField<Sepmra_C_Pd_Supplier> | OneToOneLink<Sepmra_C_Pd_Supplier, Sepmra_I_Address> | Link<Sepmra_C_Pd_Supplier, Sepmra_I_ContactPerson> | OneToOneLink<Sepmra_C_Pd_Supplier, Sepmra_I_ContactPerson>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Sepmra_C_Pd_Supplier>;
    /**
     * All key fields of the Sepmra_C_Pd_Supplier entity.
     */
    const _keyFields: Array<Field<Sepmra_C_Pd_Supplier>>;
    /**
     * Mapping of all key field names to the respective static field property Sepmra_C_Pd_Supplier.
     */
    const _keys: {
        [keys: string]: Field<Sepmra_C_Pd_Supplier>;
    };
}
//# sourceMappingURL=Sepmra_C_Pd_Supplier.d.ts.map