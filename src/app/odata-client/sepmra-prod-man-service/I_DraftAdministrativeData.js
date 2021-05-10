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
exports.I_DraftAdministrativeData = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var I_DraftAdministrativeDataRequestBuilder_1 = require("./I_DraftAdministrativeDataRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "I_DraftAdministrativeData" of service "SEPMRA_PROD_MAN".
 */
var I_DraftAdministrativeData = /** @class */ (function (_super) {
    __extends(I_DraftAdministrativeData, _super);
    function I_DraftAdministrativeData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `I_DraftAdministrativeData`.
     * @returns A builder that constructs instances of entity type `I_DraftAdministrativeData`.
     */
    I_DraftAdministrativeData.builder = function () {
        return core_1.EntityV2.entityBuilder(I_DraftAdministrativeData);
    };
    /**
     * Returns a request builder to construct requests for operations on the `I_DraftAdministrativeData` entity type.
     * @returns A `I_DraftAdministrativeData` request builder.
     */
    I_DraftAdministrativeData.requestBuilder = function () {
        return new I_DraftAdministrativeDataRequestBuilder_1.I_DraftAdministrativeDataRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `I_DraftAdministrativeData`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `I_DraftAdministrativeData`.
     */
    I_DraftAdministrativeData.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, I_DraftAdministrativeData);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    I_DraftAdministrativeData.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for I_DraftAdministrativeData.
     */
    I_DraftAdministrativeData._entityName = 'I_DraftAdministrativeData';
    /**
     * Default url path for the according service.
     */
    I_DraftAdministrativeData._defaultServicePath = '/sap/opu/odata/sap/SEPMRA_PROD_MAN';
    return I_DraftAdministrativeData;
}(core_1.EntityV2));
exports.I_DraftAdministrativeData = I_DraftAdministrativeData;
(function (I_DraftAdministrativeData) {
    /**
     * Static representation of the [[createdByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    I_DraftAdministrativeData.CREATED_BY_USER = new core_1.StringField('CreatedByUser', I_DraftAdministrativeData, 'Edm.String');
    /**
     * Static representation of the [[lastChangeDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    I_DraftAdministrativeData.LAST_CHANGE_DATE_TIME = new core_1.DateField('LastChangeDateTime', I_DraftAdministrativeData, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastChangedByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    I_DraftAdministrativeData.LAST_CHANGED_BY_USER = new core_1.StringField('LastChangedByUser', I_DraftAdministrativeData, 'Edm.String');
    /**
     * Static representation of the [[draftAccessType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    I_DraftAdministrativeData.DRAFT_ACCESS_TYPE = new core_1.StringField('DraftAccessType', I_DraftAdministrativeData, 'Edm.String');
    /**
     * Static representation of the [[processingStartDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    I_DraftAdministrativeData.PROCESSING_START_DATE_TIME = new core_1.DateField('ProcessingStartDateTime', I_DraftAdministrativeData, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[inProcessByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    I_DraftAdministrativeData.IN_PROCESS_BY_USER = new core_1.StringField('InProcessByUser', I_DraftAdministrativeData, 'Edm.String');
    /**
     * Static representation of the [[draftIsKeptByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    I_DraftAdministrativeData.DRAFT_IS_KEPT_BY_USER = new core_1.BooleanField('DraftIsKeptByUser', I_DraftAdministrativeData, 'Edm.Boolean');
    /**
     * Static representation of the [[enqueueStartDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    I_DraftAdministrativeData.ENQUEUE_START_DATE_TIME = new core_1.DateField('EnqueueStartDateTime', I_DraftAdministrativeData, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[draftIsCreatedByMe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    I_DraftAdministrativeData.DRAFT_IS_CREATED_BY_ME = new core_1.BooleanField('DraftIsCreatedByMe', I_DraftAdministrativeData, 'Edm.Boolean');
    /**
     * Static representation of the [[draftIsLastChangedByMe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    I_DraftAdministrativeData.DRAFT_IS_LAST_CHANGED_BY_ME = new core_1.BooleanField('DraftIsLastChangedByMe', I_DraftAdministrativeData, 'Edm.Boolean');
    /**
     * Static representation of the [[draftIsProcessedByMe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    I_DraftAdministrativeData.DRAFT_IS_PROCESSED_BY_ME = new core_1.BooleanField('DraftIsProcessedByMe', I_DraftAdministrativeData, 'Edm.Boolean');
    /**
     * Static representation of the [[createdByUserDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    I_DraftAdministrativeData.CREATED_BY_USER_DESCRIPTION = new core_1.StringField('CreatedByUserDescription', I_DraftAdministrativeData, 'Edm.String');
    /**
     * Static representation of the [[lastChangedByUserDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    I_DraftAdministrativeData.LAST_CHANGED_BY_USER_DESCRIPTION = new core_1.StringField('LastChangedByUserDescription', I_DraftAdministrativeData, 'Edm.String');
    /**
     * Static representation of the [[inProcessByUserDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    I_DraftAdministrativeData.IN_PROCESS_BY_USER_DESCRIPTION = new core_1.StringField('InProcessByUserDescription', I_DraftAdministrativeData, 'Edm.String');
    /**
     * Static representation of the [[draftUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    I_DraftAdministrativeData.DRAFT_UUID = new core_1.StringField('DraftUUID', I_DraftAdministrativeData, 'Edm.Guid');
    /**
     * Static representation of the [[draftEntityType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    I_DraftAdministrativeData.DRAFT_ENTITY_TYPE = new core_1.StringField('DraftEntityType', I_DraftAdministrativeData, 'Edm.String');
    /**
     * Static representation of the [[creationDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    I_DraftAdministrativeData.CREATION_DATE_TIME = new core_1.DateField('CreationDateTime', I_DraftAdministrativeData, 'Edm.DateTimeOffset');
    /**
     * All fields of the I_DraftAdministrativeData entity.
     */
    I_DraftAdministrativeData._allFields = [
        I_DraftAdministrativeData.CREATED_BY_USER,
        I_DraftAdministrativeData.LAST_CHANGE_DATE_TIME,
        I_DraftAdministrativeData.LAST_CHANGED_BY_USER,
        I_DraftAdministrativeData.DRAFT_ACCESS_TYPE,
        I_DraftAdministrativeData.PROCESSING_START_DATE_TIME,
        I_DraftAdministrativeData.IN_PROCESS_BY_USER,
        I_DraftAdministrativeData.DRAFT_IS_KEPT_BY_USER,
        I_DraftAdministrativeData.ENQUEUE_START_DATE_TIME,
        I_DraftAdministrativeData.DRAFT_IS_CREATED_BY_ME,
        I_DraftAdministrativeData.DRAFT_IS_LAST_CHANGED_BY_ME,
        I_DraftAdministrativeData.DRAFT_IS_PROCESSED_BY_ME,
        I_DraftAdministrativeData.CREATED_BY_USER_DESCRIPTION,
        I_DraftAdministrativeData.LAST_CHANGED_BY_USER_DESCRIPTION,
        I_DraftAdministrativeData.IN_PROCESS_BY_USER_DESCRIPTION,
        I_DraftAdministrativeData.DRAFT_UUID,
        I_DraftAdministrativeData.DRAFT_ENTITY_TYPE,
        I_DraftAdministrativeData.CREATION_DATE_TIME
    ];
    /**
     * All fields selector.
     */
    I_DraftAdministrativeData.ALL_FIELDS = new core_1.AllFields('*', I_DraftAdministrativeData);
    /**
     * All key fields of the I_DraftAdministrativeData entity.
     */
    I_DraftAdministrativeData._keyFields = [I_DraftAdministrativeData.DRAFT_UUID];
    /**
     * Mapping of all key field names to the respective static field property I_DraftAdministrativeData.
     */
    I_DraftAdministrativeData._keys = I_DraftAdministrativeData._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(I_DraftAdministrativeData = exports.I_DraftAdministrativeData || (exports.I_DraftAdministrativeData = {}));
exports.I_DraftAdministrativeData = I_DraftAdministrativeData;
//# sourceMappingURL=I_DraftAdministrativeData.js.map