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
exports.I_Currency = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var I_CurrencyRequestBuilder_1 = require("./I_CurrencyRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "I_Currency" of service "SEPMRA_PROD_MAN".
 */
var I_Currency = /** @class */ (function (_super) {
    __extends(I_Currency, _super);
    function I_Currency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `I_Currency`.
     * @returns A builder that constructs instances of entity type `I_Currency`.
     */
    I_Currency.builder = function () {
        return core_1.EntityV2.entityBuilder(I_Currency);
    };
    /**
     * Returns a request builder to construct requests for operations on the `I_Currency` entity type.
     * @returns A `I_Currency` request builder.
     */
    I_Currency.requestBuilder = function () {
        return new I_CurrencyRequestBuilder_1.I_CurrencyRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `I_Currency`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `I_Currency`.
     */
    I_Currency.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, I_Currency);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    I_Currency.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for I_Currency.
     */
    I_Currency._entityName = 'I_Currency';
    /**
     * Default url path for the according service.
     */
    I_Currency._defaultServicePath = '/sap/opu/odata/sap/SEPMRA_PROD_MAN';
    return I_Currency;
}(core_1.EntityV2));
exports.I_Currency = I_Currency;
(function (I_Currency) {
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    I_Currency.CURRENCY = new core_1.StringField('Currency', I_Currency, 'Edm.String');
    /**
     * Static representation of the [[currencyText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    I_Currency.CURRENCY_TEXT = new core_1.StringField('Currency_Text', I_Currency, 'Edm.String');
    /**
     * Static representation of the [[decimals]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    I_Currency.DECIMALS = new core_1.NumberField('Decimals', I_Currency, 'Edm.Byte');
    /**
     * Static representation of the [[currencyIsoCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    I_Currency.CURRENCY_ISO_CODE = new core_1.StringField('CurrencyISOCode', I_Currency, 'Edm.String');
    /**
     * Static representation of the [[alternativeCurrencyKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    I_Currency.ALTERNATIVE_CURRENCY_KEY = new core_1.StringField('AlternativeCurrencyKey', I_Currency, 'Edm.String');
    /**
     * Static representation of the [[isPrimaryCurrencyForIsoCrcy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    I_Currency.IS_PRIMARY_CURRENCY_FOR_ISO_CRCY = new core_1.BooleanField('IsPrimaryCurrencyForISOCrcy', I_Currency, 'Edm.Boolean');
    /**
     * All fields of the I_Currency entity.
     */
    I_Currency._allFields = [
        I_Currency.CURRENCY,
        I_Currency.CURRENCY_TEXT,
        I_Currency.DECIMALS,
        I_Currency.CURRENCY_ISO_CODE,
        I_Currency.ALTERNATIVE_CURRENCY_KEY,
        I_Currency.IS_PRIMARY_CURRENCY_FOR_ISO_CRCY
    ];
    /**
     * All fields selector.
     */
    I_Currency.ALL_FIELDS = new core_1.AllFields('*', I_Currency);
    /**
     * All key fields of the I_Currency entity.
     */
    I_Currency._keyFields = [I_Currency.CURRENCY];
    /**
     * Mapping of all key field names to the respective static field property I_Currency.
     */
    I_Currency._keys = I_Currency._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(I_Currency = exports.I_Currency || (exports.I_Currency = {}));
exports.I_Currency = I_Currency;
//# sourceMappingURL=I_Currency.js.map