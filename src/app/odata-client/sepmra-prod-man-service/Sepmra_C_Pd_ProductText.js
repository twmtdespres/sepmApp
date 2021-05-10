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
exports.Sepmra_C_Pd_ProductText = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var Sepmra_C_Pd_ProductTextRequestBuilder_1 = require("./Sepmra_C_Pd_ProductTextRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "SEPMRA_C_PD_ProductText" of service "SEPMRA_PROD_MAN".
 */
var Sepmra_C_Pd_ProductText = /** @class */ (function (_super) {
    __extends(Sepmra_C_Pd_ProductText, _super);
    function Sepmra_C_Pd_ProductText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `Sepmra_C_Pd_ProductText`.
     * @returns A builder that constructs instances of entity type `Sepmra_C_Pd_ProductText`.
     */
    Sepmra_C_Pd_ProductText.builder = function () {
        return core_1.EntityV2.entityBuilder(Sepmra_C_Pd_ProductText);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Sepmra_C_Pd_ProductText` entity type.
     * @returns A `Sepmra_C_Pd_ProductText` request builder.
     */
    Sepmra_C_Pd_ProductText.requestBuilder = function () {
        return new Sepmra_C_Pd_ProductTextRequestBuilder_1.Sepmra_C_Pd_ProductTextRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepmra_C_Pd_ProductText`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Sepmra_C_Pd_ProductText`.
     */
    Sepmra_C_Pd_ProductText.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, Sepmra_C_Pd_ProductText);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Sepmra_C_Pd_ProductText.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Sepmra_C_Pd_ProductText.
     */
    Sepmra_C_Pd_ProductText._entityName = 'SEPMRA_C_PD_ProductText';
    /**
     * Default url path for the according service.
     */
    Sepmra_C_Pd_ProductText._defaultServicePath = '/sap/opu/odata/sap/SEPMRA_PROD_MAN';
    return Sepmra_C_Pd_ProductText;
}(core_1.EntityV2));
exports.Sepmra_C_Pd_ProductText = Sepmra_C_Pd_ProductText;
var I_DraftAdministrativeData_1 = require("./I_DraftAdministrativeData");
var I_Language_1 = require("./I_Language");
var Sepmra_C_Pd_Product_1 = require("./Sepmra_C_Pd_Product");
(function (Sepmra_C_Pd_ProductText) {
    /**
     * Static representation of the [[preparationAc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_ProductText.PREPARATION_AC = new core_1.BooleanField('Preparation_ac', Sepmra_C_Pd_ProductText, 'Edm.Boolean');
    /**
     * Static representation of the [[validationAc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_ProductText.VALIDATION_AC = new core_1.BooleanField('Validation_ac', Sepmra_C_Pd_ProductText, 'Edm.Boolean');
    /**
     * Static representation of the [[productTextDraftUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_ProductText.PRODUCT_TEXT_DRAFT_UUID = new core_1.StringField('ProductTextDraftUUID', Sepmra_C_Pd_ProductText, 'Edm.Guid');
    /**
     * Static representation of the [[activeProduct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_ProductText.ACTIVE_PRODUCT = new core_1.StringField('ActiveProduct', Sepmra_C_Pd_ProductText, 'Edm.String');
    /**
     * Static representation of the [[activeLanguage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_ProductText.ACTIVE_LANGUAGE = new core_1.StringField('ActiveLanguage', Sepmra_C_Pd_ProductText, 'Edm.String');
    /**
     * Static representation of the [[productDraftUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_ProductText.PRODUCT_DRAFT_UUID = new core_1.StringField('ProductDraftUUID', Sepmra_C_Pd_ProductText, 'Edm.Guid');
    /**
     * Static representation of the [[language]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_ProductText.LANGUAGE = new core_1.StringField('Language', Sepmra_C_Pd_ProductText, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_ProductText.NAME = new core_1.StringField('Name', Sepmra_C_Pd_ProductText, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_ProductText.DESCRIPTION = new core_1.StringField('Description', Sepmra_C_Pd_ProductText, 'Edm.String');
    /**
     * Static representation of the [[isActiveEntity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_ProductText.IS_ACTIVE_ENTITY = new core_1.BooleanField('IsActiveEntity', Sepmra_C_Pd_ProductText, 'Edm.Boolean');
    /**
     * Static representation of the [[hasActiveEntity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_ProductText.HAS_ACTIVE_ENTITY = new core_1.BooleanField('HasActiveEntity', Sepmra_C_Pd_ProductText, 'Edm.Boolean');
    /**
     * Static representation of the [[hasDraftEntity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_ProductText.HAS_DRAFT_ENTITY = new core_1.BooleanField('HasDraftEntity', Sepmra_C_Pd_ProductText, 'Edm.Boolean');
    /**
     * Static representation of the one-to-one navigation property [[draftAdministrativeData]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_ProductText.DRAFT_ADMINISTRATIVE_DATA = new core_1.OneToOneLink('DraftAdministrativeData', Sepmra_C_Pd_ProductText, I_DraftAdministrativeData_1.I_DraftAdministrativeData);
    /**
     * Static representation of the one-to-one navigation property [[siblingEntity]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_ProductText.SIBLING_ENTITY = new core_1.OneToOneLink('SiblingEntity', Sepmra_C_Pd_ProductText, Sepmra_C_Pd_ProductText);
    /**
     * Static representation of the one-to-one navigation property [[toLanguage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_ProductText.TO_LANGUAGE = new core_1.OneToOneLink('to_Language', Sepmra_C_Pd_ProductText, I_Language_1.I_Language);
    /**
     * Static representation of the one-to-one navigation property [[toProduct]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_ProductText.TO_PRODUCT = new core_1.OneToOneLink('to_Product', Sepmra_C_Pd_ProductText, Sepmra_C_Pd_Product_1.Sepmra_C_Pd_Product);
    /**
     * All fields of the Sepmra_C_Pd_ProductText entity.
     */
    Sepmra_C_Pd_ProductText._allFields = [
        Sepmra_C_Pd_ProductText.PREPARATION_AC,
        Sepmra_C_Pd_ProductText.VALIDATION_AC,
        Sepmra_C_Pd_ProductText.PRODUCT_TEXT_DRAFT_UUID,
        Sepmra_C_Pd_ProductText.ACTIVE_PRODUCT,
        Sepmra_C_Pd_ProductText.ACTIVE_LANGUAGE,
        Sepmra_C_Pd_ProductText.PRODUCT_DRAFT_UUID,
        Sepmra_C_Pd_ProductText.LANGUAGE,
        Sepmra_C_Pd_ProductText.NAME,
        Sepmra_C_Pd_ProductText.DESCRIPTION,
        Sepmra_C_Pd_ProductText.IS_ACTIVE_ENTITY,
        Sepmra_C_Pd_ProductText.HAS_ACTIVE_ENTITY,
        Sepmra_C_Pd_ProductText.HAS_DRAFT_ENTITY,
        Sepmra_C_Pd_ProductText.DRAFT_ADMINISTRATIVE_DATA,
        Sepmra_C_Pd_ProductText.SIBLING_ENTITY,
        Sepmra_C_Pd_ProductText.TO_LANGUAGE,
        Sepmra_C_Pd_ProductText.TO_PRODUCT
    ];
    /**
     * All fields selector.
     */
    Sepmra_C_Pd_ProductText.ALL_FIELDS = new core_1.AllFields('*', Sepmra_C_Pd_ProductText);
    /**
     * All key fields of the Sepmra_C_Pd_ProductText entity.
     */
    Sepmra_C_Pd_ProductText._keyFields = [Sepmra_C_Pd_ProductText.PRODUCT_TEXT_DRAFT_UUID, Sepmra_C_Pd_ProductText.ACTIVE_PRODUCT, Sepmra_C_Pd_ProductText.ACTIVE_LANGUAGE];
    /**
     * Mapping of all key field names to the respective static field property Sepmra_C_Pd_ProductText.
     */
    Sepmra_C_Pd_ProductText._keys = Sepmra_C_Pd_ProductText._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Sepmra_C_Pd_ProductText = exports.Sepmra_C_Pd_ProductText || (exports.Sepmra_C_Pd_ProductText = {}));
exports.Sepmra_C_Pd_ProductText = Sepmra_C_Pd_ProductText;
//# sourceMappingURL=Sepmra_C_Pd_ProductText.js.map