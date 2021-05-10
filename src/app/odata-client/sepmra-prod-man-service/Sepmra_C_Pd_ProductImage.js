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
exports.Sepmra_C_Pd_ProductImage = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var Sepmra_C_Pd_ProductImageRequestBuilder_1 = require("./Sepmra_C_Pd_ProductImageRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "SEPMRA_C_PD_ProductImage" of service "SEPMRA_PROD_MAN".
 */
var Sepmra_C_Pd_ProductImage = /** @class */ (function (_super) {
    __extends(Sepmra_C_Pd_ProductImage, _super);
    function Sepmra_C_Pd_ProductImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `Sepmra_C_Pd_ProductImage`.
     * @returns A builder that constructs instances of entity type `Sepmra_C_Pd_ProductImage`.
     */
    Sepmra_C_Pd_ProductImage.builder = function () {
        return core_1.EntityV2.entityBuilder(Sepmra_C_Pd_ProductImage);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Sepmra_C_Pd_ProductImage` entity type.
     * @returns A `Sepmra_C_Pd_ProductImage` request builder.
     */
    Sepmra_C_Pd_ProductImage.requestBuilder = function () {
        return new Sepmra_C_Pd_ProductImageRequestBuilder_1.Sepmra_C_Pd_ProductImageRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepmra_C_Pd_ProductImage`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Sepmra_C_Pd_ProductImage`.
     */
    Sepmra_C_Pd_ProductImage.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, Sepmra_C_Pd_ProductImage);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Sepmra_C_Pd_ProductImage.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Sepmra_C_Pd_ProductImage.
     */
    Sepmra_C_Pd_ProductImage._entityName = 'SEPMRA_C_PD_ProductImage';
    /**
     * Default url path for the according service.
     */
    Sepmra_C_Pd_ProductImage._defaultServicePath = '/sap/opu/odata/sap/SEPMRA_PROD_MAN';
    return Sepmra_C_Pd_ProductImage;
}(core_1.EntityV2));
exports.Sepmra_C_Pd_ProductImage = Sepmra_C_Pd_ProductImage;
var I_DraftAdministrativeData_1 = require("./I_DraftAdministrativeData");
(function (Sepmra_C_Pd_ProductImage) {
    /**
     * Static representation of the [[preparationAc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_ProductImage.PREPARATION_AC = new core_1.BooleanField('Preparation_ac', Sepmra_C_Pd_ProductImage, 'Edm.Boolean');
    /**
     * Static representation of the [[validationAc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_ProductImage.VALIDATION_AC = new core_1.BooleanField('Validation_ac', Sepmra_C_Pd_ProductImage, 'Edm.Boolean');
    /**
     * Static representation of the [[productImageDraftUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_ProductImage.PRODUCT_IMAGE_DRAFT_UUID = new core_1.StringField('ProductImageDraftUUID', Sepmra_C_Pd_ProductImage, 'Edm.Guid');
    /**
     * Static representation of the [[activeProduct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_ProductImage.ACTIVE_PRODUCT = new core_1.StringField('ActiveProduct', Sepmra_C_Pd_ProductImage, 'Edm.String');
    /**
     * Static representation of the [[activeProductImage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_ProductImage.ACTIVE_PRODUCT_IMAGE = new core_1.StringField('ActiveProductImage', Sepmra_C_Pd_ProductImage, 'Edm.String');
    /**
     * Static representation of the [[fileName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_ProductImage.FILE_NAME = new core_1.StringField('FileName', Sepmra_C_Pd_ProductImage, 'Edm.String');
    /**
     * Static representation of the [[mimeType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_ProductImage.MIME_TYPE = new core_1.StringField('MIMEType', Sepmra_C_Pd_ProductImage, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_ProductImage.DESCRIPTION = new core_1.StringField('Description', Sepmra_C_Pd_ProductImage, 'Edm.String');
    /**
     * Static representation of the [[creationDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_ProductImage.CREATION_DATE_TIME = new core_1.DateField('CreationDateTime', Sepmra_C_Pd_ProductImage, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastChangedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_ProductImage.LAST_CHANGED_DATE_TIME = new core_1.DateField('LastChangedDateTime', Sepmra_C_Pd_ProductImage, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[isActiveEntity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_ProductImage.IS_ACTIVE_ENTITY = new core_1.BooleanField('IsActiveEntity', Sepmra_C_Pd_ProductImage, 'Edm.Boolean');
    /**
     * Static representation of the [[hasActiveEntity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_ProductImage.HAS_ACTIVE_ENTITY = new core_1.BooleanField('HasActiveEntity', Sepmra_C_Pd_ProductImage, 'Edm.Boolean');
    /**
     * Static representation of the [[hasDraftEntity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_ProductImage.HAS_DRAFT_ENTITY = new core_1.BooleanField('HasDraftEntity', Sepmra_C_Pd_ProductImage, 'Edm.Boolean');
    /**
     * Static representation of the one-to-one navigation property [[draftAdministrativeData]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_ProductImage.DRAFT_ADMINISTRATIVE_DATA = new core_1.OneToOneLink('DraftAdministrativeData', Sepmra_C_Pd_ProductImage, I_DraftAdministrativeData_1.I_DraftAdministrativeData);
    /**
     * Static representation of the one-to-one navigation property [[siblingEntity]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_C_Pd_ProductImage.SIBLING_ENTITY = new core_1.OneToOneLink('SiblingEntity', Sepmra_C_Pd_ProductImage, Sepmra_C_Pd_ProductImage);
    /**
     * All fields of the Sepmra_C_Pd_ProductImage entity.
     */
    Sepmra_C_Pd_ProductImage._allFields = [
        Sepmra_C_Pd_ProductImage.PREPARATION_AC,
        Sepmra_C_Pd_ProductImage.VALIDATION_AC,
        Sepmra_C_Pd_ProductImage.PRODUCT_IMAGE_DRAFT_UUID,
        Sepmra_C_Pd_ProductImage.ACTIVE_PRODUCT,
        Sepmra_C_Pd_ProductImage.ACTIVE_PRODUCT_IMAGE,
        Sepmra_C_Pd_ProductImage.FILE_NAME,
        Sepmra_C_Pd_ProductImage.MIME_TYPE,
        Sepmra_C_Pd_ProductImage.DESCRIPTION,
        Sepmra_C_Pd_ProductImage.CREATION_DATE_TIME,
        Sepmra_C_Pd_ProductImage.LAST_CHANGED_DATE_TIME,
        Sepmra_C_Pd_ProductImage.IS_ACTIVE_ENTITY,
        Sepmra_C_Pd_ProductImage.HAS_ACTIVE_ENTITY,
        Sepmra_C_Pd_ProductImage.HAS_DRAFT_ENTITY,
        Sepmra_C_Pd_ProductImage.DRAFT_ADMINISTRATIVE_DATA,
        Sepmra_C_Pd_ProductImage.SIBLING_ENTITY
    ];
    /**
     * All fields selector.
     */
    Sepmra_C_Pd_ProductImage.ALL_FIELDS = new core_1.AllFields('*', Sepmra_C_Pd_ProductImage);
    /**
     * All key fields of the Sepmra_C_Pd_ProductImage entity.
     */
    Sepmra_C_Pd_ProductImage._keyFields = [Sepmra_C_Pd_ProductImage.PRODUCT_IMAGE_DRAFT_UUID, Sepmra_C_Pd_ProductImage.ACTIVE_PRODUCT, Sepmra_C_Pd_ProductImage.ACTIVE_PRODUCT_IMAGE];
    /**
     * Mapping of all key field names to the respective static field property Sepmra_C_Pd_ProductImage.
     */
    Sepmra_C_Pd_ProductImage._keys = Sepmra_C_Pd_ProductImage._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Sepmra_C_Pd_ProductImage = exports.Sepmra_C_Pd_ProductImage || (exports.Sepmra_C_Pd_ProductImage = {}));
exports.Sepmra_C_Pd_ProductImage = Sepmra_C_Pd_ProductImage;
//# sourceMappingURL=Sepmra_C_Pd_ProductImage.js.map