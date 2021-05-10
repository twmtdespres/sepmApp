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
exports.Sepmra_C_Pd_Supplier = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var Sepmra_C_Pd_SupplierRequestBuilder_1 = require("./Sepmra_C_Pd_SupplierRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "SEPMRA_C_PD_Supplier" of service "SEPMRA_PROD_MAN".
 */
var Sepmra_C_Pd_Supplier = /** @class */ (function (_super) {
    __extends(Sepmra_C_Pd_Supplier, _super);
    function Sepmra_C_Pd_Supplier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `Sepmra_C_Pd_Supplier`.
     * @returns A builder that constructs instances of entity type `Sepmra_C_Pd_Supplier`.
     */
    Sepmra_C_Pd_Supplier.builder = function () {
        return core_1.EntityV2.entityBuilder(Sepmra_C_Pd_Supplier);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Sepmra_C_Pd_Supplier` entity type.
     * @returns A `Sepmra_C_Pd_Supplier` request builder.
     */
    Sepmra_C_Pd_Supplier.requestBuilder = function () {
        return new Sepmra_C_Pd_SupplierRequestBuilder_1.Sepmra_C_Pd_SupplierRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepmra_C_Pd_Supplier`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Sepmra_C_Pd_Supplier`.
     */
    Sepmra_C_Pd_Supplier.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, Sepmra_C_Pd_Supplier);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Sepmra_C_Pd_Supplier.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Sepmra_C_Pd_Supplier.
     */
    Sepmra_C_Pd_Supplier._entityName = 'SEPMRA_C_PD_Supplier';
    /**
     * Default url path for the according service.
     */
    Sepmra_C_Pd_Supplier._defaultServicePath = '/sap/opu/odata/sap/SEPMRA_PROD_MAN';
    return Sepmra_C_Pd_Supplier;
}(core_1.EntityV2));
exports.Sepmra_C_Pd_Supplier = Sepmra_C_Pd_Supplier;
var Sepmra_I_Address_1 = require("./Sepmra_I_Address");
var Sepmra_I_ContactPerson_1 = require("./Sepmra_I_ContactPerson");
(function (Sepmra_C_Pd_Supplier) {
    /**
     * Static representation of the [[supplier]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Supplier.SUPPLIER = new core_1.StringField('Supplier', Sepmra_C_Pd_Supplier, 'Edm.String');
    /**
     * Static representation of the [[companyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Supplier.COMPANY_NAME = new core_1.StringField('CompanyName', Sepmra_C_Pd_Supplier, 'Edm.String');
    /**
     * Static representation of the [[emailAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Supplier.EMAIL_ADDRESS = new core_1.StringField('EmailAddress', Sepmra_C_Pd_Supplier, 'Edm.String');
    /**
     * Static representation of the [[faxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Supplier.FAX_NUMBER = new core_1.StringField('FaxNumber', Sepmra_C_Pd_Supplier, 'Edm.String');
    /**
     * Static representation of the [[phoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Supplier.PHONE_NUMBER = new core_1.StringField('PhoneNumber', Sepmra_C_Pd_Supplier, 'Edm.String');
    /**
     * Static representation of the [[url]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Supplier.URL = new core_1.StringField('URL', Sepmra_C_Pd_Supplier, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[toAddress]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Supplier.TO_ADDRESS = new core_1.OneToOneLink('to_Address', Sepmra_C_Pd_Supplier, Sepmra_I_Address_1.Sepmra_I_Address);
    /**
     * Static representation of the one-to-many navigation property [[toContactPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Supplier.TO_CONTACT_PERSON = new core_1.Link('to_ContactPerson', Sepmra_C_Pd_Supplier, Sepmra_I_ContactPerson_1.Sepmra_I_ContactPerson);
    /**
     * Static representation of the one-to-one navigation property [[toPrimaryContactPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Supplier.TO_PRIMARY_CONTACT_PERSON = new core_1.OneToOneLink('to_PrimaryContactPerson', Sepmra_C_Pd_Supplier, Sepmra_I_ContactPerson_1.Sepmra_I_ContactPerson);
    /**
     * All fields of the Sepmra_C_Pd_Supplier entity.
     */
    Sepmra_C_Pd_Supplier._allFields = [
        Sepmra_C_Pd_Supplier.SUPPLIER,
        Sepmra_C_Pd_Supplier.COMPANY_NAME,
        Sepmra_C_Pd_Supplier.EMAIL_ADDRESS,
        Sepmra_C_Pd_Supplier.FAX_NUMBER,
        Sepmra_C_Pd_Supplier.PHONE_NUMBER,
        Sepmra_C_Pd_Supplier.URL,
        Sepmra_C_Pd_Supplier.TO_ADDRESS,
        Sepmra_C_Pd_Supplier.TO_CONTACT_PERSON,
        Sepmra_C_Pd_Supplier.TO_PRIMARY_CONTACT_PERSON
    ];
    /**
     * All fields selector.
     */
    Sepmra_C_Pd_Supplier.ALL_FIELDS = new core_1.AllFields('*', Sepmra_C_Pd_Supplier);
    /**
     * All key fields of the Sepmra_C_Pd_Supplier entity.
     */
    Sepmra_C_Pd_Supplier._keyFields = [Sepmra_C_Pd_Supplier.SUPPLIER];
    /**
     * Mapping of all key field names to the respective static field property Sepmra_C_Pd_Supplier.
     */
    Sepmra_C_Pd_Supplier._keys = Sepmra_C_Pd_Supplier._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Sepmra_C_Pd_Supplier = exports.Sepmra_C_Pd_Supplier || (exports.Sepmra_C_Pd_Supplier = {}));
exports.Sepmra_C_Pd_Supplier = Sepmra_C_Pd_Supplier;
//# sourceMappingURL=Sepmra_C_Pd_Supplier.js.map