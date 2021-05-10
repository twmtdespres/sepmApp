import { Sepmra_I_AddressRequestBuilder } from './Sepmra_I_AddressRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomFieldV2, DateField, EntityBuilderType, EntityV2, Field, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SEPMRA_I_Address" of service "SEPMRA_PROD_MAN".
 */
export declare class Sepmra_I_Address extends EntityV2 implements Sepmra_I_AddressType {
    /**
     * Technical entity name for Sepmra_I_Address.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Address UUID.
     */
    addressUuid: string;
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
    static builder(): EntityBuilderType<Sepmra_I_Address, Sepmra_I_AddressType>;
    /**
     * Returns a request builder to construct requests for operations on the `Sepmra_I_Address` entity type.
     * @returns A `Sepmra_I_Address` request builder.
     */
    static requestBuilder(): Sepmra_I_AddressRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepmra_I_Address`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Sepmra_I_Address`.
     */
    static customField(fieldName: string): CustomFieldV2<Sepmra_I_Address>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace Sepmra_I_Address {
    /**
     * Static representation of the [[addressUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_UUID: StringField<Sepmra_I_Address>;
    /**
     * Static representation of the [[cityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CITY_NAME: StringField<Sepmra_I_Address>;
    /**
     * Static representation of the [[postalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSTAL_CODE: StringField<Sepmra_I_Address>;
    /**
     * Static representation of the [[streetName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STREET_NAME: StringField<Sepmra_I_Address>;
    /**
     * Static representation of the [[houseNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOUSE_NUMBER: StringField<Sepmra_I_Address>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<Sepmra_I_Address>;
    /**
     * Static representation of the [[addressValidityStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_VALIDITY_START_DATE: DateField<Sepmra_I_Address>;
    /**
     * Static representation of the [[addressValidityEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_VALIDITY_END_DATE: DateField<Sepmra_I_Address>;
    /**
     * Static representation of the [[latitude]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LATITUDE: BigNumberField<Sepmra_I_Address>;
    /**
     * Static representation of the [[longitude]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LONGITUDE: BigNumberField<Sepmra_I_Address>;
    /**
     * Static representation of the [[formattedAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORMATTED_ADDRESS: StringField<Sepmra_I_Address>;
    /**
     * Static representation of the [[addressType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_TYPE: StringField<Sepmra_I_Address>;
    /**
     * All fields of the Sepmra_I_Address entity.
     */
    const _allFields: Array<StringField<Sepmra_I_Address> | DateField<Sepmra_I_Address> | BigNumberField<Sepmra_I_Address>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Sepmra_I_Address>;
    /**
     * All key fields of the Sepmra_I_Address entity.
     */
    const _keyFields: Array<Field<Sepmra_I_Address>>;
    /**
     * Mapping of all key field names to the respective static field property Sepmra_I_Address.
     */
    const _keys: {
        [keys: string]: Field<Sepmra_I_Address>;
    };
}
//# sourceMappingURL=Sepmra_I_Address.d.ts.map