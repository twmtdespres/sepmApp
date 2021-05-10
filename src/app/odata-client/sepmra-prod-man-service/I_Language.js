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
exports.I_Language = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var I_LanguageRequestBuilder_1 = require("./I_LanguageRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "I_Language" of service "SEPMRA_PROD_MAN".
 */
var I_Language = /** @class */ (function (_super) {
    __extends(I_Language, _super);
    function I_Language() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `I_Language`.
     * @returns A builder that constructs instances of entity type `I_Language`.
     */
    I_Language.builder = function () {
        return core_1.EntityV2.entityBuilder(I_Language);
    };
    /**
     * Returns a request builder to construct requests for operations on the `I_Language` entity type.
     * @returns A `I_Language` request builder.
     */
    I_Language.requestBuilder = function () {
        return new I_LanguageRequestBuilder_1.I_LanguageRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `I_Language`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `I_Language`.
     */
    I_Language.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, I_Language);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    I_Language.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for I_Language.
     */
    I_Language._entityName = 'I_Language';
    /**
     * Default url path for the according service.
     */
    I_Language._defaultServicePath = '/sap/opu/odata/sap/SEPMRA_PROD_MAN';
    return I_Language;
}(core_1.EntityV2));
exports.I_Language = I_Language;
(function (I_Language) {
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    I_Language.LANGUAGE = new core_1.StringField('Language', I_Language, 'Edm.String');
    /**
     * Static representation of the [[languageIsoCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    I_Language.LANGUAGE_ISO_CODE = new core_1.StringField('LanguageISOCode', I_Language, 'Edm.String');
    /**
     * All fields of the I_Language entity.
     */
    I_Language._allFields = [
        I_Language.LANGUAGE,
        I_Language.LANGUAGE_ISO_CODE
    ];
    /**
     * All fields selector.
     */
    I_Language.ALL_FIELDS = new core_1.AllFields('*', I_Language);
    /**
     * All key fields of the I_Language entity.
     */
    I_Language._keyFields = [I_Language.LANGUAGE];
    /**
     * Mapping of all key field names to the respective static field property I_Language.
     */
    I_Language._keys = I_Language._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(I_Language = exports.I_Language || (exports.I_Language = {}));
exports.I_Language = I_Language;
//# sourceMappingURL=I_Language.js.map