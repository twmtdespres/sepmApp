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
exports.Sepmra_I_Address = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var Sepmra_I_AddressRequestBuilder_1 = require("./Sepmra_I_AddressRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "SEPMRA_I_Address" of service "SEPMRA_PROD_MAN".
 */
var Sepmra_I_Address = /** @class */ (function (_super) {
    __extends(Sepmra_I_Address, _super);
    function Sepmra_I_Address() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `Sepmra_I_Address`.
     * @returns A builder that constructs instances of entity type `Sepmra_I_Address`.
     */
    Sepmra_I_Address.builder = function () {
        return core_1.EntityV2.entityBuilder(Sepmra_I_Address);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Sepmra_I_Address` entity type.
     * @returns A `Sepmra_I_Address` request builder.
     */
    Sepmra_I_Address.requestBuilder = function () {
        return new Sepmra_I_AddressRequestBuilder_1.Sepmra_I_AddressRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepmra_I_Address`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Sepmra_I_Address`.
     */
    Sepmra_I_Address.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, Sepmra_I_Address);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Sepmra_I_Address.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Sepmra_I_Address.
     */
    Sepmra_I_Address._entityName = 'SEPMRA_I_Address';
    /**
     * Default url path for the according service.
     */
    Sepmra_I_Address._defaultServicePath = '/sap/opu/odata/sap/SEPMRA_PROD_MAN';
    return Sepmra_I_Address;
}(core_1.EntityV2));
exports.Sepmra_I_Address = Sepmra_I_Address;
(function (Sepmra_I_Address) {
    /**
     * Static representation of the [[addressUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_Address.ADDRESS_UUID = new core_1.StringField('AddressUUID', Sepmra_I_Address, 'Edm.Guid');
    /**
     * Static representation of the [[cityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_Address.CITY_NAME = new core_1.StringField('CityName', Sepmra_I_Address, 'Edm.String');
    /**
     * Static representation of the [[postalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_Address.POSTAL_CODE = new core_1.StringField('PostalCode', Sepmra_I_Address, 'Edm.String');
    /**
     * Static representation of the [[streetName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_Address.STREET_NAME = new core_1.StringField('StreetName', Sepmra_I_Address, 'Edm.String');
    /**
     * Static representation of the [[houseNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_Address.HOUSE_NUMBER = new core_1.StringField('HouseNumber', Sepmra_I_Address, 'Edm.String');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_Address.COUNTRY = new core_1.StringField('Country', Sepmra_I_Address, 'Edm.String');
    /**
     * Static representation of the [[addressValidityStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_Address.ADDRESS_VALIDITY_START_DATE = new core_1.DateField('AddressValidityStartDate', Sepmra_I_Address, 'Edm.DateTime');
    /**
     * Static representation of the [[addressValidityEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_Address.ADDRESS_VALIDITY_END_DATE = new core_1.DateField('AddressValidityEndDate', Sepmra_I_Address, 'Edm.DateTime');
    /**
     * Static representation of the [[latitude]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_Address.LATITUDE = new core_1.BigNumberField('Latitude', Sepmra_I_Address, 'Edm.Decimal');
    /**
     * Static representation of the [[longitude]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_Address.LONGITUDE = new core_1.BigNumberField('Longitude', Sepmra_I_Address, 'Edm.Decimal');
    /**
     * Static representation of the [[formattedAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_Address.FORMATTED_ADDRESS = new core_1.StringField('FormattedAddress', Sepmra_I_Address, 'Edm.String');
    /**
     * Static representation of the [[addressType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_Address.ADDRESS_TYPE = new core_1.StringField('AddressType', Sepmra_I_Address, 'Edm.String');
    /**
     * All fields of the Sepmra_I_Address entity.
     */
    Sepmra_I_Address._allFields = [
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
    Sepmra_I_Address.ALL_FIELDS = new core_1.AllFields('*', Sepmra_I_Address);
    /**
     * All key fields of the Sepmra_I_Address entity.
     */
    Sepmra_I_Address._keyFields = [Sepmra_I_Address.ADDRESS_UUID];
    /**
     * Mapping of all key field names to the respective static field property Sepmra_I_Address.
     */
    Sepmra_I_Address._keys = Sepmra_I_Address._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Sepmra_I_Address = exports.Sepmra_I_Address || (exports.Sepmra_I_Address = {}));
exports.Sepmra_I_Address = Sepmra_I_Address;
//# sourceMappingURL=Sepmra_I_Address.js.map