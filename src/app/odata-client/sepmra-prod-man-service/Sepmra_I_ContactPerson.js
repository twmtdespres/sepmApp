"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sepmra_I_ContactPerson = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var Sepmra_I_ContactPersonRequestBuilder_1 = require("./Sepmra_I_ContactPersonRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "SEPMRA_I_ContactPerson" of service "SEPMRA_PROD_MAN".
 */
var Sepmra_I_ContactPerson = /** @class */ (function (_super) {
    __extends(Sepmra_I_ContactPerson, _super);
    function Sepmra_I_ContactPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `Sepmra_I_ContactPerson`.
     * @returns A builder that constructs instances of entity type `Sepmra_I_ContactPerson`.
     */
    Sepmra_I_ContactPerson.builder = function () {
        return core_1.EntityV2.entityBuilder(Sepmra_I_ContactPerson);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Sepmra_I_ContactPerson` entity type.
     * @returns A `Sepmra_I_ContactPerson` request builder.
     */
    Sepmra_I_ContactPerson.requestBuilder = function () {
        return new Sepmra_I_ContactPersonRequestBuilder_1.Sepmra_I_ContactPersonRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepmra_I_ContactPerson`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Sepmra_I_ContactPerson`.
     */
    Sepmra_I_ContactPerson.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, Sepmra_I_ContactPerson);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Sepmra_I_ContactPerson.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Sepmra_I_ContactPerson.
     */
    Sepmra_I_ContactPerson._entityName = 'SEPMRA_I_ContactPerson';
    /**
     * Default url path for the according service.
     */
    Sepmra_I_ContactPerson._defaultServicePath = '/sap/opu/odata/sap/SEPMRA_PROD_MAN';
    return Sepmra_I_ContactPerson;
}(core_1.EntityV2));
exports.Sepmra_I_ContactPerson = Sepmra_I_ContactPerson;
var Sepmra_I_Address_1 = require("./Sepmra_I_Address");
var I_Language_1 = require("./I_Language");
(function (Sepmra_I_ContactPerson) {
    /**
     * Static representation of the [[contactPersonUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_ContactPerson.CONTACT_PERSON_UUID = new core_1.StringField('ContactPersonUUID', Sepmra_I_ContactPerson, 'Edm.Guid');
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_ContactPerson.FIRST_NAME = new core_1.StringField('FirstName', Sepmra_I_ContactPerson, 'Edm.String');
    /**
     * Static representation of the [[middleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_ContactPerson.MIDDLE_NAME = new core_1.StringField('MiddleName', Sepmra_I_ContactPerson, 'Edm.String');
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_ContactPerson.LAST_NAME = new core_1.StringField('LastName', Sepmra_I_ContactPerson, 'Edm.String');
    /**
     * Static representation of the [[systemUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_ContactPerson.SYSTEM_USER = new core_1.StringField('SystemUser', Sepmra_I_ContactPerson, 'Edm.String');
    /**
     * Static representation of the [[initials]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_ContactPerson.INITIALS = new core_1.StringField('Initials', Sepmra_I_ContactPerson, 'Edm.String');
    /**
     * Static representation of the [[genderCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_ContactPerson.GENDER_CODE = new core_1.StringField('GenderCode', Sepmra_I_ContactPerson, 'Edm.String');
    /**
     * Static representation of the [[phoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_ContactPerson.PHONE_NUMBER = new core_1.StringField('PhoneNumber', Sepmra_I_ContactPerson, 'Edm.String');
    /**
     * Static representation of the [[faxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_ContactPerson.FAX_NUMBER = new core_1.StringField('FaxNumber', Sepmra_I_ContactPerson, 'Edm.String');
    /**
     * Static representation of the [[mobilePhoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_ContactPerson.MOBILE_PHONE_NUMBER = new core_1.StringField('MobilePhoneNumber', Sepmra_I_ContactPerson, 'Edm.String');
    /**
     * Static representation of the [[emailAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_ContactPerson.EMAIL_ADDRESS = new core_1.StringField('EmailAddress', Sepmra_I_ContactPerson, 'Edm.String');
    /**
     * Static representation of the [[preferredLanguage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_ContactPerson.PREFERRED_LANGUAGE = new core_1.StringField('PreferredLanguage', Sepmra_I_ContactPerson, 'Edm.String');
    /**
     * Static representation of the [[birthDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_ContactPerson.BIRTH_DATE = new core_1.DateField('BirthDate', Sepmra_I_ContactPerson, 'Edm.DateTime');
    /**
     * Static representation of the [[formattedContactName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_ContactPerson.FORMATTED_CONTACT_NAME = new core_1.StringField('FormattedContactName', Sepmra_I_ContactPerson, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[toAddress]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_ContactPerson.TO_ADDRESS = new core_1.OneToOneLink('to_Address', Sepmra_I_ContactPerson, Sepmra_I_Address_1.Sepmra_I_Address);
    /**
     * Static representation of the one-to-one navigation property [[toPreferredLanguage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_ContactPerson.TO_PREFERRED_LANGUAGE = new core_1.OneToOneLink('to_PreferredLanguage', Sepmra_I_ContactPerson, I_Language_1.I_Language);
    /**
     * All fields of the Sepmra_I_ContactPerson entity.
     */
    Sepmra_I_ContactPerson._allFields = [
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
    Sepmra_I_ContactPerson.ALL_FIELDS = new core_1.AllFields('*', Sepmra_I_ContactPerson);
    /**
     * All key fields of the Sepmra_I_ContactPerson entity.
     */
    Sepmra_I_ContactPerson._keyFields = [Sepmra_I_ContactPerson.CONTACT_PERSON_UUID];
    /**
     * Mapping of all key field names to the respective static field property Sepmra_I_ContactPerson.
     */
    Sepmra_I_ContactPerson._keys = Sepmra_I_ContactPerson._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Sepmra_I_ContactPerson = exports.Sepmra_I_ContactPerson || (exports.Sepmra_I_ContactPerson = {}));
exports.Sepmra_I_ContactPerson = Sepmra_I_ContactPerson;
//# sourceMappingURL=Sepmra_I_ContactPerson.js.map