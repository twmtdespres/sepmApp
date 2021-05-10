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
exports.Sepmra_C_Pd_Employee = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var Sepmra_C_Pd_EmployeeRequestBuilder_1 = require("./Sepmra_C_Pd_EmployeeRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "SEPMRA_C_PD_Employee" of service "SEPMRA_PROD_MAN".
 */
var Sepmra_C_Pd_Employee = /** @class */ (function (_super) {
    __extends(Sepmra_C_Pd_Employee, _super);
    function Sepmra_C_Pd_Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `Sepmra_C_Pd_Employee`.
     * @returns A builder that constructs instances of entity type `Sepmra_C_Pd_Employee`.
     */
    Sepmra_C_Pd_Employee.builder = function () {
        return core_1.EntityV2.entityBuilder(Sepmra_C_Pd_Employee);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Sepmra_C_Pd_Employee` entity type.
     * @returns A `Sepmra_C_Pd_Employee` request builder.
     */
    Sepmra_C_Pd_Employee.requestBuilder = function () {
        return new Sepmra_C_Pd_EmployeeRequestBuilder_1.Sepmra_C_Pd_EmployeeRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepmra_C_Pd_Employee`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Sepmra_C_Pd_Employee`.
     */
    Sepmra_C_Pd_Employee.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, Sepmra_C_Pd_Employee);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Sepmra_C_Pd_Employee.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Sepmra_C_Pd_Employee.
     */
    Sepmra_C_Pd_Employee._entityName = 'SEPMRA_C_PD_Employee';
    /**
     * Default url path for the according service.
     */
    Sepmra_C_Pd_Employee._defaultServicePath = '/sap/opu/odata/sap/SEPMRA_PROD_MAN';
    return Sepmra_C_Pd_Employee;
}(core_1.EntityV2));
exports.Sepmra_C_Pd_Employee = Sepmra_C_Pd_Employee;
(function (Sepmra_C_Pd_Employee) {
    /**
     * Static representation of the [[employeeUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Employee.EMPLOYEE_UUID = new core_1.StringField('EmployeeUUID', Sepmra_C_Pd_Employee, 'Edm.Guid');
    /**
     * Static representation of the [[genderCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Employee.GENDER_CODE = new core_1.StringField('GenderCode', Sepmra_C_Pd_Employee, 'Edm.String');
    /**
     * Static representation of the [[employee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Employee.EMPLOYEE = new core_1.StringField('Employee', Sepmra_C_Pd_Employee, 'Edm.String');
    /**
     * Static representation of the [[employeePictureUrl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Employee.EMPLOYEE_PICTURE_URL = new core_1.StringField('EmployeePictureURL', Sepmra_C_Pd_Employee, 'Edm.String');
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Employee.FIRST_NAME = new core_1.StringField('FirstName', Sepmra_C_Pd_Employee, 'Edm.String');
    /**
     * Static representation of the [[middleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Employee.MIDDLE_NAME = new core_1.StringField('MiddleName', Sepmra_C_Pd_Employee, 'Edm.String');
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Employee.LAST_NAME = new core_1.StringField('LastName', Sepmra_C_Pd_Employee, 'Edm.String');
    /**
     * Static representation of the [[formattedName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Employee.FORMATTED_NAME = new core_1.StringField('FormattedName', Sepmra_C_Pd_Employee, 'Edm.String');
    /**
     * Static representation of the [[phoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Employee.PHONE_NUMBER = new core_1.StringField('PhoneNumber', Sepmra_C_Pd_Employee, 'Edm.String');
    /**
     * Static representation of the [[mobilePhoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Employee.MOBILE_PHONE_NUMBER = new core_1.StringField('MobilePhoneNumber', Sepmra_C_Pd_Employee, 'Edm.String');
    /**
     * Static representation of the [[emailAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_Employee.EMAIL_ADDRESS = new core_1.StringField('EmailAddress', Sepmra_C_Pd_Employee, 'Edm.String');
    /**
     * All fields of the Sepmra_C_Pd_Employee entity.
     */
    Sepmra_C_Pd_Employee._allFields = [
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
    Sepmra_C_Pd_Employee.ALL_FIELDS = new core_1.AllFields('*', Sepmra_C_Pd_Employee);
    /**
     * All key fields of the Sepmra_C_Pd_Employee entity.
     */
    Sepmra_C_Pd_Employee._keyFields = [Sepmra_C_Pd_Employee.EMPLOYEE_UUID];
    /**
     * Mapping of all key field names to the respective static field property Sepmra_C_Pd_Employee.
     */
    Sepmra_C_Pd_Employee._keys = Sepmra_C_Pd_Employee._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Sepmra_C_Pd_Employee = exports.Sepmra_C_Pd_Employee || (exports.Sepmra_C_Pd_Employee = {}));
exports.Sepmra_C_Pd_Employee = Sepmra_C_Pd_Employee;
//# sourceMappingURL=Sepmra_C_Pd_Employee.js.map