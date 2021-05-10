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
exports.Sepmra_I_ProductMainCategory = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var Sepmra_I_ProductMainCategoryRequestBuilder_1 = require("./Sepmra_I_ProductMainCategoryRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "SEPMRA_I_ProductMainCategory" of service "SEPMRA_PROD_MAN".
 */
var Sepmra_I_ProductMainCategory = /** @class */ (function (_super) {
    __extends(Sepmra_I_ProductMainCategory, _super);
    function Sepmra_I_ProductMainCategory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `Sepmra_I_ProductMainCategory`.
     * @returns A builder that constructs instances of entity type `Sepmra_I_ProductMainCategory`.
     */
    Sepmra_I_ProductMainCategory.builder = function () {
        return core_1.EntityV2.entityBuilder(Sepmra_I_ProductMainCategory);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Sepmra_I_ProductMainCategory` entity type.
     * @returns A `Sepmra_I_ProductMainCategory` request builder.
     */
    Sepmra_I_ProductMainCategory.requestBuilder = function () {
        return new Sepmra_I_ProductMainCategoryRequestBuilder_1.Sepmra_I_ProductMainCategoryRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepmra_I_ProductMainCategory`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Sepmra_I_ProductMainCategory`.
     */
    Sepmra_I_ProductMainCategory.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, Sepmra_I_ProductMainCategory);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Sepmra_I_ProductMainCategory.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Sepmra_I_ProductMainCategory.
     */
    Sepmra_I_ProductMainCategory._entityName = 'SEPMRA_I_ProductMainCategory';
    /**
     * Default url path for the according service.
     */
    Sepmra_I_ProductMainCategory._defaultServicePath = '/sap/opu/odata/sap/SEPMRA_PROD_MAN';
    return Sepmra_I_ProductMainCategory;
}(core_1.EntityV2));
exports.Sepmra_I_ProductMainCategory = Sepmra_I_ProductMainCategory;
var Sepmra_I_ProductCategory_1 = require("./Sepmra_I_ProductCategory");
(function (Sepmra_I_ProductMainCategory) {
    /**
     * Static representation of the [[mainProductCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_ProductMainCategory.MAIN_PRODUCT_CATEGORY = new core_1.StringField('MainProductCategory', Sepmra_I_ProductMainCategory, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[toCategory]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_ProductMainCategory.TO_CATEGORY = new core_1.Link('to_Category', Sepmra_I_ProductMainCategory, Sepmra_I_ProductCategory_1.Sepmra_I_ProductCategory);
    /**
     * All fields of the Sepmra_I_ProductMainCategory entity.
     */
    Sepmra_I_ProductMainCategory._allFields = [
        Sepmra_I_ProductMainCategory.MAIN_PRODUCT_CATEGORY,
        Sepmra_I_ProductMainCategory.TO_CATEGORY
    ];
    /**
     * All fields selector.
     */
    Sepmra_I_ProductMainCategory.ALL_FIELDS = new core_1.AllFields('*', Sepmra_I_ProductMainCategory);
    /**
     * All key fields of the Sepmra_I_ProductMainCategory entity.
     */
    Sepmra_I_ProductMainCategory._keyFields = [Sepmra_I_ProductMainCategory.MAIN_PRODUCT_CATEGORY];
    /**
     * Mapping of all key field names to the respective static field property Sepmra_I_ProductMainCategory.
     */
    Sepmra_I_ProductMainCategory._keys = Sepmra_I_ProductMainCategory._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Sepmra_I_ProductMainCategory = exports.Sepmra_I_ProductMainCategory || (exports.Sepmra_I_ProductMainCategory = {}));
exports.Sepmra_I_ProductMainCategory = Sepmra_I_ProductMainCategory;
//# sourceMappingURL=Sepmra_I_ProductMainCategory.js.map