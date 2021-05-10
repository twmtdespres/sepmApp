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
exports.Sepm_I_ProductValueAddedTax = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var Sepm_I_ProductValueAddedTaxRequestBuilder_1 = require("./Sepm_I_ProductValueAddedTaxRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "SEPM_I_ProductValueAddedTax" of service "SEPMRA_PROD_MAN".
 */
var Sepm_I_ProductValueAddedTax = /** @class */ (function (_super) {
    __extends(Sepm_I_ProductValueAddedTax, _super);
    function Sepm_I_ProductValueAddedTax() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `Sepm_I_ProductValueAddedTax`.
     * @returns A builder that constructs instances of entity type `Sepm_I_ProductValueAddedTax`.
     */
    Sepm_I_ProductValueAddedTax.builder = function () {
        return core_1.EntityV2.entityBuilder(Sepm_I_ProductValueAddedTax);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Sepm_I_ProductValueAddedTax` entity type.
     * @returns A `Sepm_I_ProductValueAddedTax` request builder.
     */
    Sepm_I_ProductValueAddedTax.requestBuilder = function () {
        return new Sepm_I_ProductValueAddedTaxRequestBuilder_1.Sepm_I_ProductValueAddedTaxRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepm_I_ProductValueAddedTax`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Sepm_I_ProductValueAddedTax`.
     */
    Sepm_I_ProductValueAddedTax.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, Sepm_I_ProductValueAddedTax);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Sepm_I_ProductValueAddedTax.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Sepm_I_ProductValueAddedTax.
     */
    Sepm_I_ProductValueAddedTax._entityName = 'SEPM_I_ProductValueAddedTax';
    /**
     * Default url path for the according service.
     */
    Sepm_I_ProductValueAddedTax._defaultServicePath = '/sap/opu/odata/sap/SEPMRA_PROD_MAN';
    return Sepm_I_ProductValueAddedTax;
}(core_1.EntityV2));
exports.Sepm_I_ProductValueAddedTax = Sepm_I_ProductValueAddedTax;
(function (Sepm_I_ProductValueAddedTax) {
    /**
     * Static representation of the [[productValueAddedTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepm_I_ProductValueAddedTax.PRODUCT_VALUE_ADDED_TAX = new core_1.NumberField('ProductValueAddedTax', Sepm_I_ProductValueAddedTax, 'Edm.Byte');
    /**
     * Static representation of the [[productValueAddedTaxText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepm_I_ProductValueAddedTax.PRODUCT_VALUE_ADDED_TAX_TEXT = new core_1.StringField('ProductValueAddedTax_Text', Sepm_I_ProductValueAddedTax, 'Edm.String');
    /**
     * All fields of the Sepm_I_ProductValueAddedTax entity.
     */
    Sepm_I_ProductValueAddedTax._allFields = [
        Sepm_I_ProductValueAddedTax.PRODUCT_VALUE_ADDED_TAX,
        Sepm_I_ProductValueAddedTax.PRODUCT_VALUE_ADDED_TAX_TEXT
    ];
    /**
     * All fields selector.
     */
    Sepm_I_ProductValueAddedTax.ALL_FIELDS = new core_1.AllFields('*', Sepm_I_ProductValueAddedTax);
    /**
     * All key fields of the Sepm_I_ProductValueAddedTax entity.
     */
    Sepm_I_ProductValueAddedTax._keyFields = [Sepm_I_ProductValueAddedTax.PRODUCT_VALUE_ADDED_TAX];
    /**
     * Mapping of all key field names to the respective static field property Sepm_I_ProductValueAddedTax.
     */
    Sepm_I_ProductValueAddedTax._keys = Sepm_I_ProductValueAddedTax._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Sepm_I_ProductValueAddedTax = exports.Sepm_I_ProductValueAddedTax || (exports.Sepm_I_ProductValueAddedTax = {}));
exports.Sepm_I_ProductValueAddedTax = Sepm_I_ProductValueAddedTax;
//# sourceMappingURL=Sepm_I_ProductValueAddedTax.js.map