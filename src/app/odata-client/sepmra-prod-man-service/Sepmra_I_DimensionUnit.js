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
exports.Sepmra_I_DimensionUnit = void 0;
/*
 * Copyright (c) 2021 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var Sepmra_I_DimensionUnitRequestBuilder_1 = require("./Sepmra_I_DimensionUnitRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "SEPMRA_I_DimensionUnit" of service "SEPMRA_PROD_MAN".
 */
var Sepmra_I_DimensionUnit = /** @class */ (function (_super) {
    __extends(Sepmra_I_DimensionUnit, _super);
    function Sepmra_I_DimensionUnit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `Sepmra_I_DimensionUnit`.
     * @returns A builder that constructs instances of entity type `Sepmra_I_DimensionUnit`.
     */
    Sepmra_I_DimensionUnit.builder = function () {
        return core_1.EntityV2.entityBuilder(Sepmra_I_DimensionUnit);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Sepmra_I_DimensionUnit` entity type.
     * @returns A `Sepmra_I_DimensionUnit` request builder.
     */
    Sepmra_I_DimensionUnit.requestBuilder = function () {
        return new Sepmra_I_DimensionUnitRequestBuilder_1.Sepmra_I_DimensionUnitRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sepmra_I_DimensionUnit`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Sepmra_I_DimensionUnit`.
     */
    Sepmra_I_DimensionUnit.customField = function (fieldName) {
        return core_1.EntityV2.customFieldSelector(fieldName, Sepmra_I_DimensionUnit);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Sepmra_I_DimensionUnit.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Sepmra_I_DimensionUnit.
     */
    Sepmra_I_DimensionUnit._entityName = 'SEPMRA_I_DimensionUnit';
    /**
     * Default url path for the according service.
     */
    Sepmra_I_DimensionUnit._defaultServicePath = '/sap/opu/odata/sap/SEPMRA_PROD_MAN';
    return Sepmra_I_DimensionUnit;
}(core_1.EntityV2));
exports.Sepmra_I_DimensionUnit = Sepmra_I_DimensionUnit;
(function (Sepmra_I_DimensionUnit) {
    /**
     * Static representation of the [[unitOfMeasure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_DimensionUnit.UNIT_OF_MEASURE = new core_1.StringField('UnitOfMeasure', Sepmra_I_DimensionUnit, 'Edm.String');
    /**
     * Static representation of the [[unitOfMeasureText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_DimensionUnit.UNIT_OF_MEASURE_TEXT = new core_1.StringField('UnitOfMeasure_Text', Sepmra_I_DimensionUnit, 'Edm.String');
    /**
     * Static representation of the [[unitOfMeasureIsoCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sepmra_I_DimensionUnit.UNIT_OF_MEASURE_ISO_CODE = new core_1.StringField('UnitOfMeasureISOCode', Sepmra_I_DimensionUnit, 'Edm.String');
    /**
     * All fields of the Sepmra_I_DimensionUnit entity.
     */
    Sepmra_I_DimensionUnit._allFields = [
        Sepmra_I_DimensionUnit.UNIT_OF_MEASURE,
        Sepmra_I_DimensionUnit.UNIT_OF_MEASURE_TEXT,
        Sepmra_I_DimensionUnit.UNIT_OF_MEASURE_ISO_CODE
    ];
    /**
     * All fields selector.
     */
    Sepmra_I_DimensionUnit.ALL_FIELDS = new core_1.AllFields('*', Sepmra_I_DimensionUnit);
    /**
     * All key fields of the Sepmra_I_DimensionUnit entity.
     */
    Sepmra_I_DimensionUnit._keyFields = [Sepmra_I_DimensionUnit.UNIT_OF_MEASURE];
    /**
     * Mapping of all key field names to the respective static field property Sepmra_I_DimensionUnit.
     */
    Sepmra_I_DimensionUnit._keys = Sepmra_I_DimensionUnit._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Sepmra_I_DimensionUnit = exports.Sepmra_I_DimensionUnit || (exports.Sepmra_I_DimensionUnit = {}));
exports.Sepmra_I_DimensionUnit = Sepmra_I_DimensionUnit;
//# sourceMappingURL=Sepmra_I_DimensionUnit.js.map