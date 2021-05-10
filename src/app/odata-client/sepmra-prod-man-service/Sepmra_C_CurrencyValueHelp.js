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
exports.Sepmra_C_CurrencyValueHelp = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var Sepmra_C_CurrencyValueHelpRequestBuilder_1 = require("./Sepmra_C_CurrencyValueHelpRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "SEPMRA_C_CurrencyValueHelp" of service "SEPMRA_PROD_MAN".
 */
var Sepmra_C_CurrencyValueHelp = /** @class */ (function (_super) {
    __extends(Sepmra_C_CurrencyValueHelp, _super);
    function Sepmra_C_CurrencyValueHelp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `Sepmra_C_CurrencyValueHelp`.
     * @returns A builder that constructs instances of entity type `Sepmra_C_CurrencyValueHelp`.
     */
    Sepmra_C_CurrencyValueHelp.builder = function () {
        return core_1.EntityV2.entityBuilder(Sepmra_C_CurrencyValueHelp);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Sepmra_C_CurrencyValueHelp` entity type.
     * @returns A `Sepmra_C_CurrencyValueHelp` request builder.
     */
    Sepmra_C_CurrencyValueHelp.requestBuilder = function () {
        return new Sepmra_C_CurrencyValueHelpRequestBuilder_1.Sepmra_C_CurrencyValueHelpRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepmra_C_CurrencyValueHelp`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Sepmra_C_CurrencyValueHelp`.
     */
    Sepmra_C_CurrencyValueHelp.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, Sepmra_C_CurrencyValueHelp);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Sepmra_C_CurrencyValueHelp.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Sepmra_C_CurrencyValueHelp.
     */
    Sepmra_C_CurrencyValueHelp._entityName = 'SEPMRA_C_CurrencyValueHelp';
    /**
     * Default url path for the according service.
     */
    Sepmra_C_CurrencyValueHelp._defaultServicePath = '/sap/opu/odata/sap/SEPMRA_PROD_MAN';
    return Sepmra_C_CurrencyValueHelp;
}(core_1.EntityV2));
exports.Sepmra_C_CurrencyValueHelp = Sepmra_C_CurrencyValueHelp;
(function (Sepmra_C_CurrencyValueHelp) {
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_CurrencyValueHelp.CURRENCY = new core_1.StringField('Currency', Sepmra_C_CurrencyValueHelp, 'Edm.String');
    /**
     * Static representation of the [[currencyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_CurrencyValueHelp.CURRENCY_NAME = new core_1.StringField('CurrencyName', Sepmra_C_CurrencyValueHelp, 'Edm.String');
    /**
     * All fields of the Sepmra_C_CurrencyValueHelp entity.
     */
    Sepmra_C_CurrencyValueHelp._allFields = [
        Sepmra_C_CurrencyValueHelp.CURRENCY,
        Sepmra_C_CurrencyValueHelp.CURRENCY_NAME
    ];
    /**
     * All fields selector.
     */
    Sepmra_C_CurrencyValueHelp.ALL_FIELDS = new core_1.AllFields('*', Sepmra_C_CurrencyValueHelp);
    /**
     * All key fields of the Sepmra_C_CurrencyValueHelp entity.
     */
    Sepmra_C_CurrencyValueHelp._keyFields = [Sepmra_C_CurrencyValueHelp.CURRENCY];
    /**
     * Mapping of all key field names to the respective static field property Sepmra_C_CurrencyValueHelp.
     */
    Sepmra_C_CurrencyValueHelp._keys = Sepmra_C_CurrencyValueHelp._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Sepmra_C_CurrencyValueHelp = exports.Sepmra_C_CurrencyValueHelp || (exports.Sepmra_C_CurrencyValueHelp = {}));
exports.Sepmra_C_CurrencyValueHelp = Sepmra_C_CurrencyValueHelp;
//# sourceMappingURL=Sepmra_C_CurrencyValueHelp.js.map